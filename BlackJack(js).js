//Diamonds	Бубны
//Hearts	Червы/черви
//Spades	Пики
//Clubs	    Крести
var black_list = [];//список карт, которые уже в игре
var count_of_rows = 3;
var first_enter = true;//первый клик по кнопке добавления карты, нужно для прибавления очков дилеру за счет открытия закрытой карты
var human = {//человек в казино(дилер или игрок)
    takeCard: function(sm, value){//взять карту
        //alert(value);
        //alert(player.cards);
        //alert(dealer.cards);
         var card = random_of_carts();
         card = card.toFixed(0);
         //var card = 9;
         while(true)
         {
            if(check_black_list(card))
                card = random_of_carts();
            else 
                {
                    this.cards.push(card);
                    black_list.push(card);
                    break;
                }
         }
        var table = document.getElementById("game");
        var row = document.createElement("tr");
        //alert(addresses[cards[card]]);
        //alert("<th id  = \"dealer_" + count_of_rows + "\"></th> <th><img src = \"" + addresses[cards[card]] + "\"></th>");
        if(value.localeCompare("player") == 0)
            row.innerHTML = "<th id  = \"dealer_" + count_of_rows + "\"></th> <th><img src = \"" + addresses[cards[card]] + "\"></th>";
        else 
            row.innerHTML = "<th><img src = \"" + addresses[cards[card]] + "\"></th> <th id  = \"player_" + count_of_rows + "\"></th>";
        table.appendChild(row);
        document.getElementById("dealer_2").innerHTML = hide_card_of_dealer;
        if(first_enter === true)
            {
                first_enter = false;
                dealer.score(dealer.cards[1]);
                if((dealer.count_of_scores == 21))//|| dealer.count_of_scores > player.count_of_scores
                    {
                    setTimeout(function(){
                    var answer = confirm("You lose!Want to play more?");
                    if(answer == true)
                        location.reload();
                    else window.close();
                    },600);
                    }
            }
        this.score(card);
        var bufer = this.count_of_scores;//буфер потому что на правую запись он в if-е не реагирует почему-то
        if(this.count_of_scores <= 16 && value == "dealer")//второе добавил
            takeCard("dealer");
        if(dealer.count_of_scores > 16 && value.localeCompare("dealer") == 0)
            if(dealer.count_of_scores > player.count_of_scores && dealer.count_of_scores <= 21)//<
                {   //alert("1");
                    setTimeout(function(){
                    var answer = confirm("You lose!Want to play more?");
                    if(answer == true)
                        location.reload();
                    else window.close();
                    },600);
                }
            else {
                //alert("2");
                setTimeout(function(){
                var answer = confirm("You won! Want to play more?");
                if(answer == true)
                    location.reload();
                else window.close();
                },600);
            }
        setTimeout(function(){
        if(bufer > 21 && value.localeCompare("player") == 0)
        {
           // alert("3");
            var answer = confirm("You lose!Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
        }
        },600);
        /*setTimeout(function(){
        if(bufer > 21 && value.localeCompare("dealer") == 0)
        {
            alert("4");
            //alert("yes");
            var answer = confirm("Вы выиграли!Хотите сыграть ещё?");
            if(answer == true)
                location.reload();
            else window.close();
        }
        },600);*/
        setTimeout(function(){
        if(bufer == 21 && value.localeCompare("player") == 0)
        {
            //alert("5");
            var answer = confirm("You won! Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
        }
        },600);
        setTimeout(function(){
        if(bufer == 21 && value.localeCompare("dealer") == 0)
        {
            //alert("6");
            var answer = confirm("You lose!Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
        }
        },600);
    },
    cards:[],//карты на руках
    score: function(number){
        var number_of_space = cards[number].indexOf(" ");
        var digit = cards[number].substring(0, number_of_space);
        if(digit.localeCompare("Ace") == 0 && this.count_of_scores + 11 >= 21)
            this.count_of_scores = this.count_of_scores + 1;
        //alert(digit);//отлов NaN
        else this.count_of_scores = this.count_of_scores + values[digit];
        if(this.role.localeCompare("player") == 0)
            document.getElementById("score_player").innerHTML = "Очки: " + this.count_of_scores;
        else document.getElementById("score_dealer").innerHTML = "Очки: " + this.count_of_scores;
    }
}
var cards = {//все карты для рандома
    1: "Two Diamonds",
    2: "Three Diamonds",
    3: "Four Diamonds",
    4: "Five Diamonds",
    5: "Six Diamonds",
    6: "Seven Diamonds",
    7: "Eight Diamonds",
    8: "Nine Diamonds",
    9: "Ten Diamonds",
    10: "Jack Diamonds",
    11: "Queen Diamonds",
    12: "King Diamonds",
    13: "Ace Diamonds",
    14: "Two Hearts",
    15: "Three Hearts",
    16: "Four Hearts",
    17: "Five Hearts",
    18: "Six Hearts",
    19: "Seven Hearts",
    20: "Eight Hearts",
    21: "Nine Hearts",
    22: "Ten Hearts",
    23: "Jack Hearts",
    24: "Queen Hearts",
    25: "King Hearts",
    26: "Ace Hearts",
    27: "Two Spades",
    28: "Three Spades",
    29: "Four Spades",
    30: "Five Spades",
    31: "Six Spades",
    32: "Seven Spades",
    33: "Eight Spades",
    34: "Nine Spades",
    35: "Ten Spades",
    36: "Jack Spades",
    37: "Queen Spades",
    38: "King Spades",
    39: "Ace Spades",
    40: "Two Clubs",
    41: "Three Clubs",
    42: "Four Clubs",
    43: "Five Clubs",
    44: "Six Clubs",
    45: "Seven Clubs",
    46: "Eight Clubs",
    47: "Nine Clubs",
    48: "Ten Clubs",
    49: "Jack Clubs",
    50: "Queen Clubs",
    51: "King Clubs",
    52: "Ace Clubs"
    
}
var addresses = {//адреса карт
    "Two Diamonds": 'Игральные карты\\Бубны\\Двойка бубен.png',
    "Three Diamonds": 'Игральные карты\\Бубны\\Тройка бубен.png',
    "Four Diamonds": 'Игральные карты\\Бубны\\Четыре бубен.png',
    "Five Diamonds": 'Игральные карты\\Бубны\\Пять бубен.png',
    "Six Diamonds": 'Игральные карты\\Бубны\\Шесть бубен.png',
    "Seven Diamonds": 'Игральные карты\\Бубны\\Семь бубен.png',
    "Eight Diamonds": 'Игральные карты\\Бубны\\Восемь бубен.png',
    "Nine Diamonds": 'Игральные карты\\Бубны\\Девять бубен.png',
    "Ten Diamonds": 'Игральные карты\\Бубны\\Десять бубен.png',
    "Jack Diamonds": 'Игральные карты\\Бубны\\Валет бубен.png',
    "Queen Diamonds": 'Игральные карты\\Бубны\\Дама бубен.png',
    "King Diamonds": 'Игральные карты\\Бубны\\Король бубен.png',
    "Ace Diamonds": 'Игральные карты\\Бубны\\Туз бубен.png',
    "Two Hearts": 'Игральные карты\\Черви\\Двойка черви.png',
    "Three Hearts": 'Игральные карты\\Черви\\Тройка черви.png',
    "Four Hearts": 'Игральные карты\\Черви\\Четыре черви.png',
    "Five Hearts": 'Игральные карты\\Черви\\Пять черви.png',
    "Six Hearts": 'Игральные карты\\Черви\\Шесть черви.png',
    "Seven Hearts": 'Игральные карты\\Черви\\Семь черви.png',
    "Eight Hearts": 'Игральные карты\\Черви\\Восемь черви.png',
    "Nine Hearts": 'Игральные карты\\Черви\\Девять черви.png',
    "Ten Hearts": 'Игральные карты\\Черви\\Десять черви.png',
    "Jack Hearts": 'Игральные карты\\Черви\\Валет черви.png',
    "Queen Hearts": 'Игральные карты\\Черви\\Дама черви.png',
    "King Hearts": 'Игральные карты\\Черви\\Король черви.png',
    "Ace Hearts": 'Игральные карты\\Черви\\Туз черви.png',
    "Two Spades": 'Игральные карты\\Пики\\Двойка пики.png',
    "Three Spades": 'Игральные карты\\Пики\\Тройка пики.png',
    "Four Spades": 'Игральные карты\\Пики\\Четыре пики.png',
    "Five Spades": 'Игральные карты\\Пики\\Пять пики.png',
    "Six Spades": 'Игральные карты\\Пики\\Шесть пики.png',
    "Seven Spades": 'Игральные карты\\Пики\\Семь пики.png',
    "Eight Spades": 'Игральные карты\\Пики\\Восемь пики.png',
    "Nine Spades": 'Игральные карты\\Пики\\Девять пики.png',
    "Ten Spades": 'Игральные карты\\Пики\\Десять пики.png',
    "Jack Spades": 'Игральные карты\\Пики\\Валет пики.png',
    "Queen Spades": 'Игральные карты\\Пики\\Дама пики.png',
    "King Spades": 'Игральные карты\\Пики\\Король пики.png',
    "Ace Spades": 'Игральные карты\\Пики\\Туз пики.png',
    "Two Clubs": 'Игральные карты\\Крести\\Двойка крести.png',
    "Three Clubs": 'Игральные карты\\Крести\\Тройка крести.png',
    "Four Clubs": 'Игральные карты\\Крести\\Четыре крести.png',
    "Five Clubs": 'Игральные карты\\Крести\\Пять крести.png',
    "Six Clubs": 'Игральные карты\\Крести\\Шесть крести.png',
    "Seven Clubs": 'Игральные карты\\Крести\\Семь крести.png',
    "Eight Clubs": 'Игральные карты\\Крести\\Восемь крести.png',
    "Nine Clubs": 'Игральные карты\\Крести\\Девять крести.png',
    "Ten Clubs": 'Игральные карты\\Крести\\Десять крести.png',
    "Jack Clubs": 'Игральные карты\\Крести\\Валет крести.png',
    "Queen Clubs": 'Игральные карты\\Крести\\Дама крести.png',
    "King Clubs": 'Игральные карты\\Крести\\Король крести.png',
    "Ace Clubs": 'Игральные карты\\Крести\\Туз крести.png',
    "Something": 'Игральные карты\\Рубашка.png'
}
var values = {
    "Two":2,
    "Three":3,
    "Four":4,
    "Five":5,
    "Six":6,
    "Seven":7,
    "Eight":8,
    "Nine":9,
    "Ten":10,
    "Jack":10,
    "Queen":10,
    "King":10,
    "Ace":11
}

function random_of_carts(){//выбор карты
    var card = Math.random() * (52 - 1) + 1;  
    return card;
}

function check_black_list(card){//проверка карты на нахождение в черном списке
    black_list.forEach(function(item, i, black_list) {
    if(card == item)
        return true;
})}

function beginGame() {
    window.player = {
        cards:[],//
        count_of_scores:0,
        stop: function(){//остановиться   
        },
        role: "player"
    }
    window.dealer = {
        cards:[],//
        count_of_scores:0,
        role: "dealer"
    }
    
    player.__proto__ = human;
    dealer.__proto__ = human;
    
    var first_card = random_of_carts();
    first_card = first_card.toFixed(0);
    //first_card = 30;
    player.cards.push(first_card);
    black_list.push(first_card);
    var second_card = random_of_carts();
    second_card = second_card.toFixed(0);
    //second_card = 36;
    while(true)
        {
            var check = check_black_list(second_card);//это проверка на нахождение карты в ЧС. Функция ничего не возвращает
            if(check === true)//я не понимаю, почему
                second_card = random_of_carts();
            else 
                {
                    player.cards.push(second_card);
                    black_list.push(second_card);
                    break;
                }
        }
   // alert(player.cards);
    document.getElementById("Player").innerHTML = "<img src = \"" + addresses[cards[player.cards[0]]] + "\">";//вывод карт игрока
    var table = document.getElementById("game");
    var row = document.createElement("tr");
    row.innerHTML = "<th id  = \"dealer_2\"></th> <th><img src = \"" + addresses[cards[player.cards[1]]] + "\"></th>";
    table.appendChild(row);
    
    first_card = random_of_carts();
    first_card = first_card.toFixed(0);
    //first_card = 4;
    while(true)
        {
            if(check_black_list(first_card))
                first_card = random_of_carts();
            else 
                {
                    dealer.cards.push(first_card);
                    black_list.push(first_card);
                    break;
                }
        }
    black_list.push(first_card);
    second_card = random_of_carts();
    second_card = second_card.toFixed(0);
    //second_card = 5;
    while(true)
        {
            if(check_black_list(second_card))
                second_card = random_of_carts();
            else 
                {
                    dealer.cards.push(second_card);
                    black_list.push(second_card);
                    break;
                }
        }
    document.getElementById("Dealer").innerHTML = "<img src = \"" + addresses[cards[dealer.cards[0]]] + "\">";//dealer.cards.length-2
    hide_card_of_dealer = "<img src = \"" + addresses[cards[dealer.cards[1]]] + "\">";//dealer.cards.length-1
    document.getElementById("dealer_2").innerHTML = "<img src = \"" + addresses["Something"] + "\">";
    player.score(player.cards[0]);
    player.score(player.cards[1]);
    dealer.score(dealer.cards[0]);
    //alert(dealer.cards);
    //dealer.score(dealer.cards[1]);
    //alert(player.count_of_scores);
    //alert(dealer.count_of_scores);
    document.getElementById("score_dealer").innerHTML = "Очки: " + dealer.count_of_scores;
    document.getElementById("score_player").innerHTML = "Очки: " + player.count_of_scores;
    setTimeout(function(){
        if(player.count_of_scores == 21)
        {
            var answer = confirm("Поздравляем, вы выиграли!Хотите сыграть ещё?");
            if(answer == true)
                location.reload();
            else window.close();
        }
    },600);
    setTimeout(function(){
        if(player.count_of_scores > 21)
        {
            var answer = confirm("You lose!Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
        }
    },600);
}

function endGame(){
    var exit = confirm("Want to close page?");
    if(exit)
        window.close();
}

function takeCard(value){
    if(value.localeCompare("player") == 0)
        player.takeCard(this, value);
    if(value.localeCompare("dealer") == 0 && player.count_of_scores > dealer.count_of_scores && dealer.count_of_scores > 16){
        setTimeout(function(){
            var answer = confirm("You won!Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
    },600)}
    if(value.localeCompare("dealer") == 0 && player.count_of_scores < dealer.count_of_scores){
            setTimeout(function(){
            var answer = confirm("You lose!Want to play more?");
            if(answer == true)
                location.reload();
            else window.close();
        },600)}
    if(value.localeCompare("dealer") == 0 && dealer.count_of_scores <= 16)
        dealer.takeCard(this, value);
    /*if (value.localeCompare("dealer") == 0){
        setTimeout(function(){
            var answer = confirm("Крупье больше не может брать карты.Поздравляем, вы выиграли!Хотите сыграть ещё?");
            if(answer == true)
                location.reload();
            else window.close();
            
    },600);
    }*/
}

function dealer_takes_cards(value, status){
    takeCard(value);
}