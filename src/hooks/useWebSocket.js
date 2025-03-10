import { useState, useEffect } from "react";


const useWebSocket = (url) => {
    const [cabs, setCabs] = useState([]);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => console.log("WebSocket connected");
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setCabs(data);
        };
        ws.onclose = () => console.log("WebSocket disconnected");
        ws.onerror = (error) => console.error("WebSocket error:", error);

        return () => ws.close();
    }, [url]);

    return cabs;
};

export default useWebSocket;