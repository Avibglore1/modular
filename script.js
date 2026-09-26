const user = {
  name: "John",
  address: {
    city: "Jaipur"
  }
};

const copy = { ...user };

copy.name = "Alex";
copy.address.city = "Delhi";

console.log(user.name);           // John
console.log(user.address.city);   // Delhi