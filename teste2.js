var data = require("./fakeData");

// Criar novo usuário com id aleatorio
module.exports = function (req, res) {
  const newUser = {
    id: Math.floor(Math.random() * 100),
    name: req.body.name,
    job: req.body.job,
  };

  data.push(newUser);

  res.send({ message: "Novo usuário inserido com sucesso!", user: newUser });
};
