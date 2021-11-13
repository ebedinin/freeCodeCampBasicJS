let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: {
            count++;
            break;
        }
        case 7:
        case 8:
        case 9: {
            break;
        }
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A': {
            count--;
            break;
        }
    }
    if (count > 0)
        return count.toString() + " Bet";
    else if (count < 0)
        return count.toString() + " Hold";
    else
        return count.toString() + " Hold";
}

let c = cc(2);
console.log(c);
c = cc('J');
console.log(c);
c = cc(9);
console.log(c);
c = cc(2);
console.log(c);
c = cc(7);
console.log(c);
