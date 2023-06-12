# Teste Node.js para SCF Brazil

## Instruções

- Utilizando o terminal com node rode:

1°

```
npm install
```

2°

```
npm run dev
```

- Para receber permissão para as rotas com o middleware de autenticação, use a rota _/login_ com o seguinte body da requisição:

> _sinta-se a vontade de alterar/acrescentar usuários com permissão em Auth.js_

```
  {
    "name": "vinicius",
    "password": 679,
  }
```

- Rotas:

```
  get /user/:id
  get /users/
  get /user/access/:id
  post /user/
  delete /user/:id
  put /user/:id
  post /login
```

> Este código foi escrito para além de acrescentar performance e funcionalidades, também manter sua simplicidade e boa leitura humana de seus métodos.
