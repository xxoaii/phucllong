
const firebaseConfig = {
    apiKey: "AIzaSyBaoBPNODKg13vzdBZGdtVbThfxOiHwUoM",
    authDomain: "contact-84dca.firebaseapp.com",
    databaseURL: "https://contact-84dca-default-rtdb.firebaseio.com",
    projectId: "contact-84dca",
    storageBucket: "contact-84dca.appspot.com",
    messagingSenderId: "693384550216",
    appId: "1:693384550216:web:4e124753b4d82dd713457d"
  };

  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var number = getElementVal("number");
    var dinoselect = getElementVal("dinoselect");
    var shop = getElementVal("shop");
    var tieude = getElementVal("tieude");
    var nd = getElementVal("nd");
    saveMessages(name, number,dinoselect,shop, tieude,nd );
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, number, dinoselect,shop, tieude,nd) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      Ten : name,
    SDT: number,
     dinoselect : dinoselect,
     shop : shop,
     tieude : tieude,
     nd : nd,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };