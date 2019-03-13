/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

const NoteId = '7139d3af-b8b4-44f6-a49f-9305791700f4';
const wrongNoteId = '7139d3af-b8b4-44f6';
const applicationUrl = '/api/v1/notes/';

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
  applicationUrl,
  wrongNoteId,
};
