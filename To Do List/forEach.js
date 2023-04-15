const arr = ['Rushil Shivade', 'Rutuja Nahale', 'Chirag Kathoye', 'Pratham Loya', 'Kanchan Pardeshi'];

const obj = [
    {
        Name: 'Rushil',
        Gender: 'Male'
    },

    {
        Name: 'Rutuja',
        Gender: 'Female'
    }
]

arr.forEach(function (value) {
    console.log(`This is me and my friends lol ${value}`);
});
console.log('')
obj.forEach(function (val) {
    console.log(`My name is ${val.Name} and my gender is ${val.Gender}`);
})