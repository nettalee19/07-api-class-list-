const container = document.querySelector("#container")
const proxy = 'https://api.allorigins.win/raw?url=';
const studentsApi = 'https://appleseed-wa.herokuapp.com/api/users/'
const categories = document.querySelector('#categories');
const searchBar = document.querySelector('#searchBar');
let students = [];
let table;


const getStudents = async () => {
    const dataAll = await fetch(`${proxy}${studentsApi}`);//
    const dataStudents = await dataAll.json();
    //console.log(dataStudents)

    
    students = await Promise.all(
        dataStudents.map(async (s) =>{
            let info = await getPepole(s.id)
            //console.log(info)
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






searchBar.addEventListener('keyup', (e) =>{
    //console.log(e.target.value)
    //console.log(students)
    const searchString = e.target.value.toLowerCase();


    const filteredStudents = students.filter(s =>{
       return s.first_Name.toLowerCase().includes(searchString)
    });
    console.log(filteredStudents)
    //displayStudents(filteredStudents).remove()
    //table.remove()
    //displayStudents(filteredStudents)
 })

async function createTable() {
    students = await getStudents();
    table = document.createElement('table');
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
    displayStudents()
}

async function displayStudents (){//filteredStudents
    students.forEach((s) => {//filteredStudents
        //console.log(s)
        table.innerHTML += `<tr>
            <td>${s.id}</td>
            <td>${s.first_Name}</td>
            <td>${s.last_Name}</td>
            <td>${s.Capsule}</td>
            <td>${s.Age}</td>
            <td>${s.City}</td>
            <td>${s.Gender}</td>
            <td>${s.Hobby}</td>
            <td><i class="far fa-edit edit"></i></td>
            <td><i class="fas fa-trash-alt delete"></i></td>
            </tr>`
    })
    container.appendChild(table)

}





container.addEventListener("click", e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
})








container.addEventListener("click", e => {
    if(e.target.classList.contains('edit')){
        // console.log(e.target.parentElement.parentElement.parentElement); ///entire row
        //console.log(e.target.parentElement); //the edit button
        //editStudent(e.target.parentElement.parentElement); ///entire row
        editStudent(students); ///entire row
        
    }
})

editStudent = (students) =>{
    students.forEach((s) => {
        s.target.parentElement.parentElement.innerHTML += `<tr>
            <td>${s.id}</td>
            <td>${s.first_Name}</td>
            <td>${s.last_Name}</td>
            <td>${s.Capsule}</td>
            <td>${s.Age}</td>
            <td>${s.City}</td>
            <td>${s.Gender}</td>
            <td>${s.Hobby}</td>
            <td><i class="far fa-edit edit"></i></td>
            <td><i class="fas fa-trash-alt delete"></i></td>
            </tr>`
    })
}









