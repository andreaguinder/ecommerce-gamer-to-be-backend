import { Contact } from "../models/contactModel.js";

const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newContact = await Contact.create({ name, email, message });
    
    res.status(201).json({ 
      success: true, 
      message: "Mensaje guardado correctamente", 
      data: newContact 
    });
  } catch (error) {
    res.status(400).json({ error: "Error al enviar el mensaje", details: error.message });
  }
};

export { createContactMessage };