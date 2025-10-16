function calculate() {
    let cd = document.getElementById("cd");
    let bd = document.getElementById("bd");
    let ageText = document.getElementById("ageText");

    if (!cd.value || !bd.value) {
        ageText.innerHTML = "Please enter both dates.";
        return;
    }

    let currentday = parseInt(cd.value.slice(8, 10), 10);
    let currentmonth = parseInt(cd.value.slice(5, 7), 10);
    let currentyear = parseInt(cd.value.slice(0, 4), 10);

    let birthday = parseInt(bd.value.slice(8, 10), 10);
    let birthmonth = parseInt(bd.value.slice(5, 7), 10);
    let birthyear = parseInt(bd.value.slice(0, 4), 10);

    let day, month, year;

    if (currentday >= birthday) {
        day = currentday - birthday;
    } else {
        day = currentday + new Date(currentyear, currentmonth, 0).getDate() - birthday;
        currentmonth--;
    }

    if (currentmonth >= birthmonth) {
        month = currentmonth - birthmonth;
    } else {
        month = currentmonth + 12 - birthmonth;
        currentyear--;
    }

    year = currentyear - birthyear;

    if (year < 0) {
        ageText.innerHTML = "App Mere Sath Majak Ker Rahe Ho ";
    } else {
        ageText.innerHTML = `${year} years, ${month} months, ${day} days`;
    }
}
