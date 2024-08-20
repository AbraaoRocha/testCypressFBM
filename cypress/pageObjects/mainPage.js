class MainPage {

    goToPIM(){
        cy.wait(3000);
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span').click();
        cy.wait(3000);
                
    }

    criarUsuario(fristName, middleName, lastName){
        
        this.goToPIM();
        
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();
        
        cy.wait(1000);
        
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input').type(String(fristName));
        
        cy.wait(125)
        
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input').type(String(middleName));
        
        cy.wait(125)
        
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input').type(String(lastName));

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]').click();

    }


    pesquisarUsuario(user_name){

        this.goToPIM();

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input').type(user_name);

        cy.wait(5000);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click();

        cy.wait(1000);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div').should('be.visible');

    }


    excluirUsuario(user_name){

        this.goToPIM();
        
        this.pesquisarUsuario(user_name);

        cy.wait(1000);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div/div/label/span').click();

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div/button').click();

    }

    editarDadosDoUsuario(user_name){
        
        this.goToPIM();
        
        this.pesquisarUsuario(user_name);

        cy.wait(1000);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[9]/div/button[1]').click();

        cy.wait(5000);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div/div/div[2]/div[1]/div[2]/input').type(' Usuario Editado');
        
        cy.wait(125);

        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input').type(4002);

        cy.wait(125);
        
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/label').click();
        
        cy.wait(125);

    }

    logout(){

        cy.wait(1000);

        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').click();

        cy.wait(125);

        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').should('be.visible');
        
        cy.wait(125);

        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').click();



    }


}

export default MainPage;
