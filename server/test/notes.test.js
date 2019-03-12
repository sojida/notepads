/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

const url = '/api/v1/notes';
const id = '7139d3af-b8b4-44f6-a49f-9305791700f4';

describe('GET ALL NOTES', () => {
  it('should respond with all notes', (done) => {
    chai.request(app)
      .get(url)
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
  it('should respond with a single notes', (done) => {
    chai.request(app)
      .get(`${url}/:${id}`)
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
