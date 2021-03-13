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
    

    
    students = await Promise.all(
        dataStudents.map(async (s) =>{
            let info = await getPepole(s.id)
            
            return{id: s.id, first_Name: s.firstName, last_Name: s.lastName, cCapsule: s.capsule, Age: info.age, City: info.city, Gender: info.gender, Hobby: info.hobby}
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
    
    const searchString = e.target.value.toLowerCase();

    const filteredStudents = students.filter(s =>{
       return s.first_Name.toLowerCase().includes(searchString)
       
       //todo
       //    switch(cat){
    //        case last_Name:
    //        return s.first_Name.toLowerCase().includes(searchString)
    //        break;
    //        case first_Name:
    //        return s.last_Name.toLowerCase().includes(searchString)
    //        break;
    //        case last_Name:
    //        return s.last_Name.toLowerCase().includes(searchString)
    //        break;
    //        case cCapsule:
    //        return s.Capsule.toLowerCase().includes(searchString)
    //        break;
    //        case Age:
    //        return s.Age.toLowerCase().includes(searchString)
    //        break;
    //        case City:
    //        return s.City.toLowerCase().includes(searchString)
    //        break;
    //        case Gender:
    //        return s.Gender.toLowerCase().includes(searchString)
    //        break;
    //        case Hobby:
    //        return s.Hobby.toLowerCase().includes(searchString)
    //        break;
    //    }


    });
    console.log(filteredStudents)
    
    displayStudents(filteredStudents)
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

async function displayStudents (){
    students.forEach((s) => {
        table.innerHTML += `<tr>
            <td>${s.id}</td>
            <td>${s.first_Name}</td>
            <td>${s.last_Name}</td>
            <td>${s.cCapsule}</td>
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

        editStudent(students);
        
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









