// dependencies
var connect = require('connect')
    , express = require('express')
    , io = require('socket.io')
    , fs = require('fs')
    , port = (process.env.PORT || 8081)
    , marked = require('marked');

// global vars
var pads_dir = __dirname + '/pads/';

// setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(connect.static(__dirname + '/static'));
    server.use(server.router);
});

// setup HTTP errors
server.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade', { locals: { 
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX' 
                },status: 404 });
    } else {
        res.render('500.jade', { locals: { 
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err 
                },status: 500 });
    }
});
server.listen(port);

// setup Socket.IO
var io = io.listen(server);
io.sockets.on('connection', function(socket){
  //console.log('Client Connected');

  // is it really necessary??
  socket.on('define nickname', function (name) {
    socket.set('nickname', name, function () {
      socket.broadcast.emit('user connected', name);
    });
  });

  socket.on('change', function(data){
    updatePadFile(data);

    socket.broadcast.emit('changed', {pad_title: data.pad_title,
                                      pad_content: data.pad_content, 
                                      pad_author: data.pad_author});
    //socket.emit('server_message', ...);
  });
  socket.on('disconnect', function(){
    // avisa todos que desconectou
    console.log('Client Disconnected.');
  });
});

var updatePadFile = function (data) {
  var padFile = data.pad_title.split('/')[1];
  var stream = fs.createWriteStream(pads_dir + padFile + '.md');
  stream.end(data.pad_content);
  //console.log(pads_dir + padFile + '.md');
};

///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

server.get('/', function(req,res){
  fs.readdir(pads_dir, function (error, files) {
    if (error) {
      // FIXME:
    }
    var pads_names = files.map(function (value) {
      return value.split('.')[0];
    });

    // open each md file and search for abstract and thumb
    var pads_data = [],
        cont = 0;
    for (var i in pads_names) {
      var pad_name = pads_names[i];

      fs.readFile(pads_dir + pad_name + '.md', 'utf-8', function (error, data) {
        var tokens = marked.lexer(String(data)),
            pad_abstract = "",
            pad_thumb = "";
        // the first paragraph is the abstract
        for (var j in tokens) {
          if (tokens[j].type == 'paragraph') {
            pad_abstract = tokens[j].text;
            break;
          }
        }
        // the first image is the thumb
        for (var j in tokens) {
          if (tokens[j].text) {
            if (tokens[j].text.search('<img src') > -1) {
              pad_thumb = tokens[j].text.replace(/.*src=\"(.+)\".*/, "$1");
              break;
            }
          }
        }
        pads_data.push({"abstract": pad_abstract, "thumb": pad_thumb});

        if (cont == pads_names.length-1) {
          var pads = [];
          for (var k in pads_names) {
            pads.push({
              "name": pads_names[k],
              "abstract": pads_data[k]["abstract"],
              "thumb": pads_data[k]["thumb"]
            });
          }
          res.render('index.jade', {
            locals : { 
              title : 'automata',
              description: 'automata portfolio',
              author: 'Vilson Vieira',
              analyticssiteid: 'XXXXXXX' 
            },
            pads: pads
          });
        }
        cont++;
      });
    }


  });
});

server.get('/:pad_title', function(req, res) {
  // get the page content already saved
  var pad_title = req.params.pad_title;
  fs.readFile(pads_dir + pad_title + '.md', 'utf-8', function (error, data) {
    if (error) {
      // FIXME:
    }
    var content = String(data);
    res.render('show_pad.jade', {
      locals : { 
        title : pad_title,
        description: 'Your Page Description',
        author: 'Your Name',
        analyticssiteid: 'XXXXXXX' 
      },
      pad_title: pad_title,
      pad_content: marked(content)
    });
  });
});

server.get('/:pad_title/edit', function(req, res) {
  // get the page content already saved
  var pad_title = req.params.pad_title;
  fs.readFile(pads_dir + pad_title + '.md', 'utf-8', function (error, data) {
    if (error) {
      // FIXME:
    }
    res.render('edit_pad.jade', {
      locals : { 
        title : pad_title,
        description: 'Your Page Description',
        author: 'Your Name',
        analyticssiteid: 'XXXXXXX' 
      },
      
      pad_title: pad_title,
      pad_content: data
    });
  });
});


//A Route for Creating a 500 Error (Useful to keep around)
server.get('/500', function(req, res){
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
server.get('/*', function(req, res){
    throw new NotFound;
});

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}


console.log('Listening on http://0.0.0.0:' + port );
