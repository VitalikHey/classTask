class ApiRandomService {
    apiFetch(leftBorder, rightBorder, countNumber) {
        fetch(`https://www.random.org/integers/?num=${countNumber}&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`)
            .then(response => response.text())
            .then(data => {
                alert(data)
            })

    }
}

class RandomService {
    generateRandomNumber(leftBorder, rightBorder) {
        let apiClass = new ApiRandomService()
        apiClass.apiFetch(leftBorder, rightBorder, countNumber)
    }
}

let leftBorder = prompt("Введите минимально возмножное число")
let rightBorder = prompt("Введите максимально возможное число")
let countNumber = prompt("Введите количество генерируемых чисел")

const test = new RandomService()

test.generateRandomNumber(leftBorder, rightBorder, countNumber)