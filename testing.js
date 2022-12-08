class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  // Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
  class Chef {
    createNewDinner(arg1, arg2, arg3) {
      return new Dinner(arg1, arg2, arg3);
    }
  }
  
  // Have the Chef create 3 dinners
  let fastFood = new Chef().createNewDinner(
    "french fries",
    "big mac",
    "chocolate milkshake"
  );
  
  let doorDash = new Chef().createNewDinner(
    "onion rings",
    "chicken caesar wrap",
    "lava cake"
  );
  
  let fancyDinner = new Chef().createNewDinner(
    "crab cakes",
    "wagyu steak",
    "courvoisier"
  );
  // Log the dinners
  console.log(fastFood);
  console.log(doorDash);
  console.log(fancyDinner);



  class Dinner {
    constructor(appetizer, entree, dessert) {
            this.appetizer = appetizer;
            this.entree = entree;
            this.dessert = dessert;
    }
}

class Chef extends Dinner {
    constructor(appetizer, entree, dessert, drink,) {
            super(appetizer, entree, dessert);
            this.drink = drink;
    }
    getAppetizer () {
            console.log(`Lets start the night off with a light ${this.appetizer} dish.`);
   }
   getEntree () {
           console.log(`Lets follow up with ${this.entree} from the main course menu.`);
   }
   getDessert () {
           console.log(`Lets end the night with our signature ${this.dessert} bowl.`);
   }

   getDrink() {
            console.log(`Enjoy you meal! Would you like a ${this.drink} with that?`)
   }
}      

const italian = new Chef ('Calamari', 'Spaghetti with meatballs', 'Rasberry gelato', 'water');
const american = new Chef ('Garden salad', 'Burger', 'Fudge brownie', "Pepsi");
const westAfrican = new Chef ('Fufu', 'Okra soup', 'Bofrot', 'Malta');

italian.getAppetizer()
italian.getEntree()
italian.getDessert()
italian.getDrink()