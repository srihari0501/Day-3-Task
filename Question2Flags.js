//Use the rest countries API URL and display all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    for(var a in result)
    {
        console.log(a,result[a]["flags"]);
    }
}

