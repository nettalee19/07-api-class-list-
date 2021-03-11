const table = document.querySelector("#table")
const proxy = 'https://api.allorigins.win/raw?url=';
const studentsApi = 'https://appleseed-wa.herokuapp.com/api/users/'

async function getStudents() {
    const data = await fetch(`${proxy}${studentsApi}`);
    const dataStudents = await data.json();

    console.log(dataStudents)
}

getStudents()





async function getOneStudent (num) {
    const data = await fetch(`${proxy}${studentsApi}${num}`);
    const dataStudent = await data.json();

    console.log(dataStudent)
}

getOneStudent(0)
getOneStudent(31)



// let studentsArray = []

const studentsObjToArray = () =>{
    const data = await fetch(`${proxy}${studentsApi}${num}`);
    const dataStudent = await data.json();
    //const theData = await dataStudent.data;
    let studentObj = {
        id: dataStudent.id
        // firstName: theData.firstName;
        // lastName: theData.lastName
        // age: theData.age
        // city: theData.city
        // gender: theData.gender
        // hobby: theData.hobby
    }

    return studentObj
    
}