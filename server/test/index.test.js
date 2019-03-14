/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

const deleteid = 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c9';
const deleteidNotFound = 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c8';

chai.use(chaiHttp);

describe('HOMEPAGE', () => {
  it('should respond with welcome title', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

export {
  chai,
  expect,
  app,
  deleteid,
  deleteidNotFound,
};
