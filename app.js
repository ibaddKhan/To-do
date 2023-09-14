// let pass = document.getElementById("pass");
// let input = document.getElementById("text");
// let div = document.getElementById("edit-box");
// let emptyArray = [];
// function blocktoUse(e) {
//   let result = {
//     Input: input.value,
//     Password: pass.value,
//   };
//   emptyArray.push(result);
//   div.innerHTML = "";
//   input.value = "";
//   pass.value = "";
//   for (let i = 0; i < emptyArray.length; i++) {
//     const element = emptyArray[i];
//     div.innerHTML = [
//       `Email is ==> ${emptyArray[i].Input} </br> Password is ==> ${emptyArray[i].Password} </br>
//         <button onclick ="edit(${i});">Edit</button>
//         <button onclick="delete(${i});">Delete</button>`,
//     ];
//   }
// }
// function cons(index) {
//   blocktoUse();
//   e.preventDefault();
// }

// function edit(i) {
//   let newInput = +prompt("enter your user name", input);
//   let newPass = +prompt("enter your user name", pass);
//   blocktoUse();
//   div.innerHTML = div.innerHTML.replace(newInput, newPass);
//   e.preventDefault();
// }
// ? Assigning variables

const input = document.getElementById("text");
const pass = document.getElementById("pass");
const div = document.getElementById("edit-box");
const resultArray = [];
console.log(resultArray);

// ? Printing Result

function cons(e) {
  e.preventDefault();
  div.innerHTML = "";
  const user = {
    Email: input.value,
    Password: pass.value,
  };
  resultArray.push(user);
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `<p>Email: ${resultArray[i].Email}</p>
 <p>Password:${resultArray[i].Password}</p>
 <button onclick="edit(${i})">Edit</button>
 <button onclick="del(${i})">Delete</button>
 `;
    input.value = "";
    pass.value = "";
  }
}
// ! Printed

// ? Edit Function

function edit(index) {
  //   if (input.value == "") {
  //     alert("Enter Email");
  //   } else if (pass.value == "") {
  //     alert("Enter Pass");
  //   }
  div.innerHTML = "";
  const newEmail = prompt("Change Old Email");
  const newPass = prompt("Update Password");
  resultArray[index].Email = newEmail;
  resultArray[index].Password = newPass;
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `
<p>Email: ${resultArray[i].Email}</p>
<p>Password:${resultArray[i].Password}</p>
<button onclick="edit(${i})">Edit</button>
<button onclick="del(${i})">Delete</button>`;
  }
  console.log(resultArray);
}

// ? Delete fuction

function del(index) {
  div.innerHTML = "";

  resultArray.splice(index, 1);
  for (let i = 0; i < resultArray.length; i++) {
    div.innerHTML += `<p>Email: ${resultArray[i].Email}</p>
    <p>Password:${resultArray[i].Password}</p>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="del(${i})">Delete</button>
    `;
  }

  input.value = "";
  pass.value = "";
}
