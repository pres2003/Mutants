let menu_btn = document.getElementById("menu_btn");
let menu_element1 = document.getElementById("drop1");
let menu_element2 = document.getElementById("drop2");
let menu_element3 = document.getElementById("drop3");
let menu_element4 = document.getElementById("drop4");
let menu_element5 = document.getElementById("drop5");
let menu_drop = document.getElementById("menu-drop");


menu_btn.addEventListener("focus", function () { MenuShow(); });
menu_btn.addEventListener("blur", function () { MenuShow(); });
let menu_focus = false;
function MenuShow()
{
	if(menu_focus == false)
		{
			menu_focus = true;
			menu_element1.style.opacity = "1";
			menu_element1.style.visibility = "visible";
			menu_element2.style.opacity = "1";
			menu_element2.style.visibility = "visible";
			menu_element3.style.opacity = "1";
			menu_element3.style.visibility = "visible";
			menu_element4.style.opacity = "1";
			menu_element4.style.visibility = "visible";
			menu_element5.style.opacity = "1";
			menu_element5.style.visibility = "visible";
		}
	else
	{
		menu_focus = false;
		menu_element1.style.opacity = "0";
		menu_element1.style.visibility = "hidden";
		menu_element2.style.opacity = "0";
		menu_element2.style.visibility = "hidden";
		menu_element3.style.opacity = "0";
		menu_element3.style.visibility = "hidden";
		menu_element4.style.opacity = "0";
		menu_element4.style.visibility = "hidden";
		menu_element5.style.opacity = "0";
		menu_element5.style.visibility = "hidden";
		
	}
}

let main_img = document.getElementById("main-img");
document.addEventListener("scroll", function () { ParallaxFun(); });

function ParallaxFun()
{
	
	let offset = window.pageYOffset;
	main_img.style.backgroundPositionY = offset * -0.35 + "px";
}


