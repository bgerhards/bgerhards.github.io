// (function() {
//     var userInputTags = document.getElementsByTagName("user-input-form");
//     for (var i = 0; i < userInputTags.length; i++) {
//         userInputTags[i].addEventListener("click", function() {
//             console.log("Hello world " + this.getAttribute("data-token"));
//         });
//     }

// })();
(function(){
    var userInputTags = document.getElementsByTagName("user-input-form");
    // for(var i = 0; i < userInputTags.length; i++){
        $.ajax({
          url: "widget.html",
          context: document.body
        }).done(function(data) {
          $('user-input-form').html( data );
        });
        
        $('user-input-form').click(function(){console.log("Hello" + $(this).attr('data-token'))});
    // }
})();