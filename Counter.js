const Counter = [
  {
    id: 1,
    value: 0,
  },
];

// verifica qual é o usuário da requisição => busca na tabela de contagem => atualiza o valor da contagem
async function setCounter(req, res, next) {
  const id = req.params.id;
  let userCounterIndex;

  const userCounter = Counter.find((searchUser, index) => {
    if (searchUser.id == id) {
      userCounterIndex = index;
      return searchUser;
    }
  });

  if (userCounter) {
    Counter.splice(userCounterIndex, 1, {
      id: id,
      value: userCounter.value + 1,
    });
  } else {
    Counter.push({ id: id, value: 1 });
  }

  next();
}

function getCounter(id) {
  const userCounter = Counter.find((searchUser) => {
    return searchUser.id == id;
  });

  return userCounter.value;
}

module.exports = {
  setCounter,
  getCounter,
};
