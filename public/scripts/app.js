/*  File Name: Assignment 2
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 25, 2020 */

//const { event } = require("jquery");

//IIFE -- Immeadiately Invoked Function Expression

(function() {
   function Start()
   {
       console.log("App Started...");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for(button of deleteButtons){
           button.addEventListener('click', (event) =>{
               if(!confirm('Are You Sure?'))
               {
                   event.preventDefault();
                   window.location.assign('/survey');
               }
           });
       }

   }

   window.addEventListener("load", Start);
   
 

})();

var i=2;
var addOneMore = document.getElementById("addOneMore")
function addFieldFunction() {
    console.log("start addFieldFunction");
            
    // Creating a break line element 
    var br = document.createElement("br");  
         
  do {
    // Creating a form
    var form = document.createElement("form"); 

    //Creating a label
    var QueLB = document.createElement("label"); 
    QueLB.setAttribute("for", "question1TextField");
    QueLB.innerHTML="Enter Question "+i;

    // Creating an input element for first checkBox
    var firstCB = document.createElement("input"); 
    firstCB.setAttribute("type", "checkbox"); 
    firstCB.setAttribute("class", "form-check-input"); 
    firstCB.setAttribute("name", "q"+i+"option1"); 
    firstCB.setAttribute("id", "examplecheckboxs1");
    
    // Creating an input element for second checkBox
    var secondCB = document.createElement("input"); 
    secondCB.setAttribute("type", "checkbox"); 
    secondCB.setAttribute("class", "form-check-input"); 
    secondCB.setAttribute("name", "q"+i+"option2"); 
    secondCB.setAttribute("id", "examplecheckboxs2");

    // Creating an input element for third checkBox
    var thirdCB = document.createElement("input"); 
    thirdCB.setAttribute("type", "checkbox"); 
    thirdCB.setAttribute("class", "form-check-input"); 
    thirdCB.setAttribute("name", "q"+i+"option3"); 
    thirdCB.setAttribute("id", "examplecheckboxs3");

    // Creating an input element for forth checkBox
    var forthCB = document.createElement("input"); 
    forthCB.setAttribute("type", "checkbox"); 
    forthCB.setAttribute("class", "form-check-input"); 
    forthCB.setAttribute("name", "q"+i+"option4"); 
    forthCB.setAttribute("id", "examplecheckboxs4");
  
    // Creating an input element for first input
    var firstIP = document.createElement("input");
    firstIP.setAttribute("type", "text"); 
    firstIP.setAttribute("class", "form-control"); 
    firstIP.setAttribute("name", "q"+i+"option1"); 
    firstIP.setAttribute("id", "option1TextField");
    firstIP.setAttribute("placeholder", "Enter Option 1");

    // Creating an input element for second input
    var secondIP = document.createElement("input");
    secondIP.setAttribute("type", "text"); 
    secondIP.setAttribute("class", "form-control"); 
    secondIP.setAttribute("name", "q"+i+"option2"); 
    secondIP.setAttribute("id", "option2TextField");
    secondIP.setAttribute("placeholder", "Enter Option 2");

    // Creating an input element for third input
    var thirdIP = document.createElement("input");
    thirdIP.setAttribute("type", "text"); 
    thirdIP.setAttribute("class", "form-control"); 
    thirdIP.setAttribute("name", "q"+i+"option3"); 
    thirdIP.setAttribute("id", "option3TextField");
    thirdIP.setAttribute("placeholder", "Enter Option 3");

    // Creating an input element for forth input
    var forthIP = document.createElement("input");
    forthIP.setAttribute("type", "text"); 
    forthIP.setAttribute("class", "form-control"); 
    forthIP.setAttribute("name", "q"+i+"option4"); 
    forthIP.setAttribute("id", "option4TextField");
    forthIP.setAttribute("placeholder", "Enter Option 4");

     
                  
    // Append the Que label
    form.appendChild(QueLB);  
      
    // Inserting a line break 
    form.appendChild(br.cloneNode());  
    
    //Appending the checkBox 1
    form.appendChild(firstCB);
    //Appending the input text 1
    form.appendChild(firstIP);
    form.appendChild(br.cloneNode());  

    //Appending the checkBox 2
    form.appendChild(secondCB);
    //Appending the input text 2
    form.appendChild(secondIP);
    form.appendChild(br.cloneNode());  
    
    //Appending the checkBox 3
    form.appendChild(thirdCB);
    //Appending the input text 3
    form.appendChild(thirdIP);
    form.appendChild(br.cloneNode());  
    
    //Appending the checkBox 4
    form.appendChild(forthCB);
    //Appending the input text 4
    form.appendChild(forthIP);
    form.appendChild(br.cloneNode());  
    i++;
  }
  while (i != i);
    document.getElementById("surveyForm").appendChild(form);
}


