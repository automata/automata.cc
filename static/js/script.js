/* Author: YOUR NAME HERE
*/

$(document).ready(function() {   

  var socket = io.connect();
  var me = 'author_' + new Date();
  var pad_title = window.location.pathname;

  $("#pad_content").on("keyup", function () {
    socket.emit('change', {pad_title: pad_title,
                           pad_content: $(this).val(), 
                           pad_author: me});
    console.log('sent change event', pad_title, me);
  });

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
});
