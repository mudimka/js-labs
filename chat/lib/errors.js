export function describeListenError(error, port) {
    switch (error.code) {
        case 'EADDRINUSE':
            return `Port ${port} is already in use. Stop the other process or choose another port.`;
        case 'EACCES':
            return `No permission to listen on port ${port}. Try a port above 1024.`;
        default:
            return `Cannot start server on port ${port}: ${error.message}`;
    }
}