var tender = 0;

var change = 0;

var bag = [];

var vend = {
  snacks: {
    snickers: 1,
    gushers: 0.5,
    gum: 0.25,
    potatoChips: 1.5,
    soda: 2,
    water: 1
  },
  screen: function () {
    console.log(this.snacks);
  },

  submittedMoney: function (money) {
    if (Number.isInteger(money * 100)) {
      tender = money;
    } else {
      console.log("Incorrect amount has been entered");
    }
    return tender;
  },

  selection: function (item) {
    if (this.snacks.hasOwnProperty(item) === true) {
      if (this.snacks[item] <= tender) {
        result = bag.push(item);
        tender = Math.round((tender - this.snacks[item]) * 100) / 100;
      } else if (this.snacks[item] > tender) {
        console.log("insufficient funds");
      }
    } else {
      console.log("Invalid input");
    }
  },

  returnChange: function () {
    var change = 0;
    if (tender > 0){
      change = tender;
      return change;
    } else {
      console.log("No money has been submitted")
    }
  }
};

vend.screen();

console.log(vend.submittedMoney(5.3));

vend.selection("gum");
console.log(bag);
console.log(vend.returnChange());

vend.selection("soda");
console.log(bag);
console.log(vend.returnChange());

vend.selection("water");
console.log(bag);
console.log(vend.returnChange());

//done!
