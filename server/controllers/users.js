import Boom from "@hapi/boom";
//import bcrypt from "bcrypt";
import db from "./db.js";

export const createUser = async ({ email, password }) => {
  let user;
  
  try {
   // let passhash = await bcrypt.hash(password, 10);

    user = await db.one(
      "INSERT INTO todos.person (email, pass) VALUES (${email}, ${password}) RETURNING *;",
      {
        password,
        email,
      }
      
    );console.log("creating user with", email, password);
  } catch (e) {
    if (e.message.includes("unique_email_cstr")) {
      throw Boom.badData(`User already exists`);
    }
    throw e
  }

  return user;
};
