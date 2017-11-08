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

//Get me the file contents please

function getData(){


    //Let's get at least ten files
    //change the string so it adds to it not replace the last digits.

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
function drawData(){ //specifies draw for discussion 5 only
    console.log(dataArray[5].ArgumentList);
    var firstcircle = dataArray[5].ArgumentList;

    for(var x = 0; x < firstcircle.length; x++){
        console.log(firstcircle[x].Argument.PremiseStance);
    }

    //zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart

   (function(d3) {

        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;//set the radius of the circle
        var color = d3.scaleOrdinal(d3.schemeCategory20b)//defines the colour scale using D3's
//   .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);
        var svg = d3.select('#chart')//retrieve the element with id "chart"
          .append('svg') //appends an svg (more or less holds data elements one wishes to add graphics to) to                     that element
          .attr('width', width)
          .attr('height', height)
          .append('g') //appends g(centers the chart) element to the svg element
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
        var arc = d3.arc()//defines the radius of the pie chart
          .innerRadius(0)
          .outerRadius(radius);
        var pie = d3.pie()//sets the start and end angles of each element. Not working though :(
          .value(function(d) {
              var charlie = _.countBy(d, 'PremiseStance');//counts premise stance; handled by lodash
              console.log(charlie);
                var num = 100/firstcircle.length;//should split the pie chart per number of arguments
              return num;
          })
          .sort(null);

        var path = svg.selectAll('path')//selects all the elements inside the svg
          .data(pie(firstcircle))//this method associates the dataset with elements in firstcircle
          .enter()//holds each value in the array
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d) {
              console.log(d);
              var charlie = _.countBy(d.data, 'PremiseStance');
              var num = 100/firstcircle.length;
            return color(charlie);
          });
      })(window.d3);


}

setTimeout(drawData, 2000);
