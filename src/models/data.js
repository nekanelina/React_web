export let userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@gmail.com",
  image: '',
  googleLogin: false,
  address: {
    street: "Main St",
    number: "2 a15",
    postalCode: "12345",
    city: "Boston",
    state: "MA",
  },
};

export let unauthorizedUser = {
  status: 401,
  message: "Incorrect password",
};

export let products = {
  solarPanels : [
    {
      id: 1,
      name: "Solar Panel 1",
      description: "This is a solar panel",
      cost: 100,
      image: "polycrystalline_solar_panel.png"
    },
    {
      id: 2,
      name: "Solar Panel 2",
      description: "This is a solar panel",
      cost: 200,
      image: "polycrystalline_solar_panel.png",
    },
    {
      id: 3,
      name: "Solar Panel 2",
      description: "This is a solar panel",
      cost: 300,
      image: "polycrystalline_solar_panel.png",
    },
  ],
  eStorageSolutions : [
    {
      id: 1,
      name: "Energy Storage Solution 1",
      description: "This is a Energy Storage Solution",
      cost: 100,
      image: "home_battery_pack.png"
    },
    {
      id: 2,
      name: "Energy Storage Solution 2",
      description: "This is a Energy Storage Solution",
      cost: 200,
      image: "home_battery_pack.png",
    },
    {
      id: 3,
      name: "Energy Storage Solution 3",
      description: "This is a Energy Storage Solution",
      cost: 300,
      image: "home_battery_pack.png",
    },
  ],
  evChargeStations : [
    {
      id: 1,
      name: "EV Charging Station 1",
      description: "This is a EV Charging Station",
      cost: 100,
      image: "home_charging_station.png"
    },
    {
      id: 2,
      name: "EV Charging Station 2",
      description: "This is a EV Charging Station",
      cost: 200,
      image: "home_charging_station.png",
    },
    {
      id: 3,
      name: "EV Charging Station 3",
      description: "This is a EV Charging Station",
      cost: 300,
      image: "home_charging_station.png",
    },    
  ],
  eeApliances : [
    {
      id: 1,
      name: "Energy Efficient Appliance 1",
      description: "This is a Energy Efficient Appliance",
      cost: 100,
      image: "dishwasher.png"
    },
    {
      id: 2,
      name: "Energy Efficient Appliance 2",
      description: "This is a Energy Efficient Appliance",
      cost: 200,
      image: "dishwasher.png",
    },
    {
      id: 3,
      name: "Energy Efficient Appliance 3",
      description: "This is a Energy Efficient Appliance",
      cost: 300,
      image: "dishwasher.png",
    },   
  ],
  windTurbines : [
    {
      id: 1,
      name: "Wind Turbine 1",
      description: "This is a Wind Turbine",
      cost: 100,
      image: "roof_mounted_turbine.png"
    },
    {
      id: 2,
      name: "Wind Turbine 2",
      description: "This is a Wind Turbine",
      cost: 200,
      image: "roof_mounted_turbine.png",
    },
    {
      id: 3,
      name: "Wind Turbine 3",
      description: "This is a Wind Turbine",
      cost: 300,
      image: "roof_mounted_turbine.png",
    },   
  ],
};
