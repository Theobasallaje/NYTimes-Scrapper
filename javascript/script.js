var searchTermVal = $("#searchTerm").val();
var numberofRecordsToRetrieveVal = $("#numberfRecords").val();
var startYearVal = $("#startYear").val();
var endYearVal = $("#endYear").val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "d05fcb0f8f6947658a9cbb2855f3419b",
  'q': searchTermVal,
  'begin_date': startYearVal,
  'end_date': endYearVal
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

});



$("#clearResults").on("click", function() {
    searchTermVal = "";
    numberofRecordsToRetrieveVal = "";
    startYearVal = "";
    ndYearVal = "";

});
