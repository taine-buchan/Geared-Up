import connection from './connection'

export async function getWalkById(id: number) {
  return await connection('great_walks').where({ id }).select().first()
}
