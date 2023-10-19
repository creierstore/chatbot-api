const { isProductInDB, transformHtmlToPlainText } = require("../../src/services/producto.service");


describe('isProductInDB', () => {
    it('should return true if the product exists in the database', async () => {
        const result = await isProductInDB('12345');
        expect(result).toBe(true);

    });

    it('should return false if the product does not exist in the database', async () => {

        const result = await isProductInDB('54321');
        expect(result).toBe(false);
    });

});


describe("transformHtmlToPlainText", () => {
    it('should convert HTML description to plain text', () => {
        const htmlDescription = '<p data-mce-fragment="1">This is <b>bold</b> and <i>italic</i>.</p>';
        const expectedPlainText = 'This is bold and italic.';
        const plainText = transformHtmlToPlainText(htmlDescription);
        expect(plainText).toEqual(expectedPlainText);
    });

    it('should handle empty HTML description', () => {
        const htmlDescription = '';
        const expectedPlainText = '';
        const plainText = transformHtmlToPlainText(htmlDescription);
        expect(plainText).toEqual(expectedPlainText);
    });

    it('should handle HTML with line breaks', () => {
        const htmlDescription = '<p>Line 1<br>Line 2</p>';
        const expectedPlainText = 'Line 1\nLine 2';
        const plainText = transformHtmlToPlainText(htmlDescription);
        expect(plainText).toEqual(expectedPlainText);
    });

    it('should handle HTML with links', () => {
        const htmlDescription = '<p>Visit <a href="https://example.com">Example</a>.</p>';
        const expectedPlainText = 'Visit Example [https://example.com].';
        const plainText = transformHtmlToPlainText(htmlDescription);
        expect(plainText).toEqual(expectedPlainText);
    });
})