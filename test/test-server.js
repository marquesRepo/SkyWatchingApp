var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);


/*describe('index page', function() {
  it('exists', function(done) {
    chai.request('http://localhost:8080')
      .get('/')
      .end(function(err, res) {
        res.should.have.status(404);
        res.should.be.html;
        done();
    });
  });
});
describe('users', function() {
  it('should list users on GET', function(done) {
    chai.request('http://localhost:8080/users')
      .get('/users')
      .then(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        res.body.length.should.be.above(0);
        res.body.forEach(function(item){
        	item.should.be.a("object");
        	item.should.have.all.keys(
        		"id", "firstName", "lastName", "userName");
        });
    });
  });
});
describe('astroitems', function() {
  it('should list astroitems on GET', function(done) {
    chai.request('http://localhost:8080/astroitems')
      .get('/astroitems')
      .then(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        res.body.length.should.be.above(0);
        res.body.forEach(function(item){
        	item.should.be.a("object");
        	item.should.have.all.keys(
        		"id", "title", "description", "URL");
        });
    });
  });
});
describe('journalitem', function() {
  it('should list journalitem on GET', function(done) {
    chai.request('http://localhost:8080/journalitem')
      .get('/journalitem')
      .then(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        res.body.length.should.be.above(0);
        res.body.forEach(function(item){
        	item.should.be.a("object");
        	item.should.have.all.keys(
        		"id", "title", "description", "URL");
       });
    });
  });
});*/
describe('astroitem', function() {
it('should add an item on POST', function() {
  const newItem = {desciption: "", URL: ""};
  chai.request("http://localhost:8080/journalitem")
    .post('/journalitem')
    .send(newItem)
    .then(function(res) {
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.include.keys('id', 'description', 'URL');
      res.body.id.should.not.be.null;
      res.body.should.deep.equal(Object.assign(newItem, {id: res.body.id}));
    	});
	});
});