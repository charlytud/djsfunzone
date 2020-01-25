const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { createUpdateProduct } = require('../../controllers/productController');
const response = require('./response/responseCreateProduct.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Create a new product', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .put('/admin/product', {
            "name": "Samsung Note X",
            "supplier": "5dff7d41118c716ca14269b1",
            "category": "5dfe35d40c2383514cf414c7",
            "quantity": 1,
            "price": 1500,
            "stock": 4,
            "order": 3,
            "reorderLevel": 1,
            "discontinued": false
        })
        .query({ id: '5e05e87a62473cd5ba17a8ce' })
        .reply(200, response);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('resolves as promise', () => {
        return expect(createUpdateProduct()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(createUpdateProduct()).to.eventually.be.rejectedWith('Unresolved Promise');
    });

    it('Creates and return a product object', async (done) => {
        return await createUpdateProduct()
        .then( response => {
            expect(typeof response).to.equal('object')
            expect(response.reorderLevel).to.equal('0')
            expect(response.discontinued).to.equal(false)
            expect(response._id).to.equal("5e16e2868260aa2eb18bb425")
            expect(response.productName).to.equal('Samsung Note X')
            expect(response.supplierId).to.equal('5dff7d41118c716ca14269b1')
            expect(response.categoryId).to.equal('5dfe35d40c2383514cf414c7')
            expect(response.quantityPerUnit).to.equal('1')
            expect(response.unitPrice).to.equal('12')
            expect(response.unitsInStock).to.equal('4')
            expect(response.unitsInOrder).to.equal('3')
            expect(response.createdAt).to.equal("2020-01-09T08:21:26.649Z")
            expect(response.updatedAt).to.equal("2020-01-09T08:21:26.649Z")
        });
        
        done();
    });
});