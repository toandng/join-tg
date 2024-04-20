const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressbtn);
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').sytyle.display = "flex"
})
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-close').sytyle.display = "none"
})
