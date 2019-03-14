/* eslint-disable no-undef */
import {
  app, chai, expect, NoteId, wrongNoteId,
  deleteid, deleteidNotFound,
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

describe('GET A SINGLE NOTE', () => {
  it('should respond with a single note', (done) => {
    chai.request(app)
      .get(`/api/v1/notes/${NoteId}`)
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
describe('CREATE A NOTE', () => {
  it('should create a note', (done) => {
    chai.request(app)
      .post('/api/v1/notes')
      .send({
        title: 'Test Note',
        note: 'This is some test note that will be passed to the db',
        tag: 'Test',
      })
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(201);
        if (data.length) {
          expect(data.title).to.equal('Test Note');
          expect(data.note).to.equal('This is some test note that will be passed to the db');
          expect(data).to.equal('Test');
        }
        done();
      });
  });
});
describe('GET A SINGLE NOTE', () => {
  it('should respond with 404 status code error for wrong Id', (done) => {
    chai.request(app)
      .get(`/api/v1/notes/${wrongNoteId}`)
      .end((err, res) => {
        const { error, status } = res.body;
        expect(status).to.equal(400);
        expect(error).to.equal('Please input a valid id');
        done();
      });
  });
});

describe('GET A SINGLE NOTE', () => {
  it('should respond with an error', (done) => {
    chai.request(app)
      .post('/api/v1/notes')
      .send({
        title: '',
        note: 'This is some test note that will be passed to the db',
        tag: 'Test',
      })
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(400);
        if (data.length) {
          expect(res.error.message).to.equal('Wrong input');
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
