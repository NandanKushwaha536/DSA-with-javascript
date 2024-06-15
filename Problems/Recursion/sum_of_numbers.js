// sum of numbers till N

function getAsum(value){

    if(value == 1){
        return value
    } else {
        return value + getAsum(value - 1)
    }
}
