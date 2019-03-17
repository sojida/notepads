/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

describe('CREATE A USER', () => {
  it('should create a user', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'chuks',
        lastName: 'Tfrank',
        email: 'amaechichuks@gmail.com',
        password: 'hello12345',
      })
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(201);
        if (data.length) {
          expect(data.firstName).to.equal('chuks');
          expect(data.lastName).to.equal('Tfrank');
          expect(data.email).to.equal('amaechichuks@gmail.com');
          expect(models.Notes).to.have.been.called;
        }
        done();
      });
  });
});
describe('CREATE A USER', () => {
  it('should respond with a 400 status code for an empty firstName field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: '  ',
        lastName: 'frank',
        email: 'amaechichuks@gmail.com',
        password: 'hello12345',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('firstname is required');
        done();
      });
  });
  it('should respond with a 400 status code for an empty lastName field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'favour',
        lastName: ' ',
        email: 'amaechichuks@gmail.com',
        password: 'hello12345',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('lastname is required');
        done();
      });
  });
  it('should respond with a 400 status code for an empty email field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'kingsley',
        lastName: 'frank',
        email: '',
        password: 'hello12345',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('email is required');
        done();
      });
  });
  it('should respond with a 400 status code for an empty password field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'chinedu',
        lastName: 'Joyce',
        email: 'amaechichuks@gmail.com',
        password: '',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('Password is required');
        done();
      });
  });
  it('should respond with a 400 status code for all empty field', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('Sorry, please all field is required!');
        done();
      });
  });
});
describe('GET ALL USER', () => {
  it('should get details of all registered users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
