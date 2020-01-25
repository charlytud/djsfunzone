const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getSupplierById } = require('../../controllers/supplierController');
const response = require('./response/responseGetSupplierById');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Get supplier by Id', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .get('/api/supplier')
        .query({ id: '5e185042c027da4c6359b56d' })
        .reply(200, response);
    });

    it('resolves as promise', () => {
        return expect(getSupplierById()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(getSupplierById()).to.eventually.be.rejectedWith('Unresolved Promise');
    });
});