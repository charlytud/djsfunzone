const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { createUpdateSupplier } = require('../../controllers/supplierController');
const response = require('./response/responseCreateSupplier.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Update Supplier', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .put('/admin/supplier/update', {
            "_id": "5e185042c027da4c6359b56d",
            "companyName": "JVC",
            "contactName": "Johan",
            "contactTitle": "Mr",
            "address": "Lynnwood Glen",
            "region": "Pretoria East"
        })
        .reply(200, response);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('resolves as promise', () => {
        return expect(createUpdateSupplier()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(createUpdateSupplier()).to.eventually.be.rejectedWith('Unresolved Promise');
    });

    it('Creates and return a Supplier object', async (done) => {
        return await createUpdateSupplier()
        .then( response => {
            expect(typeof response).to.equal('object')

            expect(response._id).to.equal("5e185042c027da4c6359b56d")
            expect(response.companyName).to.equal("JVC")
            expect(response.contactName).to.equal("Johan")
            expect(contactTitle).to.equal("Mr")
            expect(response.address).to.equal("Lynnwood Glen")
            expect(response.region).to.equal("Pretoria East")
        });
        
        done();
    });
});