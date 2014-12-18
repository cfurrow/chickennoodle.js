var ImageSearcher = function() { };

ImageSearcher.prototype._performSearch = function(query) { alert("override me"); };

ImageSearcher.prototype.search = function(query, doSearch) {
  doSearch(query);
};

ImageSearcher.prototype.searchComplete = function(results) {
  this.processResults(results);
};
