// Практическое задание 4:
function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);
    var self = this;

    var animalFeed = self.feed;
    self.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
    };

}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;


// Практическое задание 5:
function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');

        return self;
    };
}

function Cat(name) {
    Animal.apply(this, arguments);
    var self = this;

    self.stroke = function() {
        console.log('Гладим кота.');

        return self;
    };

    var animalFeed = self.feed;
    self.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');

        return self;
    };
}

var barsik = new Cat('Барсик');

barsik.feed().stroke();

barsik = null;







