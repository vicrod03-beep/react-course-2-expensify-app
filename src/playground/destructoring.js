/* /* const person = {
    name: 'Johhna',
    age: 26, 
    location: {
        city: 'Caracas',
        temp: 92
    }
}

const { name = 'Anonymous', age } = person
const { city, temp: temperature } = person.location

console.log(`${name} is ${age}`)

if (city && temperature) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
}


 */

 /*

 const book = {
     title: 'Ego is the Enemy',
     author: 'Ryan Holiday',
     publisher: {
         name: 'Penguin'
     }
 }

 const { name: publisherName = 'Self-published' } = book.publisher

 console.log(publisherName)  // Penguin, default Self-published */

 const address = ['1299 Juniper Street', 'Philly', 'Pennsylvania', '19477']

 const [street, city, state] = address

 console.log(`You are in ${city} ${state}`)

 const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

 const [drink,,medium] = item 

 console.log(`You asked for a ${drink}. It's price is ${medium}`)

