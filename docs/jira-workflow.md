# Jira Workflow Example

## Board Columns
1. Backlog
2. To Do
3. In Progress
4. In Review
5. Done

## Example User Stories

### STORY-001 Product Search
As a customer, I want to search for products by name so that I can find items quickly.

**Acceptance Criteria**
- Search supports full product names.
- Search supports partial product names.
- No-results message appears when no matching products exist.

### STORY-002 Shopping Cart
As a customer, I want to add and remove products from my cart so that I can manage my order before checkout.

**Acceptance Criteria**
- Cart counter updates after adding an item.
- Cart counter updates after removing an item.
- Cart page shows product name, price, subtotal, shipping, and total.

### STORY-003 Checkout
As a customer, I want checkout validation so that incorrect order data is not submitted.

**Acceptance Criteria**
- Required fields are validated.
- Invalid email formats are rejected.
- Valid data shows a success message.

## Example Bug Ticket Format

**Title:** Cart total ignores shipping  
**Type:** Bug  
**Priority:** High  
**Severity:** High  
**Environment:** Chrome Desktop  
**Steps:** Add Wireless Mouse, open Cart, check Total.  
**Expected:** Total is €29.98.  
**Actual:** Total is €24.99.  
**Attachment:** Screenshot, Playwright trace, console logs if available.
