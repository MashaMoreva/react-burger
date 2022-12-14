import {
   ingredientClass,
   closeButtonClass,
   tabClass,
   burgerConstructorClass,
   burgerConstructorIngredientClass
} from "../../src/utils/test-constants";

export { }

describe('service is available', function () {
   beforeEach(function () {
      cy.viewport(1920, 1024)
   });

   it('should be available localhost:3000', function () {
      cy.visit('/')
      cy.contains('Соберите бургер')
   });

   it('should open ingredient details', function () {
      cy.get(ingredientClass).first().click()
      cy.contains('Детали ингредиента')
   });

   it('should close ingredient details by button', function () {
      cy.get(closeButtonClass).click();
      cy.visit('/');
   });

   it('should tab', function () {
      cy.get(tabClass).last().click();
      cy.wait(1000).get(tabClass).first().click();
   })

   it('should scroll', function () {
      cy.get('[class^=burger-ingredients-sets_scroll').scrollTo(0, 500).wait(1000)
      cy.get(tabClass).last().click()
   });

   it('should dragndrop ingredients and set bun', function () {
      cy.get(ingredientClass).eq(0).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(4).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(1).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(7).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(11).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(4).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(0).drag(burgerConstructorClass)
   })

   it('should dragndrop constructor', function () {
      cy.get(burgerConstructorIngredientClass).eq(0)
         .drag(burgerConstructorIngredientClass)
      cy.get(burgerConstructorIngredientClass).eq(1)
         .drag(burgerConstructorIngredientClass)
   })

   it('should delete ingredient from constructor', function () {
      cy.get('[class^=constructor-element__action]').eq(2).click()
      cy.get('[class^=burger-constructor_order_list]').eq(4).and('not.exist')
   })

   it('should open order number', function () {
      cy.get('button').contains('Оформить заказ').click()
   });

   it('should authorization', function () {
      const email = 'mmiskova@mail.ru';
      const password = '230618';
      cy.get('input').first().type(email)
      cy.get('input').last().type(password)
      cy.get('button').click();
   })

   it('should open order number', function () {
      cy.wait(1000).get('button').contains('Оформить заказ').click()
   });

   it('should order number visible and close ', function () {
      cy.wait(30000).get('[class^=order-details_order_identifier]').and('exist')
      cy.get(closeButtonClass).click();
      cy.get(burgerConstructorIngredientClass).and('not.exist');
   });
})


