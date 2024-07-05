function teste() {
    for (let i = 1; i <= 5; i++) {
        const randomnum = Math.floor(Math.random() * 100) + 1;

        if (randomnum % 3 === 0 && randomnum % 5 === 0) {
            console.log(`${randomnum} fizzbuzz`);
        } else if (randomnum % 3 === 0) {
            console.log(`${randomnum} fizz`);
        } else if (randomnum % 5 === 0) {
            console.log(`${randomnum} buzz`);
        }
    }
}