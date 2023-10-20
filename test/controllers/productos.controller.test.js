const request = require('supertest');
const app = require("../../app");


describe('Pruebas para getProductoByCustomQuery', () => {
    it('debería responder con un JSON válido', async () => {
        const { query } = { query: "SELECT * FROM productos" };

        const response = await request(app)
            .post('/productos/custom-query')
            .send(query)

            console.log({response})
        // expect(response.statusCode).toBe(200);
        // expect(response.data).toBeInstanceOf(Array);

    });

    it('debería manejar errores correctamente', async () => {
        const { query } = { query: "SELECT * FROM productos LIMIT 0" };

        const response = await request(app)
            .post('/productos/custom-query')
            .send(query)


            
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ error: 'Hubo un error en la solicitud' });
    });
});