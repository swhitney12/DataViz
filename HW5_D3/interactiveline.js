var margin = {top:20, right: 20, bottom:20, left:20},
    height = 300,
    width = 1000;

//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleUtc().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

//setting up axes
var xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")));

var yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y).ticks(10));

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);})

//creating svg & viewbox for brushing
const svg = d3.select("body")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .attr("viewBox", [0,0,width,height]);

//creating brush
const brush = d3.brushX()
    .extent([[margin.left,margin.top],[width-margin.right,height-margin.bottom]])

//getting the data for line1
d3.csv("XOM-XOM.csv")
     .then(function(data) {
         data.forEach(function(d)  {
             d.Date = parseDate(d.Date);
             d.Close = +d.Close;
    });

 
    x.domain(d3.extent(data, function(d) { return d.Date; }));
    y.domain([0, d3.max(data, function(d) { return d.Close; })]);

    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    svg.append("g").call(xAxis);
    svg.append("g").call(brush);
    svg.append("g").call(yAxis);
});

