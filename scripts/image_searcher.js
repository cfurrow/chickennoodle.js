var ImageSearcher = function() {
};

ImageSearcher.prototype._performSearch = function(query) { alert("override me"); };

ImageSearcher.prototype.search = function(query, doSearch) {
  doSearch(query);
};

ImageSearcher.prototype.searchComplete = function(results) {
  this.results = results;
  this.processResults(results);

  //var result = this._pickRandomResult();

  //this.processResult(result);
}

ImageSearcher.prototype._pickRandomResult = function() {
  var len = this.results.length;
  var index = Math.floor(Math.random() * len);
  return this.results[index];
};
