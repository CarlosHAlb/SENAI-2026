require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* Importar e Implementar Rotas */
const carrosRoutes = require("./src/routes/carros.routes");
app.use("/carros", carrosRoutes);

const clientesRoute = require("./src/routes/clientes.routes");
app.use("/clientes", clientesRoute);
/* Fim */

const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Online na porta ${porta}`);
});