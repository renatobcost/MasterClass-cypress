import auth from '../support/actions/AuthActions'

describe('Login', function () {
    it('User should be logged in', function () {
        auth.go()
        auth.fillForm('testeapp@teste.com', 'teste123')
        auth.submit()
        auth.userShouldLoggedIn()
    })

    it('Incorrect password', function () {
        auth.go()
        auth.fillForm('testeapp@teste.com', '123456')
        auth.submit()
        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })

    it('User not found', function () {
        auth.go()
        auth.fillForm('testeapp@404.com', '123456')
        auth.submit()
        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })
})