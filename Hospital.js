
let nameElement = document.getElementById("nameId");
let ageElement = document.getElementById("ageId");
let genderElement = document.getElementById("genderId");
let addressElement = document.getElementById("addressId");
let diseaseElement = document.getElementById("diseaseId");
let buttonElement = document.getElementById("buttonId");
let unorderListElement = document.getElementById("unorderListId");
let searchTextElement = document.getElementById("searchTextId");
let searchElement = document.getElementById("searchId");

buttonElement.addEventListener("click", () => {
    fetch("https://json-server-46b3.onrender.com/patients", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameElement.value,
            age: ageElement.value,
            sex: genderElement.value,
            address: addressElement.value,
            disease: diseaseElement.value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("Patient added successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong!");
    });



});

let showElement = document.getElementById("showId");
let array = [];
fetch("https://json-server-46b3.onrender.com/patients")
        .then(response => {
            return response.json()
        })
        .then(data => {

            console.log("API Response:", data);
            array = data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Unable to fetch patient details.");
        });
       


showElement.addEventListener("click", () => {

            array.forEach(obj => {
            
            let patientNameElement = document.createElement("li");
            let patientIdElement = document.createElement("p");
            let patientAgeElement = document.createElement("p");
            let patientDiseaseElement = document.createElement("p");
            let patientAddressElement = document.createElement("p");

            patientNameElement.innerHTML = "Name: "+obj.name;
            patientIdElement.innerHTML ="ID: "+obj.id;
            patientAgeElement.innerHTML = "Age: "+obj.age;
            patientDiseaseElement.innerHTML ="Disease: "+obj.disease;
            patientAddressElement.innerHTML ="Address: "+obj.address;
            
            patientNameElement.appendChild(patientIdElement);
            patientNameElement.appendChild(patientAgeElement);
            patientNameElement.appendChild(patientDiseaseElement);
            patientNameElement.appendChild(patientAddressElement);
            unorderListElement.appendChild(patientNameElement);
            
            });
        })



searchElement.addEventListener("click",()=>{
    array.forEach(obj=>{
        

        if(obj.id==searchTextElement.value){

            unorderListElement.innerHTML = "";

            let patientNameElement = document.createElement("li");
            let patientIdElement = document.createElement("p");
            let patientAgeElement = document.createElement("p");
            let patientDiseaseElement = document.createElement("p");
            let patientAddressElement = document.createElement("p");

            patientNameElement.innerHTML = "Name: "+obj.name;
            patientIdElement.innerHTML ="ID: "+obj.id;
            patientAgeElement.innerHTML = "Age: "+obj.age;
            patientDiseaseElement.innerHTML ="Disease: "+obj.disease;
            patientAddressElement.innerHTML ="Address: "+obj.address;
            
            patientNameElement.appendChild(patientIdElement);
            patientNameElement.appendChild(patientAgeElement);
            patientNameElement.appendChild(patientDiseaseElement);
            patientNameElement.appendChild(patientAddressElement);
            unorderListElement.appendChild(patientNameElement);

        }else{
           
        }
    })
})