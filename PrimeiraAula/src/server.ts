import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

let usuarios: Object[] =[{
    "nome":"marcelo de carli"
}]

// 🔹 Rota GET (Buscar dados)
app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json({ usuarios : usuarios });
});

// 🔹 Rota POST (Criar novo usuário)
app.post('/usuarios', (req: Request, res: Response): any => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  }
  usuarios.push(nome)
  res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));