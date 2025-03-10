const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const generateRandomCoords = () => ({
    latitude: 28.60 + Math.random() * 0.1, // Around Delhi
    longitude: 77.20 + Math.random() * 0.1,
});

const cabs = [
    {
        id: 1,
        driver: "Rajesh Sharma",
        passenger: { name: "Priya Mehta", isWoman: true },
        location: {
            latitude: 28.6139 + Math.random() * 0.01,
            longitude: 77.209 + Math.random() * 0.01
        },
        eta: "5 mins"
    },
    {
        id: 2,
        driver: "Amit Kumar",
        passenger: { name: "Rahul Verma", isWoman: false },
        location: {
            latitude: 28.6145 + Math.random() * 0.01,
            longitude: 77.210 + Math.random() * 0.01
        },
        eta: "3 mins"
    },
    {
        id: 3,
        driver: "Sita Devi",
        passenger: { name: "Anjali Singh", isWoman: true },
        location: {
            latitude: 28.6150 + Math.random() * 0.01,
            longitude: 77.211 + Math.random() * 0.01
        },
        eta: "4 mins"
    },
    {
        id: 4,
        driver: "Vikram Singh",
        passenger: { name: "Ravi Kumar", isWoman: false },
        location: {
            latitude: 28.6160 + Math.random() * 0.01,
            longitude: 77.212 + Math.random() * 0.01
        },
        eta: "6 mins"
    },
    {
        id: 5,
        driver: "Neha Gupta",
        passenger: { name: "Sonia Sharma", isWoman: true },
        location: {
            latitude: 28.6170 + Math.random() * 0.01,
            longitude: 77.213 + Math.random() * 0.01
        },
        eta: "2 mins"
    },
    {
        id: 6,
        driver: "Raj Malhotra",
        passenger: { name: "Karan Mehta", isWoman: false },
        location: {
            latitude: 28.6180 + Math.random() * 0.01,
            longitude: 77.214 + Math.random() * 0.01
        },
        eta: "7 mins"
    },
    {
        id: 7,
        driver: "Pooja Rani",
        passenger: { name: "Deepak Sharma", isWoman: false },
        location: {
            latitude: 28.6190 + Math.random() * 0.01,
            longitude: 77.215 + Math.random() * 0.01
        },
        eta: "8 mins"
    },
    {
        id: 8,
        driver: "Sunil Yadav",
        passenger: { name: "Nisha Verma", isWoman: true },
        location: {
            latitude: 28.6200 + Math.random() * 0.01,
            longitude: 77.216 + Math.random() * 0.01
        },
        eta: "1 min"
    },
    {
        id: 9,
        driver: "Anil Joshi",
        passenger: { name: "Ritika Singh", isWoman: true },
        location: {
            latitude: 28.6210 + Math.random() * 0.01,
            longitude: 77.217 + Math.random() * 0.01
        },
        eta: "9 mins"
    },
    {
        id: 10,
        driver: "Kiran Bhatia",
        passenger: { name: "Mohit Sharma", isWoman: false },
        location: {
            latitude: 28.6220 + Math.random() * 0.01,
            longitude: 77.218 + Math.random() * 0.01
        },
        eta: "10 mins"
    },
];

setInterval(() => {
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(cabs));
        }
    });
}, 2000);

wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.send(JSON.stringify(cabs));

    ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket Server running on ws://localhost:8080");
