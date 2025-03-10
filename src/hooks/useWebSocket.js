import { useEffect, useState } from "react";

const useWebSocket = (url) => {
    const [cabs, setCabs] = useState([]);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onmessage = (event) => {
            setCabs(JSON.parse(event.data));
        };

        ws.onclose = () => console.log("WebSocket closed");

        return () => ws.close();
    }, [url]);

    return cabs;
};

export default useWebSocket;
