const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { createUpdateCategory } = require('../../controllers/categoryController');
const response = require('./response/responseCreateCategory.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Update Category', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .put('/admin/category/update', {
            "_id": "5dfe36010c2383514cf414c9",
            "categoryName": "Sound System",
            "description": "CD/USB Player, Speakers, Headphones",
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

    it('Creates and return a Category object', async (done) => {
        return await createUpdateCategory()
        .then( response => {
            expect(typeof response).to.equal('object')
            expect(response._id).to.equal("5dfe36010c2383514cf414c9")
            expect(response.categoryName).to.equal("Sound System")
            expect(response.description).to.equal("Hallo")
            expect(response.createdAt).to.equal("2019-12-21T15:10:57.014Z")
            expect(response.updatedAt).to.equal("2019-12-21T15:10:57.014Z")
        });
        
        done();
    });
});