d3.select("body")
.on("click", function()
   
{

   d3.select("#shapes")
   .classed("hidden", false);
   
})


d3.select("#circle")
.on("click", function()
{
d3.select("#ban")
.text("Circle");
})

d3.select("#square")
.on("click", function()
{
d3.select("#ban")
.text("Square");
})

d3.select("#pent")
.on("click", function()
{
d3.select("#ban")
.text("Pentagram");
})

d3.select("#rec")
.on("click", function()
{
d3.select("#ban")
.text("Rectangle");
})

d3.select("#tri")
.on("click", function()
{
d3.select("#ban")
.text("Triangle");
})

d3.select("#diamond")
.on("click", function()
{
d3.select("#ban")
.text("Diamond");
    
})