"use strict";

var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

var quarter1Sum = 0;
var quarter2Sum = 0;
var quarter3Sum = 0;
var quarter4Sum = 0;

var region1Sum = 0;
var region2Sum = 0;
var region3Sum = 0;
var region4Sum = 0;
var region5Sum = 0;
var totalSumOfAll = 0;

//calculating quarterly sales
quarter1Sum = region1[0] + region2[0] + region3[0] + region4[0]+ region5[0];
quarter2Sum = region1[1] + region2[1] + region3[1] + region4[1] +region5[1];
quarter3Sum = region1[2] + region2[2] + region3[2] + region4[2] +region5[2];
quarter4Sum = region1[3] + region2[3] + region3[3] + region4[3] +region5[3];

// display totals by quarter
document.write("<h2>Sales by Quarter</h2>");
document.write("Q1: $"+quarter1Sum);
document.write(" <br/>Q2: $"+quarter2Sum); 
document.write(" <br/>Q3: $"+quarter3Sum); 
document.write(" <br/>Q4: $"+quarter4Sum);



//calculating region wise sales
for(var i=0; i<4; i++){
region1Sum = region1Sum + region1[i];
region2Sum = region2Sum + region2[i];
region3Sum = region3Sum + region3[i];
region4Sum = region4Sum + region4[i];
region5Sum = region5Sum + region5[i];
}

// display totals by region
document.write("<h2>Sales by Region</h2>");
document.write("Region 1: $"+region1Sum);
document.write("<br/>Region 2: $"+region2Sum);
document.write("<br/>Region 3: $"+region3Sum);
document.write("<br/>Region 4 : $"+region4Sum);
document.write("<br/>Region 5 : $"+region5Sum);




//calculating total sales
totalSumOfAll = region1Sum + region2Sum + region3Sum +region4Sum +region5Sum;


// display total sales
document.write("<h2>Total Sales</h2>");

document.write(("The sum of all is : $"+totalSumOfAll));









