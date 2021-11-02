const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 8000
const {Company, User} = require("./data")
const faker = require('faker')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send({value: "Our express api server is now sending this over to the browser",
            status: "200"
});
});

app.get("/api/users/new", (req, res) => {
    let user = new User(faker.name.firstName(), faker.name.lastName(), faker.phone.phoneNumber(), faker.internet.email(), faker.internet.password())
    res.send({data: user})
})

app.get("/api/companies/new", (req, res) => {
    let company = new Company(faker.company.companyName(), faker.address.streetAddress(), faker.address.cityName(), faker.address.state(), faker.address.zipCode(), faker.address.countryCode())
    res.send({data: company})
})

app.get("/api/user/company", (req, res) => {
    let company = new Company(faker.company.companyName(), faker.address.streetAddress(), faker.address.cityName(), faker.address.state(), faker.address.zipCode(), faker.address.countryCode())
    let user = new User(faker.name.firstName(), faker.name.lastName(), faker.phone.phoneNumber(), faker.internet.email(), faker.internet.password())

    res.send({data: {
        company: company,
        user: user
        }
    })
})

const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);