
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table =>{
    table.increments('project_id')
    table.string('project_name', 128)
        .unique()
        .notNullable()
    table.string('project_description', 350)
        .notNullable()
    table.boolean('project_completed')
    })

    .createTable('resources', table =>{
        table.increments('resource_id ')
        table.string('resource_name', 128)
            .unique()
            .notNullable()
        // table.string('resource_description', 350)
        //     .notNullable()
    })

    .createTable('tasks', table =>{
        table.increments('task_id')
        table.string('task_description', 350)
            .notNullable()
        table.string('task_notes', 350)
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
