// Manejo de formularios con JS
document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      //Validación de que el nombre no tenga numeros y que al menos tenga 4 letras
      const nombreRegex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[\'\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[\'\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
      if (!nombreRegex.test(nombre)) {
        alert("Su nombre no puede llevar números, ingrese de nuevo");
        return;
      }
      if (nombre.length < 4) {
      alert('El nombre debe tener al menos 4 caracteres.');
      return;
    }

      //Validaciones de fecha y horario
      if(!fecha){
        alert('Por favor, seleccione una fecha para el evento.');
        return;
      }

      // Validar que la fecha no sea en el pasado
      const fechaEvento = new Date(fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0); // Eliminar la parte de la hora para comparar solo fechas

      if (fechaEvento < hoy) {
       alert('La fecha del evento no puede ser en el pasado.');
       return;
      }
      if(!hora){
        alert('Por favor, seleccione la hora del evento.');
        return;
      }
      //Validación de que el correo tenga un dominio correcto
      const correoRegex = /^[^\s@]+@[^\s@]+\.(com|mx|org|net)$/i;
      if(!correoRegex.test(correo)){
        alert('Por favor, ingresa un correo electrónico válido con un dominio aceptado (.com, .mx, .org, .net).');
        return;
      }
      // Validar que el teléfono tenga exactamente 10 dígitos numéricos
      const telefonoRegex = /^\d{10}$/;
      if(!telefonoRegex.test(telefono)){
        alert('Por favor, escriba un número de teléfono válido.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });