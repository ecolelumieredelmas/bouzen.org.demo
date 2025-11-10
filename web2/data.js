// data.js - Datos compartidos para todas las páginas
const escortsData = [
    {
        id: 1,
        name: "Amelia",
        nickname: "La Dulce",
        age: 21,
        price: "$100/hora",
        rating: 5,
        image: "img/amelia-27.webp",
        profileImage: "img/amelia-13.webp",
        about: "Soy Amelia, una escort premium que ofrece experiencias únicas e inolvidables. Mi enfoque está en la conexión genuina y la satisfacción mutua. Me especializo en crear momentos especiales para clientes exigentes.",
        liveTime: "5:00 PM",
        location: "Café San Alberto, Bogotá",
        schedule: "10:00 AM - 02:00 AM",
        phone: "1809786115",
        images: [
            "img/amelia-13.webp",
            "img/amelia-27.webp",
            "img/amelia-1.webp",
            "img/amelia-3.webp"
        ],
        prices: {
            "1 hora": "£300 (In) / £450 (Out)",
            "90 minutos": "£600 (In) / £700 (Out)", 
            "2 horas": "£699 (In) / £850 (Out)",
            "Hora extra": "£200 (In) / £250 (Out)",
            "Toda la noche": "£1500 (In) / £1900 (Out)"
        }
    },
    {
        id: 2,
        name: "Natalia", 
        nickname: "La Elegante",
        age: 24,
        price: "$90/hora",
        rating: 4.5,
        image: "img/natalia-1.webp",
        profileImage: "img/natalia-8.webp",
        about: "Natalia ofrece una experiencia íntima y personalizada para clientes exigentes que buscan compañía de alta calidad. Elegante y sofisticada en cada encuentro.",
        liveTime: "6:00 PM",
        location: "Hotel Four Seasons, Bogotá",
        schedule: "11:00 AM - 01:00 AM", 
        phone: "1809786115",
        images: [
            "img/natalia-1.webp",
            "img/natalia-8.webp",
            "img/natalia-2.webp"
        ],
        prices: {
            "1 hora": "£350 (In) / £500 (Out)",
            "2 horas": "£650 (In) / £800 (Out)",
            "Toda la noche": "£1600 (In) / £2000 (Out)"
        }
    },
    {
        id: 3,
        name: "Carla",
        nickname: "La Sofisticada", 
        age: 23,
        price: "$120/hora",
        rating: 5,
        image: "img/carla-20.webp",
        profileImage: "img/carla-18.webp",
        about: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
        liveTime: "7:00 PM",
        location: "Zona G, Bogotá",
        schedule: "12:00 PM - 03:00 AM",
        phone: "1809786115",
        images: [
            "img/carla-20.webp",
            "img/carla-18.webp",
            "img/carla-1.webp"
        ],
        prices: {
            "1 hora": "£400 (In) / £550 (Out)",
            "2 horas": "£800 (In) / £950 (Out)",
            "Toda la noche": "£1800 (In) / £2200 (Out)"
        }
    },
    {
        id: 4,
        name: "Diana",
        nickname: "La Apasionada",
        age: 22,
        price: "$95/hora", 
        rating: 4,
        image: "img/diana-6.webp",
        profileImage: "img/diana-1.webp",
        about: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
        liveTime: "5:30 PM",
        location: "Parque 93, Bogotá",
        schedule: "10:30 AM - 02:30 AM",
        phone: "1809786115",
        images: [
            "img/diana-6.webp",
            "img/diana-1.webp",
            "img/diana-2.webp"
        ],
        prices: {
            "1 hora": "£320 (In) / £470 (Out)",
            "2 horas": "£600 (In) / £750 (Out)", 
            "Toda la noche": "£1400 (In) / £1800 (Out)"
        }
    },
    {
        id: 5,
        name: "Elena",
        nickname: "La Carismática",
        age: 25,
        price: "$110/hora",
        rating: 5,
        image: "img/elena-2.webp", 
        profileImage: "img/elena-6.webp",
        about: "Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.",
        liveTime: "8:00 PM",
        location: "Usaquén, Bogotá",
        schedule: "01:00 PM - 04:00 AM",
        phone: "1809786115",
        images: [
            "img/elena-2.webp",
            "img/elena-6.webp",
            "img/elena-1.webp"
        ],
        prices: {
            "1 hora": "£380 (In) / £530 (Out)",
            "2 horas": "£750 (In) / £900 (Out)",
            "Toda la noche": "£1700 (In) / £2100 (Out)"
        }
    },
    {
        id: 6,
        name: "Fiona",
        nickname: "La Misteriosa",
        age: 20,
        price: "$85/hora",
        rating: 4.5,
        image: "img/fiona-5.webp",
        profileImage: "img/fiona-3.webp",
        about: "Vestibulum sed arcu non odio euismod lacinia. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
        liveTime: "6:30 PM", 
        location: "Chapinero Alto, Bogotá",
        schedule: "11:00 AM - 01:30 AM",
        phone: "1809786115",
        images: [
            "img/fiona-5.webp",
            "img/fiona-3.webp",
            "img/fiona-1.webp"
        ],
        prices: {
            "1 hora": "£300 (In) / £450 (Out)",
            "2 horas": "£550 (In) / £700 (Out)",
            "Toda la noche": "£1300 (In) / £1700 (Out)"
        }
    }
];