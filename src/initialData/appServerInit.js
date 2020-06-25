require("xmlhttprequest");
const fetch = require("node-fetch");
const path = require("path");

const db = require("../database");
const AppServerInit = require("../models/AppServerInit");
const Artist = require("../models/Artist");
const ArtistPicture = require("../models/ArtistPicture");
const Company = require("../models/Company");
const CompanyType = require("../models/CompanyType");
const Country = require("../models/Country");
const Customer = require("../models/Customer");
const Movie = require("../models/Movie");
const Rental = require("../models/Rental");
const RentalDetail = require("../models/RentalDetail");
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
  let existRow = false;
  let applied = false;

  await AppServerInit.countDocuments({ _id: "sampleData" }, function (
    err,
    count
  ) {
    if (count > 0) {
      existRow = true;
    }
  });

  if (existRow == true) {
    const entity = await AppServerInit.findOne({ _id: "sampleData" });
    if (entity.applied == true) {
      return false;
    } else {
      entity.applied = true;
      await entity.save();
      return true;
    }
  } else {
    const entity = new AppServerInit({
      _id: "sampleData",
      applied: true,
    });
    await entity.save();
    return true;
  }

  return false;
}

async function AppServerInitCreateDocumentIfNotExist(strId) {
  let existDocument = false;

  await AppServerInit.countDocuments({ _id: strId }, function (err, count) {
    if (count > 0) {
      existDocument = true;
    }
  });

  if (existDocument) return false;

  // save even if it fails
  const entity = new AppServerInit({
    _id: strId,
    applied: true,
  });
  await entity.save();

  return true;
}

async function createUserAdminIfNotExist() {
  let existDocument = false;

  await User.countDocuments(
    { name: "admin", email: "admin@admin.com" },
    function (err, count) {
      if (count > 0) {
        existDocument = true;
      }
    }
  );

  if (existDocument) return false;

  const ent = new User({
    _id: getGUID(),
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
    createdBy: "system",
  });
  ent.password = await ent.encryptPassword(ent.password);
  await ent.save();

  return true;
}

async function createArtist() {
  let strId = "sampleDataArtist";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/artist");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Artist(element);
    await ent.save();
  }

  return true;
}

async function createArtistPicture() {
  let strId = "sampleDataArtistPictures";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/artistPicture");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new ArtistPicture(element);
    await ent.save();
  }

  return true;
}

async function createCompany() {
  let strId = "sampleDataCompanies";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

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

  return true;
}

async function createCompanyType() {
  let strId = "sampleDataCompanyTypes";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/companyType");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new CompanyType(element);
    await ent.save();
  }

  return false;
}

async function createCountry() {
  let strId = "sampleDataCountries";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/country");

  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Country(element);
    await ent.save();
  }

  return true;
}

async function createCustomer() {
  let strId = "sampleDataCustomers";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/customer");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Customer(element);
    ent.email = "myemail@gmail.com";
    await ent.save();
  }

  return true;
}

async function createMovie() {
  let strId = "sampleDataMovies";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const data = require("./files/movie");
  var words = JSON.parse(data);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const ent = new Movie(element);
    await ent.save();
  }

  return true;
}

async function createReceipt() {
  let strId = "sampleDataReceips";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

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

  return true;
}

async function createRental() {
  let strId = "sampleDataRentals";

  if ((await AppServerInitCreateDocumentIfNotExist(strId)) == false)
    return false;

  const customers = await Customer.find();
  const movies = await Movie.find();

  for (let cab = 0; cab < 1000; cab++) {
    let sumPaymentCab = 0;

    const rental = new Rental({
      _id: getGUID(),
      date: new Date(2020, 1, 1 + cab, 20, 0),
      payment: 3,
      createdBy: "system",
      customer: customers[getRandomInt(0, 60)],
    });

    const nLins = getRandomInt(1, 3);
    for (let lin = 0; lin < nLins; lin++) {
      const rentalDetail = new RentalDetail({
        _id: getGUID(),
        days: 1,
        returnedOn: rental.date + 1,
        price: 3,
        discount: 0,
        total: 3,
        createdBy: "system",
        rental: rental,
      });

      sumPaymentCab += rentalDetail.total;

      await rentalDetail.save();

      rental.rentalDetails.push(rentalDetail);
    }

    rental.payment = sumPaymentCab;
    await rental.save();
  }

  return true;
}

async function createIntialData() {
  console.log("Check Intial Data sample:");

  if (await createUserAdminIfNotExist())
    console.log("generated data user admin.");
  if (await createCountry()) console.log("generated sample data countries.");
  if (await createCompanyType())
    console.log("generated sample data types companies.");
  if (await createCompany()) console.log("generated sample data companies.");
  if (await createArtistPicture())
    console.log("generated sample data artist pictures.");
  if (await createArtist()) console.log("generated sample data artist.");
  if (await createCustomer()) console.log("generated sample data customers.");
  if (await createMovie()) console.log("generated sample data movies.");
  if (await createReceipt()) console.log("generated sample data receipts.");
  if (await createRental()) console.log("generated sample data rentals.");
}

createIntialData();
