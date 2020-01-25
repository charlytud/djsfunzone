const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { createUpdateCategory } = require('../../controllers/categoryController');
const response = require('./response/responseCreateCategory.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Create a new category', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .post('/admin/category', {
            "name": "Cars",
            "description": "Automotive cars and accessories",
            "picture": "" 
        })
        .reply(200, response);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('resolves as promise', () => {
        return expect(createUpdateCategory()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(createUpdateCategory()).to.eventually.be.rejectedWith('Unresolved Promise');
    });

    it('Creates and return a category object', async (done) => {
        return await createUpdateCategory()
        .then( response => {
            expect(typeof response).to.equal('object')
            expect(response.reorderLevel).to.equal('0')
            expect(response._id).to.equal("5e184427730c5a48bd408e9f")
            expect(response.categoryName).to.equal(Cars)
            expect(response.description).to.equal("Automotive cars and accessories")
            expect(response.createdAt).to.equal("2020-01-10T09:30:15.896Z")
            expect(response.updatedAt).to.equal("2020-01-10T09:30:15.896Z")
        });
        
        done();
    });
});