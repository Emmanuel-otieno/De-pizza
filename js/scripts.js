$(document).ready(function(){
    $("#chez").hide();

    $("#des").click(function(){
      $("#chez").toggle();
    });

});

$(document).ready(function () {
  $("#makeAnOrder").submit(function (event) {
    function UserOrder(size, crust, toppings, quantity, flavour) {
      this.flavour = flavour;
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.quantity = quantity;
    }


    var pizzaFlavourPrice = function () {
      var pizzaFlavour = $("#pizzaflavour").val();
      return parseInt(pizzaFlavour);
    };

    var pizzaSizePrice = function () {
      var pizzaSize = $("#pizzasize").val();
      return parseInt(pizzaSize);
    };

    var pizzaToppingsPrice = function () {
      var pizzaToppings = $("#toppings").val();
      return parseInt(pizzaToppings);
    };

    var pizzaCrustPrice = function () {
      var pizzaCrust = $("#crust").val();
      return parseInt(pizzaCrust);
    };

    var pizzaQuantityPrice = function () {
      var pizzaQuantity = $("#quantity").val();
      return parseInt(pizzaQuantity);
    };


    var inputForUserOrder = new UserOrder(
      pizzaFlavourPrice(),
      pizzaSizePrice(),
      pizzaToppingsPrice(),
      pizzaCrustPrice(),
      pizzaQuantityPrice()
    );


});