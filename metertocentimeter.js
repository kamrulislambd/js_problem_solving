//Calculate Centimeter

function getCentimeter(meter){
    const perMeter = 100;

    let centimeter = meter * perMeter;

    return centimeter;
}

//console.log(getCentimeter(25));

//Calculate Meter
function getMeter(centi){
    const perCenti = 1/100;

    let meter = centi * perCenti;

    return meter;
}

console.log(getMeter(2500));