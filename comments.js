// Create web server and use skills.js
import { createServer } from 'http';
import skills from './skills';
const server = createServer(skills);
server.listen(8080); // Port 8080
console.log('Server running at http://
