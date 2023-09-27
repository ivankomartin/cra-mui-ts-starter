describe("Hlavná stránka", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("zobrazuje hlavičku s logom", () => {
    cy.get(".App-header").should("be.visible");
    cy.get(".App-logo").should("be.visible").and("have.attr", "alt", "logo");
  });

  it("výzva na úpravu súboru App.tsx", () => {
    cy.get("p").should("contain", "Edit src/App.tsx and save to reload.");
  });

  it("zobrazuje tlačidlá s rôznymi variantami", () => {
    cy.get("button").contains("Text").should("be.visible");
    cy.get("button").contains("Contained").should("be.visible");
    cy.get("button").contains("Outlined").should("be.visible");
  });
});
