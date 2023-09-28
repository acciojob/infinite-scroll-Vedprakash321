
let scrollContainer = document.getElementById("infi-list");
let i = 0;
function addOneItem(){
	const li = document.createElement("li");
	li.innerText=`Item ${++i}`;
	scrollContainer.appendChild(li);
	
	
}
for(let i=0;i<10;i++){
	addOneItem();
	
}
scrollContainer.addEventListener("scroll", () => {
	const maxScrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
	let currrentScrollTop = scrollContainer.scrollTop;
	let threshold = Math.abs(maxScrollHeight - currrentScrollTop)
	if(threshold <= 5){
		for(let i=0;i<2;i++){
			addOneItem();
		}
	}
});

