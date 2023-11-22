// Use same rest countries and print all countries names,regions,sub region and populations
var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    var result = JSON.parse(req.response);
    for(var a in result)
    {
        console.log("name : " + a, result[a]["name"]);
        console.log("region : " + result[a]["region"]);
        console.log("subregion : " + result[a]["subregion"]);
        console.log("population : " + result[a]["population"]);
    }
}