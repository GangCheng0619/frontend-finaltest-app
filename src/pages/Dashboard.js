import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const [mobileView, setMobileView] = useState(false);
  const [drowdownFlag, setDrowdownFlag] = useState(false);
  const [modalFlag, setModalflag] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 425
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  });

  const handleModal = () => {
    setModalflag(!modalFlag);
  };

  function mobileMenuButton() {
    drowdownFlag ? setDrowdownFlag(false) : setDrowdownFlag(true);
  }
  return (
    <div>
      <div className="x-header">
        <h2>My Wallet</h2>
        {!mobileView ? (
          <div className="x-header-menubar">
            <div className="x-header-menubar-item">
              <span>Balance</span>
            </div>
            <div className="x-header-menubar-item">
              <span>Lightning</span>
            </div>
            <div className="x-header-menubar-item">
              <span>Transactions</span>
            </div>
            <div className="x-header-menubar-item">
              <span>Addresses</span>
            </div>
          </div>
        ) : (
          <div
            className="icon x-header-link-hamburger"
            data-toggle="dropdown"
            onClick={mobileMenuButton}
          >
            <GiHamburgerMenu style={{ width: "30px", height: "30px" }} />
          </div>
        )}
      </div>
      <div className="x-body">
        <div className="x-network-section">
          <div className="x-network-section-balance">
            <div className="x-network-section-balance-amount">
              <span className="x-font-small">Total balance</span>
              <h6>915.39 USD</h6>
            </div>
            <span className="x-font-small">
              Take the tour to understand your wallet better
            </span>
          </div>
          <div className="row x-network-section-cardline">
            <div className="col-lg-4 col-md-10 col-sm-10 col-xs-12 x-network-section-card-outline">
              <div className="x-network-section-card">
                <div className="x-network-section-card-netname">
                  <span className="x-font-coinname">Bitcoin</span>
                  <span>Marketplace: 49,392,62 USD</span>
                </div>
                <div className="x-network-section-card-netbalance">
                  <span>Current balance</span>
                  <h3>0.00002192 BTC</h3>
                  <div className="x-network-section-card-netbalance-third">
                    <span>1.08 USD</span>
                    <span>Security Deposit: 0.005 BTC</span>
                  </div>
                </div>
                <div className="x-network-section-card-operation">
                  <div className="col-md-4 x-network-section-card-btn">
                    Send
                  </div>
                  <div
                    className="col-md-4 x-network-section-card-btn"
                    onClick={handleModal}
                  >
                    Receive
                  </div>
                  <div className="x-network-section-card-btn2">•••</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 col-xs-12 x-network-section-card-outline">
              <div className="x-network-section-card">
                <div className="x-network-section-card-netname">
                  <span className="x-font-coinname">Tether</span>
                  <span>Marketplace: 12554.00 USD</span>
                </div>
                <div className="x-network-section-card-netbalance">
                  <span>Current balance</span>
                  <h3>912.1210043 USDT</h3>
                  <div className="x-network-section-card-netbalance-third">
                    <span>914.08 USD</span>
                  </div>
                </div>
                <div className="x-network-section-card-operation">
                  <div className="col-md-4 x-network-section-card-btn">
                    Send
                  </div>
                  <div
                    className="col-md-4 x-network-section-card-btn"
                    onClick={handleModal}
                  >
                    Receive
                  </div>
                  <div className="x-network-section-card-btn2">•••</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 col-xs-12 x-network-section-card-outline">
              <div className="x-network-section-card">
                <div className="x-network-section-card-netname">
                  <span className="x-font-coinname">Ethereum</span>
                  <span>Marketplace: 4,223.6 USD</span>
                </div>
                <div className="x-network-section-card-netbalance">
                  <span>Current balance</span>
                  <h3>0 ETH</h3>
                  <div className="x-network-section-card-netbalance-third">
                    <span>0 USD</span>
                  </div>
                </div>
                <div className="x-network-section-card-operation">
                  <div className="col-md-4 x-network-section-card-btn">
                    Send
                  </div>
                  <div
                    className="col-md-4 x-network-section-card-btn"
                    onClick={handleModal}
                  >
                    Receive
                  </div>
                  <div className="x-network-section-card-btn2">•••</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="x-transactions-section">
          <span className="x-font-transaction">Latest transactions</span>
          <div className="x-transactions-section-content">
            <div className="x-transactions-section-content-header">
              <span className="x-font-smallest">TRANSACTION</span>
              <span className="x-font-smallest">DETAILS</span>
              <span className="x-font-smallest">STATUS</span>
              <span className="x-font-smallest">AMOUNT</span>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
            <div className="x-transactions-section-content-box">
              <div className="x-transactions-section-content-box-complex">
                <span>Send Out</span>
                <b>Received</b>
              </div>
              <span>
                Sent to <span className="x-font-colored">YernKanyyu324</span> in{" "}
                <span className="x-font-colored">trade wAGmxENYQoo</span>.
              </span>
              <div className="x-transactions-section-content-box-button">
                Completed
              </div>
              <div className="x-transactions-section-content-box-complex">
                <b>-1,204.17 USDT</b>
                <span>-8,001.62 CNY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalFlag ? (
        <div className="s-modal">
          <section className="s-modal-main">
            <div className="s-modal-header">
              <div className="s-modal-title">Recieve Tether</div>
              <img
                className="s-modal-close"
                onClick={handleModal}
                src="/images/close.png"
                alt="Close"
              />
            </div>
            <div className="s-modal-body">
              <div className="s-modal-qr">
                <img src="/images/qr.png" alt="QR code" />
              </div>
              <div className="s-modal-address-title">Your ERC-20 address</div>
              <div className="s-modal-content s-Common-Font-Color">
                Use this address to deposit ERC-20
              </div>
              <div className="s-modal-address s-Common-Font-Color">
                0x856kf89hj593769587484
              </div>
              <div className="s-modal-copy-button">Copy address</div>
            </div>
            <div className="s-modal-footer">
              <div className="s-modal-footer-content">
                <div className="s-Common-Font-Color">
                  <span className=".s-modal-font-weight-700">
                    Remember to send only Tether (ERC-20) to this address.
                  </span>
                  <span>
                    Don't send any other currencies to this address as you may
                    not be able to retrieve these funds.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
