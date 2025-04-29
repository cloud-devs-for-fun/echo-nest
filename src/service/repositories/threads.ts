export const ThreadsRepository = {
  postThread: `
    INSERT INTO threads ("userId", title, thread)
    VALUES ($1, $2, $3)
    RETURNING *`,
  allThreads: `SELECT T.id, T."userId", T.title, T.thread, T.created_at, U.name, U.email, U.image FROM threads AS T LEFT JOIN users AS U ON T."userId" = U.id ORDER BY created_at DESC`,
};
