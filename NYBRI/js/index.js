var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.currentNavItem = 'page2';
    
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
        creditCardFees: 0,
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

    $scope.calculateTotal = function () {
        $scope.total = 0;
        for (var weight in $scope.weights) {
            $scope.total += parseInt($scope.weights[weight]);
        }
        return $scope.total;
    };

    var bankInfo = [{
        bankName: 'bankOfAmerica',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 2,
            acceptAltId: 2,
            wireTransferCost: 4,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 1,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 1,
            percentCommColor: 2
            
        }
  }, {
        bankName: 'hsbc',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 4,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 3,
            savingsFees: 5,
            overdraft: 5,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 1,
            acceptAltId: 3,
            wireTransferCost: 5,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 1,
            loanAcceptLatino: 1,
            loanAcceptBlack: 1,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 1,
            percentCommColor: 2            
        }
  }, {
        bankName: 'santander',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 3,
            onlineBankings: 1,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 3,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 3,
            creditCardFees: 4,
            acceptAltId: 2,
            wireTransferCost: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 4,
            percentCommColor: 2            
        }
  }, {
        bankName: 'jpMorganChase',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 5,
            creditCards: 3,
            creditCardFees: 2,
            acceptAltId: 3,
            wireTransferCost: 4,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 3,
            loanAcceptLatino: 3,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 3,
        }
  }, {
        bankName: 'citibank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 2,
            overdraft: 5,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 4,
            acceptAltId: 2,
            wireTransferCost: 4,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 4,
            loanAcceptLatino: 3,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 3
        }
  }, {
        bankName: 'capitalOne',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 3,
            onlineBankings: 5,
            atmFees: 5,
            checkingFees: 4,
            savingsFees: 5,
            overdraft: 4,
            overdraftLimit: 5,
            creditCards: 1,
            creditCardFees: 4,
            acceptAltId: 1,
            wireTransferCost: 4,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 1,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 2,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 2,
            percentCommColor: 3
        }
  }, {
        bankName: 'keyBank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 4,
            onlineBankings: 4,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 1,
            creditCards: 5,
            creditCardFees: 4,
            acceptAltId: 1,
            wireTransferCost: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 2,
            loanAcceptLatino: 3,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 2,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 2,
            percentCommColor: 1
        }
  }, {
        bankName: 'mt',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 3,
            onlineBankings: 2,
            atmFees: 1,
            checkingFees: 5,
            savingsFees: 1,
            overdraft: 1,
            overdraftLimit: 2,
            creditCards: 5,
            creditCardFees: 4,
            acceptAltId: 1,
            wireTransferCost: 3,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 5,
            loanAcceptLatino: 5,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 5,
            percentCommColor: 1
        }
  }, {
        bankName: 'tdBank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 2,
            onlineBankings: 3,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 3,
            creditCards: 4,
            creditCardFees: 4,
            acceptAltId: 2,
            wireTransferCost: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 2,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 2,
            percentCommColor: 2
        }
  }, {
        bankName: 'firstNiagra',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 4,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 2,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 5,
            acceptAltId: 4,
            wireTransferCost: 4,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 5,
            loanAcceptLatino: 5,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 5,
            percentCommColor: 1
        }
  }, {
        bankName: 'communityBank',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 1,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 2,
            savingsFees: 5,
            overdraft: 1,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 2,
            acceptAltId: 2,
            wireTransferCost: 2,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 5,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers:5,
            loanAcceptLowComm: 5,
            percentCommColor: 1
        }
  }, {
        bankName: 'nyCommunCommer',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 3,
            onlineBankings: 1,
            atmFees: 2,
            checkingFees: 4,
            savingsFees: 3,
            overdraft: 2,
            overdraftLimit: 1,
            creditCards: 3,
            creditCardFees: 2,
            acceptAltId: 1,
            wireTransferCost: 3,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 4,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 2
        }
  }, {
        bankName: 'nbt',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 5,
            atmFees: 5,
            checkingFees: 4,
            savingsFees: 5,
            overdraft: 1,
            overdraftLimit: 2,
            creditCards: 5,
            creditCardFees: 1,
            acceptAltId: 1,
            wireTransferCost: 3,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 3,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 3,
            loanAcceptLowComm: 2,
            percentCommColor: 1
        }
  }, {
        bankName: 'citizensBank',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 4,
            onlineBankings: 2,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 1,
            creditCards: 4,
            creditCardFees: 1,
            acceptAltId: 3,
            wireTransferCost: 5,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 3,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 4,
            percentLowBorrowers: 4,
            loanAcceptLowComm: 4,
            percentCommColor: 1
        }
  }, {
        bankName: 'trustCo',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 1,
            overdraftLimit: 4,
            creditCards: 5,
            creditCardFees: 3,
            acceptAltId: 5,
            wireTransferCost: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 4,
            loanAcceptLatino: 5,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 4,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 4,
            percentCommColor: 1
        }
  }, {
        bankName: 'astoriaBank',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 3,
            atmFees: 3,
            checkingFees: 3,
            savingsFees: 2,
            overdraft: 2,
            overdraftLimit: 4,
            creditCards: 5,
            creditCardFees: 2,
            acceptAltId: 2,
            wireTransferCost: 5,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 3,
            loanAcceptLowComm: 4,
            percentCommColor: 2
        }
  }, {
        bankName: 'wellsFargo',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 1,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 4,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 3,
            creditCardFees: 2,
            acceptAltId: 2,
            wireTransferCost: 5,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 2
        }
  }, {
        bankName: 'appleBank',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 5,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 3,
            savingsFees: 3,
            overdraft: 2,
            overdraftLimit: 2,
            creditCards: 3,
            creditCardFees: 2,
            acceptAltId: 1,
            wireTransferCost: 4,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 2,
            loanAcceptLatino: 2,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 3,
            percentCommColor: 5
        }
  }, {
        bankName: 'peoplesUnited',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 1,
            onlineBankings: 1,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 1,
            acceptAltId: 2,
            wireTransferCost: 4,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 1,
            loanAcceptLatino: 1,
            loanAcceptBlack: 1,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 1,
            percentCommColor: 1
        }
  }];

    $scope.reset = function () {
        for (var weight in $scope.weights) {
            if ($scope.weights[weight] === "" || isNaN($scope.weights[weight]) || $scope.weights[weight] < 0) {
                $scope.weights[weight] = 0;
            }
        }
    };

    $scope.overlayShow = function() {
        
    }
    
    $scope.finalScore = function () {
        $scope.bankOfAmerica = [];
        $scope.hsbc = [];
        $scope.santander = [];
        $scope.jpMorganChase = [];
        $scope.citibank = [];
        $scope.capitalOne = [];
        $scope.keyBank = [];
        $scope.mt = [];
        $scope.tdBank = [];
        $scope.firstNiagra = [];
        $scope.communityBank = [];
        $scope.nyCommunCommer = [];
        $scope.nbt = [];
        $scope.citizensBank = [];
        $scope.trustCo = [];
        $scope.astoriaBank = [];
        $scope.wellsFargo = [];
        $scope.appleBank = [];
        $scope.peoplesUnited = [];

        for (var x = 0; x < bankInfo.length; x++) {
            $scope.score = 0;
            for (var score in bankInfo[x].bankRatings) {
                $scope.current = bankInfo[x].bankName;
                $scope.score = parseInt(bankInfo[x].bankRatings[score] / 5 * $scope.weights[score]);
                $scope[$scope.current].push($scope.score);
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

        $scope.allScores = [
            {bankname: 'Bank of America', score: $scope.oneScore($scope.bankOfAmerica)},
            {bankname: 'HSBC', score: $scope.oneScore($scope.hsbc)},
            {bankname: 'Santander', score: $scope.oneScore($scope.santander)},
            {bankname: 'JP Morgan Chase', score: $scope.oneScore($scope.jpMorganChase)},
            {bankname: 'Citibank', score: $scope.oneScore($scope.citibank)},
            {bankname: 'Capital One', score: $scope.oneScore($scope.capitalOne)},
            {bankname: 'KeyBank', score: $scope.oneScore($scope.keyBank)},
            {bankname: 'M&T', score: $scope.oneScore($scope.mt)},
            {bankname: 'TD Bank', score: $scope.oneScore($scope.tdBank)},
            {bankname: 'First Niagra', score: $scope.oneScore($scope.firstNiagra)},
            {bankname: 'Community Bank', score: $scope.oneScore($scope.communityBank)},
            {bankname: 'NY Community & Commercial', score: $scope.oneScore($scope.nyCommunCommer)},
            {bankname: 'NBT', score: $scope.oneScore($scope.nbt)},
            {bankname: 'Citizens Bank', score: $scope.oneScore($scope.citizensBank)},
            {bankname: 'TrustCO', score: $scope.oneScore($scope.trustCo)},
            {bankname: 'Astoria Bank', score: $scope.oneScore($scope.astoriaBank)},
            {bankname: 'Wells Fargo', score: $scope.oneScore($scope.wellsFargo)},
            {bankname: 'Apple Bank', score: $scope.oneScore($scope.appleBank)},
            {bankname: 'Peoples United', score: $scope.oneScore($scope.peoplesUnited)} 
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

});