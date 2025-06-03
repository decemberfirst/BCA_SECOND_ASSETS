
// Task:
// 1. Extract `title` as `movieTitle`
// 2. Extract director's full name as `directorFullName` (combine first and last)
// 3. Extract lead actor name as `leadActor`
// 4. Extract supporting role name as `supportRole`

// let movieDeatils = {
//     title: 'Interstellar',
//     director: {
//         firstName: ' Christopher',
//         lastName: 'Nolan',
//     },
//     cast: {
//         lead: {
//             actor: 'Matthew McConaughey',
//             role: 'Cooper',
//         },
//         support: {
//             actor: 'Jessica Chastain',
//             role: 'Murphy',
//         },
//     },
// };

// let{
//     title:movieTitle,
//     director: {firstName, lastName},
//     cast: {
//         lead: {actor:leadActor},
//         support: {role:supportRole},
//     }
// } = {
//     title: 'Interstellar',
//     director: {
//         firstName: ' Christopher',
//         lastName: 'Nolan',
//     },
//     cast: {
//         lead: {
//             actor: 'Matthew McConaughey',
//             role: 'Cooper',
//         },
//         support: {
//             actor: 'Jessica Chastain',
//             role: 'Murphy',
//         },
//     },
// }
// let directorFullName = `${firstName} ${lastName}`;
// console.log('Movie Title: ',movieTitle);
// console.log('Director: ', directorFullName);
// console.log('Lead Actor: ',leadActor);
// console.log('Support Role: ',supportRole);


// Task:
// 1. Extract `name`
// 2. Extract `grades.english` as `englishGrade`
// 3. Extract `contact.email` as `emailAddress`
// 4. Extract `contact.phone` as `phoneNumber`

// let studentDetails = {
//     name: 'Ram Thapa',
//     grades: {
//         english: 90,
//         math: 85,
//         science: 80,
//     },
//     contacts: {
//         email: 'ram123@gmail.com',
//         phone: '988748745145',
//     }
// };

// let {
//     name, 
//     grades:{english:englishGrade},
//     contacts:{email:emailAddress, phone: phoneNumber}
// } = {
//     name: 'Ram Thapa',
//     grades: {
//         english: 90,
//         math: 85,
//         science: 80,
//     },
//     contacts: {
//         email: 'ram123@gmail.com',
//         phone: '988748745145',
//     }
// };
// console.log('Student Name: ', name);
// console.log('English Garde:', englishGrade);
// console.log('Email Address: ', emailAddress);
// console.log('Phone Number: ', phoneNumber);


// Task:
// 1. Extract `name` as `productName`
// 2. Extract `details.manufacturer` as `brand`
// 3. Extract `specs.cpu`, `specs.ram` as `processor` and `memory`
// 4. Extract `price`

// let productDetails = {
//     name: 'Laptop',
//     details: {
//         manufacturer: 'Acer',
//         specs: {
//             cpu: 'i7',
//             gpu: 'Nvidia RTX 4060',
//             ram: '16 GB',
//             storage: '1 TB SSD',
//         },
//     },
//     price: '$1400',
// };

// let {
//     name:productName,
//     details:{manufacturer:brand,
//         specs: {cpu:processor, ram:memory},
//     },
//     price
// }={
//         name: 'Macbook Air m3',
//     details: {
//         manufacturer: 'Apple',
//         specs: {
//             cpu: 'M3 10core',
//             gpu: 'integreated gpu',
//             ram: '8 GB',
//             storage: '256 GB SSD',
//         },
//     },
//     price: '$1000',
// };

// console.log('Product: ', productName);
// console.log('Brand: ', brand);
// console.log('Processor: ', processor);
// console.log('Ram: ', memory);
// console.log('Product Price: ', price);



//Task:
// 1. Extract `city`
// 2. Extract `temperature.feelsLike` as `feels`
// 3. Extract `conditions.description` as `weatherType`
// 4. Extract `humidity`

let weatherReport = {
    location: {
        city: 'Kathmandu',
        country: 'Nepal'
    },
    temperature: {
        current: 36,
        feelsLike: 40,
    },
    conditions: {
        description: 'Sunny',
        humidity: '67%'
    },
};

let{
    location: {city},
    temperature: {feelsLike:feels},
    conditions:{description:weatherType},
    conditions:{humidity},
} = {
    location: {
        city: 'Butwal',
        country: 'Nepal'
    },
    temperature: {
        current: 35,
        feelsLike: 39,
    },
    conditions: {
        description: 'Sunny',
        humidity: '60%'
    },
};

console.log('City: ', city);
console.log('Temperature: ', feels);
console.log('Weather: ', weatherType);
console.log('Humidity: ', humidity);