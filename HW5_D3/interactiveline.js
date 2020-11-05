margin = ({top:20, right: 20, bottom:20, left:20});
height = 300;
width = 1000;

//var parseDate = d3.timeFormat("%Y-%m-%e").parse;

//var x = d3.scaleTime().range([0, width]);
//var y = d3.scaleLinear().range([height, 0]);

//var xAxis = g => g  
//    .attr("transform", `translate(0,${height - margin.bottom})`)
//    .call(d3.axisBottom(x).ticks(5));

//var yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(y).ticks(5));

//var valueline = d3.line()
//    .x(function(d) { return x(d.date);})
//    .y(function(d) { return y(d.close);})

//const svg = d3.select("body")
//    .append("svg")
//        .attr("width", width)
//        .attr("height", height)
//    .attr("viewBox", [0,0,width,height]);

//const brush = d3.brushX()
//    .extent([[margin.left,margin.top],[width-margin.right,height-margin.bottom]])

//getting the data for line1
d3.csv("XOM-XOM.csv", function(error, data) {
    console.log(data);
//    data.forEach(function(d)  {
//         d.Date = parseDate(d.Date);
//         d.Close = +d.Close;
//    });

//    x.domain(d3.extent(data, function(d) { return d.date; }));
//    y.domain([0, d3.max(data, function(d) { return d.close; })]);

//    svg.append("path")
//        .attr("class", "line")
//        .attr("d", valueline(data));

//    svg.append("g").call(xAxis);
//    svg.append("g").call(brush);
//    svg.append("g").call(yAxis);
});

