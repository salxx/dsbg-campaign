var inventory = [{name : "Estus", amount : 1}];

function draw() {
	var i;
	var text = "<ul>";
	for (i = 0; i < inventory.length; i++) {
	  text += "<li>" + inventory[i].name + " x" + inventory[i].amount + " " + "<button onclick=\"removeItem(" + i + ")\">-</button>" + "</li>";
	}
	text += "</ul>";
	document.getElementById('inventory').innerHTML=text;
}

function addItem(item, amount = 1) {
  if(inventory.some(i => i.name === item)) {
	  inventory.find(i => i.name === item).amount += amount;
  } else {
	  inventory[inventory.length] = {name : item, amount : amount};
  }
  draw();
}

function removeItem(index) {
  if(inventory[index].amount > 1) {
	inventory[index].amount--;
  } else {
	inventory.splice(index, 1);
  }
  draw();
}