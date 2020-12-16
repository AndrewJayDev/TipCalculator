
//functions 

function submitIt(){
    var bill= parseInt(document.getElementById("billAmount").value);
    var serviceRate = document.getElementById("rating").value;
    var numPpl= parseInt(document.getElementById("numPeople").value);
    var totalTip=calculateTip(bill,serviceRate);
    var tipPerPerson= dividePerPerson(totalTip,numPpl);
    document.getElementById("results").innerHTML=`The total with tip is $${totalTip.toFixed(2)} and the total owed per person $${tipPerPerson.toFixed(2)}`;
    

}

function calculateTip(aM,sR){
    if(sR=="fantasticDD"){
        var tip=aM*.20;
        console.log(tip);
        return total=aM+tip;
    }else if(sR=="okayDD"){
        var tip=aM*.15;
        return total=aM+tip;
    }else if(sR=="subparDD"){
        var tip=aM*.10;
        return total=aM+tip;
    }else{
        var tip=aM*.05;
        return total=aM+tip;
    }
}

function dividePerPerson(total, ppl){
   return total/ppl;
}