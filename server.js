const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT =  3000;


console.log("vemos que nos carga environment")
console.log(process.env)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});