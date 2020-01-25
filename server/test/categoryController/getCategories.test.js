const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getCategories } = require('../../controllers/categoryController');
const response = require('./response/responseGetCategories');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Get all categories', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .get('/api/categories')
        .reply(200, response);
    });

    it('resolves as promise', () => {
        return expect(typeof getCategories()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(getCategories()).to.eventually.be.rejectedWith('Unresolved Promise');
    });

    it('returns an array', () => {
        return expect(typeof getCategories()).to.equal('Array');
    });
});