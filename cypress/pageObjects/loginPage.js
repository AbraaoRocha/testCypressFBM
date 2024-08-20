class LoginPage {

    visit() {
        const URL = Cypress.env('URL');
        cy.visit(URL);
    }

    escreverNome() {
        cy.get('input[name="username"]').type('Admin');
    }

    escreverSenha() {
        cy.get('input[name="password"]').type('admin123');
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    verificarRequerimentoUserName(){
        
        cy.xpath(
            '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span'

        ).should(
        'have.text', 'Required'
    );
    }

    verificarRequerimentoPassword(){
        
        cy.xpath(
            '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span'
        ).should(
        'have.text', 'Required'
    );
    }

    login(){
        this.visit()
        this.escreverNome()
        this.escreverSenha()
        this.submit()
    }

}

export default LoginPage;
