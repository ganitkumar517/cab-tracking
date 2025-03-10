const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const generateRandomCoords = () => ({
    latitude: 28.60 + Math.random() * 0.1, // Around Delhi
    longitude: 77.20 + Math.random() * 0.1,
});

const cabs = Array.from({ length: 10 }, (_, i) => ({
    id: `cab-${i + 1}`,
    driver: `Driver ${i + 1}`,
    passenger: {
        name: `Passenger ${i + 1}`,
        isWoman: Math.random() > 0.5, // Randomly assign women passengers
    },
    location: generateRandomCoords(),
    eta: `${Math.floor(Math.random() * 10) + 5} min`,
}));

setInterval(() => {
    cabs.forEach((cab) => {
        cab.location = generateRandomCoords();
    });

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
