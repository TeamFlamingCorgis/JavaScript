//We configure the host, port, protocol, etc so we can re-use it later
const config = {
    //http://0.0.0.0:8000/debate/debate-discussion-00000001.json
	host: 'http://localhost',//local ip, remember to change on testing
	port: '8000',
	protocol: 'json',
    folder: '/debate/',
    ext: '.json',
    numFiles: 10
}

//This will hold all the data from the files together
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

//Get me the file contents please
function getData(){

    //Let's get at least ten files
    for(var i = 1; i <= 9; i++) {
        get(config.folder + "debate-discussion-0000000" + i + config.ext).then(function (response) {
            console.info("Loaded - JSON");
            // console.log(response);
            dataArray.push(response);//we got data? PUSH THEM TO OUR ARRAY!

        }).catch(function (err) {
            console.info("No data? FAIL", err);//No data? FAIL
        });
    }
}

getData();

//Let's draw circles for at least one file
function drawData(){
    console.log(dataArray[5].ArgumentList);
    var firstcircle = dataArray[5].ArgumentList;
    var prostance = 0, constance = 0;

    for(var x = 0; x < firstcircle.length; x++){
        console.log(firstcircle[x].Argument.PremiseStance);
        if(firstcircle[x].Argument.PremiseStance == "Pro"){
            prostance++;
        }else{
            constance++;
        }
    }

   (function(d3) {
        'use strict';
        var dataset = [
          { label: 'Abulia', count: 10 },
          { label: 'Betelgeuse', count: 20 },
          { label: 'Cantaloupe', count: 30 },
          { label: 'Dijkstra', count: 40 }
        ];
        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;
        var color = d3.scaleOrdinal(d3.schemeCategory20b);
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
        var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
        var pie = d3.pie()
          .value(function(d) { return d.length; })
          .sort(null);

        var path = svg.selectAll('path')
          .data(pie(dataArray[5].ArgumentList))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d) {
            return color(d.data.label);
          });
      })(window.d3);


}

setTimeout(drawData, 1000);
