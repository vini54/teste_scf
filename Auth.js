// lista de usuários com permições de put/delete
const adminUsers = [
  {
    name: "vinicius",
    password: 679,
  },
];

// permisão do sistema
let authPermision = false;

function Login(req, res) {
  const { name, password } = req.body;

  adminUsers.forEach((searchUser) => {
    if (searchUser.name == name && searchUser.password == password) {
      authPermision = true;
      res.send({ message: "usuário logado!!!" });
    } else {
      res.status(401).send({ message: "login não efetuado!!!" });
    }
  });
}

function Middleware(req, res, next) {
  if (authPermision === true) {
    next();
  } else {
    res.status(401).send({ message: "Permisão não concebida" });
  }
}

module.exports = {
  Login,
  Middleware,
};
