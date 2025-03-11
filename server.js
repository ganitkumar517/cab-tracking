const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const generateRandomCoords = (baseLat, baseLng) => ({
    latitude: baseLat + (Math.random() - 0.5) * 0.005, // Small movement
    longitude: baseLng + (Math.random() - 0.5) * 0.005,
});

const cabs = [
    {
        id: 1,
        driver: {
            name: "Rajesh Sharma",
            phoneNumber: "+919876543210",
            picture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        cab: {
            number: "DL 1C 1234",
            model: "Toyota Innova",
        },
        passenger: { name: "Priya Mehta", gender: 'female', phoneNumber: "+919876543211" },
        location: { latitude: 28.67951, longitude: 77.09543 },
        destination: { latitude: 28.63153, longitude: 77.08165 },
        eta: "5 mins",
        amount: 450,
        route: { from: "Connaught Place", to: "India Gate" },
    },
    {
        id: 2,
        driver: {
            name: "Amit Kumar",
            phoneNumber: "+919876543212",
            picture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        cab: {
            number: "DL 2C 5678",
            model: "Maruti Swift",
        },
        passenger: { name: "Rahul Verma", gender: 'male', phoneNumber: "+919876543213" },
        location: { latitude: 28.57837, longitude: 77.12299 },
        destination: { latitude: 28.56249, longitude: 77.12673 },
        eta: "3 mins",
        amount: 300,
        route: { from: "Saket", to: "Qutub Minar" },
    },
    {
        id: 3,
        driver: {
            name: "Sita Devi",
            phoneNumber: "+919876543214",
            picture: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        cab: {
            number: "DL 3C 9012",
            model: "Hyundai Creta",
        },
        passenger: { name: "Anjali Singh", gender: 'female', phoneNumber: "+919876543215" },
        location: { latitude: 28.61146, longitude: 77.22765 },
        destination: { latitude: 28.58244, longitude: 77.26629 },
        eta: "4 mins",
        amount: 500,
        route: { from: "Lajpat Nagar", to: "Lotus Temple" },
    },
    {
        id: 4,
        driver: {
            name: "Vikram Singh",
            phoneNumber: "+919876543216",
            picture: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        cab: {
            number: "DL 4C 3456",
            model: "Honda City",
        },
        passenger: { name: "Neha Gupta", gender: 'female', phoneNumber: "+919876543217" },
        location: { latitude: 28.6762447, longitude: 77.1199612 },
        destination: { latitude: 28.70406, longitude: 77.10249 },
        eta: "6 mins",
        amount: 400,
        route: { from: "Dwarka", to: "IGI Airport" },
    },
    {
        id: 5,
        driver: {
            name: "Ravi Kumar",
            phoneNumber: "+919876543218",
            picture: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        cab: {
            number: "DL 5C 7890",
            model: "Ford EcoSport",
        },
        passenger: { name: "Sunil Sharma", gender: 'male', phoneNumber: "+919876543219" },
        location: { latitude: 28.5355, longitude: 77.3910 },
        destination: { latitude: 28.5355, longitude: 77.3910 },
        eta: "7 mins",
        amount: 350,
        route: { from: "Noida", to: "Sector 18" },
    },
    {
        id: 6,
        driver: {
            name: "Pooja Rani",
            phoneNumber: "+919876543220",
            picture: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        cab: {
            number: "DL 6C 1235",
            model: "Kia Seltos",
        },
        passenger: { name: "Amit Singh", gender: 'male', phoneNumber: "+919876543221" },
        location: { latitude: 28.5502229, longitude: 77.1850953 },
        destination: { latitude: 28.6139, longitude: 77.2090 },
        eta: "2 mins",
        amount: 600,
        route: { from: "Connaught Place", to: "Red Fort" },
    },
    {
        id: 7,
        driver: {
            name: "Sunil Yadav",
            phoneNumber: "+919876543222",
            picture: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        cab: {
            number: "DL 7C 4567",
            model: "Tata Nexon",
        },
        passenger: { name: "Rita Verma", gender: 'female', phoneNumber: "+919876543223" },
        location: { latitude: 28.5434750, longitude: 77.2841624 },
        destination: { latitude: 28.7041, longitude: 77.1025 },
        eta: "8 mins",
        amount: 500,
        route: { from: "Gurgaon", to: "Cyber Hub" },
    },
    {
        id: 8,
        driver: {
            name: "Karan Mehta",
            phoneNumber: "+919876543224",
            picture: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        cab: {
            number: "DL 8C 6789",
            model: "Mahindra XUV500",
        },
        passenger: { name: "Sakshi Jain", gender: 'female', phoneNumber: "+919876543225" },
        location: { latitude: 28.6139, longitude: 77.2090 },
        destination: { latitude: 28.6139, longitude: 77.2090 },
        eta: "10 mins",
        amount: 700,
        route: { from: "Faridabad", to: "Surajkund" },
    },
    {
        id: 9,
        driver: {
            name: "Deepak Singh",
            phoneNumber: "+919876543226",
            picture: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        cab: {
            number: "DL 9C 2345",
            model: "Renault Duster",
        },
        passenger: { name: "Rohit Sharma", gender: 'male', phoneNumber: "+919876543227" },
        location: { latitude: 28.6113932, longitude: 77.1159480 },
        destination: { latitude: 28.7041, longitude: 77.1025 },
        eta: "9 mins",
        amount: 550,
        route: { from: "Delhi", to: "Chandni Chowk" },
    },
    {
        id: 10,
        driver: {
            name: "Anil Kumar",
            phoneNumber: "+919876543228",
            picture: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        cab: {
            number: "DL 10C 3456",
            model: "Skoda Kushaq",
        },
        passenger: { name: "Meera Singh", gender: 'female', phoneNumber: "+919876543229" },
        location: { latitude: 28.7041, longitude: 77.1025 },
        destination: { latitude: 28.7041, longitude: 77.1025 },
        eta: "12 mins",
        amount: 800,
        route: { from: "Delhi", to: "Jama Masjid" },
    },
];

wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.send(JSON.stringify(cabs));

    ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket Server running on ws://localhost:8080");