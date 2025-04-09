import connection from './connection'

export async function getWalkById(id: number) {
  const walk = await connection('great_walks').where('id', id).first()
  return walk
}
