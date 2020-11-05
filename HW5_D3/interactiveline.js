margin = ({top:20, right: 20, bottom:20, left:20});
height = 200;
width = 1000;

xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

x = d3.scaleLinear([0,10], [margin.left, width - margin.right]);

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0,0,width,height]);

svg.append("g").call(xAxis);