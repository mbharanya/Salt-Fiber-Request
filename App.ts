import * as request from 'request'

const url = "https://fixnet-api.salt.ch/api/AddressScoring"

const input = process.argv[2]
const parts: string[] = input.replace(",", "").replace(/\s\s+/g, ' ').replace("\n", " ").split(" ")

const rq = {
    street: parts[0],
    house: parts[1],
    zip: parts[2],
    city: parts[3]
}

request.post({ url: url, form: rq }, function (err, httpResponse, body) {
    console.log(JSON.parse(body))
})