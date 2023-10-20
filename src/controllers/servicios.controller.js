const Servicio = require("../models/servicio.models");

const getServicios = async (req, res) => {
    try {
        const data = await Servicio.findAll();
        res.status(200).json({
            ok: true,
            statusCode: 200,
            data
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getServicio = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Servicio.findByPk(id);
        if (!data) {
            return res.status(404).json({ message: "No se encontró el servicio" });
        }
        res.status(200).json({
            ok: true,
            statusCode: 200,
            data
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createServicio = async (req, res) => {
    const { nombre, descripcion, clienteId } = req.body;

    try {
        const newServicio = await Servicio.create({
            nombre,
            descripcion,
            clienteId,
        });
        res.status(201).json({
            ok: true,
            statusCode: 201,
            data: newServicio
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateServicio = async (req, res) => {
    const { id } = req.params;

    try {
        const servicio = await Servicio.findByPk(id);
        if (!servicio) {
            return res.status(404).json({ message: "No se encontró el servicio" });
        }

        servicio.set(req.body);
        await servicio.save();

        res.status(204).json({
            ok: true,
            statusCode: 204,
            data: servicio
        });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteServicio = async (req, res) => {
    const { id } = req.params;

    try {
        const servicio = await Servicio.findByPk(id);
        if (!servicio) {
            return res.status(404).json({ message: "No se encontró el servicio" });
        }

        await Servicio.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getServicios,
    getServicio,
    createServicio,
    updateServicio,
    deleteServicio,
};
