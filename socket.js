import { io } from "socket.io-client";

const socket = io('https://venturebridge-backend-production.up.railway.app');

export default socket