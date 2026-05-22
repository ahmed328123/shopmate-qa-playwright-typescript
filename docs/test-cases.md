# Manual Test Cases

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-001 | Open home page | App is running | Open `/index.html` | Home page heading and navigation are visible | High |
| TC-002 | Navigate to products | App is running | Click "Start shopping" | Products page opens | High |
| TC-003 | Product list visible | Products page is open | Check product grid | Four product cards are visible | High |
| TC-004 | Search by partial product name | Products page is open | Search for `speaker` | Bluetooth Speaker is visible | High |
| TC-005 | Filter electronics products | Products page is open | Select category `Electronics` | Only electronics products are visible | Medium |
| TC-006 | Add product to cart | Products page is open | Click Add to cart for Wireless Mouse | Cart counter becomes 1 | High |
| TC-007 | View cart item | Product is added | Open cart page | Added product is listed in cart | High |
| TC-008 | Remove product from cart | Cart has one item | Click Remove | Item disappears and counter becomes 0 | High |
| TC-009 | Verify total calculation | Cart has Wireless Mouse | Open cart page | Total equals subtotal + shipping | High |
| TC-010 | Empty checkout validation | Checkout page is open | Click Place order without data | Required field error appears | High |
| TC-011 | Invalid email checkout validation | Checkout page is open | Enter `invalid@` and valid other fields | Email validation error appears | High |
| TC-012 | Successful checkout | Checkout page is open | Enter valid data and submit | Success message appears | High |
| TC-013 | Successful login | Login page is open | Use valid credentials | Success message appears | Medium |
| TC-014 | Invalid login | Login page is open | Use invalid credentials | Error message appears | Medium |
| TC-015 | Empty contact form | Contact page is open | Submit empty form | Error message appears | Medium |
| TC-016 | Valid contact form | Contact page is open | Fill all fields and submit | Success message appears | Medium |
| TC-017 | Mobile navigation | Mobile viewport | Open home page | Navigation remains visible | Medium |
| TC-018 | Mobile product layout | Mobile viewport | Open products page | Cards stack vertically | Medium |
