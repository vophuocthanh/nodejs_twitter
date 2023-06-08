type Handle = () => Promise<string>
const fullname = 'Dư Thanh Được'
const handle: Handle = () => Promise.resolve(fullname)
console.log(fullname)
handle().then(console.log)
