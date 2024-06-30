import db from "./db.js";

export const createTask = async (title, user_id) => {
  const result = await db.one(
    "insert into todos.task (title, user_id) values (${title}, ${user_id}) returning *",
    {
      title,
      user_id,
    }
  );
  return {
    title: result.title,
    done: false,
    id: result.id,
  };
};

export const getTasks = async (id) => {
  const result = await db.manyOrNone(
    "select * from todos.task where deleted_at is null and user_id = ${id}", {
    id,
  });
  

  return result;
};

export const markTaskAsDone = async (id) => {
  await db.none("update todos.task set status = 'done' where id = ${id}", {
    id,
  });
  return { ok: true };
};

export const deleteTask = async (id) => {
  await db.none("update todos.task set deleted_at = now() where id = ${id}", {
    id ,
  });
  return { ok: true };
};
