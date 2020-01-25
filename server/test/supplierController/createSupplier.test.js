const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { createUpdateSupplier } = require('../../controllers/supplierController');
const response = require('./response/responseCreateSupplier.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Create a new supplier', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .post('/admin/supplier', {
            "name": "JVC",
            "contact": "Johan",
            "title": "Mr",
            "address": "test",
            "city": "Pretoria",
            "region": "East",
            "postalCode": "008676",
            "country": "South Africa",
            "phone": "0716181315",
            "fax": "0987347543",
            "homePage": "www.jvc.com"
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

    it('Creates and return a supplier object', async (done) => {
        return await createUpdateSupplier()
        .then( response => {
            expect(typeof response).to.equal('object')
            expect(response.reorderLevel).to.equal('0')
            expect(response.name).to.equal("JVC")
            expect(response.contact).to.equal("Johan")
            expect(response.title).to.equal("Mr")
            expect(response.address).to.equal("test")
            expect(response.city).to.equal("Pretoria")
            expect(response.region).to.equal("East")
            expect(response.postalCode).to.equal("008676")
            expect(response.country).to.equal("South Africa")
            expect(response.phone).to.equal("0716181315")
            expect(response.fax).equal("0987347543")
            expect(response.homePage).equal("www.jvc.com")
          
        });
        
        done();
    });
});