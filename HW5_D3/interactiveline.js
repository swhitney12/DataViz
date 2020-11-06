var margin = {top:30, right: 20, bottom:30, left:50},
    height = 270 - margin.top - margin.bottom,
    width = 600 - margin.left - margin.right;

//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([margin.left, width - margin.right]);
var y = d3.scaleLinear().range([height - margin.bottom, margin.top]);

//setting up axes
xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(7).tickSizeOuter(0));//tickFormat(d3.timeFormat("%Y-%m-%d")));

var yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y).ticks(6));

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);})

//creating svg & viewbox for brushing
const svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
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

    svg.append("g").call(xAxis)
        .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");
    svg.append("g").call(brush);
    svg.append("g").call(yAxis);
});

