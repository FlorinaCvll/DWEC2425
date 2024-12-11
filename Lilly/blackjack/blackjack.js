let playerHand = [];
let dealerHand = [];
let deck = [];

function startGame() {
    deck = createDeck();
    playerHand = [drawCard(), drawCard()];
    dealerHand = [drawCard(), drawCard()];
    updateHands();
    document.getElementById('status').textContent = '';
}

function createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({value, suit});
        }
    }
    return shuffle(deck);
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function drawCard() {
    return deck.pop();
}

function calculatePoints(hand) {
    let points = 0;
    let aces = 0;
    hand.forEach(card => {
        if (card.value === 'A') {
            points += 11;
            aces++;
        } else if (['K', 'Q', 'J'].includes(card.value)) {
            points += 10;
        } else {
            points += parseInt(card.value);
        }
    });
    while (points > 21 && aces > 0) {
        points -= 10;
        aces--;
    }
    return points;
}

function hit() {
    playerHand.push(drawCard());
    if (calculatePoints(playerHand) > 21) {
        document.getElementById('status').textContent = '¡Perdiste!';
    }
    updateHands();
}

function stand() {
    while (calculatePoints(dealerHand) < 17) {
        dealerHand.push(drawCard());
    }
    const playerPoints = calculatePoints(playerHand);
    const dealerPoints = calculatePoints(dealerHand);
    if (dealerPoints > 21 || playerPoints > dealerPoints) {
        document.getElementById('status').textContent = '¡Ganaste!';
    } else {
        document.getElementById('status').textContent = '¡Perdiste!';
    }
    updateHands();
}

function updateHands() {
    document.getElementById('player-hand').textContent = `Jugador: ${calculatePoints(playerHand)} ${handToString(playerHand)}`;
    document.getElementById('dealer-hand').textContent = `Crupier: ${calculatePoints(dealerHand)} ${handToString(dealerHand)}`;
}

function handToString(hand) {
    return hand.map(card => `${card.value}${card.suit[0]}`).join(' ');
}

document.addEventListener('DOMContentLoaded', startGame);
