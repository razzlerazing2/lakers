import express from 'express';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files if needed (like CSS, JS, images) from the current directory
app.use(express.static(__dirname));

// Default route to serve index.html from the root folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(chalk.green(`✅ Server running at http://localhost:${port}`));
});
