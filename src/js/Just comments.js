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

    } */