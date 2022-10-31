// Code your solution in this file!
function distanceFromHqInBlocks (street){
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
    return Math.abs(street - 42) * 264;
} 

function distanceTravelledInFeet(start, finish){
    return Math.abs(start - finish) * 264
}

function calculatesFarePrice(start, finish){
    //let fare;
    let dist = Math.abs(start - finish) * 264
    if (dist <= 400 ){
        return 0;
    } else if (dist > 400 && dist <= 2000){
        return (dist - 400) * .02;
    } else if (dist > 2000 && dist <= 2500){
        return 25.00;
    } else if (dist > 2500){
        return 'cannot travel that far';
    }
}