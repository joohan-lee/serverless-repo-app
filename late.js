// start coding your function here!
function running_late(date){
    let date1 = new Date(date)
    if (date1.getHours() <= 22){
        return "It is still early!"
    } else{
        return "It is late!"
    }
}

exports.running_late = running_late;