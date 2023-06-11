var data = require("./fakeData");

module.exports = function (req, res) {
  const userId = req.params.id;
  const { name, job } = req.body;
  let userDataIndex;

  // buscar pelo usuário no banco
  const oldUserData = data.find((searchUser, index) => {
    if (searchUser.id == userId) {
      userDataIndex = index;
      return searchUser;
    }
  });

  // caso o usuário exista, atualiza os dados que foram inseridos
  if (oldUserData && userDataIndex) {
    const newUserData = {
      id: Number(userId),
      name: name ? name : oldUserData.name,
      job: job ? job : oldUserData.job,
    };
    data.splice(userDataIndex, 1, newUserData);

    res.send({ message: "usuário atualizado", user: newUserData });
  } else {
    res.status(404).send({ message: "usuário não encontrado" });
  }
};
