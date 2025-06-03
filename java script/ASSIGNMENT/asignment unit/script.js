let meters = Number(prompt("Enter length in meters:"));

console.log("Kilometers:", (meters / 1000).toFixed(2));
console.log("Centimeters:", (meters * 100).toFixed(2));
console.log("Millimeters:", (meters * 1000).toFixed(2));
console.log("Micrometers:", (meters * 1e6).toFixed(2));
console.log("Nanometers:", (meters * 1e9).toFixed(2));
console.log("Miles:", (meters / 1609.34).toFixed(4));
console.log("Yards:", (meters * 1.09361).toFixed(2));
console.log("Feet:", (meters * 3.28084).toFixed(2));
console.log("Inches:", (meters * 39.3701).toFixed(2));
console.log("Nautical Miles:", (meters / 1852).toFixed(4));`` 