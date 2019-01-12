var searchTermVal = $("#searchTerm").val();
var numberfRecordsToRetrieveVal = $("#numberfRecordsToRetrieve").val();
var startYearVal = $("#startYear").val();
var endYearVal = $("#endYear").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "d05fcb0f8f6947658a9cbb2855f3419b",
  'q': "shutdown",
  'begin_date': "20190101",
  'end_date': "20190102"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

$("#search").on("click", function() {

};



$("#clearResults").on("click", function() {

};