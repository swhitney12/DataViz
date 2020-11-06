var margin = {top:10, right: 10, bottom:100, left:40},
    margin2 = {top:330, right:10, bottom: 5, left:40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    height2 = 700 - margin2.top - margin2.bottom;


//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([margin.left, width - margin.right]);
    x2 = d3.scaleTime().range([margin2.left, width - margin2.right]);
    y = d3.scaleLinear().range([height - margin.bottom, margin.top]);
    y2 = d3.scaleLinear().range([height2 - margin2.bottom, margin2.top]);

//setting up axes
xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(5));

xAxis2 = g => g
    .attr("transform", `translate(0,${height2 - margin2.bottom})`)
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
    .x(function(d) { return x2(d.Date); })
    .y(function(d) { return y2(d.Close); });

//creating svg & viewbox for brushing
const svg = d3.select("body")
    .append("svg")
        .attr("width", width) 
        .attr("height", height); 


//create focus
var focus = svg.append("g")
    .attr("class", "focus")
    .attr("viewBox", [0,0,width,height]);

//create context
var context = svg.append("g")
    .attr("class", "context")
    .attr("viewBox", [0,0,width,height2]);

//creating brush
const brush = d3.brushX()
    .extent([[margin2.left,margin2.top - 10],[width-margin2.right,height2-margin2.bottom]])
    .on("brush", brushed);
    //.on("end", brushended);

function brushed({selection}) {
    if(selection) {
        context.property("value", selection.map(x.invert, x).map(d3.utcDay.round));
        context.dispatch("input");
    }
}
//getting the data for line1
d3.csv("XOM-XOM.csv")
     .then(function(data) {
         data.forEach(function(d)  {
             d.Date = parseDate(d.Date);
             d.Close = +d.Close;
    });

//setting domains
    x.domain(d3.extent(data, function(d) { return d.Date; }));
    y.domain([0, d3.max(data, function(d) { return d.Close; })]);
    x2.domain(x.domain());
    y2.domain(y.domain());

//appending line to focus
    focus.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("d", valueline(data));

//appending x axis to focus
    focus.append("g")
        .attr("class", "x axis")
        .call(xAxis);

//appending y axis to focus
    focus.append("g")
        .attr("class", "y axis")
        .call(yAxis);

//appending line to context
    context.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("d", valueline2(data));

//appending x axis to context
    context.append("g")
        .attr("class", "x axis")
        .call(xAxis2);

//adding brush to context
    context.append("g")
        .attr("class", "brush")
        .call(brush);

});

