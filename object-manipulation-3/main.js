console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'Player 1',
  hand: []
},
{
  name: 'Player 2',
  hand: []
},
{
  name: 'Player 3',
  hand: []
},
{
  name: 'Player 4',
  hand: []
}];

function playGame(players, numCards) {
  // ERROR MESSAGE IF TOO MANY CARDS //
  if (players.length * numCards >= 52) {
    console.log('Not enough cards in deck to play with number of players and cards per player. Choose less cards or less players.');
    return;
  }

  var cardDeck = [
    {
      rank: 'Ace',
      suit: 'Clubs'
    },
    {
      rank: 2,
      suit: 'Clubs'
    },
    {
      rank: 3,
      suit: 'Clubs'
    },
    {
      rank: 4,
      suit: 'Clubs'
    },
    {
      rank: 5,
      suit: 'Clubs'
    },
    {
      rank: 6,
      suit: 'Clubs'
    },
    {
      rank: 7,
      suit: 'Clubs'
    },
    {
      rank: 8,
      suit: 'Clubs'
    },
    {
      rank: 9,
      suit: 'Clubs'
    },
    {
      rank: 10,
      suit: 'Clubs'
    },
    {
      rank: 'Jack',
      suit: 'Clubs'
    },
    {
      rank: 'Queen',
      suit: 'Clubs'
    },
    {
      rank: 'King',
      suit: 'Clubs'
    },
    {
      rank: 'Ace',
      suit: 'Diamonds'
    },
    {
      rank: 2,
      suit: 'Diamonds'
    },
    {
      rank: 3,
      suit: 'Diamonds'
    },
    {
      rank: 4,
      suit: 'Diamonds'
    },
    {
      rank: 5,
      suit: 'Diamonds'
    },
    {
      rank: 6,
      suit: 'Diamonds'
    },
    {
      rank: 7,
      suit: 'Diamonds'
    },
    {
      rank: 8,
      suit: 'Diamonds'
    },
    {
      rank: 9,
      suit: 'Diamonds'
    },
    {
      rank: 10,
      suit: 'Diamonds'
    },
    {
      rank: 'Jack',
      suit: 'Diamonds'
    },
    {
      rank: 'Queen',
      suit: 'Diamonds'
    },
    {
      rank: 'King',
      suit: 'Diamonds'
    },
    {
      rank: 'Ace',
      suit: 'Hearts'
    },
    {
      rank: 2,
      suit: 'Hearts'
    },
    {
      rank: 3,
      suit: 'Hearts'
    },
    {
      rank: 4,
      suit: 'Hearts'
    },
    {
      rank: 5,
      suit: 'Hearts'
    },
    {
      rank: 6,
      suit: 'Hearts'
    },
    {
      rank: 7,
      suit: 'Hearts'
    },
    {
      rank: 8,
      suit: 'Hearts'
    },
    {
      rank: 9,
      suit: 'Hearts'
    },
    {
      rank: 10,
      suit: 'Hearts'
    },
    {
      rank: 'Jack',
      suit: 'Hearts'
    },
    {
      rank: 'Queen',
      suit: 'Hearts'
    },
    {
      rank: 'King',
      suit: 'Hearts'
    },
    {
      rank: 'Ace',
      suit: 'Spades'
    },
    {
      rank: 2,
      suit: 'Spades'
    },
    {
      rank: 3,
      suit: 'Spades'
    },
    {
      rank: 4,
      suit: 'Spades'
    },
    {
      rank: 5,
      suit: 'Spades'
    },
    {
      rank: 6,
      suit: 'Spades'
    },
    {
      rank: 7,
      suit: 'Spades'
    },
    {
      rank: 8,
      suit: 'Spades'
    },
    {
      rank: 9,
      suit: 'Spades'
    },
    {
      rank: 10,
      suit: 'Spades'
    },
    {
      rank: 'Jack',
      suit: 'Spades'
    },
    {
      rank: 'Queen',
      suit: 'Spades'
    },
    {
      rank: 'King',
      suit: 'Spades'
    }
  ];
  console.log('number of cards per person', numCards);

  function shuffleCardDeck() {
    for (var j = 0; j < cardDeck.length; j++) {
      var randomIndex = Math.floor(Math.random() * 52);
      var tmp = cardDeck[j];
      cardDeck[j] = cardDeck[randomIndex];
      cardDeck[randomIndex] = tmp;
    }
    return cardDeck;
  }
  shuffleCardDeck();

  function passCardsToEach(cardDeck, players, numCards) {
    for (var i = 0; i < players.length; i++) {
      for (var j = 0; j < numCards; j++) {
        players[i].hand.push(cardDeck[(i * numCards) + j]);
      }
    }
    return players;
  }
  passCardsToEach(cardDeck, players, numCards);
  console.log('players', players);

  function pointChecker(players) {
    var points = [];
    for (var i = 0; i < players.length; i++) {
      var playerHand = players[i].hand;
      for (var j = 0; j < playerHand.length; j++) {
        if ((playerHand[j].rank === 'Jack') || (playerHand[j].rank === 'Queen') || (playerHand[j].rank === 'King')) {
          playerHand[j].points = 10;
        } else if (playerHand[j].rank === 'Ace') {
          playerHand[j].points = 11;
        } else playerHand[j].points = playerHand[j].rank;
        points.push(playerHand[j].points);
      }
    }
    var pointsChunked = _.chunk(points, numCards);
    var sum;
    for (var k = 0; k < pointsChunked.length; k++) {
      sum = 0;
      var smallChunk = pointsChunked[k];
      for (var l = 0; l < smallChunk.length; l++) {
        sum += smallChunk[l];
      }
      for (var m = 0; m < players.length; m++) {
        if (m === k) {
          players[m].totalPoints = sum;
        }
      }
    }
    return players;
  }
  pointChecker(players);

  function revealWinner(players) {
    var allScores = [];
    var highestScore;
    for (var i = 0; i < players.length; i++) {
      allScores.push(players[i].totalPoints);
    }
    highestScore = Math.max.apply(null, allScores);

    var tieBreaker = [];
    for (var j = 0; j < players.length; j++) {
      if (players[j].totalPoints === highestScore) {
        tieBreaker.push(players[j]);
      }
    }

    if (tieBreaker.length > 1) {
    // RERUN THE WHOLE THING AND COMPARE POINTS ON THE TIEBREAKERS
      console.log('There was a tie between...');
      for (var k = 0; k < tieBreaker.length; k++) {
        tieBreaker[k].hand = [];
        console.log(tieBreaker[k].name);
      }
      shuffleCardDeck();
      passCardsToEach(cardDeck, tieBreaker, numCards);
      pointChecker(tieBreaker);
      revealWinner(tieBreaker);
    } else console.log(tieBreaker[0].name + ' is the winner!');
  }
  revealWinner(players);
}
playGame(players, 2);
