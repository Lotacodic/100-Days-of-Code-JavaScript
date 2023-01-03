let kgValue = document.getElementById("kg");
let lbValue = document.getElementById("lb");
let ozValue = document.getElementById("oz");

function convertFromKg() {
    let kg = kgValue.value;
    //
    lbValue.value = (kg * 2.205).toFixed(2);
    ozValue.value = (kg * 35.274).toFixed(2);
};

function convertFromLb() {
    let lb = lbValue.value;
    kgValue.value = (lb / 2.205).toFixed(2);
    ozValue.value = (lb * 16).toFixed(2);
}

function convertFromOz() {
    let oz = ozValue.value;
    kgValue.value = (oz / 35.274).toFixed(2);
    lbValue.value = (oz * 16).toFixed(2);
}

kgValue.addEventListener("input", convertFromKg);
lbValue.addEventListener("input", convertFromLb);
ozValue.addEventListener("input", convertFromOz);