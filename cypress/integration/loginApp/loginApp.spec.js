describe("Login app ui", () => {
  const inputEmail =
    ".hsTVYh > .Form__SectionForm-sc-1bgs808-0 > .Form__FormContent-sc-1bgs808-1 > .Form__FormGroup-sc-1bgs808-4 > [data-cy=input-email]";

  const inputPassword =
    ".hsTVYh > .Form__SectionForm-sc-1bgs808-0 > .Form__FormContent-sc-1bgs808-1 > .Form__FormGroup-sc-1bgs808-4 > [data-cy=input-password]";

  const buttonSubmit =
    ".hsTVYh > .Form__SectionForm-sc-1bgs808-0 > .Form__FormContent-sc-1bgs808-1 > .Form__FormGroup-sc-1bgs808-4 > .Form__FormButtonContainer-sc-1bgs808-8 > .Form__FormButton-sc-1bgs808-9";

  const messageError =
    ".hsTVYh > .Form__SectionForm-sc-1bgs808-0 > .Form__FormContent-sc-1bgs808-1 > .Form__FormGroup-sc-1bgs808-4 > .Form__FormMessageError-sc-1bgs808-7";

  it("Email errado", () => {
    cy.visit("/");

    cy.get(inputEmail).type("teste@teste.com");
    cy.get(inputPassword).type("123456");
    cy.get(buttonSubmit).click();

    cy.contains("Digite um e-mail válido;").should("to.have.length", 1)
  });

  it("Password errado", () => {
    cy.visit("/");

    cy.get(inputEmail).type("ronaldo@ronaldo.com");
    cy.get(inputPassword).type("456789");
    cy.get(buttonSubmit).click();

    cy.contains("Password errado").should("to.have.length", 1)
  });

  it("Login sucesso", () => {
    cy.visit("/");

    cy.get(inputEmail).type("ronaldo@ronaldo.com");
    cy.get(inputPassword).type("123456");
    cy.get(buttonSubmit).click();

    cy.contains("Ok, você logou com sucesso!").should("to.have.length", 1)
  });
});
