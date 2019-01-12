var searchTermVal = $("#searchTerm").val();
var numberofRecordsToRetrieveVal = $("#numberfRecords").val();
var startYearVal = $("#startYear").val();
var endYearVal = $("#endYear").val();

function url(searchTermVal, startYearVal, endYearVal){
    var params = {
        'api-key': "a31cb31f563a44e69165b720f77054a7",
        'q': searchTermVal
    };
    if(startYear){
        params.begin_date = startYearVal + "0101";
    } 
    if(endYear){
        params.end_date = endYearVal + "1231";
    }
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(params);
    console.log(url);
    return url;
}

$.ajax({
  url: url("shutdown"),
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

$("#search").on("click", function() {
    $(".container").append(JSON.stringify(result));
});



$("#clearResults").on("click", function(e) {
    event.preventDefault();
    document.getElementById("form").reset();

});
