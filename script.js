let fname=document.querySelector('input[name="fname"]')
let lname=document.querySelector('input[name="lname"]')

function getFormvalue() {
    //Write your code here
	let FirstName=fname.value
	let LastName=lname.value
	alert(`${FirstName} ${LastName}`)

}
