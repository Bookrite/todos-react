import db from "./db.js";
import boom from "@hapi/boom";
//import bcrypt from "bcrypt";

export const login = async (username, password) => {
  console.log('test')
  const user = await db.oneOrNone(
    "SELECT * FROM todos.person WHERE email = ${username}",
    {
      username,
    }
  );

  if (!user) throw boom.forbidden("User does not exist");
  //let isPasswordCompared = await bcrypt.compare(password, user.pass);

  // if(!isPasswordCompared){
  //     throw boom.forbidden('Password does not match');
  // }
console.log(user)
  return user;
};
