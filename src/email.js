
function sendEmail(){
    var params = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_mhl4ymp";
    const templateID = "template_vqx52lh";
    const publicKey = "VGmNl1rvuvUA2_10s";

    emailjs
    .send(serviceID, templateID, params, publicKey)
    .then((res) =>{
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully, iskolar ng bayan!");
    })
    .catch(err=>console.log(err));
}

