function profileSync(name, fn) {
    console.time(name);
    fn();
    console.timeEnd(name);
}

function heavy(n) {
    return () => {
        const limit = Math.pow(10, n);
        for (let i = 0; i < limit; i+=1){}
    }
}

profileSync("Heavy 1", heavy(1));
profileSync("Heavy 2", heavy(2));
profileSync("Heavy 3", heavy(3));
profileSync("Heavy 4", heavy(4));
profileSync("Heavy 5", heavy(5));
profileSync("Heavy 6", heavy(6));
profileSync("Heavy 7", heavy(7));
profileSync("Heavy 8", heavy(8));
profileSync("Heavy 9", heavy(9));
profileSync("Heavy 10", heavy(10));