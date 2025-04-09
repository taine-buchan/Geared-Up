export async function seed(knex) {
  await knex('users').insert([
    {
      name: 'John Mindful',
      email: 'john@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Daph Simons',
      email: 'daph@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Gerard',
      email: 'gerard@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Manasa Harakeke25',
      email: 'manasa@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Mariya Harakeke25',
      email: 'rmariya@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Daisy Harakeke25',
      email: 'daisy@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Calum Harakeke25',
      email: 'calum@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Gerry Harakeke25',
      email: 'gerry@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Taine Harakeke25',
      email: 'taine@example.com',
      my_equipment: '',
      result: '',
    },
    {
      name: 'Hannah Harakeke25',
      email: 'hannah@example.com',
      my_equipment: '',
      result: '',
    },
  ])
}
