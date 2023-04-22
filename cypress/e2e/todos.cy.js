import DOM from '../../src/constants/dom';

const SERVER_URL = 'http://localhost:4173/';

describe('Test Todo Page', () => {
  const clickOnCreateTaskButton = () => {
    cy.get(`#${DOM.Button.CREATE_TASK}`)
      .should('exist')
      .should('contain.text', 'Create Task')
      .click();
  };

  const createTaskFromPopup = (todoTaskText) => {
    const popupTask = cy.get('[data-test-id="task-popup"]');

    popupTask.should('exist').should('be.visible');

    cy.get('[data-id="inpTitle"]')
      .should('exist')
      .should('have.value', '')
      .type(todoTaskText);

    cy.get('[data-id="btnConfirm"]')
      .should('exist')
      .should('contain.text', 'Create')
      .click();
  };

  beforeEach(() => {
    cy.visit(SERVER_URL);
    cy.url().should('include', SERVER_URL);
    cy.intercept('**TaskPopup**').as('getTaskPopup');
  });

  it('user open main page and create task', () => {
    cy.get(`#${DOM.Popup.CONTAINER}`)
      .should('exist')
      .should('have.class', 'hidden');

    const todoTaskText = 'Welcome Task';
    clickOnCreateTaskButton('Welcome Task');

    cy.get(`#${DOM.Popup.CONTAINER}`)
      .should('exist')
      .should('have.class', 'hidden')
      .find('.spinner')
      .should('exist');

    cy.wait('@getTaskPopup');

    createTaskFromPopup();

    cy.get('[data-test-id="tasks-column"]')
      .should('exist')
      .children()
      .should('have.length', 2)
      .find('[data-id="templateTaskTitle"]')
      .should('contain.text', todoTaskText);
  });
  it.only('user create tasks and delete one', () => {
    clickOnCreateTaskButton();
    cy.wait('@getTaskPopup');
    const todoTaskText = 'Welcome Task';
    createTaskFromPopup(todoTaskText);
  });
});
