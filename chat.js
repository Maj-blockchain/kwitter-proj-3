// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

    apiKey: "AIzaSyDAGlvMxDlVV0xu3F67MoRsf_PhLGKa_PM",
  
    authDomain: "kwitter-proj-e7850.firebaseapp.com",
  
    projectId: "kwitter-proj-e7850",
  
    storageBucket: "kwitter-proj-e7850.appspot.com",
  
    messagingSenderId: "301828892604",
  
    appId: "1:301828892604:web:9e7ce3b475c797b6c6edb9"
  
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



