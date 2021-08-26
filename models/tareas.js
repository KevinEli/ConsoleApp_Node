const Tarea = require('./tarea');

/**
 * _listado:
 *          { 'uuid-1234564-1531-2': { id:12, desc: prueba, completadoen:20210101} },
 *          { 'uuid-1234564-1531-2': { id:12, desc: prueba, completadoen:20210101} },
 *          { 'uuid-1234564-1531-2': { id:12, desc: prueba, completadoen:20210101} },
 */

class Tareas {

    _listado = {};

    constructor( ){
        this._listado = {};
    }

    crearTarea( desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;