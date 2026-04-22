function generateData() {

    let heart = Math.floor(Math.random() * 60) + 60;
    let temp = (Math.random() * 3 + 36).toFixed(1);
    let bp1 = Math.floor(Math.random() * 40) + 100;
    let bp2 = Math.floor(Math.random() * 30) + 70;

    document.getElementById("heart").innerText = heart + " bpm";
    document.getElementById("temp").innerText = temp + " °C";
    document.getElementById("bp").innerText = bp1 + "/" + bp2;

    let status = "Normal";
    let color = "green";

    // AI logic (basic rule-based)
    if (heart > 100 || temp > 38 || bp1 > 140) {
        status = "⚠ High Risk";
        color = "red";
    }

    document.getElementById("status").innerText = status;
    document.getElementById("statusCard").style.background = color;
}