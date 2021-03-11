const container = document.querySelector("#container")
//const proxy = 'https://api.allorigins.win/raw?url=';
const studentsApi = 'https://appleseed-wa.herokuapp.com/api/users/'

const getStudents = async () => {
    const dataAll = await fetch(`${studentsApi}`);//${proxy}
    const dataStudents = await dataAll.json();
    //console.log(dataStudents)

    
    let students = await Promise.all(
        dataStudents.map(async (s) =>{
            let info = await getPepole(s.id)
            return{id: s.id, first_Name: s.firstName, last_Name: s.lastName, Capsule: s.capsule, Age: info.age, City: info.city, Gender: info.gender, Hobby: info.hobby}
        })
    )
    return students;
    
   
}
getStudents()


async function getPepole(id) {
    let info = await fetch(`${studentsApi}${id}`);
    return await info.json();
}

async function createTable() {
    let students = await getStudents();
    let table = document.createElement('table');
    table.innerHTML += `<thead>
    <tr>
    <th>id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Capsule</th>
    <th>Age</th>
    <th>City</th>
    <th>Gender</th>
    <th>Hobby</th>
    </tr>
    </thead>`
    
    students.forEach((s) => {
        console.log(s)
        table.innerHTML += `<tr>
            <td>${s.id}</td>
            <td>${s.first_Name}</td>
            <td>${s.last_Name}</td>
            <td>${s.Capsule}</td>
            <td>${s.Age}</td>
            <td>${s.City}</td>
            <td>${s.Gender}</td>
            <td>${s.Hobby}</td>
            <td><i class="far fa-edit"></i></td>
            <td><i class="fas fa-trash-alt"></i></td>
            </tr>`
    })
    container.appendChild(table)

}








     // const dataPerStudent = await fetch(`${proxy}${studentsApi}${num}`);
    // const dataStudent = await dataPerStudent.json();



// let studentsArray = []

// const studentsObjToArray = () =>{
//     const data = await fetch(`${proxy}${studentsApi}${num}`);
//     const dataStudent = await data.json();
//     //const theData = await dataStudent.data;
//     let studentObj = {
//         id: dataStudent.id
//         // firstName: theData.firstName;
//         // lastName: theData.lastName
//         // age: theData.age
//         // city: theData.city
//         // gender: theData.gender
//         // hobby: theData.hobby
//     }

//     return studentObj
    
// }





