import d3 from 'd3';

var node = document.createElement('div');

var dataset = [100,200,300];

var svg = d3.select(node).append("svg").attr("width",300).attr("height",200);
var elements = svg.selectAll("rect")
                    .data(dataset);

elements.enter().append("rect")
                    .attr("x",0)
                    .attr("y",function(d,i){ return i*60;})
                    .attr("width",function(d,i){ return d;})
                    .attr("height",50)
                    .attr("fill","steelblue");


// NOT WORKING yet!
// d3.json("http://localhost:3000/numbers.json", function(err, data) {

//     if (err) throw err;

//     var elements = svg.selectAll("rect")
//                     .data(data);

//     elements.enter().append("rect")
//         .attr("x",0)
//         .attr("y",function(d,i){return i*60;})
//         .attr("width",function(d){return d.value;})
//         .attr("height",50)
//         .attr("fill","steelblue");

// });

export default node;    
