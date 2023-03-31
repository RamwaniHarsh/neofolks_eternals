import React from 'react'
// import "../../../styles/payment.css"
import { Link } from "react-router-dom";
import "../styles/payment.css"
const payment = () => {
  return (
    <div>
        <div class="pspdfkit-header">
      <div class="header-columns">
        <div class="logotype">
          <p>Company</p>
        </div>

        <div>
          <p>[Company Info]</p>
        </div>
      </div>
    </div>

    <div class="page">
      <div>
        <h2>Invoice #</h2>
      </div>

      <div class="intro-table">
        <div class="intro-form intro-form-item">
          <p class="intro-table-title">Billed To:</p>
          <p>
            Company Ltd.<br />
            Address<br />
            Country<br />
            VAT ID: ATU12345678
          </p>
        </div>

        <div class="intro-form">
          <div class="intro-form-item-border">
            <p class="intro-table-title">Payment Date:</p>
            <p>November 22nd 2021</p>
          </div>

          <div class="intro-form-item-border">
            <p class="intro-table-title">Payment Method:</p>
            <p>Bank Transfer</p>
          </div>
        </div>
      </div>

      <div class="table-box">
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr class="heading">
              <td>Description</td>
              <td>QTY</td>
              <td>Unit Price</td>
              <td>Total</td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="summary-box">
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr class="item">
              <td></td>
              <td>Subtotal:</td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td>Discount:</td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td>Subtotal Less Discount:</td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td>Tax Rate:</td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td>Total Tax:</td>
              <td></td>
            </tr>

            <tr class="item">
              <td></td>
              <td>Shipping/Handling:</td>
              <td></td>
            </tr>

            <tr class="no-border-item">
              <td></td>
              <td>Total Due:</td>
              <td></td>
            </tr>

            <tr class="total">
              <td></td>
              <td>Amount Paid:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="signerr">
        <div class="signerr-item"></div>

        <div class="signerr-item">
          <label for="signature" class="label">John Appleseed, CEO</label>
          <input type="text" id="signature" class="border" value="Sign Here" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default payment
