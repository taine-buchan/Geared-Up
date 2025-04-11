import connection from './connection'

export async function getCommentsByGreatWalkId(id: number) {
  await connection('comments')


}