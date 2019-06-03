const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
	const objeto = {
		name : "uzziel",
		edad : 22,
		email : "uzziel@gmail.com",
		localidad : {
			pais : "CDMX",
			contacto : {
				telefono : "5544771231123",
				telefono_cel : "432342423423"
			}
		}
	}

const { localidad : { contacto } } = objeto;

	res.json(contacto)
})


router.post("/nuevoUsuario", (req, res)=>{
	const { name, edad, email } = req.body;

	if (typeof(edad) != "number")
		return res.status(400).json({error : "tu edad debe ser numero"})
	res.json({respuesta : "todo ok"})
})



module.exports = router;