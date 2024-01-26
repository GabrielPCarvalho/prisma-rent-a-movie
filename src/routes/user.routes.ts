import { Router } from "express";
import { CreateUserController } from "../modules/users/userCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/userCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };