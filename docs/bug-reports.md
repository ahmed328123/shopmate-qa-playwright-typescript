# Bug Reports

## BUG-001: Product search does not find partial matches

**Severity:** Medium  
**Priority:** High  
**Environment:** Chrome, Firefox, Mobile Chrome  
**Requirement:** FR-003 Product Search  

### Steps to Reproduce
1. Open Products page.
2. Type `speaker` into the search field.

### Expected Result
Bluetooth Speaker should be visible because the query is part of the product name.

### Actual Result
No product is displayed.

### Notes
The search implementation uses `startsWith()` instead of `includes()`.

---

## BUG-002: Cart counter does not update after removing item

**Severity:** Medium  
**Priority:** High  
**Requirement:** FR-007 Remove from Cart  

### Steps to Reproduce
1. Add Desk Lamp to the cart.
2. Open the Cart page.
3. Click Remove.

### Expected Result
The cart counter should change from 1 to 0 immediately.

### Actual Result
The cart counter remains unchanged until page reload/navigation.

---

## BUG-003: Cart total ignores shipping

**Severity:** High  
**Priority:** High  
**Requirement:** FR-008 Total Calculation  

### Steps to Reproduce
1. Add Wireless Mouse to the cart.
2. Open Cart page.
3. Check Subtotal, Shipping, and Total.

### Expected Result
Total = €24.99 + €4.99 = €29.98.

### Actual Result
Total shows €24.99.

---

## BUG-004: Checkout accepts invalid email format

**Severity:** High  
**Priority:** High  
**Requirement:** FR-009 Checkout Validation  

### Steps to Reproduce
1. Open Checkout page.
2. Fill all required fields.
3. Enter `invalid@` in the email field.
4. Submit the form.

### Expected Result
An email validation error should be shown.

### Actual Result
The order is accepted.

---

## BUG-005: Login error message is not visible

**Severity:** Medium  
**Priority:** Medium  
**Requirement:** FR-010 Login  

### Steps to Reproduce
1. Open Login page.
2. Enter invalid email and password.
3. Click Login.

### Expected Result
An error message should be visible.

### Actual Result
The error text is set but remains hidden.

---

## BUG-006: Mobile buttons are too small

**Severity:** Low  
**Priority:** Medium  
**Requirement:** FR-012 Responsive UI  

### Steps to Reproduce
1. Open the app on a mobile viewport.
2. Check the buttons visually.

### Expected Result
Buttons should be comfortable to tap and readable.

### Actual Result
Buttons have reduced padding and font size on mobile.
