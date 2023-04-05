
const firebaseConfig = {
  apiKey: "AIzaSyBfwhSQBlPCJgGiBPmIT7MmR9FxhXkMDfM",
  authDomain: "phucllong.firebaseapp.com",
  databaseURL: "https://phucllong-default-rtdb.firebaseio.com",
  projectId: "phucllong",
  storageBucket: "phucllong.appspot.com",
  messagingSenderId: "207479777401",
  appId: "1:207479777401:web:1f1b4101cc0c4df5808ca8"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
 

  var name = getElementVal("name");
    var number = getElementVal("number");
    var dinoselect = getElementVal("dinoselect");
    var shop = getElementVal("shop");
    var tieude = getElementVal("tieude");
    var nd = getElementVal("nd");
    saveMessages(name, number,dinoselect,shop, tieude,nd );
  //   enable alert
  document.querySelector(".alert").style.display = "block";

   //   enable alert
   document.querySelector(".alert").style.display = "block";
  
   //   remove the alert
   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
   }, 3000);
 
   //   reset the form
   document.getElementById("contactForm").reset();
 }

const saveMessages = (name,number, dinoselect, shop, tieude, nd) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name : name,
    Phone: number,
    City : dinoselect,
    Shop : shop,
    Heading : tieude,
    Content : nd,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};