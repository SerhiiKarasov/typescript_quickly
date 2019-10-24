class Stat {
static stat_value = 100;

use(){
    Stat.stat_value--;
    console.log(`value is : ${Stat.stat_value}`);
    }
}


const s1 = new Stat();
s1.use();

const s2 = new Stat();
s1.use();
