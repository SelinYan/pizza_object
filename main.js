// Write code which models a pizza as a class.
// Pizza has at least following properties:
// name, toppings, base price for a small pizza.
// Pizza has also a function, which calculates
// it’s price.
numbersOfFreeToppings = 4;
extraToppingEachPrice = 1;
class Pizza {
  name = "";
  toppings = [];
  baseprice = 5;
  size = "";
  constructor(name, toppings, baseprice, size) {
    this.name = name;
    this.toppings = toppings;
    this.baseprice = baseprice;
    this.size = size;
    this.priceCalculation = function () {
      const extraToppings = this.toppings.length - numbersOfFreeToppings;
      if (extraToppings <= 0) {
        return (this.priceCalculation = this.baseprice);
      } else {
        return (this.priceCalculation =
          this.baseprice + extraToppings * extraToppingEachPrice);
      }
    };
  }
}

// Write code which models an order to a pizza place as a class.
// The order has a customer name, delivery type,
// and there can be several pizzas in one order.
// Order can be updated by adding pizzas to it with a method of the order class.

class PizzaOrder {
  customerName = "";
  deliveryType = "";
  pizzaCustomerOrder = [];

  constructor(customerName, deliveryType, pizzaCustomerOrder) {
    this.customerName = customerName;
    this.deliveryType = deliveryType;
    this.pizzaCustomerOrder = pizzaCustomerOrder;
  }

  addPizzaOrder(pizza) {
    this.pizzaCustomerOrder.push(pizza);
  }

  sumUpPrice() {
    const totalPrice = 0;
    return totalPrice;
  }
}
