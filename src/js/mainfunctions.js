//We configure the host, port, protocol, etc so we can re-use it later
const config = {
    //http://0.0.0.0:8000/debate/debate-discussion-00000001.json
	host: 'http://localhost',//local ip
	port: '8000',//port
	protocol: 'json',
    folder: '/debate/',
    ext: '.json',
    numFiles: 10
}

//This will hold all the data from the files
//It will be an array so we can use lodash to filter and clean it for D3js
var dataArray = [];
var counter = 1;

//Configuration of the ajax call
function ajax(opts) {
    return window.$.ajax(Object.assign({
        url: config.host + ":" + config.port + opts.path,//url with the localhost, server, port, and folders
        dataType: 'json',
        data: opts.data,//holds the response data
        type: "GET",
        xhrFields: {
            withCredentials: false//forget about credentials! For now is open
        }
    }, opts)).catch(function (err) {
        console.error(err);
        //if it's a 401 then no one has access, but we dont need credentials for now
        throw err;
    });
}

//GIMME MAH DATA!
function get(path, data, opts) {
    return ajax(Object.assign({
        path: path,//url of the folder and file we need
        data: data//the data we're getting out of the path
    }, opts));
}

//HERE IS YOUR DATAAAA
//We dont need it for now because we are getting data, not posting (yet)
// function post(path, data, opts) {
//     return ajax(Object.assign({
//         path: path,//same as get
//         data: data,//same as get
//         type: "POST"
//     }, opts));
// }

//Get me the folder please
filePath = config.host + ':8000/idebate/';
var loadFile = function(filePath, done){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {return done(this.responseText)
    }
    xhr.open("GET", filePath, true);
    xhr.send();
}
var argFiles = [config.host + ':8000/idebate/'];
var jsonArray = [];
var sortedArray = [];

//Now, load the directory
loadFile(argFiles, function(responseText){
    //get only the names of the files in the directory. this is a dirty array with duplicates and what not
    var dirty = JSON.stringify(responseText).match(/(idebate\-discussion\-(\d+).json)/g);
    //clean the dirty array (by eliminating duplicates) with LoDash(bae <3 <3)
    var clean = _.uniq(dirty)

    //On the clean array, load the file content of each file on the array
    clean.forEach(function (t, number) {
        theJsonfilepath = config.host + ':8000/idebate/' + t;
        loadFile(theJsonfilepath, function (res) {
            //push the content to the jsonArray
            //BEWAREEEEE!!!! There are a lot of files, they won't come right away
            jsonArray.push(JSON.parse(res));     

        })    
    })
});

//Give it at least three seconds to load, let them breathe, and after all the files are loaded
//voila! the jsonArray has all the data
//BYEEEEEE

setTimeout(function () {
    console.log(jsonArray);

}, 4000);

//sort the data by Argumrnt list length
setTimeout(function () {
   var sortedArray = _.orderBy(jsonArray, ["ArgumentList", function(al){
        // console.log(al.ArgumentList);
        // console.log(al.ArgumentList.length);
        return al.ArgumentList.length;
   }], ["desc"]);
     console.log(sortedArray);
    
}, 5000)

if (document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(sortedArray){
        visualise();
        }
    )} else {
        
    if(document.readyState !== "loading"){
        visualise();
    }
}

var chartContainer = d3.select("#chart-container");
var svgWidth = 960;
var svgHeight = 500;
var margin = {top: 10, left: 40, bottom: 90, right:10};
var w = svgWidth - margin.left - margin.right;
var h = svgHeight - margin.top - margin.bottom;
var xScale = d3.scaleLinear().range([0,w]);
var yScale = d3.scaleBand().rangeRound([h, 0]);


var svg = chartContainer.append("svg").attr("width", svgWidth).attr("height", svgHeight);

var chart = svg.append("g").attr("id", "chart-container").attr("transform", "scale(1, 1) translate(" + margin.left + "," + margin.top + ")").attr("width", w).attr("height", h);

function visualise(error, sortedArray){
    if (error){
        console.log(error);}

        xScale.domain([0, d3.max(sortedArray, function(d){return d.ArgumentList.length; console.log (d.ArgumentList.length)})]);
        yScale.domain(sortedArray.map(function(d){return d.ArgumentList})).padding(0.1);
        g.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + h +")")
            .call(d3.axisBottom(xScale).ticks(5).tickFormat(function(d){ return parseInt(d/1000);}).tickSizeInner([-h]));

        g.append("g").attr("class", "y axis")
            .call(d3.axisLeft(yScale));

        g.selectAll(".bar").data(sortedArray)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("xScale", 0)
            .attr("h", yScale.bandwidth())
            .attr("yScale", function(d){ return yScale(d.ArgumentList);})
            .attr("w", function(d){ return xScale(d.ArgumentList.length);})
          
}

