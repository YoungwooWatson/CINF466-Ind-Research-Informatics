var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.currentNavItem = 'page2';

    //========================================
	// updated for ranking button : 03/14/2024
	//========================================
	
	$scope.showme = false;
	$scope.showBankAlert = false; // This will control the bank scores alert
	$scope.showFintechAlert = false; // This will control the fintech scores alert

	
	//========================================
	// End of new updates : 03/14/2024
	//========================================
    
    $scope.weights = {
        numBraches: 0,
        branchLocDistribution: 0,
        onlineBankings: 0,
        atmFees: 0,
        checkingFees: 0,
        savingsFees: 0,
        overdraft: 0,
        overdraftLimit: 0,
        creditCards: 0,
        customerService: 0,                  // **JC - Changed to "creditCardFees" to "customerService"
        acceptAltId: 0,
        wireTransferCost: 0,
        loanOriginationMarketShare: 0,
        loanAcceptNy: 0,
        loanAcceptLatino: 0,
        loanAcceptBlack: 0,
        loanAcceptLowIncome: 0,
        percentLowBorrowers: 0,
        loanAcceptLowComm: 0,
        percentCommColor: 0
    };
	
	$scope.tWeights = {                                   // This will be used for the "ng-model" in the Fintech HTML area
			peerToPeerBankin: 0,
			encryptTrans: 0,
			linkExternalAccount: 0,
			linkExternalCreditCard: 0,
			fraudProtection: 0,
			oneTouchLogin: 0,
			paycheckAdvance: 0,
			contactlessPayment: 0,
			twoFactorAuth: 0,
			transactionFees: 0,
			creditBuilding: 0,
			creditCardOffering: 0,
			overdraftFees: 0,
			creditCardPaymentFees: 0,
			cryptoPurchaseOptions: 0,
			cashAdvance: 0
		
	}
	
	$scope.rankingType = "";                              // This variable is used as text for which ranking results you get (Bank vs Fintech) [~Line 26 in ranking.html] 
	

    $scope.calculateTotal = function () {
        $scope.total = 0;
        for (var weight in $scope.weights) {
            $scope.total += parseInt($scope.weights[weight]);
        }
        return $scope.total;
    };
	
	// New Function For tWeights stuff
	$scope.calculateTotal2 = function () {
        $scope.total = 0;
        for (var weight in $scope.tWeights) {
            $scope.total += parseInt($scope.tWeights[weight]);
        }
        return $scope.total;
    };
	
	


	// ==============================================================
    // New VARIABLES
	// ==============================================================
	
	var techInfo = [{
		bankName: 'payPal',                               // Be sure to keep the names the identical to the variables below in the "finalScore2()" function or else it will throw an NULL error
		bankRatings: {
			peerToPeerBankin: 5,
			encryptTrans: 6.25,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 6.25,
			fraudProtection: 6.25,
			oneTouchLogin: 6.25,
			paycheckAdvance: 0,
			contactlessPayment: 6.25,
			twoFactorAuth: 6.25,
			transactionFees: 5,
			creditBuilding: 0,
			creditCardOffering: 6.25,
			overdraftFees: 6.25,
			creditCardPaymentFees: 3.75,
			cryptoPurchaseOptions: 2.5,
			cashAdvance: 0                                // This was marked BLANK in the spread sheet, so keep an eye on this one and be sure to ask the client for clarification...
			
	}},
	
	{
		bankName: 'applePay',
		bankRatings: {
			peerToPeerBankin: 5,
			encryptTrans: 6.25,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 6.25,
			fraudProtection: 6.25,
			oneTouchLogin: 3.75,
			paycheckAdvance: 0,
			contactlessPayment: 3.75,
			twoFactorAuth: 6.25,
			transactionFees: 6.25,
			creditBuilding: 6.25,
			creditCardOffering: 6.25,
			overdraftFees: 2.5,
			creditCardPaymentFees: 2.5,
			cryptoPurchaseOptions: 3.75,
			cashAdvance: 0
		
	}},
	
	{
		bankName: 'googlePay',
		bankRatings: {
			peerToPeerBankin: 4.25,
			encryptTrans: 6.25,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 3.75,
			fraudProtection: 6.25,
			oneTouchLogin: 3.75,
			paycheckAdvance: 0,
			contactlessPayment: 6.25,
			twoFactorAuth: 6.25,
			transactionFees: 0,
			creditBuilding: 0,
			creditCardOffering: 2.5,
			overdraftFees: 2.5,
			creditCardPaymentFees: 3.75,
			cryptoPurchaseOptions: 6.25,
			cashAdvance: 0
		
	}},
	
	{
		bankName: 'venmo',
		bankRatings: {
			peerToPeerBankin: 4.25,
			encryptTrans: 0,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 6.25,
			fraudProtection: 6.25,
			oneTouchLogin: 0,
			paycheckAdvance: 0,
			contactlessPayment: 6.25,
			twoFactorAuth: 6.25,
			transactionFees: 2.5,
			creditBuilding: 0,
			creditCardOffering: 2.5,
			overdraftFees: 0,
			creditCardPaymentFees: 2.5,
			cryptoPurchaseOptions: 2,
			cashAdvance: 2.5
		
	}},
	
	{
		bankName: 'cashApp',
		bankRatings: {
			peerToPeerBankin: 6.25,
			encryptTrans: 6.25,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 6.25,
			fraudProtection: 6.25,
			oneTouchLogin: 6.25,
			paycheckAdvance: 0,
			contactlessPayment: 0,
			twoFactorAuth: 0,
			transactionFees: 3.75,
			creditBuilding: 0,
			creditCardOffering: 0,
			overdraftFees: 0,
			creditCardPaymentFees: 2.5,
			cryptoPurchaseOptions: 3,
			cashAdvance: 0
		
	}},
	
	{
		bankName: 'chime',
		bankRatings: {
			peerToPeerBankin: 6.25,
			encryptTrans: 6.25,
			linkExternalAccount: 2.5,
			linkExternalCreditCard: 0,
			fraudProtection: 3.75,
			oneTouchLogin: 0,
			paycheckAdvance: 3.75,
			contactlessPayment: 6.25,
			twoFactorAuth: 3.75,
			transactionFees: 3.75,
			creditBuilding: 3.75,
			creditCardOffering: 0,
			overdraftFees: 1.25,
			creditCardPaymentFees: 0,
			cryptoPurchaseOptions: 1.25,
			cashAdvance: 0
		
	}},
	
	{
		bankName: 'moneyLion',
		bankRatings: {
			peerToPeerBankin: 1,
			encryptTrans: 6.25,
			linkExternalAccount: 3.75,
			linkExternalCreditCard: 5,
			fraudProtection: 0,
			oneTouchLogin: 0,
			paycheckAdvance: 6.25,
			contactlessPayment: 0,
			twoFactorAuth: 0,
			transactionFees: 3.75,
			creditBuilding: 5,
			creditCardOffering: 5,
			overdraftFees: 0,
			creditCardPaymentFees: 0,
			cryptoPurchaseOptions: 1.25,
			cashAdvance: 3.5
		
	}},
	
	{
		bankName: 'zelle',
		bankRatings: {
			peerToPeerBankin: 6.25,
			encryptTrans: 6.25,
			linkExternalAccount: 6.25,
			linkExternalCreditCard: 0,
			fraudProtection: 0,
			oneTouchLogin: 0,
			paycheckAdvance: 0,
			contactlessPayment: 0,
			twoFactorAuth: 6.25,
			transactionFees: 6.25,
			creditBuilding: 0,
			creditCardOffering: 0,
			overdraftFees: 0,
			creditCardPaymentFees: 0,
			cryptoPurchaseOptions: .5,
			cashAdvance: 0
		
	}}];
	
	// ==============================================================
	// END OF NEW VARIABLES
	// ==============================================================
	
	
	// **JC - Updated for all new banks, but set their scores to all zeros because we are missing a lot of content. We will add them once we get a solid answer on where the info is. 
	var bankInfo = [{
        bankName: 'bankOfAmerica',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
            
        }
  }, {
        bankName: 'mt',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0  
        }
  }, {
        bankName: 'capitalOne',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0 
        }
  }, {
        bankName: 'ridgewoodSavings',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'citibank',
        bankRatings: {
           numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'satander',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'tdBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'keyBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'citizensBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'flagStarNYCB',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'wellsFargo',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'flushingBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'communityBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'nbtBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'websterBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'jpMorgan',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'tompkinsBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'northwestBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'dimeBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'valleyBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'fiveStarBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'canNationalBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'berkshireBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'applebank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'trustcoBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'chemungTrust',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'firstNationalBank',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }, {
        bankName: 'glensFalls',
        bankRatings: {
            numBraches: 0,
            branchLocDistribution: 0,
            onlineBankings: 0,
            atmFees: 0,
            checkingFees: 0,
            savingsFees: 0,
            overdraft: 0,
            overdraftLimit: 0,
            creditCards: 0,
            customerService: 0,
            acceptAltId: 0,
            wireTransferCost: 0,
            loanOriginationMarketShare: 0,
            loanAcceptNy: 0,
            loanAcceptLatino: 0,
            loanAcceptBlack: 0,
            loanAcceptLowIncome: 0,
            percentLowBorrowers: 0,
            loanAcceptLowComm: 0,
            percentCommColor: 0
        }
  }];

    $scope.reset = function () {
        for (var weight in $scope.weights) {
            if ($scope.weights[weight] === "" || isNaN($scope.weights[weight]) || $scope.weights[weight] < 0) {
                $scope.weights[weight] = 0;
				console.log("Triggered For Reset")
            }
        }
    };
	
	// This function is used to reset the values of the custom Fintech area back to zero if there is no number present
	$scope.reset2 = function () {
        for (var weight in $scope.tWeights) {
            if ($scope.tWeights[weight] === "" || isNaN($scope.tWeights[weight]) || $scope.tWeights[weight] < 0) {
                $scope.tWeights[weight] = 0;
				console.log("Triggered For Reset 2")
            }
        }
    };

    $scope.overlayShow = function() {
        
    }
    
	
	// This function is used for the weight/score calculator on the custom BANK area. Please don't change this too much or you run the risk of bricking the whole system.
    $scope.finalScore = function () {                          
        $scope.rankingType = "Bank Name"; // No touching tthis fineee
		
		// **JC Updated Bank Lists, always make sure it's EXACTLY how the "bankName" appears in the "bankInfo" variable or else it won't work
		$scope.bankOfAmerica = []; 
		$scope.mt = [];
		$scope.capitalOne = [];
		$scope.ridgewoodSavings = [];
		$scope.citibank = [];
		$scope.satander = [];
		$scope.tdBank = [];
		$scope.keyBank = [];
		$scope.citizensBank = [];
		$scope.flagStarNYCB = [];
		$scope.wellsFargo = [];
		$scope.flushingBank = [];
		$scope.communityBank = [];
		$scope.nbtBank = [];
		$scope.websterBank = [];
		$scope.jpMorgan = [];
		$scope.tompkinsBank = [];
		$scope.northwestBank = [];
		$scope.dimeBank = [];
		$scope.valleyBank = [];
		$scope.fiveStarBank = [];
		$scope.canNationalBank = [];
		$scope.berkshireBank = [];
		$scope.applebank = [];
		$scope.trustcoBank = [];
		$scope.chemungTrust = [];
		$scope.firstNationalBank = [];
		$scope.glensFalls = [];


        for (var x = 0; x < bankInfo.length; x++) {                                                    // For all variables in the bank info list...
            $scope.score = 0;                                                                          // set score = 0
            for (var score in bankInfo[x].bankRatings) {                                               // For the score variable in all the ratings in the specific bank...
                $scope.current = bankInfo[x].bankName;                                                 // Grab the bank name
				$scope.score = parseInt(bankInfo[x].bankRatings[score] / 5 * $scope.weights[score]);   // Divide the score by 5 to calculate the weight of the score
				$scope[$scope.current].push($scope.score);                                             // ??? Push the current score to the overall score ???
				
            }
            console.log($scope.current + ": " + $scope[$scope.current]);
        }

        $scope.oneScore = function (bank) {
            var total = 0;
            for (var y = 0; y < bank.length; y++) {
                total += parseInt(bank[y]);
            }
            return total;
        };

        $scope.allScores = [                                                                            // PRINT OUT ALL THE SCORES
            {bankname: 'Bank of America', score: $scope.oneScore($scope.bankOfAmerica)},
			{bankname: 'M & T', score: $scope.oneScore($scope.mt)},
			{bankname: 'Capital One', score: $scope.oneScore($scope.capitalOne)},
			{bankname: 'Ridgewood Savings Bank', score: $scope.oneScore($scope.ridgewoodSavings)},
			{bankname: 'Citibank', score: $scope.oneScore($scope.citibank)},
			{bankname: 'Santander Bank', score: $scope.oneScore($scope.satander)}, // **JC - Double check variable spelling on this one to make sure they match
			{bankname: 'TD Bank', score: $scope.oneScore($scope.tdBank)},
			{bankname: 'Keybank', score: $scope.oneScore($scope.keyBank)},
			{bankname: 'Citizens Bank', score: $scope.oneScore($scope.citizensBank)},
			{bankname: 'Flagstar/NYCB', score: $scope.oneScore($scope.flagStarNYCB)},
			{bankname: 'Wells Fargo', score: $scope.oneScore($scope.wellsFargo)},
			{bankname: 'Flushing Bank', score: $scope.oneScore($scope.flushingBank)},
			{bankname: 'Community Bank', score: $scope.oneScore($scope.communityBank)},
			{bankname: 'NBT Bank', score: $scope.oneScore($scope.nbtBank)},
			{bankname: 'Webster Bank', score: $scope.oneScore($scope.websterBank)},
			{bankname: 'JP Morgan', score: $scope.oneScore($scope.jpMorgan)},
			{bankname: 'Tompkins Community Bank', score: $scope.oneScore($scope.tompkinsBank)},
			{bankname: 'Northwest Bank', score: $scope.oneScore($scope.northwestBank)},
			{bankname: 'Dime Community Bank', score: $scope.oneScore($scope.dimeBank)},
			{bankname: 'Valley National Bank', score: $scope.oneScore($scope.valleyBank)},
			{bankname: 'Five Star Bank', score: $scope.oneScore($scope.fiveStarBank)},
			{bankname: 'The Canandaigua National Bank and Trust Company', score: $scope.oneScore($scope.canNationalBank)},
			{bankname: 'Berkshire Bank', score: $scope.oneScore($scope.berkshireBank)},
			{bankname: 'Apple Bank for Savings', score: $scope.oneScore($scope.applebank)},
			{bankname: 'Trustco Bank', score: $scope.oneScore($scope.trustcoBank)},
			{bankname: 'Chemung Canal Trust Company', score: $scope.oneScore($scope.chemungTrust)},
			{bankname: 'The First National Bank of Long Island', score: $scope.oneScore($scope.firstNationalBank)},
            {bankname: 'Glens Falls National Bank and Trust Company', score: $scope.oneScore($scope.glensFalls)} 
        ];
        
        $scope.createOverlay = function() {
            $scope.className = "noscroll";
            if ($scope.className = "noscroll") {
                $scope.className = "scroll";
            } 
            else {
                $scope.className = "noscroll";
            }
        };
        return $scope.score;
    };
	
	
	
	// ==========================================================================================
	// ============================== NEW FUNCTION -- V1.0 ======================================
	// ==========================================================================================
	

	
	$scope.finalScore2 = function () {                          
        $scope.rankingType = "Fintech Name";
		$scope.payPal = [];                                                                            // Defining Variables For Lists
        $scope.applePay = [];
        $scope.googlePay = [];
        $scope.venmo = [];
        $scope.cashApp = [];
        $scope.chime = [];
        $scope.moneyLion = [];
        $scope.zelle = [];

		//console.log($scope.tWeights)

        for (var x = 0; x < techInfo.length; x++) {                                                    // For all variables in the bank info list...
            $scope.score = 0;                                                                          // set score = 0
            for (var score in techInfo[x].bankRatings) {                                               // For the score variable in all the ratings in the specific bank...
                $scope.current = techInfo[x].bankName;                                                 // Grab the bank name
				$scope.score = parseFloat(techInfo[x].bankRatings[score] / 6.25 * $scope.tWeights[score]).toFixed(2);  
                $scope[$scope.current].push($scope.score);                                             
            }
            console.log($scope.current + ": " + $scope[$scope.current]);                                
			//console.log("")
        }

        $scope.oneScore = function (bank) {                                                            
            var total = 0;                                                                             
            for (var y = 0; y < bank.length; y++) {                                                    
                total += parseFloat(bank[y]);
            }
            return total;
			
        };


        $scope.allScores = [                                                                            // Create a list for all the scores to be displayed.
            {bankname: 'PayPal', score: parseFloat($scope.oneScore($scope.payPal).toFixed(2))},
            {bankname: 'ApplePay', score: parseFloat($scope.oneScore($scope.applePay).toFixed(2))},
            {bankname: 'GooglePay', score: parseFloat($scope.oneScore($scope.googlePay).toFixed(2))},
            {bankname: 'Venmo', score: parseFloat($scope.oneScore($scope.venmo).toFixed(2))},
            {bankname: 'CashApp', score: parseFloat($scope.oneScore($scope.cashApp).toFixed(2))},
            {bankname: 'Chime', score: parseFloat($scope.oneScore($scope.chime).toFixed(2))},
            {bankname: 'MoneyLion', score: parseFloat($scope.oneScore($scope.moneyLion).toFixed(2))},
            {bankname: 'Zelle', score: parseFloat($scope.oneScore($scope.zelle).toFixed(2))}

        ];
		
        
        $scope.createOverlay = function() {
            $scope.className = "noscroll";
            if ($scope.className = "noscroll") {
                $scope.className = "scroll";
            } 
            else {
                $scope.className = "noscroll";
            }
        };
        return $scope.score;
    };
	
    //========================================
	// updated for ranking button : 03/14/2024
	//========================================
	
	$scope.checkAndCalculateBankScores = function () {
		var total = $scope.calculateTotal();
        $scope.showBankAlert = total !== 100; // Show alert if total is not 100
        $scope.showme = total === 100;    // Show results if total is 100

        if ($scope.showme) {
            $scope.finalScore(); // Calculate and display scores if total is 100
        }
    };

    $scope.checkAndCalculateFintechScores = function () {
		var total = $scope.calculateTotal2();
        $scope.showFintechAlert = total !== 100; // Show alert if total is not 100
        $scope.showme = total === 100;    // Show results if total is 100

        if ($scope.showme) {
            $scope.finalScore2(); // Calculate and display scores if total is 100
        }
    };

    
	//========================================
	// End of new updates : 03/14/2024
	//========================================

    //================
    // Additional codes for later uses.
    //To make the aleart messages dissapear as soon as the user starts to enter numbers
    // $scope.hideBankAlert = function() {
    //    $scope.showBankAlert = false;
    // };
    // and add the followings code on ratings.html
    // ng-change="hideBankAlert()" ng-blur="reset()"
    // in all the input field such as
    //<input type="text" ng-model="weights.numBranches" ng-change="hideBankAlert()" ng-blur="reset()">
    //<input type="text" ng-model="weights.onlineBankings" ng-change="hideBankAlert()" ng-blur="reset()">
    //03/14/2024
    //================
	
});