const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getProductById } = require('../../controllers/productController');
const response = require('./response/responseGetProductById');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Get product by Id', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .get('/api/product')
        .query({ id: '5e05e87a62473cd5ba17a8ce' })
        .reply(200, response);
    });

    it('resolves as promise', () => {
        return expect(getProductById()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(getProductById()).to.eventually.be.rejectedWith('Unresolved Promise');
    });
});