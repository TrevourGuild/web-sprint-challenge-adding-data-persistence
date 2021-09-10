
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table =>{
    table.increments('project_id')
    table.text('project_name', 128)
        .unique()
        .notNullable()
    table.text('project_description', 350)
        .notNullable()
    table.boolean('project_completed', false)
    })

    .createTable('resources', table =>{
        table.increments('resource_id ')
        table.text('resource_name', 128)
            .unique()
            .notNullable()
        table.text('resource_description', 350)
            .notNullable()
    })

    .createTable('tasks', table =>{
        table.increments('task_id')
        table.text('task_description', 350)
            .notNullable()
        table.text('task_notes', 350)
            .notNullable()
        table.boolean('task_completed', false)

        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')        
    })

    .createTable('project_resources', table =>{
        table.increments('project_resources')
        table.timestamps(true,true)

        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
            
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
