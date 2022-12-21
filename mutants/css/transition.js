let body = document.getElementById("bodyid");

window.onload = fadeout();

function fadeout(){
	setTimeout(() =>{body.style.opacity = 1;}, 10)
}

let anchors = document.querySelectorAll('a');

for (let i = 0; i < anchors.length; i++){
	const anchor = anchors[i];
	anchor.addEventListener('click', e => {click(e);});
	
}

function click(event){
	event.preventDefault();
	let target = event.currentTarget.href;
	console.log(target);
	body.style.opacity = 0;
	setTimeout(()=>{window.location.href = target;}, 500);
	setTimeout(()=>{body.style.opacity = 1;}, 510);
}