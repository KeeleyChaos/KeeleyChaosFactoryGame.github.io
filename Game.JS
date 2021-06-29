var username = "KeeleyChaos";
var offline = false;
var offlineText = "Sorry, but you're offline, try checking your internet connection";
var level = 49p;
var pointsUntilNextLevel = 176;
var points = 500 - pointsUntilNextLevel;
var pointsLevel = level * 500;
var pointsTotal = pointsLevel + pointsUntilNextLevel;
var storeLevel = 5.8;
var coinMathStore = storeLevel * 5;
var coinMathLevel = level * 5;
var coins = coinMathLevel - coinMathStore;
var coinsTotal = coinMathLevel;

function displayStoreLevel() {
 console.log(
  "Store Level: " + storeLevel
 );
};

function buy() {
 storeLevel + .2
};

function greetUser() {
 if (offline == true) {
  console.log(offlineText);
 };
 if (offline == false) {
  console.log(
   "Welcome Back, " + username
  );
 };

}

function displayLevel() {
 console.log("level: " + level);
 console.log("Points Until Next Level: " +
  pointsUntilNextLevel);
 console.log("points: " + points);
 console.log("Total Points: " +
  pointsTotal);
};

function displayCoins() {
 console.log(
  "coins: " + coins
 );
 console.log(
  "Total Coins: " + coinsTotal
 );
}

function startup() {
 greetUser();
 displayLevel();
 displayCoins();
 displayStoreLevel();
};
startup();
