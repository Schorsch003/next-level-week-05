import { json, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController()

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.get("/messages/:id", messagesController.showByUser)

routes.post("/messages", messagesController.create)


export { routes }