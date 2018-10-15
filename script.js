//alert("yes");

function infodisp()
{   
    var flag=0;                 //0 means error
    //alert("yes1");
    var name= document.forms["myform"]["name"].value;
    var age= document.forms["myform"]["age"].value;
    var mail= document.forms["myform"]["mail"].value;
    var ins= document.forms["myform"]["ins"].value;
    if(name === "")
    {
        document.getElementById("namestatus").innerHTML="Name must not be empty";
        flag=0;
        //return false;
    }
    else{
        document.getElementById("namestatus").innerHTML="OK";
        flag=1;
    }
    
    if(age === "")
    {
        document.getElementById("agestatus").innerHTML="Age must not be empty";
        flag=0;
        //return false;
    }
    else{
        document.getElementById("agestatus").innerHTML="OK";
        flag=1;
    } 
    
    if(mail === "")
    {
        document.getElementById("mailstatus").innerHTML="Email address must not be empty";
        flag=0;
        //return false;
    }
    else{
        document.getElementById("mailstatus").innerHTML="OK";
        flag=1;
    }
    
    if(ins === "")
    {
        document.getElementById("inststatus").innerHTML="Institute name must not be empty";
        flag=0;
        //return false;
    }
    else{
        document.getElementById("inststatus").innerHTML="OK";
        flag=1;
    }
    
    //alert("yes2");
    
    if(flag!=1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function revertname()
{   //alert("revertname called");
    document.getElementById("namestatus").innerHTML="";
}

function revertage()
{   //alert("revertname called");
    document.getElementById("agestatus").innerHTML="";
}

function revertmail()
{   //alert("revertname called");
    document.getElementById("mailstatus").innerHTML="";
}

function revertinst()
{   //alert("revertname called");
    document.getElementById("inststatus").innerHTML="";
}

function agecheck()
{
    document.getElementById("agestatus").innerHTML="";
}