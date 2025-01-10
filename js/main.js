let nomeClient = document.getElementById('nomeClient');
let numeroTélèphone = document.getElementById('numeroTélèphone');
let appareil = document.getElementById('appareil');
let panne = document.getElementById('panne');
let avence = document.getElementById('avence');
let prix = document.getElementById('prix');
let rend = document.getElementById('rend');
let btnRecevoir = document.getElementById('btnRecevoir');
let tcbody = document.getElementById('tcbody');
let btn = document.getElementById('btn');
let search = document.getElementById('search');


// Crate Data
let product;
if(localStorage.pro != null){
    product = JSON.parse(localStorage.pro)
}else{
    product = [];
}
console.log(localStorage.pro);

function red (){
    let newPro = {
        nomeClient: nomeClient.value.toLocaleLowerCase(),
        numeroTélèphone: numeroTélèphone.value,
        appareil: appareil.value.toLocaleLowerCase(),
        panne: panne.value.toLocaleLowerCase(),
        avence: avence.value,
        prix: prix.value,
    };
    product.push(newPro);
    localStorage.setItem('pro', JSON.stringify(product));
    shoData();
    clearData();
    // console.log(localStorage)
}

// Clear inputs
function clearData(){
    nomeClient.value = '';
    numeroTélèphone.value = '';
    appareil.value = '';
    panne.value = '';
    avence.value = '';
    prix.value = '';
}

// Show Data
function shoData(){
    let tabl;
    for(let i = 0; i < product.length; i++){
        tabl += `
        <tr>
            <td>${i}</td>
            <td>${product[i].nomeClient}</td>
            <td>${product[i].appareil}</td>
            <td>${product[i].numeroTélèphone}</i></td>
            <td>${product[i].panne}</td>
            <td class="text-primary">En attente</td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i} )">Delet</button></td>
        </tr>
        `
    }
    tcbody.innerHTML = tabl;
};
shoData()

 // Delete
function deletData(i){
    product.splice(i,1);
    localStorage.pro = JSON.stringify(product);
    shoData();
};
// // Delete All
function deleteAll(){
    localStorage.clear();
    product.splice(0);
    shoData();
};

// Update
// Search Mode
let searchMode = 'btnSearchName'
function getSearchMode(id){
  if(id == 'btnSearchName'){
    searchMode = "btnSearchName";
    search.placeholder = 'Search By Name'
  } else if (id == 'btnSearchNumero'){
    searchMode = 'btnSearchNumero';
    search.placeholder = 'Search By Numero télèphone'
  } else if (id == 'btnSearchAppareil'){
    searchMode = 'btnSearchAppareil';
    search.placeholder = 'Search By Appareil'
  };

  search.focus()
}
// search('gg')
function recherch(e){
  console.log(e);
  let tabl;
  if (searchMode == 'btnSearchName'){
    for(let i = 0; i < product.length; i++){
      if(product[i].nomeClient.includes(e)){

        tabl += `
        <tr>
            <td>${i}</td>
            <td>${product[i].nomeClient}</td>
            <td>${product[i].appareil}</td>
            <td>${product[i].numeroTélèphone}</i></td>
            <td>${product[i].panne}</td>
            <td class="text-primary">En attente</td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i} )">Delet</button></td>
        </tr>
        `
      }
    }
    
  } else if (searchMode == 'btnSearchNumero'){
    for(let i = 0; i < product.length; i++){
      if(product[i].numeroTélèphone.includes(e)){

        tabl += `
        <tr>
            <td>${i}</td>
            <td>${product[i].nomeClient}</td>
            <td>${product[i].appareil}</td>
            <td>${product[i].numeroTélèphone}</i></td>
            <td>${product[i].panne}</td>
            <td class="text-primary">En attente</td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i} )">Delet</button></td>
        </tr>
        `
      }
    }
  } else if (searchMode == 'btnSearchAppareil'){
    for(let i = 0; i < product.length; i++){
      if(product[i].appareil.includes(e)){

        tabl += `
        <tr>
            <td>${i}</td>
            <td>${product[i].nomeClient}</td>
            <td>${product[i].appareil}</td>
            <td>${product[i].numeroTélèphone}</i></td>
            <td>${product[i].panne}</td>
            <td class="text-primary">En attente</td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i} )">Delet</button></td>
        </tr>
        `
      }
    }
  }
  tcbody.innerHTML = tabl;
}
// Alert 
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

let arry = [500,200,920,300,600, 700];
const ctxn = document.getElementById('myChart');

  new Chart(ctxn, {
    type: 'pie',
    data: {
      labels: ['dépenses', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: arry,
        backgroundColor:[
            "#727272",
            "#f00", 
            "#007bff"
        ],
        // borderWidth: 1,
        hoverOffset: 10
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMax: 200
        }
      }
    }
  });

  const ctxcn = document.getElementById('myChart2');

  new Chart(ctxcn, {
    type: 'bar',
    data: {
      labels: ['Inda', 'Internet', 'Stag', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: arry,
        backgroundColor:[
            "Red",
            "Blue", 
            "Yellow",
            "Green",
            "Purple"
        ],
        // borderWidth: 1,
        hoverOffset: 10
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMax: 80
        }
      }
    }
  });
