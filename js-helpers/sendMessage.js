function sendMessage(event) {
  event.preventDefault(); 

  const form = event.target; 
  const from = "John Doe";
  const message = form.elements["message-input"].value; 

  const currentDate = new Date();
  const timeToDate = reunionDate - currentDate;
  const NoDays = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
  const Nohours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Nominutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
  const Noseconds = Math.floor((timeToDate % (1000 * 60)) / 1000);

  const data = {
    content: `[Sent on Day ${NoDays}, Hour ${Nohours}, Minute ${Nominutes}, Second ${Noseconds}]`,
    embeds: [
      {
        fields: [
          {
            name: "From",
            value: from,
          },
          {  
            name: "Message",
            value: message
          }
        ],
      }
    ]
  };



  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Reset the form
    } else {
      alert("Failed to send message."); 
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("An error occurred."); 
  });
}