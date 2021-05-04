'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const serverRequest= supertest(server.app);

describe('Testing Server',()=>{
  it('handle home route', async()=>{
    let response = await serverRequest.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('servar is working');
  });

  it('bad route', async()=>{
    let response = await serverRequest.get('/blaaaa');
    expect(response.status).toEqual(404);
  });

  it('bad method', async()=>{
    let response = await serverRequest.post('/');
    expect(response.status).toEqual(404);
  });

  it('be able to get all thing', async ()=> {
    let response = await serverRequest.get('/thing');
    expect(response.status).toEqual(200);
  });

  it('be able to get one thing by id', async ()=> {
    let response = await serverRequest.get('/thing/:id');
    expect(response.status).toEqual(200);
  });

  it('be able to POST a new thing', async ()=> {
    let response = await serverRequest.post('/thing').send({
      name: "t-shirt",
      price: 10
    });
    expect(response.status).toEqual(200);
    expect(response.body.record.name).toEqual("t-shirt");
    expect(response.body.record.price).toEqual(10);
  });
  it('be able to update a specific one thing by id', async ()=> {
    let response = await serverRequest.put('/thing/:id').send({
      name: "pants",
      price: 20
    });
    expect(response.status).toEqual(200);
    
  });
  it('be able to delete one thing by id', async ()=> {
    let response = await serverRequest.delete('/thing/:id');
    expect(response.status).toEqual(204);
  });

  it('be able to get all foods', async ()=> {
    let response = await serverRequest.get('/food');
    expect(response.status).toEqual(200);
  });

  it('be able to get one food by id', async ()=> {
    let response = await serverRequest.get('/food/:id');
    expect(response.status).toEqual(200);
  });

  it('be able to POST a new food', async ()=> {
    let response = await serverRequest.post('/food').send({
      name: "mansaf",
      price: 10
    });
    expect(response.status).toEqual(200);
    expect(response.body.record.name).toEqual("mansaf");
    expect(response.body.record.price).toEqual(10);
  });
  it('be able to update a specific one food by id', async ()=> {
    let response = await serverRequest.put('/food/:id').send({
      name: "burger",
      price: 20
    });
    expect(response.status).toEqual(200);
  });
  it('be able to delete one food by id', async ()=> {
    let response = await serverRequest.delete('/food/:id');
    expect(response.status).toEqual(204);
  });





});