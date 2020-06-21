const db = require("../connection");
const AppServerInit = require("../models/appServerInit");
const Artist = require("../models/Artist");
const ArtistPicture = require("../models/ArtistPicture");
const Company = require("../models/Company");
const CompanyType = require("../models/CompanyType");
const Country = require("../models/Country");
const Customer = require("../models/Customer");
const Movie = require("../models/Movie");
const Rent = require("../models/Rent");
const RentDetail = require("../models/RentDetail");
const User = require("../models/User");
const Receipt = require("../models/Receipt");

function getGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function createAppServerInitIfNotExist() {
  let existData = false;
  let loadedDataTest = false;
  let loadData = false;

  await AppServerInit.countDocuments({ _id: "0" }, function (err, count) {
    if (count > 0) {
      existData = true;
    }
  });

  if (existData == true) {
    const entity = await AppServerInit.findOne({ _id: "0" });
    loadedDataTest = entity.loadedDataTest;
    if (loadedDataTest == true) {
      loadData = false;
    }
  } else {
    const ent = new AppServerInit({
      _id: "0",
      loadedDataTest: true,
    });
    ent.save();
    loadData = true;
  }

  return loadData;
}

async function createUser() {
  const ent = new User({
    _id: getGUID(),
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
    createdBy: "system",
  });
  ent.password = await ent.encryptPassword(ent.password);
  await ent.save();
}

async function createArtist() {
  const data = require("./files/artist");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Artist(element);
    await ent.save();
  }
}

async function createArtistPicture() {
  const data = require("./files/artistPicture");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new ArtistPicture(element);
    await ent.save();
  }
}

async function createCompany() {
  const data = require("./files/company");
  var words = JSON.parse(data);

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Company(element);
    // relations
    const companyType = await CompanyType.findOne({
      _id: element.type,
    });
    const country = await Country.findOne({
      _id: element.country,
    });

    if (companyType != null) {
      ent.type = companyType;
    }
    if (country != null) {
      ent.country = country;
    }

    ent.movies = [];

    await ent.save();
  }
}

async function createCompanyType() {
  const data = require("./files/companyType");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new CompanyType(element);
    await ent.save();
  }
}

async function createCountry() {
  const data = require("./files/country");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Country(element);
    await ent.save();
  }
}

async function createCustomer() {
  const data = require("./files/customer");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Customer(element);
    ent.email = "myemail@gmail.com";
    await ent.save();
  }
}

async function createMovie() {
  const data = require("./files/movie");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Movie(element);
    await ent.save();
  }
}

async function createReceipt() {
  const data = require("./files/receipt");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Receipt(element);

    const customer = await Customer.findOne({
      _id: element.customer,
    });

    if (customer != null) {
      ent.customer = customer;
    } else {
      ent.customer = null;
    }
    await ent.save();
  }
}

async function createRent() {
  const customers = await Customer.find();
  const movies = await Movie.find();

  for (let cab = 0; cab < 1000; cab++) {
    let sumPaymentCab = 0;

    const rent = new Rent({
      _id: getGUID(),
      date: new Date(2020, 1, 1 + cab, 20, 0),
      payment: 3,
      createdBy: "system",
      customer: customers[getRandomInt(0, 60)],
    });

    const nLins = getRandomInt(1, 3);
    for (let lin = 0; lin < nLins; lin++) {
      const detail = new RentDetail({
        _id: getGUID(),
        days: 1,
        returnedOn: rent.date + 1,
        price: 3,
        discount: 0,
        total: 3,
        createdBy: "system",
        rent: rent,
      });

      sumPaymentCab += detail.total;

      await detail.save();

      rent.details.push(detail);
    }

    rent.payment = sumPaymentCab;
    await rent.save();
  }
}

async function createRentDetail() {
  const data = require("./files/rentDetail");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new RentDetail(element);

    const movie = await Movie.findOne({
      _id: element.movie,
    });

    if (movie != null) {
      ent.customer = movie;
    } else {
      ent.customer = null;
    }
    // await ent.save();
  }
}

async function createIntialData() {
  const loadData = await createAppServerInitIfNotExist();

  if (loadData == false) return;

  await createUser();
  console.log("generated users.");
  await createCountry();
  console.log("generated countries.");
  await createCompanyType();
  console.log("generated types companies.");
  await createCompany();
  console.log("generated companies.");
  await createArtistPicture();
  console.log("generated artist pictures.");
  await createArtist();
  console.log("generated artist.");
  await createCustomer();
  console.log("generated customers.");
  await createMovie();
  console.log("generated movies.");
  await createReceipt();
  console.log("generated receipts.");
  await createRent();
  console.log("generated rents.");
}

createIntialData();
