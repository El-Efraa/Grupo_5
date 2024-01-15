const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	password: /^[a-zA-Z0-9\_\-]{8,16}$/, /* Letras, numeros, guion y guion_bajo*/
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	dni: /^.{8}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	domicilio: /^[a-zA-Z0-9\_\-\°\s]+$/
}

let camposValidados = {
	nombre: false,
	apellido: false,
	dni: false,
	fecha: false,
	domicilio: false,
	correo_electronico: false,
	contrasenia: false,
	foto: false
}

window.addEventListener('load', () => {

	const validarFormulario = (e) => {
		switch (e.target.name) {

			case 'nombre':
				validarCampos(expresiones.nombre, e.target, 'nombre', '#iconoNombre', 'msgNombre')
			break;

			case 'apellido':
				validarCampos(expresiones.apellido, e.target, 'apellido', '#iconoApellido', 'msgApellido')
			break;

			case 'dni':
				validarCampos(expresiones.dni, e.target, 'dni', '#iconoDni', 'msgDni')
			break;

			case 'fecha_nacimiento':
				validarEdad()
			break;

			case 'domicilio':
				validarCampos(expresiones.domicilio, e.target, 'domicilio', '#iconoDomicilio', 'msgDomicilio')
			break;

			case 'correo_electronico':
				validarCampos(expresiones.correo, e.target, 'correo_electronico', '#iconoCorreo', 'msgCorreo')
			break;

			case 'contrasenia':
				validarCampos(expresiones.password, e.target, 'contrasenia', '#iconoContrasenia', 'msgContrasenia')
				validarContraseña()
			break;

			case 'confirmar_contrasenia':
				validarContraseña()
			break;

			case 'foto_usuario':
				validarFoto()
			break;
			
		};
	}

	const validarCampos = (expresion, input, campo, icono, mensaje) => {
		let inpt = document.getElementById(`${campo}`)
		let i = document.querySelector(`${icono}`)
		let msg = document.getElementById(`${mensaje}`)


		if(expresion.test(input.value)){
			inpt.classList.remove('input_incorrecto');
			inpt.classList.add('input_correcto')
			i.classList.remove('fa-circle-xmark')
			i.classList.add('fa-circle-check')
			msg.classList.remove('activo')
			camposValidados[campo] = true
		} else {
			inpt.classList.remove('input_correcto')
			inpt.classList.add('input_incorrecto')
			i.classList.remove('fa-circle-check')
			i.classList.add('fa-circle-xmark')
			msg.classList.add('activo')
		    camposValidados[campo] = false			
		};
	}

	
	
	const validarContraseña = () => {
		let contrasenia = document.getElementById('contrasenia')
		let confirmar_contrasenia = document.getElementById('confirmar_contrasenia')

		let inpt = document.getElementById('confirmar_contrasenia')
		let i = document.querySelector('#iconoConfirmar')
		let msg = document.getElementById('msgConfirmar')

		if(confirmar_contrasenia.value !== ''){
			if(contrasenia.value !== confirmar_contrasenia.value){
			inpt.classList.remove('input_correcto')
			inpt.classList.add('input_incorrecto')
			i.classList.remove('fa-circle-check')
			i.classList.add('fa-circle-xmark')
			msg.classList.add('activo')
			camposValidados['contrasenia'] = false
		} else {
			inpt.classList.remove('input_incorrecto');
			inpt.classList.add('input_correcto')
			i.classList.remove('fa-circle-xmark')
			i.classList.add('fa-circle-check')
			msg.classList.remove('activo')
			camposValidados['contrasenia'] = true
		}
		}

		
	}

	const validarFoto = () => {
		let inputFoto = document.getElementById('foto_usuario')
		let img = document.querySelector('#imgPreview')
        let extensiones = /(.PNG|.jpg|.gif|.svg|.jpeg)$/i

		let i = document.querySelector('#iconoFoto')
		let msg = document.getElementById('msgFoto')

		inputFoto.addEventListener('change', (e) => {
			let input = e.target
			$imgPreview = img;
			if(!extensiones.exec(inputFoto.value)){
			    console.log('se está ejecutando');

			    inputFoto.classList.remove('input_correcto')
			    inputFoto.classList.add('input_incorrecto')
			    i.classList.remove('fa-circle-check')
			    i.classList.add('fa-circle-xmark')
			    msg.classList.add('activo')
			    camposValidados['foto'] = false

			    input.value= ''
				$imgPreview.src= ''
			    return false
				
	        } else if (input.value !== ''){
				console.log('se está ejecutando2');

				console.log(input.value);
				
				inputFoto.classList.add('input_correcto')
			    inputFoto.classList.remove('input_incorrecto')
			    i.classList.add('fa-circle-check')
			    i.classList.remove('fa-circle-xmark')
			    msg.classList.remove('activo')
			    camposValidados['foto'] = true

				if(!input.files.length) return

				file = input.files[0];

                objectUrl = URL.createObjectURL(file)

                $imgPreview.src = objectUrl

				return
			}
		})

	}

	const validarEdad = () => {
		let fecha_nacimiento = document.getElementById('fecha_nacimiento')
		let edad = 0

		let i = document.querySelector('#iconoFecha')
		let msg = document.getElementById('msgFecha')

		let calcularEdad = (fecha) => {
				let fechaActual = new Date()
			    let anoActual = parseInt(fechaActual.getFullYear());
			    let mesActual = parseInt(fechaActual.getMonth())+1;
			    let diaActual = parseInt(fechaActual.getDate())

			    let anoNacimiento = parseInt(String(fecha).substring(0,4));
			    let mesNacimiento = parseInt(String(fecha).substring(5,7));
			    let diaNacimiento = parseInt(String(fecha).substring(8,10))

			    let edad = anoActual - anoNacimiento;

			    if(mesActual < mesNacimiento) {
				   edad--;
			    } else if(mesActual===mesNacimiento) {
				    if(diaActual<diaNacimiento){
					    edad--
				    }
			    } return edad;
			}

		fecha_nacimiento.addEventListener('change', () => {
			let edad = calcularEdad(fecha_nacimiento.value)
            console.log(edad);
			if(edad<18){
				fecha_nacimiento.classList.remove('input_correcto')
			    fecha_nacimiento.classList.add('input_incorrecto')
			    i.classList.remove('fa-circle-check')
			    i.classList.add('fa-circle-xmark')
			    msg.classList.add('activo')
			    camposValidados['fecha'] = false
			}else{
				fecha_nacimiento.classList.remove('input_incorrecto');
			    fecha_nacimiento.classList.add('input_correcto')
			    i.classList.remove('fa-circle-xmark')
			    i.classList.add('fa-circle-check')
			    msg.classList.remove('activo')
			    camposValidados['fecha'] = true
			}
		})
	}

	inputs.forEach((input) => {
		input.addEventListener('keyup', validarFormulario);
		input.addEventListener('blur', validarFormulario);
		
	})

    formulario.addEventListener('submit', (e) => {
		console.log(camposValidados);
		inputs.forEach((input) => {
		console.log(input.value, typeof(input.value));
	})
		if(camposValidados.nombre && camposValidados.apellido && camposValidados.dni && camposValidados.fecha && camposValidados.domicilio && camposValidados.correo_electronico && camposValidados.contrasenia && camposValidados.foto){
			
	
		} else {
			e.preventDefault()
		document.getElementById('msgFormIncorrecto').classList.add('activo')
		}
		
	})
})