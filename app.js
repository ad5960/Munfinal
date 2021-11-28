
      var fileList;
      document.getElementById("myfile").onchange = function (event) {
        fileList = event.target.files;}
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let maxSize = 10*1024*1024;
if(fileList[0].size<=maxSize){

    let name = getInputVal("fullname");
    let email = getInputVal("email");
    let number = getInputVal("number");
    let event = getInputVal("events");
  
    var db = firebase.firestore();
    // Add a new document in collection "cities"
    db.collection("contact")
      .doc(email)
      .set({
        name: name,
        email: email,
        number: number,
        event: event,
      })
      .then(() => {
        console.log("Document successfully written!");
  
          //TODO do something with fileList.
          // Get a reference to the storage service, which is used to create references in your storage bucket
        //   var storage = firebase.storage();
        
          // Create a storage reference from our storage service
          console.log(fileList[0]);
          var storage = firebase.storage();
          var storageRef = storage.ref();
          let extension = fileList[0].name.split('.').pop();
          let uploadFileName =  `${number}.${extension}`
        //   console.log(extension)
          var childRef = storageRef.child(uploadFileName);
          // 'file' comes from the Blob or File API
          childRef.put(fileList[0]).then((snapshot) => {
            console.log("Uploaded a blob or file!");
          });
        
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
}
else{
    alert('File too big')
}
}

function getInputVal(id) {
  return document.getElementById(id).value;
}


