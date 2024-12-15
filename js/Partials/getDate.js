switch (new Date().getMonth()) {
    case 0:
        fullMonth = "January";
        break;
    case 1:
        fullMonth = "February";
        break;
    case 2:
        fullMonth = "March";
        break;
    case 3:
        fullMonth = "April";
        break;
    case 4:
        fullMonth = "May";
        break;
    case 5:
        fullMonth = "June";
        break;
    case 6:
        fullMonth = "July";
        break;
    case 7:
        fullMonth = "August";
        break;
    case 8:
        fullMonth = "September";
        break;
    case 9:
        fullMonth = "October";
        break;
    case 10:
        fullMonth = "November";
        break;
    case 11:
        fullMonth = "December";
}

switch (new Date().getDay()) {
    case 0:
        fullWeek = "Sunday";
        break;
    case 1:
        fullWeek = "Monday";
        break;
    case 2:
        fullWeek = "Tuesday";
        break;
    case 3:
        fullWeek = "Wednesday";
        break;
    case 4:
        fullWeek = "Thursday";
        break;
    case 5:
        fullWeek = "Friday";
        break;
    case 6:
        fullWeek = "Saturday";
}

document.getElementsByClassName("dateText")[0].innerHTML = `<p>${fullWeek}, ${new Date().getDate()} ${fullMonth} ${new Date().getFullYear()}</p>`;
