import img from "../images/products/Charger.jpeg";

export const testUser = {
  email: "test.user@hotmail.com",
  firstName: "Test",
  lastName: "User",
  phoneNumber: "+1234567",
  address: {
    street: "Test Street",
    number: "123",
    postalCode: "13245",
    city: "Test City",
    country: "Country",
  },
  role: "user",
  shoppingCart: [],
  favorites: [
    {
      id: 1,
      productName: "Charger 1",
      manufacturer: "Tesla",
      country: "China",
      price: 200,
      description:
        "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
      img: img,
      discount: 0.5,
    },
    {
      id: 2,
      productName: "Charger 2",
      manufacturer: "Ching Chong",
      country: "China",
      price: 200,
      description:
        "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
      img: img,
      discount: 0.3,
    },
    {
      id: 3,
      productName: "Charger 3",
      manufacturer: "Ching Chong",
      country: "China",
      price: 300,
      description:
        "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
      img: img,
      discount: 0.4,
    },
  ],
  orders: [],
};
