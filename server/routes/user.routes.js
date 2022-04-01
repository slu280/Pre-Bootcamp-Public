const userController = require("../controller/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);
  app.put("/api/:id/update", userController.updateOne);

  // this route now has to be authenticated
  app.get("/api/user/:id", userController.getOne);
  app.get("/api/users", userController.getAll);
  app.get("/api/users/loggedin", userController.getLoggedInUser);
  
};
