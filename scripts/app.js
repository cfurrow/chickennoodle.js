var googleImageSearch = new google.search.ImageSearch();
googleImageSearch.setResultSetSize(8);
var searcher = new ImageSearcher();
var done = false;

var doGoogleImageSearch = function(query) {
  function doneSearching() {
    var page = Math.floor(googleImageSearch.cursor.pages.length * Math.random());
    if(done === false) {
      googleImageSearch.gotoPage(page);
      done = true;
    }
    searcher.searchComplete(googleImageSearch.results);
  }
  googleImageSearch.setSearchCompleteCallback(this, doneSearching, null);
  googleImageSearch.execute(query);
}

// searcher.processResult = function(result) {
//   var resultArea = document.getElementById("result");
//   var img = document.createElement("img");
//   var ratio = result.height / result.width;
//   img.src = result.url;
//   img.width = 500;
//   img.height = img.width * ratio;
//   resultArea.appendChild(img);
// };

searcher.processResults = function(results) {
  var resultArea = document.getElementById("result");
  resultArea.innerHTML = '';
  var len = results.length;
  var i = 0;
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

searcher.search("chicken noodle soup", doGoogleImageSearch)
