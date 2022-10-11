
// const api_url="https://hp-api.herokuapp.com/api/characters";


// function getgithubdetails(){

//     // Toggle Button

//   var x = document.getElementById("gittable");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }



// async function getdata(url){
//    await fetch(url).then((res)=>{
//         console.log(res);
//         return res.json();

//     }).then((data)=>{
//         console.log(data);
//         if (data) {
//             hideloader();     
//         }
//         show(data);
//     })   
// }

// getdata(api_url);

// function hideloader(){
//     document.getElementById('loading').style.display='none';

//     document.getElementById('loading1').style.display='none';

//     document.getElementById('loading2').style.display='none';
// }

// function show(data){
//     let table =
//     `<tr>
//     <th><h3>Id</h3></th>
//     <th><h3>UserName</h3></th>
//     <th><h3>Avatar</h3></th>
//     <th><h3>Url</h3></th>
//     <th><h3>Respo Url</h3></th>
//     <th><h3>Type</h3></th>
//     </tr>`;


//     for(let tbl of data){
//         table += 
//         `<tr>
//         <td>  ${tbl.actor}.  </td>
//         <td>  ${tbl.name}  </td>
//         <td>  <img src="${tbl.image}" width="150px" height="150px" alt="img">     </td>
//         <td>  ${tbl.house}  </td>
//         <td>  ${tbl.ancestry}  </td>
//         <td>  ${tbl.yearOfBirth}  </td>
//         </tr>`;
//     }

//     document.getElementById("gittable").innerHTML=table;
// }
// }


const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2 class="mt-5">${character.name}</h2>
                <p class="mt-5">House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
