import React, { useState } from 'react';
import { PostUsers } from '../services/PostUsers'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Home.css'


export default function AddTasks() {




    return(

    <div className="lista-consulta" id="lista-consulta">

    <div className="form-grupo">
        <label htmlFor="nombrestudiante">Consultas</label>
        <input type="text" id="consulta" placeholder="Ingrese su Consulta"/>
    </div>

    <div className="form-grupo">

        <label htmlFor="consultatexto">Detalles de Tarea</label>
            <textarea id="consultatexto" rows="4" placeholder="Detalle su Tarea"></textarea>

    <div className="form-grupo">
        <label htmlFor="tipo-consulta">Tipo de Consulta</label>

        <select id="tipo-consulta">
            <option value="">Seleccione el tipo de Tarea</option>
            <option value="academica">Académica</option>
            <option value="administrativa">Administrativa</option>
            <option value="personal">Personal</option>
        </select>
    </div>


    <div className="form-grupo">
        <button id="btnAgregar">Agregar Tarea</button>
        <button id="btnMostrar">Mostrar Tarea</button>
        <button id="btnOcultar">Ocultar Tarea</button>
    </div>

    </div>


    </div>
    )
}
