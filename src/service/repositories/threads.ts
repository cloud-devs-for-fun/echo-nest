export const ThreadsRepository = {
  postThread: `
    INSERT INTO threads ("userId", title, thread)
    VALUES ($1, $2, $3)
    RETURNING *`,
  allThreads: `SELECT id, title, thread, created_at FROM threads ORDER BY created_at DESC`,
};
