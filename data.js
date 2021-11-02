var uniqueUserId = (function () {
    var i = 1;

    return function () {
        return i++;
    }
})()
var uniqueCompanyId = (function () {
    var i = 1;

    return function () {
        return i++;
    }
})()
class User{
    constructor(firstName, lastName, phonNumber, email, password){
        this._id = uniqueUserId()
        this.firstName = firstName
        this.lastName = lastName
        this.phonNumber = phonNumber
        this.email = email
        this.password = password
    }
}
// let user1 = new User("jase", "kraft", "605", "email", "password")
// let user2 = new User("jase", "kraft", "605", "email", "password")
// console.log(user1)
// console.log(user2)

class Company{
    constructor(name, street, city, state, zipCode, country){
        this._id = uniqueCompanyId()
        this.name = name
        this.address = {
            street : street,
            city : city,
            state : state,
            zipCode : zipCode,
            country : country,
        }
    }
}

// let company = new Company("company", "1015 N 8th St", "Moorhead", "Minnesota", "57110", "US")
// let company3 = new Company("company", "1015 N 8th St", "Moorhead", "Minnesota", "57110", "US")
// let company1 = new Company("company", "1015 N 8th St", "Moorhead", "Minnesota", "57110", "US")
// let company2 = new Company("company2", "1015 N 8th St", "Moorhead", "Minnesota", "57110", "US")
// console.log(company1)
// console.log(company2)

module.exports = {Company, User}
