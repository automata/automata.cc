/* Author: Vilson Vieira
*/

$(document).ready(function() {   

  // pad
  // a simple (and stupid) pad based on socket.io

  var socket = io.connect(),
    me = 'author_' + new Date(),
    pad_title = window.location.pathname;

  $("#pad_content").on("keyup", function () {
    socket.emit('change', {
      pad_title: pad_title,
      pad_content: $(this).val(), 
      pad_author: me
    });
    console.log('sent change event', pad_title, me);
  });

  // FIXME: use ot.js
  socket.on('changed', function(data){
    console.log('received changed event', data);
    if (data.pad_author !== me && data.pad_title === pad_title) {
      var cursorPos = $("#pad_content").getCursorPosition();
      $("#pad_content").val(data.pad_content);
      $("#pad_content").setCursorPosition(cursorPos);
    }
  });

  //socket.emit('define nickname', me);
  //socket.emit('define pad', 'pad', pad_title);

  // feeds watcher
  // keeps getting JSON data from some feeds and showing at index page

  var feedsData = [];
  var services = [];
  
  var feeds = {
    delicious: {
      url: "http://feeds.delicious.com/v2/json/vilson?callback=?",
      handler: function (data) {
        var keys = ["u", "d", "dt"];
        $.each(data, function (i, item) {
          feedsData.push({
            service: "delicious", 
            date: item.dt,
            content: item.d,
            url: item.u
          });
        });
        updateOrNot("delicious");
      }
    },
    github: {
      url: "https://api.github.com/users/automata/events?callback=?",
      handler: function (data) {
        $.each(data.data, function (i, item) {
          feedsData.push({
            service: "github",
            date: item.created_at,
            content: item.type + " " + item.repo.name,
            url: ""
          });
        });
        updateOrNot("github");
      }
    },
    tumblr: {
      url: "http://aut0mata.tumblr.com/api/read/json?callback=?",
      handler: function (data) {
        $.each(data.posts, function (i, item) {
          feedsData.push({
            service: "tumblr",
            date: item["date-gmt"],
            content: item.slug,
            url: item["url-with-slug"]
          });
        });
        updateOrNot("tumblr");
      }
    }
  };

  var updateOrNot = function (service) {
    services.push(service);

    if (services.length === 3) {
      feedsData.sort(function(a,b){
        a = new Date(a.date);
        b = new Date(b.date);
        a = a.getTime();
        b = b.getTime();
        return a<b?1:a>b?-1:0;
      });
    
      var s = "";
      $.each(feedsData, function (i, item) {
        s += "<div class='"+item.service+"'><div class='"+item.service+"_icon'></div>" + item.content + "</div>";
      });
      $("#feeds").html(s);

      feedsData = [];
      services = [];
    }
  };

  var feedFetcher = function () {
    $.each(feeds, function (feedName, feedData) {
      $.getJSON(feedData.url, feedData.handler);
    });
  };

//  var feedWatcher = window.setInterval(function () {
//  }, 10000);
  //clearInterval(feedWatcher);
  
  window.setTimeout(feedFetcher, 1000);

});
