describe('multiple tests for compliting a form', () => {

    const enterData = [
      {
        testData: {
          email: "emailFirstCheck@gmail.com",
          password: "passwordFirstCheck1234"
        },
      },
      {
        testData: {
          email: "emailSecondCheck@gmail.com",
          password: "passwordSecondCheck1234"
        },
      },
      {
        testData: {
          email: "emailThirdCheck@gmail.com",
          password: "passwordThirdCheck1234"
        },
      },
      {
        testData: {
          email: "emailForthCheck@gmail.com",
          password: "passwordForthCheck1234"
        },
      },
      {
        testData: {
          email: "emailFifthCheck@gmail.com",
          password: "passwordFifthCheck1234"
        },
      }
    ]
  
    enterData.forEach(typeData => {
      it(`Home parametrized test: ${typeData.testData}`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com'); //Open the site      
        cy.get('[alt="Material Dark Theme"]').click(); //Choose a theme    
        cy.get('[title="Forms"]').click(); //Open a "Forms" tab    
        cy.get('[title="Form Layouts"]').click(); //Open a "Form Layouts" tab
  
        cy.get('input[id="inputEmail1"]').type(typeData.testData.email); //fill out an 'email' field
        cy.get('#inputPassword2').type(typeData.testData.password); //fill out a 'password' field   
      })
    })
  })