
// Using FETCH API

// const getStarWarsName = async (num) => {
//     try {
//         const res = await fetch(`http://swapi.dev/api/people/${num}`);
//         const data = await res.json();
//         console.log(data);

//         // const res2 = await fetch('http://swapi.dev/api/people/2');
//         // const data2 = await res2.json();
//         // console.log(data2);
//     }
//     catch (e) {
//         console.log('ERROR!', e);
//     }
// };

// Using AXIOS


const getStarWarsName = async (num) => {
    try {
        const res = await axios.get(`http://swapi.dev/api/people/${num}`);
        console.log(res.data);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
}