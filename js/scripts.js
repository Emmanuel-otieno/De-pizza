$(document).ready(function(){
    $("#chez").hide();

    $("#des").click(function(){
      $("#chez").toggle();
    });

});

function Results (flavour,size,crust,toppings) {
  this.flavour = flavour;
  this.size= size;
  this.crust= crust;
  this.toppings=toppings;
};
Results.prototype.order = function() {
  return "You have made an order of " + this.flavour + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (price, quantity, delivery,toppings,crust) {
  this.price= price;
  this.quantity=quantity;
  this.delivery=delivery;
  this.toppings=toppings;
  this.crust=crust;
};
TotalPrice.prototype.finalTotal = function () {
  return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
};
var sizePrices = [1400, 1000, 700]
var priceToppings = [300,350,250,400,250]
var toppingsName= ["Pepperoni" , "mushroom" , "onion" ,"sausage", " bacon"]
var crustNames= ["Thin Crust", "Thick Crust", "Deep Crust", "Cheese","Stuffed Crust"]
var crustPrices = [300,500,600,600,600]
var deliveryPrices = [0, 150];

$(document).ready(function(){
  $('form#makeAnOrder').submit(function (event) {
      event.preventDefault();
  var pizzaFlavour = $('#pizzaflavour').val();

  var pizzaSize = parseInt($('#pizzasize').val());

  var pizzaToppings=parseInt($('#toppings').val());

  var priceCrust =parseInt($('#pizzacrust').val());

  var pizzaTop = $('#toppinds').val();

  var pizzaQty = parseInt($('#quantity').val());

  var pizzaPick = parseInt($('#pickUp').val());

  var price = sizePrices[pizzaSize - 1];
  var DeliveryCost = deliveryPrices[pizzaPick - 1];
  var ToppingsCost = priceToppings[pizzaToppings-1];
  var crustCost = crustPrices[priceCrust-1]
  var topNames = toppingsName[pizzaTop-1]
  var crustName = crustNames[priceCrust-1]

  newOrder = new Results(pizzaFlavour,pizzaSize, crustName,topNames,crustName);
  newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);

  if (pizzaPick===1){
      alert( newOrder.order());
      alert("Your bill is: " + newTotal.finalTotal());
      alert("Thank you for shopping with us! " )
      }else{
          if(pizzaPick===2){
             var location= prompt(" Where would your like your Pizza to be Delivered? ");
             var locations =["nairobi", "Kiambu", "Kajiado", "ngong hills", "westland", "mombassa road"]
             if((location !== locations[0]) && (location !== locations[1]) && (location !== locations[2]) && (location !== locations[3]) && (location !== locations[4]) && (location !== locations[5])){
              alert("Choose a location listed below")
              alert(locations)
          }
          else  {
              prompt("Please enter your phone number to facilitate communication and faster delivery.")
              alert("Your order has been received and it will be delivered to " + location + " an additional 200/= will be charged for delivery.");
              alert(newOrder.order());
              alert("Your bill is: " + newTotal.finalTotal());
              alert("Thank you for shopping with us! Your Order will be arriving soon." )
          }
          }
      }
})
});