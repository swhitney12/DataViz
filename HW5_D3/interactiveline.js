margin = ({top:20, right: 20, bottom:20, left:20});
height = 300;
width = 1000;

xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y));


x = d3.scaleLinear([0,10], [margin.left, width - margin.right]);
y = d3.scaleLinear([0,10], [margin.left, height - margin.bottom])

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0,0,width,height]);

const brush = d3.brushX()
    .extent([[margin.left,margin.top],[width-margin.right,height-margin.bottom]])

svg.append("g").call(xAxis);
svg.append("g")
    .call(brush);
svg.append("g").call(yAxis);