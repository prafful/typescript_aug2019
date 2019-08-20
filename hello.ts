var message:string = "Hello TS"
console.log(message);

function myfun(){
    console.log("I am in fun 1");
}




var myfun2 = function(){
    console.log("I am in fun 2"); 
 }


var myfun3 = (msg:string = "default name")=>{
    console.log("I am in fun 3 " + msg);
} 


myfun()
myfun2()
myfun3("hello")


class vehicle{

    model: string
    constructor(model:string){
        this.model = model
    }

    drive():void{
        console.log("Driving Vehicle " + this.model);
    }

}

var car = new vehicle("honda")
car.drive()

interface Training{
    topic:string
    duration:number
    startTraining: ()=>string    
}

var html5:Training = {
    topic : "Local Storage",
    duration : 10,
    startTraining: ():string =>{
        return "In Interface";
    }
}


console.log("training interface");
console.log(html5.topic);
console.log(html5.duration);
console.log(html5.startTraining);