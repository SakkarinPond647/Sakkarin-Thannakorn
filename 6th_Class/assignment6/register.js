
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm")
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Errmsg = document.getElementById("errormsg")
    var pass = document.forms["myForm"]["Password"].value;
    var passCheck = document.forms["myForm"]["RetypePass"].value;
    if(pass == passCheck)
    {
        alert("Register Success!")
        return true;
    }
    else
    {
        alert("Wrong !")
        Errmsg.innerHTML = "Your password don't match";
        return false;
    }
}