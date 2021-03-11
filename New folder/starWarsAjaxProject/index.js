const baseEndpoint = `https://swapi.dev/api/people`;
const container = document.querySelector('#container')

const getUsers = async () => {
    let callApi = await fetch(baseEndpoint);
    let data = await callApi.json();



    let users = await Promise.all(
        data.results.map(async (u) => {
            let world = await getWorld(u.homeworld)
            return {name: u.name, hair: u.hair_color, height: u.height
            ,worldName : world.name}
        })
    )
    console.log(users)

    // let usersList = [];
    // for (let i = 0; i < data.results.length; i++) {
    //     let world = await getWorld(data.results[i].homeworld);
    //     usersList.push({
    //         name: data.results[i].name,
    //         hair: data.results[i].hair_color,
    //         height: data.results[i].height,
    //         worldName: world.name,
    //         population: world.population
    //     })
    // }

    // return usersList;


}

async function getWorld(url) {
    let world = await fetch(url);
    return await world.json();
}

async function createTable() {
    let users = await getUsers();
    let table = document.createElement('table');
    users.forEach((u) => {
        console.log(u)
        table.innerHTML += `<tr>
            <td>${u.name}</td>
             <td>${u.hair}</td>
              <td>${u.height}</td>
               <td>${u.worldName}</td>
               <td>${u.population}</td>
                </tr>`
    })
    container.appendChild(table)

}


// async function getUsers (){
//     let result = await fetch(baseEndpoint)
// }


