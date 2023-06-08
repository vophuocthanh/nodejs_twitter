type Handle = () => Promise<string>
const fullname = 'Dư Thanh Được'
const person: any = {}
const handle: Handle = () => Promise.resolve(fullname)
// console.log(fullname)
handle().then(console.log)
