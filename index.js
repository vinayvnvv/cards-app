var colors = { // colors variables
    1: "#6f98a8",
    2: "#2c8ead",
    3: "#2f444e",
    4: "2c8ead",
    5: "#2f444e",
    6: "#bfbfbf",
    7: "#bfbfbf",
    8: "#6f98a8",
    9: "#2f444e",
}

function Utils() { // helper class
    this.getRandomIndex = (idx) => {
        return Math.floor(Math.random() * idx)
    }
    this.shuffleList = arr => {
        let curIdx = arr.length;
        let random;
        while(curIdx !== 0) { //look for all items for swap

            // take randomIndex 
            random = this.getRandomIndex(curIdx);
            curIdx--;
            // swap the cur with id in shorthand syntax
            [arr[curIdx], arr[random]] = [
                arr[random], arr[curIdx]];
        }
        return arr;
    }
    this.sortList = arr => {
        return arr.sort(function(a, b) {
            return a - b;
          });
    }
}
const utils = new Utils();


function App() { // App login class
    this.containerRef = document.getElementById('container');
    this.shuffleRef = document.getElementById('shuffle');
    this.sortRef = document.getElementById('sort');
    this.cards = [1,2,3,4,5,6,7,8,9];
    this.arrangeCards = () => {
        this.containerRef.innerHTML = ''  // clear the container
        for(let i=0;i<this.cards.length;i++) {
            const ele = document.createElement('DIV')
            ele.classList.add('card-item');
            ele.innerHTML = this.cards[i];
            ele.style.backgroundColor = colors[this.cards[i]]
            ele.style.borderColor = colors[this.cards[i]]
            this.containerRef.appendChild(ele)
        }
    }
    this.shuffle = () => {
        this.cards = utils.shuffleList(this.cards);
        this.arrangeCards();
    }
    this.sort = () => {
        this.cards = utils.sortList(this.cards);
        this.arrangeCards();
    }
    this.init = () => {
        this.arrangeCards();
        this.shuffleRef.addEventListener('click', this.shuffle);
        this.sortRef.addEventListener('click', this.sort);
    }
}

var app = new App();

app.init();
