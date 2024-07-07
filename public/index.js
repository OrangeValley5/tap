


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnUd9s5l404NFXsw-RjyhD8fRrzOo76gc",
    authDomain: "grupe-ab915.firebaseapp.com",
    databaseURL: "https://grupe-ab915-default-rtdb.firebaseio.com",
    projectId: "grupe-ab915",
    storageBucket: "grupe-ab915.appspot.com",
    messagingSenderId: "478945314323",
    appId: "1:478945314323:web:6db21a65d217ec66cae1e6",
    measurementId: "G-NZFWPHN48T"
  };

  firebaseConfig.initializeApp(firebaseConfig);

var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");



function  getFile(e) {

    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
    
}


function uploadImage(){
    let storgeRef = firebase.storge.ref("images/"+fileName);
    let uploadTask = storgeRef.put(fileItem);


    uploadTask.on("state_changed", (snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    }, (error)=>{
        console.log("Error is", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src", url);
            }
        })
    })
}