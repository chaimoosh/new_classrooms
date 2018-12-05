let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'https://census‐toy.nceng.net/prod/toy‐census';
let should = chai.should();

let  users = [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "ray",
        "last": "simmons"
      },
      "location": {
        "street": "1138 green lane",
        "city": "worcester",
        "state": "northamptonshire",
        "postcode": "ME0V 8LP",
        "coordinates": {
          "latitude": "12.9890",
          "longitude": "-22.7612"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "ray.simmons@example.com",
      "login": {
        "uuid": "cd713fae-af40-4914-affe-ef3ec3dfb617",
        "username": "yellowtiger910",
        "password": "whitesox",
        "salt": "N0qbJgsz",
        "md5": "7bbe59ed5634c999085bf266bde038cf",
        "sha1": "ac161b184d94b2bdd462a43927d981bae1511e16",
        "sha256": "5baa0d92b890432ecbd1734585602c3291c7f1e600f8f2020fac403066c1fbb0"
      },
      "dob": {
        "date": "1994-08-10T01:35:47Z",
        "age": 24
      },
      "registered": {
        "date": "2005-11-23T16:44:54Z",
        "age": 13
      },
      "phone": "013873 08407",
      "cell": "0761-119-653",
      "id": {
        "name": "NINO",
        "value": "KN 44 08 74 V"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "محمدامين",
        "last": "حسینی"
      },
      "location": {
        "street": "1919 میدان شمشیری",
        "city": "کاشان",
        "state": "اصفهان",
        "postcode": 58992,
        "coordinates": {
          "latitude": "-49.8020",
          "longitude": "-114.2237"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "محمدامين.حسینی@example.com",
      "login": {
        "uuid": "c004511c-6595-4612-b94c-55168c30c60b",
        "username": "goldenfrog506",
        "password": "boxcar",
        "salt": "GlhXVvuA",
        "md5": "39fe9bbcd30c1113b6a09f3ea619f53e",
        "sha1": "8334403d77ddd8840b1fe0f02c32d850e8264b3f",
        "sha256": "08d7480fb041d341714f489e01d91d00a1e4b4b2e7214d85d9847788c8b5f98c"
      },
      "dob": {
        "date": "1976-09-09T15:49:41Z",
        "age": 42
      },
      "registered": {
        "date": "2016-02-01T00:31:32Z",
        "age": 2
      },
      "phone": "057-18845479",
      "cell": "0954-418-9045",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "maëlys",
        "last": "schmitt"
      },
      "location": {
        "street": "2925 place de l'abbé-basset",
        "city": "montreuil",
        "state": "meurthe-et-moselle",
        "postcode": 13275,
        "coordinates": {
          "latitude": "-73.2930",
          "longitude": "50.6243"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "maëlys.schmitt@example.com",
      "login": {
        "uuid": "16ec65a9-6e7e-4f06-85eb-e30727195434",
        "username": "happydog945",
        "password": "doggie",
        "salt": "1S9XxukF",
        "md5": "c26470fea50cdc319c9799b820ae6bdd",
        "sha1": "3d3b8bda2a4d371fcad296b864e3ceee2a13b89f",
        "sha256": "9f31ddda537d8553dec9e0184f080a189ba04e7c4f3bbc749da3ff2c6aab181a"
      },
      "dob": {
        "date": "1965-05-20T05:26:01Z",
        "age": 53
      },
      "registered": {
        "date": "2003-09-15T14:26:31Z",
        "age": 15
      },
      "phone": "04-63-39-52-30",
      "cell": "06-34-01-40-59",
      "id": {
        "name": "INSEE",
        "value": "2NNaN39417075 60"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "wytse",
        "last": "lunenburg"
      },
      "location": {
        "street": "6041 baden-powellweg",
        "city": "zwolle",
        "state": "overijssel",
        "postcode": 20176,
        "coordinates": {
          "latitude": "-50.4476",
          "longitude": "-178.4026"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "wytse.lunenburg@example.com",
      "login": {
        "uuid": "c7081c75-cd5b-4b3d-91c2-5134f6b49fa6",
        "username": "heavycat857",
        "password": "336699",
        "salt": "mMd2HiKa",
        "md5": "eaf10bb62fa71e772332ac4036adc551",
        "sha1": "e0d89bf14ba72676f2e8916ff140cbdd06bd8e00",
        "sha256": "d7e3b774f68c1a92ed6c80b6fb0233d8d3453292c62bfa6daf30e2a54159fecc"
      },
      "dob": {
        "date": "1980-12-22T12:17:02Z",
        "age": 37
      },
      "registered": {
        "date": "2010-07-02T13:46:49Z",
        "age": 8
      },
      "phone": "(622)-122-8556",
      "cell": "(480)-543-5897",
      "id": {
        "name": "BSN",
        "value": "85010433"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "vincent",
        "last": "walker"
      },
      "location": {
        "street": "643 moorhouse avenue",
        "city": "napier",
        "state": "manawatu-wanganui",
        "postcode": 94534,
        "coordinates": {
          "latitude": "-69.3152",
          "longitude": "167.4662"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "vincent.walker@example.com",
      "login": {
        "uuid": "4a222ea9-5ac9-4c8c-a7cf-a1ea37036e4c",
        "username": "silvergorilla944",
        "password": "clemson",
        "salt": "gQWQAq8T",
        "md5": "d10045709e5eb565a73a509f3d2768f3",
        "sha1": "377f47cdfb1821c2216784783b6a4241a76dcccd",
        "sha256": "afb9659a6d4e320dc89b84c3e2812e0a4909743a7cf942977d21cbc0b547d233"
      },
      "dob": {
        "date": "1987-01-10T06:11:29Z",
        "age": 31
      },
      "registered": {
        "date": "2006-05-29T09:23:16Z",
        "age": 12
      },
      "phone": "(038)-910-5519",
      "cell": "(387)-862-5432",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      },
      "nat": "NZ"
    }
  ]

//this is to test if you put in valid data that it comes back ok
describe('/POST', () => {
    it('it should not throw errors when making a proper request'), (done) => {
        let request = {
            "actionType":"CountByCountry",
            users
        }
        chai.request(server)
            .post('/request')
            .send(request)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            })
    }
})

// this is to test if you try to make a POST request with just a user and no action type
describe('/POST ', () => {
    it('it should not POST a request without an action type', (done) => {
        let request = {
           users
        }
      chai.request(server)
          .post('/request')
          .send(request)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
})

// this is to test if you just put in an action type but no user data
describe('/POST', () => {
  it('it should not POST a request withou user data', (done)=> {
      let request = {
        "actionType":"CountByCountry"
      }
      chai.request(server)
          .post('/request')
          .send(request)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
  })
})
})
