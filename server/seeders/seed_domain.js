const Domain = {
    userIds: [],
    getRandomUserId() {
        console.log(this.userId)
    }
}

const generateRandomInt = (min, max) => {
    return Math.floor(Math.random()*(max+1))+min
}


for (let i=0;i<30;i++) {
    Domain.userId.push(generateRandomInt(0,9999999))
}


console.log(Domain.userId)
const item = Domain.userId[Math.floor(Math.random()*Domain.userId.length)];

