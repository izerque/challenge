let hours;
let minutes;
let seconds;
const action=['check Your Email','Try out a Pluralsight module','Add onto your frontend mentor projects','rest','Try And Eat']

let date= new Date();
 
hours= date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();
console.log(hours);
console.log(minutes)
console.log(seconds)
document.getElementById('hours').innerHTML=hours;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;

switch (hours){
    case 7:
        document.getElementById("actions").innerHTML=action[0]
        break;
        case 9:
        document.getElementById("actions").innerHTML=action[1]
            break;
            case 11:
                document.getElementById("actions").innerHTML=action[2]
                break;
                case 2:
                    document.getElementById("actions").innerHTML=action[3] 
                    break;
                    case 3:
                        document.getElementById("actions").innerHTML=action[4]
                        break;
                        case 6:.
                            document.getElementById("actions").innerHTML=action[5]
                    default:
                        document.getElementById("actions").innerHTML='Code'

}
