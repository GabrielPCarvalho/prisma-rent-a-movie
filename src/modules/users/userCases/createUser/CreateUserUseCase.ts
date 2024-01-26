import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUseruseCase {
  async execute({ name, email}: CreateUserDTO): Promise<User> {
    // Verifica se o usuário existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Cria o usuário
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return user;
  }
}