var data = require("./fakeData");

const getUser = (req, res, next) => {
  // utilizando busca usuários por ID
  const userId = req.params.id;

  // buscar no banco por apenas um unico usuário
  const user = data.find((searchUser) => {
    return searchUser.id == userId;
  });

  // retornando a resposta ou erro para o usuário do sistema
  user
    ? res.send(user)
    : res.status(404).json({ message: "Nenhum usuário encontado" });
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
