
const loveCalculator = () =>{

    let number = Math.floor(Math.random() * 100) + 1;

    if (number < 10) {
        return "Don't dare to Look";
    }
    else if (number > 10 && number< 50) {
        return "😡";
    }
    else if (number > 50 && number< 80) {
        return " 👯";
    }
    else {
        return "😍"
    }

}


export default loveCalculator;
