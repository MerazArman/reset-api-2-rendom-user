


    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      let users = data.results[0]
      console.log(users);
    
      document.getElementById("img").src = users.picture.large;
      document.getElementById("fullName").innerText = `Full Name: ${users.name.title} ${users.name.first} ${users.name.last}`
      document.getElementById("phone").innerHTML = `Phone Number:  ${users.phone}`
      document.getElementById("email").innerHTML = `Email:  ${users.email}`
      document.getElementById("gender").innerHTML = ` Gender: ${users.gender}`;
      document.getElementById("location").innerHTML = ` City: ${users.location.city}`;
      document.getElementById("city").innerHTML = `Postcode: ${users.location.postcode}`;
     
      
    })

   
    
    

      
 
   