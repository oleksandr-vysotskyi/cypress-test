/// <reference types="cypress"/>

describe('api tests', () => {
  
    it('GET check', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
          expect(resp.status).to.eq(200);
        });
    });

    it('POST check', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
          title: 'name',
          body: 'body',
          userId: 2,
        }).then(resp => {
          expect(resp.status).to.eq(201);
          expect(resp.body).to.have.property('userId', 2);
        });
      });
  
    it('PUT check', () => {
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'test',
        body: 'body',
        userId: 2,
      }).then(resp => {
        expect(resp.status).to.eq(200);
      });
    });
  
    it('PATCH check', () => {
      cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
         title: 'new name'
        }).then(resp => {
          expect(resp.status).to.eq(200);
          expect(resp.body).to.have.property('title', 'new name');
        });
      });
      
  
    it('DELETE check', () => {
      cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/101').then(resp => {
          expect(resp.status).to.eq(200);
          expect(resp.duration).lessThan(200);
        });
    });
  });
  