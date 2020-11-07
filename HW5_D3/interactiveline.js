var margin = {top:10, right: 10, bottom:100, left:40},
    margin2 = {top:330, right:10, bottom: 5, left:40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    height2 = 700 - margin2.top - margin2.bottom;


//data variable
var myData = null;
//creating svg & viewbox for brushing
    const svg = d3.select("body")
        .append("svg")
        .attr("width", width) 
        .attr("height", height); 

//create focus
    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("viewBox", [0,0,width,height]);

//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleUtc().range([margin.left, width - margin.right]);
    x2 = d3.scaleUtc().range([margin2.left, width - margin2.right]);
    y = d3.scaleLinear().range([height - margin.bottom, margin.top]);
    y2 = d3.scaleLinear().range([height2 - margin2.bottom, margin2.top]);

//setting up axes

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

xAxis2 = g => g
    .attr("transform", `translate(0,${height2 - margin2.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

 yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

    var context = svg.append("g")
        .attr("class", "context")
        .attr("viewBox", [0,0,width,height2]);

    const brush = d3.brushX()
        .extent([[margin2.left,margin2.top - 10],[width-margin2.right,height2-margin2.bottom]])
        .on("brush", brushed);
        // .on("end", brushended);
    
    const defaultSelection = [x(d3.utcYear.offset(x.domain()[1], -1)), x.range()[1]];
    
    //brushended function
    // function brushended(event) {
    //     if(event.selection === null) {
    //         const dx = x(1) - x(0);
    //         const [[cx]] = d3.pointers(event);
    //         const [x0, x1] = [cx - dx / 2, cx + dx / 2];
    //         const[X0,X1] = x.range();
    //         d3.select(this)
    //             .call(brush.move, x1 > X1 ? [X1 - dx, X1]
    //                 : x0 < X0 ? [X0, X0 + dx]
    //                 :[x0, x1]);
    //     } else {
    //         var [brushL, brushR] = d3.brushSelection(this);
    //         if(brushR - brushL < 100) {
    //             d3.select(this)
    //             .call(brush.move, [brushL - 50, brushR+50]);
    //         }
    //     }
    // }

    //brushed function
    function brushed() { //event) {
        let selection = d3.event.selection;
        //value = selection.map(x.invert, x).map(d3.utcDay.round);
        let targetX1 = selection[0][0];
        let targetX2 = selection[1][0];
        console.log(`${targetX1}, ${targetX2}`);

        let filterednodes = myData.filter(
            function(d) {
                //return d.Date >= x0 && d.Date <= x1;
                return targetX1 <= d.Date && d.Date <= targetX2;
            }
        );

        console.log(filterednodes);

        renderGraph(filterednodes);
//        console.log(selection);
        // if(selection === null) {
        //     // const gb = svg.append("g")
        //     //     .call(brush)
        //     //     .call(brush.move, defaultSelection);
        //     //renderGraph(myData);
        // } else {
        //     // const[x0, x1] 
        //     value = selection.map(x.invert, x).map(d3.utcDay.round);
        //     let targetX1 = value[0];
        //     let targetX2 = value[1];

        //     console.log(`${targetX1}, ${targetX2}`)
        //     let filterednodes = myData.filter(
        //         function(d) {
        //             //return d.Date >= x0 && d.Date <= x1;
        //             return targetX1 <= d.Date && d.Date <= targetX2;
        //         }
        //     );

            // renderGraph(filterednodes);
        //}
    }

 

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);});

//creating line2
var valueline2 = d3.line()
    .x(function(d) { return x2(d.Date); })
    .y(function(d) { return y2(d.Close); });

//getting the data for line1
d3.csv("XOM-XOM.csv")
     .then(function(data) {
         data.forEach(function(d)  {
             d.Date = parseDate(d.Date);
             d.Close = +d.Close;
    });

    myData = data;
// //setting domains
//     x.domain(d3.extent(data, function(d) { return d.Date; }));
//     y.domain([0, d3.max(data, function(d) { return d.Close; })]);
//      x2.domain(x.domain());
//      y2.domain(y.domain());

    renderGraph(myData);
//     //appending line to focus
//     focus.append("path")
//         .attr("class", "line")
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("d", valueline(data));

//     //appending x axis to focus
//     focus.append("g")
//         .attr("class", "x axis")
//         .call(xAxis);

//     //appending y axis to focus
//     focus.append("g")
//         .attr("class", "y axis")
//         .call(yAxis);

    //appending line to context
    context.append("path")
       .attr("class", "line2")
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("d", valueline2(data));
   
    //appending x axis to context
    context.append("g")
       .attr("class", "x axis2")
       .call(xAxis2);
   
    //adding brush to context
    context.append("g")
       .attr("class", "brush")
       .call(brush);
});

function renderGraph(nodes) {
    //d3.select("focus > *").remove();

  // y.domain([0, d3.max(nodes, function(d) { return d.Close; })]);
    x.domain(d3.extent(nodes, function(d) { return d.Date; }));
    y.domain([0, d3.max(nodes, function(d) { return d.Close; })]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    focus.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("d", valueline(nodes));

    //appending x axis to focus
    focus.append("g")
        .attr("class", "x axis")
        .call(xAxis);

    //appending y axis to focus
    focus.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}

function updateData() {
    d3.csv("TSLA-TSLA.csv")
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

    var focus = d3.select("body").transition();

    focus.select(".line")
        .duration(750)
        .attr("d", valueline(data));
    focus.select(".x.axis")
        .duration(750)
        .call(xAxis);
    focus.select(".y.axis")
        .duration(750)
        .call(yAxis);

    var context = d3.select("body").transition();
    context.select(".line2")
        .duration(750)
        .attr("d", valueline2(data));
    context.select(".x.axis2")
        .duration(750)
        .call(xAxis2);
    });
}
