"use strict"

let resData = {
  "restaurants": [
	{
		"name":"Au Bon Pain",
		"address":"238 Main St., Cambridge, MA 02142",
		"deal":"Free Chocolate Croissant with every Sandwich purchase!"
	},
	{
		"name":"Chipotle Mexican Grill",
		"address":"2 Cambridge Ctr, Cambridge, MA 02412",
		"deal":"Buy one burrito, get one free!"
	},
	{
		"name":"Starbucks",
		"address":"6 Cambridge Ctr, Cambridge, MA 02142",
		"deal":"Free samples of Starbucks Veranda Blend with your next order!"
	},
	{
		"name":"Legal Sea Foods",
		"address":"5 Cambridge Ctr, Cambridge, MA 02142",
		"deal":"25% Off Tuna Steak and Non-Alcoholic Drink!"
	}
]}
let restaurants = document.getElementById("res-details").childNodes;
// restaurants[1].innerHTML = resData.restaurants[0].name;
// restaurants[0].innerHTML = resData.restaurants[0].address;
// restaurants[6].innerHTML = resData.restaurants[0].deal;
for(let node of restaurants){
  console.log(node.innerHTML)
}
