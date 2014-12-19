(function() {
  var googleImageSearch = new google.search.ImageSearch();
  var done = false;

  googleImageSearch.setResultSetSize(8); // 8 per page is max

  var displayResults = function(results) {
    var resultArea = document.getElementById("result");
    var len = results.length;
    var i = 0;

    resultArea.innerHTML = '';
    for(; i < len; i++) {
      var result = results[i];
      var ratio = result.height / result.width;
      var img = document.createElement("img");
      img.src = result.url;
      img.width = 600;
      img.height = img.width * ratio;
      resultArea.appendChild(img);
    }
  };

  var performGoogleImageSearch = function(query) {
    function doneSearching() {
      var page = Math.floor(googleImageSearch.cursor.pages.length * Math.random());
      if(done === false) {
        googleImageSearch.gotoPage(page);
        done = true;
      }
      displayResults(googleImageSearch.results);
    }
    googleImageSearch.setSearchCompleteCallback(this, doneSearching, null);
    googleImageSearch.execute(query);

  }

  performGoogleImageSearch("chicken noodle soup")
})();
