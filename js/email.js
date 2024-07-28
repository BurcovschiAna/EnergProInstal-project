const btnFormular = document.getElementById("trimite");
btnFormular.addEventListener("click", sendEmail);
function sendEmail() {
    const nume = document.getElementById('nume').value;
    const prenume = document.getElementById('prenume').value;
    const eMail = document.getElementById('e-mail').value;
    const numar = document.getElementById('telefon').value;
    const mesaj = document.getElementById("mesaj").value
    emailjs.send("service_0l8jocc", "template_pfomv5s", {
        nume: nume,
        prenume: prenume,
        numar: numar,
        eMail: eMail,
        mesaj: mesaj
    })
    .then(function(response) {
        console.log('Email sent:', response);
        alert('Email-ul a fost expediat cu succes!');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Emaul-ul nu a fost expediat!');
    });
};