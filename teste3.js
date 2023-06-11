var data = require("./fakeData");

module.exports = function (req, res) {
  const userId = req.params.id;
  let userDataIndex;

  const user = data.find((searchUser, index) => {
    if (searchUser.id == userId) {
      userDataIndex = index;
      return searchUser;
    }
  });

  if (userDataIndex && user) {
    const deletedUser = data.splice(userDataIndex, 1);

    res.send({ message: "usuário deletado!!", user: deletedUser });
  } else {
    res.status(404).send({ message: "usuário não encontrado" });
  }
};
