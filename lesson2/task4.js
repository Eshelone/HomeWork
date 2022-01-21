function f (a) {
    if (typeof a === "number") {
        switch (a) {
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break;
        case 3:
                console.log('Середа');
             break;
        case 4:
                console.log('Четвер');
             break;
        case 5:
                console.log('Пятниця');
             break;
        case 6:
                console.log('Субота');
             break;
        case 7:
                console.log('Неділя');
             break;
            default:
                 throw new Error('parameter should be in the range of 1 to 7');
        }
        }   else    {
        throw new Error('parameter type is not a Number');
    }
    }
f (2);