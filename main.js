document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelectorAll(".form")[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const promedio3 = parseFloat(document.querySelectorAll(".promedio3")[0].value);
        const promedio2 = parseFloat(document.querySelectorAll(".promedio2")[0].value);
        const promedio1 = parseFloat(document.querySelectorAll(".promedio1")[0].value);

        const nombres = document.querySelectorAll(".nombres")[0].value;
        const apellidos = document.querySelectorAll(".apellidos")[0].value;

        const promediofinal = (0.2 * promedio1) + (0.3 * promedio2) + (0.5 * promedio3);
        const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
        mensajeTexto.innerHTML = `${nombres} ${apellidos} tu promedio final es ${promediofinal}`;

    });
});
