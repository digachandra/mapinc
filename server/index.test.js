'use strict'

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect

chai.use(chaiHttp)

describe('Test API Users', function(){
  var id, url = 'http://localhost:9000'
  it(': create record', function(done){
    chai.request(url)
        .post('/users')
        .send({
          name: 'mapinc.',
          password: 'mapinc.'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          id = res.body._id;
          done()
        })
  })
  it(': read data', function(done){
    chai.request(url)
        .get('/users')
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': update record', function(done){
    chai.request(url)
        .put(`/users/${id}`)
        .send({
          password: 'mapinc.new'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': delete record', function(done){
    chai.request(url)
        .delete(`/users/${id}`)
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
})
