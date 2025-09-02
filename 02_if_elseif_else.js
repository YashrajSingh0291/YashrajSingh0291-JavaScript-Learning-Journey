let user = {
    name: "Yashraj",
    age: 20,
    isMember: true,
    purchaseAmount: 1200
};

if (user.age < 18) {
    console.log("❌ Sorry " + user.name + ", you must be 18+ to shop here.");
} else if (user.isMember && user.purchaseAmount > 1000) {
    console.log("🎉 Congratulations " + user.name + "! You get 20% OFF as a premium member.");
} else if (user.purchaseAmount > 500) {
    console.log("👏 Great choice " + user.name + "! You get 10% OFF on your purchase.");
} else {
    console.log("Thank you " + user.name + " for shopping with us. 🛒");
}