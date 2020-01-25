const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getProducts } = require('../../controllers/productController');
const response = require('./response/responseGetProducts');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Get all products', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .get('/api/products')
        .reply(200, response);
    });

    it('resolves as promise', () => {
        return expect(getProducts()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(getProducts()).to.eventually.be.rejectedWith('Unresolved Promise');
    });
});