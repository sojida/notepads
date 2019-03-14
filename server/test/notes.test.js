/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

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

describe('CREATE A NOTE', () => {
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
