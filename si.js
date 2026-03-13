// Function to calculate simple interest
function calculateSI() {

    // Taking input values from HTML
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    // Formula for Simple Interest
    let si = (p * r * t) / 100;

    // Display result on webpage
    document.getElementById("result").innerHTML =
        "Simple Interest = " + si;
}