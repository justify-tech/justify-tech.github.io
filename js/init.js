(function($){
  $(function(){
//come back to this
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

Parse.initialize("pdhEyQFMtBm4wQVsd9aiznTNCyu95i5lLNafn0Iv", "9T8Ft0xHPZMD5Sn920kb3HHR3Qx57meGGxCn9scY");

    var article = Parse.Object.extend("articles");

    $("#createarticle").on("submit", function(e) {
      e.preventDefault();

      console.log("Handling the submit");
      //add error handling here
      //gather the form data

      var data = {};
      data.kind="article";
      data.email = $("#email").val();
      data.title = $("#title").val();
      data.author = $("#author").val();
      data.articlebody= $("#textarea1").val();
       data.pubdate = $("#pubdate").val();
      // data.summary = $("#textarea").val();

      var comment = new article();
      comment.save(data, {
        success:function() {
          console.log("Success");
          //Alerts are lame - but quick and easy
        },
        error:function(e) {
          console.dir(e);
        }
      });

    });

    $("#createlicense").on("submit", function(e) {
      e.preventDefault();

      console.log("Handling the submit");
      //add error handling here
      //gather the form data

      var data = {};
      data.kind="license";
      data.email = $("#email").val();
      data.title = $("#title").val();
      data.author = $("#author").val();
      data.articlebody= $("#textarea1").val();
      // data.email = $("#email").val();
      // data.summary = $("#textarea").val();

      var comment = new article();
      comment.save(data, {
        success:function() {
          console.log("Success");
          //Alerts are lame - but quick and easy
        },
        error:function(e) {
          console.dir(e);
        }
      });

    });
      $("#createpetition").on("submit", function(e) {
      e.preventDefault();

      console.log("Handling the submit");
      //add error handling here
      //gather the form data

      var data = {};
      data.kind="petition";
      data.email = $("#email").val();
      data.name = $("#title").val();
      data.author = $("#author").val();
      data.articlebody= $("#textarea1").val();
      // data.email = $("#email").val();
      // data.summary = $("#textarea").val();

      var comment = new article();
      comment.save(data, {
        success:function() {
          console.log("Success");
          //Alerts are lame - but quick and easy
        },
        error:function(e) {
          console.dir(e);
        }
      });

    });
               var query = new Parse.Query(article);
         query.exists("kind", "article");
query.find({
  success: function(results) {
       
         if (results.length > 0) 
                   {              
                   console.log("Success");                     
                              for (var i = 0; i < results.length; i++){
                              var securityCheck = results[i].get("realarticle");
                              if(securityCheck == "YES"){
                            var objectId = results[i].id;   
                            var gate = results[i].get("title");    
                                       if(results[i].get("kind")=="article"){
                            document.getElementById("latesttitle").innerHTML = gate;
                          }
                         }
                          }

                   }        
          //Alerts are lame - but quick and easy

    // Do something with the returned Parse.Object values

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
 var query = new Parse.Query(article);
         query.exists("kind","article");
query.find({
  success: function(results) {
       
         if (results.length > 0) 
                   {              
                   console.log("Success");                     
                              for (var i = 0; i < results.length; i++){
                            var objectId = results[i].id;   
                            var gate = results[i].get("author"); 
                                var securityCheck = results[i].get("realarticle");
                              if(securityCheck == "YES"){
                            if(results[i].get("kind")=="article"){
                            document.getElementById("latestauthor").innerHTML = gate;
                          }
                         }
                          }

                   }        
          //Alerts are lame - but quick and easy

    // Do something with the returned Parse.Object values

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
 var query = new Parse.Query(article);
         query.exists("kind","article");
query.find({
  success: function(results) {
       
         if (results.length > 0) 
                   {              
                   console.log("Success");                     
                              for (var i = 0; i < results.length; i++){
                            var objectId = results[i].id;   
                            var gate = results[i].get("pubdate"); 
                                var securityCheck = results[i].get("realarticle");
                              if(securityCheck == "YES"){
                            if(results[i].get("kind")=="article"){
                            document.getElementById("latestdate").innerHTML = gate;
                          }
                         }
                          }

                   }        
          //Alerts are lame - but quick and easy

    // Do something with the returned Parse.Object values

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
 var query = new Parse.Query(article);
         query.exists("kind","article");
query.find({
  success: function(results) {
       
         if (results.length > 0) 
                   {              
                   console.log("Success");                     
                              for (var i = 0; i < results.length; i++){
                            var objectId = results[i].id;   
                            var gate = results[i].get("articlebody"); 
                                var securityCheck = results[i].get("realarticle");
                              if(securityCheck == "YES"){
                            if(results[i].get("kind")=="article"){
                            document.getElementById("latestbody").innerHTML = gate;
                          }
                         }
                          }

                   }        
          //Alerts are lame - but quick and easy

    // Do something with the returned Parse.Object values

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }

});
//   $("#launchmoxtra").click(function () {
//    $.post("https://apisandbox.moxtra.com/oauth/token",
//     {
       
// client_id:"iff_AJSWR-U",
// client_secret:"s-pEfHcHxK0"
// //grant_type:"http://www.moxtra.com/auth_uniqueid",
// uniqueid:"gravityshouldbenaut@gmail.com",
// timestamp:Date.now()
//     },
//     function(data, status){
//       console.log(data);
//             var options = {
//         mode: "sandbox", //for production environment change to "production"
//         client_id: "iff_AJSWR-U",
//         access_token: data[0], //valid access token from user authentication
//         invalid_token: function(event) {
//             alert("Access Token expired for session id: " + event.session_id);
//         }
//     };

//     Moxtra.init(options);
//     });

//   });
});

   // end of document ready
})(jQuery); // end of jQuery name space