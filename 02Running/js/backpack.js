const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Thule Backpack",
  volume: 25,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

export default backpack;
console.log(backpack.pocketNum);
console.log(backpack["volume"]);

const suzuki = {
  brand: "suzuki",
  model: "ignis",
  colour: "red",
  seats: 5,
  doors: 4,
  swopModel: function(newModel) {
    this.model = newModel;
    console.log('new suzuki', suzuki);
  }
};
console.log(suzuki);
