import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity, // fix typo
        timeout: 10000,
        transports: ['websocket'],
    };
    // Use your backend's WebSocket URL here
    return io('http://localhost:5000', options);
};