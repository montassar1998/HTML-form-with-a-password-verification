
r = 98;
g = 18; b = 12;
function inputColor(id) {
    let x = document.getElementById(id)
    x.addEventListener("keyup", (e) => { document.getElementById(id).style.backgroundColor = "#5ef"; e.preventDefault(); });
    x.addEventListener("keyup", (e) => {
        x.style.backgroundColor = "#fe3"; e.preventDefault();
        var ctl_var = x.value.substr(x.value.lastIndexOf('.') + 1, x.value.length - x.value.lastIndexOf('.'))
        console.log(" am keyup email DOMAIN " + (["com", "tn", "fr", "net"].includes(ctl_var)) + "   " + ctl_var);
        /*if(["com","tn","fr","net"].includes(ctl_var)){
            console.log("valIde    " + ctl_var);
        }*/
    });
}

function check_password(e) {
    var statusp1 = document.getElementById("pwd_status1");
    var statusp2 = document.getElementById("pwd_status2");
    
    var caller_id = e.target.id;
    var status = true;
    var valeur_mdp = String(e.target.value);
    console.log("check " + e.target.value)
    //verif existance nb 
    var nb_exists = false;
    var Maj_exists = false;
    var spec_chars = false;
    for (let i of valeur_mdp) {
        //si on trouve un nombre
        if (isNaN(i) == false) {
            nb_exists = true;
        }
        console.log(" i = " + i.toUpperCase())
        if (i.toUpperCase() == i) {
            Maj_exists = true
        }
        if (["@", "_", "=", "é", "\'", "~", "#"].includes(i)) {
            spec_chars = true;
        }
        console.log("ch " + i);
    }
    if (!nb_exists || !Maj_exists || !spec_chars) {
        status = false;
        console.log("Bad")
    }
    if (valeur_mdp != "") {
        if (caller_id == "first_pwd") {
            if (status) {
                statusp1.style.color = "green";
                statusp1.textContent = "Strong password"
            } else {
                statusp1.style.color = "red";
                statusp1.textContent = "Bad password"
            }
        } else if (caller_id == "second_pwd") {
            if (status) {
                statusp2.style.color = "green";
                statusp2.textContent = "Strong password"
            } else {
                statusp2.style.color = "red";
                statusp2.textContent = "Bad password"
            }
        }
        if (document.getElementById('second_pwd').value == document.getElementById("first_pwd").value && (document.getElementById('second_pwd').value != "" && document.getElementById("first_pwd").value != "") && statusp2.textContent == "Strong password" && statusp1.textContent == "Strong password") {
            pwd_status_gen.textContent = "Passwords Match"
            pwd_status_gen.style.color = "green"
        } else {
            pwd_status_gen.textContent = ""

        }
    } else {
        if (caller_id == "first_pwd") {
            statusp1.textContent = ""
        } else {
            statusp2.textContent = ""
        }


    }

}

function verify_course(e) {
    var hasletter = false;
    for (i of String(e.target.value)) {

        if (!isNaN(i)) {
            alert("course name should not have a number.")
        } else {
            hasletter = true;
        }
    }
}
function verifSelect(e) {
    if (isNaN(e.target.selectedOptions[0].value)) {
        alert("Please select a choice from the select menu.")
    }
    // alert(e.target.selectedOptions[0].value)
}
function genderVerification(e) {
    var genderSet = document.getElementsByName("inlineRadioOptions")
    var status = false
    for (i of genderSet) {
        if (i.checked) {
            status = true
        }
    }
    if (status) {
        e.preventDefault()
    } else {
        alert("Select your gender please.")
    }

}

function verifyAddress(e) {
    var value = e.target.value.trim()
    value = (value.split(" "))
    var seq = 0;
    var test = false
    for (i of value) {

        if (!isNaN(i)) {
            seq++
        } else {
            //alert("seq = "+ seq)
            if (seq >= 2 || seq == 0) {
                test = true
            }
        }
    }
    if (test)
        alert("Please introduce an address that ressembles: Downing street 10 London")

}


inputColor('FirstName');
inputColor("LastName");
inputColor('mail');
inputColor('first_pwd');
inputColor('second_pwd');
inputColor('course');
inputColor('address');
let course_verif = document.getElementById("course")
course_verif.addEventListener("blur", verify_course, false)
let mail = document.getElementById('mail').value;
let fp = document.getElementsByClassName("pwd_ver")
fp[0].addEventListener("keyup", check_password, false);
fp[1].addEventListener("keyup", check_password, false);
var select_menu = document.getElementById("selectMenu")
select_menu.addEventListener("blur", verifSelect, false)
var submitButton = document.getElementById('submitButton')
submitButton.addEventListener("click", genderVerification, false)
var address = document.getElementById("address")
address.addEventListener("blur", verifyAddress, false)