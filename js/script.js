const table = document.querySelector("#table")
const proxy = 'https://api.allorigins.win/raw?url=';
const studentsApi = 'https://appleseed-wa.herokuapp.com/api/users/'

async function getStudents() {
    const dataAll = await fetch(`${proxy}${studentsApi}`);
    const dataStudents = await dataAll.json();
    console.log(dataStudents)
    

    // const dataPerStudent = await fetch(`${proxy}${studentsApi}${num}`);
    // const dataStudent = await dataPerStudent.json();


    let studentObj = {
            id: dataStudents.id
            firstName: dataStudents.firstName
            lastName: dataStudents.lastName
    //              age: theData.age   
    //               city: theData.city
    //               gender: theData.gender
    //              hobby: theData.hobby
    }
}
getStudents()




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





