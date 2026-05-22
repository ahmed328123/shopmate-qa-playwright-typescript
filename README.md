# ShopMate QA Project

A complete QA portfolio project for **Manual Testing + Playwright Test Automation with TypeScript**.

This project includes:
- A demo e-commerce website
- Requirements documentation
- Manual test cases
- Bug reports
- Playwright automated tests
- Page Object Model
- GitHub Actions CI workflow

## Tech Stack

- HTML, CSS, JavaScript
- Playwright
- TypeScript
- Page Object Model
- GitHub Actions

## Project Structure

```text
shopmate-qa-project/
├── app/
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── contact.html
│   └── assets/
├── pages/
│   ├── HomePage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
├── docs/
├── .github/workflows/
├── package.json
└── playwright.config.ts
```

## How to Run

```bash
npm install
npm run install:browsers
npm test
```

To run tests in headed mode:

```bash
npm run test:headed
```

To open the Playwright HTML report:

```bash
npm run report
```

## Manual Testing Documentation

See the `docs` folder:
- `requirements.md`
- `test-cases.md`
- `bug-reports.md`
- `jira-workflow.md`

## Known Intentionally Injected Bugs

This application intentionally contains several bugs to demonstrate QA skills:
- Product search partial matching bug
- Cart counter update bug
- Total calculation bug
- Checkout email validation bug
- Login error visibility bug
- Mobile button usability issue

Some automated tests are intentionally written to fail because they validate expected business behavior and reveal these known bugs.

## CV Description

**ShopMate QA Project**  
Manual Testing and Playwright Test Automation with TypeScript

- Created a demo e-commerce web application for structured QA testing.
- Designed requirements, manual test cases, bug reports, and Jira-style documentation.
- Automated end-to-end tests with Playwright, TypeScript, and Page Object Model.
- Covered product search, cart, checkout validation, login, contact form, and responsive UI.
