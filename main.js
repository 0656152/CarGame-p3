//Variables
let car = {
    make:"Jet",
    model:"F-Ck-1",
    color: "grey",
    milege: 0,
    isWorking: true,

    driveToWork(){
        alert("Old Milege: $(this.milege)");
        this.millege = this.millege+8;
        alert("New milege: $(this.milege)");

    }
}


//Function
const rewriteStats(){

}

//Captual keyboards input. Depemding on the letter pressed it will "call" (execute)different functions
document.onkeyup = (event) => {


//Capture the key press, save it into a variable
let letter = String.funcOneCode(event.keycode).toLearnCase();


if(letter==="d"){
    car.driveToWork();
    rewriteStats()
}

}