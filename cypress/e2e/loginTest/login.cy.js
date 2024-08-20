import LoginPage from '../../pageObjects/loginPage';

describe('Testes de Login', () => {

  let lp;

  beforeEach(()=> {

    //lp = new loginPage();
    lp = new LoginPage();
    lp.visit();

  })
  
    it('Login', () => {  
      lp.escreverNome()     
      lp.escreverSenha()      
      lp.submit()
      
    })
    


    it.skip('Verificar obrigatoriedade de Username', () =>{
      lp.submit();
      lp.verificarRequerimentoUserName();
    })
 
    it.skip('Verificar obrigatoriedade de Password', () =>{
            lp.submit();
      lp.verificarRequerimentoPassword();
    })


  })
  