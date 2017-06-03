// API-URL
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$(document).ready(function() {
    
  function generateQuote() {
    
    $.getJSON(url, function(data) {
      
      var author = "";
      
      $("#quote").html('"' + data.quoteText + '"');
      if(data.quoteAuthor != "") {
        $("#author").html('- ' + data.quoteAuthor);  
        author = ' -' + data.quoteAuthor;
      } else {
        $("#author").html('- Unknown Source');
        author = ' - Unknown Source';
      }
      
      $("#tweet").attr("href", "https://twitter.com/share?text=" + data.quoteText + author);
      $("#tweet").attr("target", "_blank");
    });
  };
  
  $("#btn-quote").on("click", function() {
    generateQuote();
  });
  
  generateQuote();
});