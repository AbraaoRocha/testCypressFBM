import LoginPage from '../../pageObjects/loginPage';
import MainPage from '../../pageObjects/mainPage';

describe('Testes de Login', () => {
  
    
  let lp;
  let mp;

  beforeEach(()=> {

    lp = new LoginPage();
    lp.login();

    mp = new MainPage();

  })
  
    it('Criar Usuário Fulano Bigo Ones', () => {
        mp.criarUsuario('Fulano','Bigo','Ones');
    })
  
    it('Criar Usuário Ciclano Bigos Two', () => {
        mp.criarUsuario('Ciclanos','Bigo','Two');
  
    })
      
    it('Criar Usuário Beltrano Bigos Three', () => {
        mp.criarUsuario('Beltrano','Bigo','Three');
  
    })

    it( 'Pesquisar Fulano', () => {
        mp.pesquisarUsuario('Fulano');
    }
    )

    it( 'Pesquisar Ciclano', () => {
        mp.pesquisarUsuario('Ciclando');
    }
    )

    it( 'Pesquisar Beltrano', () => {
        mp.pesquisarUsuario('Beltrano');
    }
    )

    it('Excluir Usuário Fulano', () => {
        mp.excluirUsuario('Fulano');
    })

    it('Excluir Usuário Beltrano', () => {
        mp.excluirUsuario('Beltrano');
    })

    it('Editar dados do usuário', () =>{

        mp.editarDadosDoUsuario('Ciclano');

    })

    it('Editar Dados de um usuário', () => {

        mp.editarDadosDoUsuario('Ciclano');

    })

    it('Logout' , ()=>{

        mp.logout();

    })


})