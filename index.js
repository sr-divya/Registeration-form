function validateform() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var password = document.form.pass.value;
    var email = document.form.email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (fname == '' || lname == '') {
        alert("Name can't be blank");
        return false;
    }
    else {
        if(isNaN(fname || lname)){
            return true;
        }
        else{
            alert("Enter Name in Alphabets only")
        }

    }

    if(email=='')
    {
        alert("Email Can't be blank");
        return true;
    }
    else
    {
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
       return false;
        }
       else{
        return true;
       }
    
    }
   
    if (password == '') {
        alert("Password is Compulsory");
        return false;
    }
    else {
        if (password.length < 6) {
        alert("Password must be at least 6 character");
        return false;
        }
        else{
            return true;
        }
    }
}
