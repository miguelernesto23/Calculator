//Dias
let Day = document.getElementById('DDinput')
let Month = document.getElementById('MMinput')
let Year = document.getElementById('YYYinput')
let Label2 = document.getElementsByClassName('label2');
let Label1 = document.getElementsByClassName('label');
let input = document.getElementsByClassName('input');
//Date
var Date = new Date();
let years = Date.getFullYear();
let month = Date.getMonth();
let days = Date.getDate();


function MostrarDatos (){
   if(!Day.value == 0 && !Month.value ==0 && !Year.value == 0){
    //Days
   
        if((Day.value == 31 && Month.value <= 7 && (Month.value%2)!=1) || (Day.value == 31 && Month.value>=8 && (Month.value%2)== 1) || (Day.value>31)){
            Label2[0].style.display = 'block';
            Label2[0].innerHTML = "Must be a valid date";
            Day.value = ""
            for(var i = 0 ; i<Label1.length ; i++){
                Label1[i].style.color= 'red';

            }
            for(var i = 0 ; i <input.length ;i ++){
                input[i].style.borderColor = 'red';
            }
            setTimeout(()=>{
                Label2[0].style.display = 'none';
            } , 3000)
                 
        }else{ 
          let CalculatedDays = Day.value -days;
          CalculatedDays = 30 - (CalculatedDays*-1);
          document.getElementById('spanDD').innerHTML=CalculatedDays;
        }
        if(Month.value>12 || Month.value == 0){
            Label2[1].style.display = 'block';
            Label2[1].innerHTML = "Must be a valid month";
            Month.value = "";
            for(var i = 0 ; i<Label1.length ; i++){
                Label1[i].style.color= 'red';

            }
            for(var i = 0 ; i <input.length ;i ++){
                input[i].style.borderColor = 'red';
            }
            setTimeout(()=>{
                Label2[1].style.display = 'none';
            } , 3000)
        } else{
            let CalculatedMonths = 12 - ((month - Month.value)*-1);
             document.getElementById('spaMM').innerHTML = CalculatedMonths;

        }
         if(Year.value>years || Year.value <(years-100)){
            Label2[2].style.display = 'block';
            Label2[2].innerHTML = "Must be in the past";
            Year.value = "";
            for(var i = 0 ; i<Label1.length ; i++){
                Label1[i].style.color= 'red';

            }
            for(var i = 0 ; i <input.length ;i ++){
                input[i].style.borderColor = 'red';
            } 
            setTimeout(()=>{
                Label2[2].style.display = 'none';
            Label2[2].innerHTML = "";
            } , 3000)
        }else{
                //Calcular Edad
                let CalculatedYEARS = years - Year.value
                if(Month.value > month){
                        CalculatedYEARS -= 1;
                }
                document.getElementById('spanYY').innerHTML = CalculatedYEARS;
        }
  
          
   }else{
    {for(var i = 0 ; i <3 ; i++){
        Label1[i].style.color = 'red';
        Label2[i].style.display = 'block';
        Label2[i].innerHTML = "This feild is required";
        input[i].style.borderColor = 'red'; 

     }
    setTimeout(()=>{for(var i = 0 ; i <3 ; i++){
            Label1[i].style.color = 'black';
            Label2[i].style.display = 'none';
            Label2[i].innerHTML = "";
            input[i].style.borderColor = 'black'; 
    
         }}, 3000)
     
   }
   }
}
