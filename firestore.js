// firestore.js

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBrJ3w_fbYYQxD3DsJW0F10feyj_T0T5k",
    authDomain: "thesmartgyan-2043c.firebaseapp.com",
    projectId: "thesmartgyan-2043c",
    storageBucket: "thesmartgyan-2043c.firebasestorage.app",
    messagingSenderId: "19351680227",
    appId: "1:19351680227:web:cfe695444483e3dbde01d6",
    measurementId: "G-MJZJ0TVJBZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Function to submit admission data to Firestore
  window.submitAdmissionData = async function(formData) {
      console.log("Submitting form data:", formData); // Debug log
      try {
          const docRef = await db.collection('applications').add(formData);
          console.log("Document written with ID: ", docRef.id); // Debug log
          alert('Admission form submitted successfully!');
      } catch (error) {
          console.error('Error submitting form:', error);
          alert('There was an error submitting your form. Please try again.');
      }
  };