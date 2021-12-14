
let apiKey = '32c79f457e54408e98960272cc4c0e08';


function kodak(element){

  var db = firebase.firestore();
  let val = element.getAttribute("value");
  let temp = 1;
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
  let ip = data.ip_address;
  
  db.collection("kodak")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            if(doc.id == ip)
            {
              temp = 0
              alert("You have already voted")
            }
        });

        if( temp == 1 )
        {
          

          db.collection("kodak")
              .doc(ip)
              .set({
                ip: ip,
                choice: val 
              })
              alert("Thank you for voting")
        }

        else{
          
          temp = 1;
          
        }

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
}

function guten(element){

  var db = firebase.firestore();
  let val = element.getAttribute("value");
  let temp = 1;
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
  let ip = data.ip_address;
  
  db.collection("guten")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            if(doc.id == ip)
            {
              temp = 0
              alert("You have already voted")
            }
        });

        if( temp == 1 )
        {
          

          db.collection("guten")
              .doc(ip)
              .set({
                ip: ip,
                choice: val 
              })
              alert("Thank you for voting")
        }

        else{
          
          temp = 1;
          
        }

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
}

function worth(element){

  var db = firebase.firestore();
  let val = element.getAttribute("value");
  let temp = 1;
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
  let ip = data.ip_address;
  
  db.collection("worth")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            if(doc.id == ip)
            {
              temp = 0
              alert("You have already voted")
            }
        });

        if( temp == 1 )
        {
          
          db.collection("worth")
              .doc(ip)
              .set({
                ip: ip,
                choice: val 
              })
              alert("Thank you for voting")
        }

        else{
          
          temp = 1;
          
        }

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
}

function attack(element){

  var db = firebase.firestore();
  let val = element.getAttribute("value");
  let temp = 1;
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
  let ip = data.ip_address;
  
  db.collection("attack")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            if(doc.id == ip)
            {
              temp = 0
              alert("You have already voted")
            }
        });

        if( temp == 1 )
        {
          

          db.collection("attack")
              .doc(ip)
              .set({
                ip: ip,
                choice: val 
              })
              alert("Thank you for voting")
        }

        else{
          
          temp = 1;
          
        }

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
}

function sketch(element){

  var db = firebase.firestore();
  let val = element.getAttribute("value");
  let temp = 1;
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
  let ip = data.ip_address;
  
  db.collection("sketch")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            if(doc.id == ip)
            {
              temp = 0
              alert("You have already voted")
            }
        });

        if( temp == 1 )
        {
          

          db.collection("sketch")
              .doc(ip)
              .set({
                ip: ip,
                choice: val 
              })
              alert("Thank you for voting")
        }

        else{
          
          temp = 1;
          
        }

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
}