var margin = {top:10, right: 10, bottom:100, left:40},
    margin2 = {top:130, right:10, bottom: 20, left:40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    height2 = 500 - margin2.top - margin2.bottom;


//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([margin.left, width - margin.right]);
var x2 = d3.scaleTime().range([margin2.left, width - margin2.right]);
var y = d3.scaleLinear().range([height - margin.bottom, margin.top]);
var y2 = d3.scaleLinear().range([height2 - margin2.bottom, margin2.top]);

//setting up axes
xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(5));

xAxis2 = g => g
    .attr("transform", `translate(0,${height2 - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(5));

yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y));

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);});

//creating line2
var valueline2 = d3.line()
    .x(function(d) {return x(d.Date); })
    .y0(height2)
    y1(function(d) { return y(d.Close); });

//creating svg & viewbox for brushing
const svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0,0,width,height]);

var focus = svg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var context = svg.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
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
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("d", valueline(data));

    svg.append("g")
        .attr("class", "x axis")
        .call(xAxis)

    svg.append("g")
        .attr("class", "x axis 2")
        .call(xAxis);

    svg.append("g")
         .call(brush);
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
});

