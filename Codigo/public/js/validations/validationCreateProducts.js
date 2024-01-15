console.log('se ejecuta');

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')
const textareas = document.querySelectorAll('#formulario textarea')
const selected = document.querySelector('select')

const expresiones = { 
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	precio: /^.{4,6}$/, // 4 a 6 numeros.
	texto: /^[a-zA-Z0-9\_\-\°\s]{10,500}$/
}

let camposValidados = {
	name: false,
	category: false,
	price: false,
	description: false,
	ingredients: false,
	imagen: false,
}

window.addEventListener('load', () => {

	const validarFormulario = (e) => {
		switch (e.target.name) {

			case 'name':
				validarCampos(expresiones.nombre, e.target, 'name', '#iconoName', 'msgName')
			break;

            case 'category':
                validarCategoria();
            break;

		    case 'price':
                validarCampos(expresiones.precio, e.target, 'price', '#iconoPrice', 'msgPrice')
            break;

            case 'description':
                validarCampos(expresiones.texto, e.target, 'description', '#iconoDescription', 'msgDescription')
            break;

            case 'ingredients':
                validarCampos(expresiones.texto, e.target, 'ingredients', '#iconoIngredients', 'msgIngredients')

            case 'imagen':
                validarImagen()
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

	const validarImagen = () => {
		let inputFoto = document.getElementById('imagen')
		let img = document.querySelector('#imgPreview')
        let extensiones = /(.PNG|.jpg|.gif|.svg|.jpeg)$/i

		let i = document.querySelector('#iconoImagen')
		let msg = document.getElementById('msgImagen')

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
			    camposValidados['imagen'] = false

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
			    camposValidados['imagen'] = true

				if(!input.files.length) return

				file = input.files[0];

                objectUrl = URL.createObjectURL(file)

                $imgPreview.src = objectUrl

				return
			}
		})

	}
    selected

    textareas.forEach((textarea) => {
        textarea.addEventListener('keyup', validarFormulario);
		textarea.addEventListener('blur', validarFormulario);  
    })

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