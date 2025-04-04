import React, { useState } from "react";
import payStyles from "./paySection.module.css";

//models
import { PayProps } from "../../models/pay/payView";

//controllers
import { formatNumber } from "../../controllers/services/helpers/formatPriceController";
import { Navbar } from "../common/components/Navbar";

const PayView: React.FC<PayProps> = ({
  cart,
  isLogged,
  membership,
  onLogout,
  setCart,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );
  const tax = subtotal * 0.16; // 16% tax
  const total = subtotal + tax;

  const handlePayment = () => {
    setIsProcessing(true);

    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      alert("¡Pago realizado con éxito!");
      setCart([]);
    }, 1500);
  };

  return (
    <div>
      <header>
        <Navbar
          isLogged={isLogged}
          onLogout={onLogout}
          cart={cart}
          setCart={setCart}
          theme="dark"
          membership={membership}
        />
      </header>
      <div className={payStyles.paymentContainer}>
        <div className={payStyles.paymentCard}>
          <h2 className={payStyles.paymentTitle}>Purchase summary</h2>

          {cart.length === 0 ? (
            <div className={payStyles.emptyCart}>
              <p>Your car is empty</p>
            </div>
          ) : (
            <>
              <div className={payStyles.cartItems}>
                {cart.map((item, index) => (
                  <div key={index} className={payStyles.cartItem}>
                    <div className={payStyles.itemInfo}>
                      <h3>{item.Title}</h3>
                    </div>
                    <div className={payStyles.itemPricing}>
                      <p>
                        {item.quantity} x ${formatNumber(item.Price)}
                      </p>
                      <p className={payStyles.itemTotal}>
                        ${formatNumber(item.Price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={payStyles.paymentSummary}>
                <div className={payStyles.summaryRow}>
                  <span>Subtotal:</span>
                  <span>${formatNumber(subtotal)}</span>
                </div>
                <div className={payStyles.summaryRow}>
                  <span>Taxes (16%):</span>
                  <span>${formatNumber(tax)}</span>
                </div>
                <div
                  className={`${payStyles.summaryRow} ${payStyles.totalRow}`}
                >
                  <span>Total:</span>
                  <span className={payStyles.totalAmount}>
                    $
                    {membership
                      ? formatNumber(total * 0.9)
                      : formatNumber(total)}
                  </span>
                </div>
              </div>

              <div className={payStyles.paymentActions}>
                {!isLogged ? (
                  <div className={payStyles.loginPrompt}>
                    <p>Sign in to continue with your purchase</p>
                    <button className={payStyles.loginButton}>Sign In</button>
                  </div>
                ) : (
                  <div className={payStyles.paymentOptions}>
                    <div className={payStyles.paymentMethod}>
                      <h3>Payment Methods</h3>
                      <div className={payStyles.cardOptions}>
                        <label className={payStyles.cardOption}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            defaultChecked
                          />
                          <span className={payStyles.cardIconVisa}></span>
                          <span>Visa ending in 4242</span>
                        </label>
                        <label className={payStyles.cardOption}>
                          <input type="radio" name="paymentMethod" />
                          <span className={payStyles.cardIconMastercard}></span>
                          <span>Mastercard ending in 5555</span>
                        </label>
                        <button className={payStyles.addCardButton}>
                          + Add new payment method
                        </button>
                      </div>
                    </div>

                    <button
                      className={payStyles.payButton}
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Pay Now"}
                    </button>

                    <p className={payStyles.securePayment}>
                      🔒 secure and encrypted payment
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {isLogged && (
          <div className={payStyles.userActions}>
            <button className={payStyles.continueShoppingButton}>
              Continue shopping
            </button>
            <button className={payStyles.logoutButton} onClick={onLogout}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayView;
