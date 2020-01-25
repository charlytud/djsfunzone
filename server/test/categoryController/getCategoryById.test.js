const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getCategoryById } = require('../../controllers/categoryController');
const response = require('./response/responseGetCategoryById');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Get category by Id', () => {
    beforeEach(()=>{
        nock('http://localhost:3001')
        .get('/api/category')
        .query({ id: '5dfe36010c2383514cf414c9' })
        .reply(200, response);
    });

    it('resolves as promise', () => {
        return expect(getCategoryById()).to.eventually.be.fulfilled;
    });

    it('rejects as promise', () => {
        return expect(getCategoryById()).to.eventually.be.rejectedWith('Unresolved Promise');
    });
});