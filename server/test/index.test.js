/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

const NoteId = '7139d3af-b8b4-44f6-a49f-9305791700f4';
const wrongNoteId = '7139d3af-b8b4-44f6';
const deleteid = 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c9';
const deleteidNotFound = 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c8';
const updatedId = 'fa3def47-153a-40bd-8181-a1c787e083d6';
const missingId = '0fc8e96a-d431-4ef4-9fea-b1b8c5cad3f7';

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
  NoteId,
  wrongNoteId,
  deleteid,
  deleteidNotFound,
  updatedId,
  missingId,
};
