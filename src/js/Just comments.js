//Sort jsonArray in descending order

//METHOD 1
// function sorMultiDimensional(a, b){
//     return ((a.ArgumentList.length < b.ArgumentList.length) ? -1 : ((a.ArgumentList.length > b.ArgumentList.length) ? 1 : 0));
// }
// var sortedArray = jsonArray.sort(sorMultiDimensional);
// console.log(sortedArray)

//METHOD 2
// function sortArray(jsonArray, ArgumentList) {
//     jsonArray.sort(function(a,b){
//         return a[ArgumentList].length - b[ArgumentList].length;
//     })
// }
// var sortedArray = jsonArray.sort(sortArray);
// console.log(sortedArray);

//METHOD 3 Lodash
// var sortedArray = jsonArray.map(function () {
//     return _.orderBy(ArgumentList, function(), ['desc']);
//     console.log(sortedArray)
// })

//METHOD 4
// var sortedArray = jsonArray.sort(function compareFunction(a, b){
//     return (a.ArgumentList.length - b.ArgumentList.length);
// })
// console.log(sortedArray);


/*function getData(){


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
}*/

//getData();

//Let's draw circles for at least one file
/*function drawData(){ //specifies draw for discussion 5 only
    console.log(dataArray[].ArgumentList);
    var firstcircle = dataArray[].ArgumentList;

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

setTimeout(drawData, 2000);*/


/*
        
    .chart text {
        fill: white;
        font: 10px sans-serif;
        text-anchor: start;
        font-size: 12px;
    }
    .chart .label {
        fill: black;
        font: 14px sans-serif;
        text-anchor: end;
    }
    .bar:hover{
        fill:green;
    }

    .axis path,
    .axis line {
        fill:none;
        stroke: #000;
        shape-rendering: crispEdges;

        <link rel="stylesheet" type="text/css" href="style.css">
    } 

    
var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

svg.selectAll("rect")
    .data(sortedArray)
    .enter().append("rect");

    //     var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;

    <!-- <style>
    .chart rect {
        fill: steelblue;

    }                
    .chart text {
        fill: white;
        font: 10px sans-serif;
        text-anchor: start;
        font-size: 12px;
    }
   
    </style> -->

// // set the ranges
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

// var y = d3.scale.linear().range([height, 0]);

// // define the axis
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")


// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);


// // add the SVG element
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", 
//           "translate(" + margin.left + "," + margin.top + ")");


// load the data
// var nowArray = d3.json(sortedArray, function(error, disData ) {
//     console.log(nowArray);
//     // if (error){
//     //     console.log(error);
    // }
// })
    } */

    // <!--Bootstrap-->
    // <!-- Bootstrap's CSS for the components we will need -->
    // <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    // <!-- Bootstrap's javascript for all the things we need to compile fast lol -->
    // <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->

    // var width = 300, barHeight = 20;
    // var x = d3.scaleLinear().range([0, width]);
    // var chart = d3.select(".chart").attr("width", width);
    
    // var bar = chart.SelectAll("g").data(sortedArray)
    //     .enter().append("g")
    //     .attr("transform", function(d, i){
    //         return "translate(0," + i * barHeight + ")"
    //     });
    //     bar.append("rect")
    //     .attr("width", function(d){return x(d.al.ArgumentList.length);})
    //     .attr ("height", barHeight - 1);
        
    //     bar.append("text")
    //     .attr("x", function(d){return x(d.al.ArgumentList.length) - 3; })
    //     .attr("y", barHeight/2)
    //     attr("dy", ".35em")
    //     .text(function(d){
    //         return d.al.ArgumentList.length;
    //     })

    /*   
    var requirejs = require(['requirejs'], function(requirejs){});
var fs = require(["fs"], function(fs){});
fs.writeFile(":8000/result/sorted.json", JSON.stringify(sortedArray, null, 4), (err) => {
        if (err){
            console.log(err);
            return;
        }
        console.log("File has been created")
    }) */