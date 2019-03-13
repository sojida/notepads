/* eslint-disable no-undef */
import {
  app, chai, expect, NoteId, applicationUrl, wrongNoteId,
} from './index.test';

describe('GET ALL NOTES', () => {
  it('should respond with all notes', (done) => {
    chai.request(app)
      .get(applicationUrl)
      .end((err, res) => {
        const { status, data } = res.body;
        expect(status).to.equal(200);
        if (data.length) {
          expect(data[0]).to.have.property('id');
          expect(data[0]).to.have.property('note');
          expect(data[0]).to.have.property('tag');
        }
        done();
      });
  });
});

describe('GET A SINGLE NOTE', () => {
  it('should respond with a single note', (done) => {
    chai.request(app)
      .get(`${applicationUrl}${NoteId}`)
      .end((err, res) => {
        const { status, data } = res.body;
        expect(status).to.equal(200);
        if (data.length) {
          expect(data[0]).to.have.property('id');
          expect(data[0]).to.have.property('note');
          expect(data[0]).to.have.property('tag');
        }
        done();
      });
  });
});
describe('GET A SINGLE NOTE', () => {
  it('should respond with 404 status code error for wrong Id', (done) => {
    chai.request(app)
      .get(`${applicationUrl}${wrongNoteId}`)
      .end((err, res) => {
        const { error } = res.body;
        expect(error.status).to.equal(404);
        if (error.length) {
          expect(error).to.have.property('status');
          expect(error).to.have.property('message');
        }
        done();
      });
  });
});
