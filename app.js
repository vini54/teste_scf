var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const router = express.Router();

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");

const useCounter = require("./Counter");
const useAuth = require("./Auth");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`
  get /user/:id </br>
  get /users/ </br>
  get /user/access/:id </br>
  post /user/ </br>
  delete /user/:id </br>
  put /user/:id </br>
  post /login
  `);
});

router.get("/user/:id", useCounter.setCounter, teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/user", teste2);
router.delete("/user/:id", useAuth.Middleware, teste3);
router.put("/user/:id", useAuth.Middleware, teste4);
router.get("/user/access/:id", teste5);
router.post("/login", useAuth.Login);

app.use(router);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
