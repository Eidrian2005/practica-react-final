async function PostTask(usuario,consulta,detalle,) {
    try {
        const userData = { 
            usuario,
            consulta,
            detalle,
            
        };

        const response = await fetch("http://localhost:3001/tareas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{PostTask}