const http = require('http');

const todos = [
  'Learn AWS',
  'Learn Docker',
  'Learn Jenkins'
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const todoList = todos
    .map(todo => `<li>${todo}</li>`)
    .join('');

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Todo App</title>
    </head>
    <body>
      <h1>CI/CD Todo App</h1>
      <h2>Todo List</h2>
      <ul>
        ${todoList}
      </ul>
    </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Todo app running on port ${PORT}`);
});
