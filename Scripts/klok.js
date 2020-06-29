function showTime(){

    var date = new Date();

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);

    var mainHeading = document.getElementById('mainHeading');

    mainHeading.classList.add('changesSize');


    if (h < 8) {
    //tussen 00:00 en 08:00 lichtblauwe achtergrond
    document.body.style.backgroundColor = "beige";
    }

    else if(h < 10) {
    //tussen 08:00 en 10:00 lichtblauwe achtergrond
    document.body.style.backgroundColor = "lightblue";
    }

    else if(h < 20) {
    //tussen 10:00 en 20:00 lichtblauwe achtergrond
    document.body.style.backgroundColor = "blue";
    }

    else if(h < 22) {
    //tussen 20:00 en 22:00 lichtblauwe achtergrond
    document.body.style.backgroundColor = "darkblue";
    }

    else {
        document.body.style.backgroundColor = "black";
    }

    
}

showTime();





