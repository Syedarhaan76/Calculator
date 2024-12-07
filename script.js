let display=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

//convert buttons into array
let buttonArray=Array.from(buttons);
let string=' ';
buttonArray.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        //for del key

        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            display.value=string 
        }
        //for Ac
        else if(e.target.innerHTML=='AC'){
            string='';
            display.value=string;
        }
        //for ==calculation
        else if(e.target.innerHTML=='='){
            string=eval(string);
            display.value=string;
        }
        //For Displaying the output on display
        else {
        string+=e.target.innerHTML;
        display.value=string;
        }
        

    });
});



