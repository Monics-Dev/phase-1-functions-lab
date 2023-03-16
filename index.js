function distanceFromHqInBlocks (blocks){
if (blocks > 42)
{
    return blocks -42;
}
else
{
    return 42 -blocks;
}




}
function distanceFromHqInFeet (blocks){
    return distanceFromHqInBlocks(blocks) * 264;

}
function distanceTravelledInFeet(start,destination){
    if(destination > start){
        const distance =destination -start;
        return distance * 264;
    }else if(start >destination){
        const distance =start-destination;
        return distance *264;
    }else
    {
        return 0;
    }
}


function calculatesFarePrice ( start,destination){
let distanceTravelled = distanceTravelledInFeet (start,destination)
if (distanceTravelled<=400){
    return 0;
}else if (distanceTravelled>400 && distanceTravelled<2000){
return 2.56;
}else if (distanceTravelled>2000 && distanceTravelled<2500){
    return 25;
}else if (distanceTravelled>2500){
    return "cannot travel that far"
}









}



















f