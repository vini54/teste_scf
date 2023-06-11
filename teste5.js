const useCounter = require("./Counter");
const data = require("./fakeData");

module.exports = function (req, res) {
  const userId = req.params.id;
  const user = data.find((searchUser) => {
    return searchUser.id == userId;
  });

  const { getCounter } = useCounter;

  if (user) {
    res.send({
      message:
        "Usuário " + user.name + " foi lido " + getCounter(userId) + " vezes.",
    });
  } else {
    res.status(404).send({ message: "usuário não encontrado" });
  }
};
