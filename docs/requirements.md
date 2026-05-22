# ShopMate Requirements

## Project Goal
ShopMate is a demo e-commerce website created for a QA portfolio project. The goal is to demonstrate manual testing, bug reporting, Playwright automation, TypeScript skills, Page Object Model, and CI execution.

## Functional Requirements

### FR-001 Home Page
The application shall display a home page with a clear heading, short description, and navigation links to Products, Cart, Login, and Contact.

### FR-002 Product List
The application shall display a list of products with product name, description, price, and an Add to cart button.

### FR-003 Product Search
The user shall be able to search products by full or partial product name.

### FR-004 Category Filter
The user shall be able to filter products by category.

### FR-005 Add to Cart
The user shall be able to add products to the cart. The cart counter shall update immediately after adding a product.

### FR-006 Cart Page
The cart page shall display all added products with name, price, remove button, subtotal, shipping, and total.

### FR-007 Remove from Cart
The user shall be able to remove an item from the cart. The cart counter and totals shall update immediately.

### FR-008 Total Calculation
The total price shall equal subtotal plus shipping.

### FR-009 Checkout Validation
The checkout form shall validate required fields and email format before placing an order.

### FR-010 Login
The login form shall accept valid test credentials and display an error for invalid credentials.

### FR-011 Contact Form
The contact form shall require name, email, and message before successful submission.

### FR-012 Responsive UI
The application shall be usable on desktop and mobile screens.

## Test Credentials
Valid login:
- Email: qa@example.com
- Password: Password123!

## Known Intentionally Injected Bugs
- BUG-001: Product search does not find partial matches unless the product name starts with the query.
- BUG-002: Cart counter does not update immediately after removing an item.
- BUG-003: Cart total ignores shipping.
- BUG-004: Checkout accepts weak invalid email formats such as invalid@.
- BUG-005: Login error message is not visible for invalid credentials.
- BUG-006: Mobile buttons are too small and may fail usability/accessibility expectations.
