describe('Book Tracking App E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/') 
    })
  
    it('Should display the book list', () => {
      cy.get('.booklist', { timeout: 10000 }).should('be.visible')
    })
  
    it('Should add a new book', () => {
      cy.get('a[href="/add"]').click()
      cy.get('input[name="Title"]').type('New Book')
      cy.get('input[name="Author"]').type('Author Name')
      cy.get('input[name="Tag"]').type('Fiction')
      cy.get('select[name="Status"]').select('To Read')
      cy.get('input[name="Rating"]').type('5')
      cy.get('button[type="submit"]').click()
  
      cy.contains('New Book').should('exist')
    })
  
    it('Should edit a book', () => {
      
      cy.get('a[href="/add"]').click()
      cy.get('input[name="Title"]').type('New Book')
      cy.get('input[name="Author"]').type('Author Name')
      cy.get('input[name="Tag"]').type('Fiction')
      cy.get('select[name="Status"]').select('To Read')
      cy.get('input[name="Rating"]').type('5')
      cy.get('button[type="submit"]').click()
  
      cy.get('.book').first().contains('Edit').click()
      cy.get('input[name="Title"]').clear().type('Updated Title')
      cy.get('button[type="submit"]').click()
  
      cy.contains('Updated Title').should('exist')
    })
  
    it('Should delete a book', () => {

      cy.get('a[href="/add"]').click()
      cy.get('input[name="Title"]').type('New Book')
      cy.get('input[name="Author"]').type('Author Name')
      cy.get('input[name="Tag"]').type('Fiction')
      cy.get('select[name="Status"]').select('To Read')
      cy.get('input[name="Rating"]').type('5')
      cy.get('button[type="submit"]').click()
  
      cy.get('.book').first().contains('Delete').click()
  
      cy.get('.booklist').should('not.contain', 'New Book')
    })

    it('Should not submit the form if rating is out of range', () => {
        cy.get('a[href="/add"]').click();
        cy.get('input[name="Title"]').type('Test Book');
        cy.get('input[name="Author"]').type('Author Name');
        cy.get('input[name="Tag"]').type('Fiction');
        cy.get('select[name="Status"]').select('To Read');
        cy.get('input[name="Rating"]').type('6'); 
        cy.get('button[type="submit"]').click();
        
        cy.contains('Значення має бути між 1 та 5.').should('exist');
    });

    it('Should not allow form submission when required fields are empty', () => {
        cy.get('a[href="/add"]').click();
    
        cy.get('button[type="submit"]').should('be.disabled');
    
        cy.get('input[name="Title"]').type('Test Book');
        cy.get('input[name="Author"]').type('Author Name');
        
        cy.get('button[type="submit"]').should('be.disabled');
    
        cy.get('input[name="Tag"]').type('Fiction');
        cy.get('select[name="Status"]').select('To Read');
        cy.get('input[name="Rating"]').type('3'); 
    
        cy.get('button[type="submit"]').should('not.be.disabled');
    
        cy.get('button[type="submit"]').click();
    
        cy.contains('Test Book').should('exist');
    });
    
  })
  
