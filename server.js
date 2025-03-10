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
    // Add more cabs as needed (up to 10 from your original list)
];

wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.send(JSON.stringify(cabs));

    ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket Server running on ws://localhost:8080");