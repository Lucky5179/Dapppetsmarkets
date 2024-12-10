"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1023],{91068:function(e){e.exports=JSON.parse('{"Mt":[{"type":"constructor","inputs":[{"name":"baseRatePerYear","type":"uint256","internalType":"uint256"},{"name":"multiplierPerYear","type":"uint256","internalType":"uint256"},{"name":"jumpMultiplierPerYear","type":"uint256","internalType":"uint256"},{"name":"kink_","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"baseRatePerBlock","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"blocksPerYear","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getBorrowRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getSupplyRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"},{"name":"reserveFactorMantissa","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"isInterestRateModel","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"jumpMultiplierPerBlock","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"kink","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"multiplierPerBlock","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"utilizationRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"pure"},{"type":"event","name":"NewInterestParams","inputs":[{"name":"baseRatePerBlock","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"multiplierPerBlock","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"jumpMultiplierPerBlock","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"kink","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}]}')},2418:function(e){e.exports=JSON.parse('{"Mt":[{"type":"constructor","inputs":[{"name":"baseRatePerYear","type":"uint256","internalType":"uint256"},{"name":"multiplierPerYear","type":"uint256","internalType":"uint256"},{"name":"jumpMultiplierPerYear","type":"uint256","internalType":"uint256"},{"name":"kink_","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"baseRatePerTimestamp","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getBorrowRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getSupplyRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"},{"name":"reserveFactorMantissa","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"isInterestRateModel","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"jumpMultiplierPerTimestamp","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"kink","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"multiplierPerTimestamp","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"timestampsPerYear","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"utilizationRate","inputs":[{"name":"cash","type":"uint256","internalType":"uint256"},{"name":"borrows","type":"uint256","internalType":"uint256"},{"name":"reserves","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"pure"},{"type":"event","name":"NewInterestParams","inputs":[{"name":"baseRatePerTimestamp","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"multiplierPerTimestamp","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"jumpMultiplierPerTimestamp","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"kink","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}]}')},27639:function(e){e.exports=JSON.parse('{"Mt":[{"type":"function","name":"_acceptAdmin","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_reduceReserves","inputs":[{"name":"reduceAmount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setComptroller","inputs":[{"name":"newComptroller","type":"address","internalType":"contract ComptrollerInterface"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setInterestRateModel","inputs":[{"name":"newInterestRateModel","type":"address","internalType":"contract InterestRateModel"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setPendingAdmin","inputs":[{"name":"newPendingAdmin","type":"address","internalType":"address payable"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setProtocolSeizeShare","inputs":[{"name":"newProtocolSeizeShareMantissa","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setRedemptionReserveFactorFresh","inputs":[{"name":"newRedemptionReserveFactorMantissa","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"_setReserveFactor","inputs":[{"name":"newReserveFactorMantissa","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"accrualBlockNumber","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"accrueInterest","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"admin","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address payable"}],"stateMutability":"view"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balanceOfUnderlying","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"borrowBalanceCurrent","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"borrowBalanceStored","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"borrowIndex","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"borrowRatePerBlock","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"comptroller","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract ComptrollerInterface"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"exchangeRateCurrent","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"exchangeRateStored","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getAccountSnapshot","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getCash","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"comptroller_","type":"address","internalType":"contract ComptrollerInterface"},{"name":"interestRateModel_","type":"address","internalType":"contract InterestRateModel"},{"name":"initialExchangeRateMantissa_","type":"uint256","internalType":"uint256"},{"name":"name_","type":"string","internalType":"string"},{"name":"symbol_","type":"string","internalType":"string"},{"name":"decimals_","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"interestRateModel","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract InterestRateModel"}],"stateMutability":"view"},{"type":"function","name":"isEthDerivative","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isRToken","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"pendingAdmin","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address payable"}],"stateMutability":"view"},{"type":"function","name":"protocolSeizeShareMantissa","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"reserveFactorMantissa","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"seize","inputs":[{"name":"liquidator","type":"address","internalType":"address"},{"name":"borrower","type":"address","internalType":"address"},{"name":"seizeTokens","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"supplyRatePerBlock","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalBorrows","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalBorrowsCurrent","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"totalReserves","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"dst","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"src","type":"address","internalType":"address"},{"name":"dst","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"event","name":"AccrueInterest","inputs":[{"name":"cashPrior","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"interestAccumulated","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"borrowIndex","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalBorrows","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Borrow","inputs":[{"name":"borrower","type":"address","indexed":false,"internalType":"address"},{"name":"borrowAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"accountBorrows","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalBorrows","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Failure","inputs":[{"name":"error","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"info","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"detail","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"LiquidateBorrow","inputs":[{"name":"liquidator","type":"address","indexed":false,"internalType":"address"},{"name":"borrower","type":"address","indexed":false,"internalType":"address"},{"name":"repayAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"rTokenCollateral","type":"address","indexed":false,"internalType":"address"},{"name":"seizeTokens","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"name":"minter","type":"address","indexed":false,"internalType":"address"},{"name":"mintAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"mintTokens","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"NewAdmin","inputs":[{"name":"oldAdmin","type":"address","indexed":false,"internalType":"address"},{"name":"newAdmin","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"NewComptroller","inputs":[{"name":"oldComptroller","type":"address","indexed":false,"internalType":"contract ComptrollerInterface"},{"name":"newComptroller","type":"address","indexed":false,"internalType":"contract ComptrollerInterface"}],"anonymous":false},{"type":"event","name":"NewMarketInterestRateModel","inputs":[{"name":"oldInterestRateModel","type":"address","indexed":false,"internalType":"contract InterestRateModel"},{"name":"newInterestRateModel","type":"address","indexed":false,"internalType":"contract InterestRateModel"}],"anonymous":false},{"type":"event","name":"NewPendingAdmin","inputs":[{"name":"oldPendingAdmin","type":"address","indexed":false,"internalType":"address"},{"name":"newPendingAdmin","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"NewProtocolSeizeShare","inputs":[{"name":"oldProtocolSeizeShareMantissa","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newProtocolSeizeShareMantissa","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"NewRedemptionReserveFactor","inputs":[{"name":"oldRedemptionReserveFactor","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newRedemptionReserveFactor","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"NewReserveFactor","inputs":[{"name":"oldReserveFactorMantissa","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newReserveFactorMantissa","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Redeem","inputs":[{"name":"redeemer","type":"address","indexed":false,"internalType":"address"},{"name":"redeemAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"redeemTokens","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"RepayBorrow","inputs":[{"name":"payer","type":"address","indexed":false,"internalType":"address"},{"name":"borrower","type":"address","indexed":false,"internalType":"address"},{"name":"repayAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"accountBorrows","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalBorrows","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ReservesAdded","inputs":[{"name":"benefactor","type":"address","indexed":false,"internalType":"address"},{"name":"addAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newTotalReserves","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ReservesReduced","inputs":[{"name":"admin","type":"address","indexed":false,"internalType":"address"},{"name":"reduceAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newTotalReserves","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}]}')}}]);