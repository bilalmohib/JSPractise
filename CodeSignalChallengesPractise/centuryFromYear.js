// Given a year, return the century it is in. The first century spans from the year 1 up to 
// and including the year 100, the second - from the year 101 up to and including the year 200
// , etc.

function centuryFromYear(year) {
    year = year.toString();
    var num = year[2] + year[3];
    // console.log(num)
    var century;
    if(num == "00" || num == 00)
    {
        century = year[0] + year[1];
    }
    else{
        century = year[0] + year[1];
        century++;
    }
    return century;
}

let value = centuryFromYear(2001);
console.log("The century from the year given is: ",value);
