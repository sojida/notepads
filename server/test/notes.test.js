/* eslint-disable no-undef */
import {
  app, chai, expect, deleteid, deleteidNotFound,
} from './index.test';

describe('GET ALL NOTES', () => {
  it('should respond with all notes', (done) => {
    chai.request(app)
      .get('/api/v1/notes')
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


describe('DELETE A NOTE', () => {
  it('should respond with deleted notes', (done) => {
    chai.request(app)
      .delete(`/api/v1/notes/${deleteid}`)
      .end((err, res) => {
        const { status, data } = res.body;
        expect(status).to.equal(200);
        expect(data).to.have.property('id');
        expect(data).to.have.property('note');
        expect(data).to.have.property('tag');
        expect(data.deleted).to.be.equal(true);
        done();
      });
  });

  it('should not respond with deleted notes', (done) => {
    chai.request(app)
      .delete(`/api/v1/notes/${deleteidNotFound}`)
      .end((err, res) => {
        const { status, error } = res.body;
        expect(status).to.equal(404);
        expect(error).to.be.equal('Note not found');
        done();
      });
  });
});
