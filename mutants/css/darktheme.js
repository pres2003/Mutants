let dark_link = document.getElementById("dark-link");

let dark_butt = document.getElementById("id-dark-theme");
dark_butt.addEventListener('click', ChangeTheme)
let isDark;

function ChangeTheme(){
    
    if(localStorage.getItem("darktheme") == 1)
    {
        localStorage.setItem('darktheme', 0);
        ChangeToLight();
    }
    else
    {
        localStorage.setItem('darktheme', 1);
        ChangeToDark();
    }
}

function ChangeToLight()
{
    dark_link.href = "css/general.css";
}

function ChangeToDark()
{
    dark_link.href = "css/general-dark.css";
}

window.onload = function(){
    if(localStorage.getItem("darktheme") == null)
    {
        localStorage.setItem('darktheme', 0);
    }
    if(localStorage.getItem("darktheme") == 1)
    {
        ChangeToDark()
        dark_butt.checked = true;
    }
    else
    {
        ChangeToLight();
        document.body.style.backgroundColor = "white";
        dark_butt.checked = false;
    }     
}