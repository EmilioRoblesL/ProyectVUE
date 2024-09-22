new Vue({
    el: '#app',
    data: {
        currentTab: 'calificaciones',
        nota1: null,
        nota2: null,
        nota3: null,
        asistencia: null,
        mensajePromedio: '',

        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
        mensajeRegistro: ''
    },
    methods: {
        calcularPromedio() {
            const nota1 = parseFloat(this.nota1);
            const nota2 = parseFloat(this.nota2);
            const nota3 = parseFloat(this.nota3);
            const asistencia = parseFloat(this.asistencia);

            // Validaciones de notas y asistencia
            if (nota1 < 10 || nota1 > 70 || nota2 < 10 || nota2 > 70 || nota3 < 10 || nota3 > 70) {
                this.mensajePromedio = 'Las notas deben estar en el rango de 10 a 70';
                return;
            }

            if (asistencia < 0 || asistencia > 100) {
                this.mensajePromedio = 'La asistencia debe estar entre 0 y 100';
                return;
            }

            // Cálculo del promedio
            const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);

            // Verificar si aprueba
            if (promedio >= 40 && asistencia >= 80) {
                this.mensajePromedio = `El Promedio es: ${promedio.toFixed(2)} Tu estado es: Aprobado`;
            } else {
                this.mensajePromedio = `El Promedio es: ${promedio.toFixed(2)} Tu estado es: Reprobado`;
            }
        },
        

        registrarUsuario() 
            // Validar contraseña
            {
            if (this.password !== this.confirmPassword) {
                this.mensajeRegistro = 'Las contraseñas no coinciden';
                return;
            }

            // Validar correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                this.mensajeRegistro = 'El formato del correo no es válido';
                return;
            }

            // Si todo es correcto
            this.mensajeRegistro = 'Registrado correctamente';
            alert('El registro se ha registrado correctamente');
        }
    }
});


