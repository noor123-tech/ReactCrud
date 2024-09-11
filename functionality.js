
async function renderdata() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);

        const tableBody = document.querySelector(`#put`);
        tableBody.innerHTML = "";
        
        data.forEach(user => {
           
            const name1 = user.name;
            const phone1 = user.phone;
            const email1 = user.email;
            const username1 = user.username;
            const deleteBtn = `<a href="#" title="Edit" onclick="toedit(event)"><i class="fa-solid fa-pen-to-square"></i></a>`;
            const editBtn = `<a href="#" title="delete" onclick="todelete(event)"><i class="fa-solid fa-trash"></i></a>`;

            const row = `<tr><td>${name1}</td><td>${email1}</td><td>${username1}</td><td>${phone1}</td><td>${deleteBtn} ${editBtn}</td></tr>`;
            tableBody.innerHTML += row;
       
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
document.addEventListener('DOMContentLoaded', renderdata);


function formpage(){
   /* 
   const newpageHtml=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        #form {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: 0 auto;
        }
        .form-group {
            margin-bottom: 10px;
        }
        input[type="text"], input[type="email"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        #submitBtn, #cancelbtn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
        }
        #submitBtn:hover, #cancelbtn:hover {
            background-color: #45a049;
        }
        #submitBtn:active, #cancelbtn:active {
            background-color: #3e8e41;
        }
    </style>
</head>
<body>
    <div id="form">
        <div class="form-group">
            <input type="text" id="nameInput" placeholder="Enter your name" onclick="focusname()">
            <p id="nameError" style="display: none;">This field is Empty</p>
        </div>
        <div class="form-group"><input type="email" id="emailInput" placeholder="Email" onclick="focusemail()">
        <p id="emailError" style="display: none;">This field is Empty</p>
        </div>
        <div class="form-group"><input type="text" id="usernameInput" placeholder="Enter username" onclick="focususername()">
            <p id="usernameError" style="display: none;">This field is Empty</p>
        </div>
        <div class="form-group"><input type="text" id="phoneInput" placeholder="Phone" onclick="focusphone()">
            <p id="phoneError" style="display: none;">This field is Empty</p>
        </div>
        <div class="form-groups">
        <button type="button" id="submitBtn" onclick="submitfunc()">Submit</button>
        <button type="button" id="cancelbtn" onclick="cancel()"> CANCEL</button>
        </div>
    </div>
</body>
</html>`;
document.documentElement.innerHTML=newpageHtml;
*/
// window.location.href = "./form.html"
    let show = document.getElementById("form");
            show.style.display = "flex";


}


function submitfunc(){

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const username = document.getElementById('usernameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const EditBt = `<a href="#" title="Edit" onclick="toedit(event)"><i class="fa-solid fa-pen-to-square"></i></a>`;
    const deleteBt = `<a href="" title="delete"  onclick="todelete(event)" ><i class="fa-solid fa-trash"></i></a>`;
    if(name !== "" && email !== "" && username !== "" && phone !== "")
        {
            if(window.editrow)
            {
                window.editrow.cells[0].textContent=name;
                window.editrow.cells[1].textContent=email;
                window.editrow.cells[2].textContent=username;
                window.editrow.cells[3].textContent=phone;

                window.editrow=null;
            }
            else{
                
           // add all values in a table 
           let tabbody=document.querySelector(`#put`);
           let y = `<tr><td>${name}</td><td>${email}</td><td>${username}</td><td>${phone}</td><td>${EditBt} ${deleteBt}</td></tr>`;

           tabbody.innerHTML+=y;
           // remove all the values from input field 
            }
            document.getElementById('nameInput').value="";
          document.getElementById('emailInput').value="";
          document.getElementById('usernameInput').value="";
           document.getElementById('phoneInput').value=""; 
           // remove all the whole form
           let show1=document.getElementById("form");
           show1.style.display="none";
        }
        else{
            console.log(name,email, username,phone,"input fields ")
            if(name == ""){
                let error = document.getElementById("nameError").style.display = "block"
            }
            if(email == ""){
let error = document.getElementById("emailError").style.display = "block"
            }
            if(username == ""){
                let error = document.getElementById("usernameError").style.display = "block"
            }
            if(phone == ""){
                let error = document.getElementById("phoneError").style.display = "block"
            }

        }

}
// focus for name 
function focusname(){
    let focus=document.getElementById(`nameError`);
    focus.style.display="none";
}
// focus for email
function focusemail(){
    let focus=document.getElementById(`emailError`);
    focus.style.display="none";
}
// focus for username 
function focususername(){
    let focus=document.getElementById(`usernameError`);
    focus.style.display="none";
}
// focus for phone
function focusphone(){
    let focus=document.getElementById(`phoneError`);
    focus.style.display="none";
}
function todelete(event){
event.preventDefault();
const userconfirm=confirm("Are you sure you wanna delete this");
if(userconfirm)
{
    const row=event.target.closest(`tr`);
    row.remove();
}
else{
    // do nothing===
}

}
function toedit(event){
    event.preventDefault();
 formpage();

 const r=event.target.closest(`tr`);
 const name=r.cells[0].textContent;
 const email=r.cells[1].textContent;
 const username=r.cells[2].textContent;
 const phone=r.cells[3].textContent;
 // putting values inside the form 
 document.getElementById('nameInput').value=name;
 document.getElementById('emailInput').value=email;
 document.getElementById('usernameInput').value=username;
  document.getElementById('phoneInput').value=phone;
  // made a global variable to check if the row i am going to edit has data or not 
 window.editrow=r;

}
function cancel(){
    const tocan=document.getElementById(`form`);
    tocan.style.display="none";
    document.getElementById('nameInput').value="";
    document.getElementById('emailInput').value="";
    document.getElementById('usernameInput').value="";
     document.getElementById('phoneInput').value=""; 

     window.editrow=null;
   }
   // for #leftportion input # btnn1
   /*function searchword() {
    const word = document.getElementById('inp').value.toUpperCase(); // Get input value and normalize
    const table = document.getElementById('table');
    const r = table.getElementsByTagName('tr');
    
    for (let i = 0; i < r.length; i++) {
        const firsttd = r[i].getElementsByTagName('td')[0]; // Get the first td element of each row
        if (firsttd) {
            let textvalue = firsttd.textContent.toUpperCase();
            if (textvalue.indexOf(word) > -1) {
                r[i].style.display = ''; // Show the row if the search word is found
            } else {
                r[i].style.display = 'none'; // Hide the row if the search word is not found
            }
        }
    }
   }*/
  function searchword()
  {
    const word=document.getElementById(`inp`).value.toUpperCase();
  let found=false;
   if(word=="")
   {

    const thead=document.querySelector(`#hh`);
    thead.innerHTML = `
                   <tr>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Username</th>
                       <th>Phone</th>
                       <th>Action</th>
                   </tr>
               `;
        renderdata();
    


   }
   else{
    // trim removes unnessary spaces doesnt care about spaces;
    const rows=document.querySelectorAll(`table tr`);
    rows.forEach(obj=>{
    const firsttd= obj.cells[0].textContent.toUpperCase();
    if(firsttd.includes(word))
    {
    obj.style.display="";
    found=true;
    }
    else{
     
        obj.style.display="none";
    }


    });
   
}

if(!found)
{
    let tabbody1=document.querySelector(`#put`);
    const mes="Name like this is not found";
    const x=`<tr><td>${mes}</td></tr>`
    tabbody1.innerHTML=x;
}
  }
  
