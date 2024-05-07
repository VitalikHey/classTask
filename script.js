class ApiRandomService {
    #API = "https://www.random.org/integers/";

    async apiFetch(leftBorder, rightBorder) {
        try {
            let response = await fetch(`${this.#API}?num=1&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`);
            let data = await response.text();
            return parseInt(data);
        } catch (error) {
            console.error(error);
            return leftBorder;
        }
    }
}

class RandomService extends ApiRandomService {
    async generateRandomNumber(leftBorder, rightBorder) {
        return await this.apiFetch(leftBorder, rightBorder);
    }
}

// Убрал prompt чтобы быстрее тестировать
let leftBorder = 10
let rightBorder = 20

const test = new RandomService();

async function fillNum() {
    return await test.generateRandomNumber(leftBorder, rightBorder);
}

let num;
fillNum().then(result => {
    num = result;
    console.log(num)
});
