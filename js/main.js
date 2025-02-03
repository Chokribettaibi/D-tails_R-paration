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
let nameFournisseur = document.getElementById('nameFournisseur');
let crediFournisseur = document.getElementById('crediFournisseur');
let btnAjoutFor = document.getElementById('btnAjoutFor');
let tfbody = document.getElementById('tfbody');
let mood = 'create';
let tmp; 
let nmbA = document.getElementById('nmbA')


// Crate Data
let product;
if(localStorage.pro != null){
    product = JSON.parse(localStorage.pro)
}else{
    product = [];
};
// create Client
function red (){
    let newPro = {
        nomeClient: nomeClient.value.toLocaleLowerCase(),
        numeroTélèphone: numeroTélèphone.value,
        appareil: appareil.value.toLocaleLowerCase(),
        panne: panne.value.toLocaleLowerCase(),
        avence: avence.value,
        prix: prix.value,
        rend: rend.value,
        dateResption: new Date(),
    };
    scroll({
      top:100000,
      behavior: 'smooth',
    })
    console.log(mood)
    if(mood === 'create'){
      product.push(newPro);
      localStorage.setItem('pro', JSON.stringify(product));
    } else {
      product[tmp] = newPro;

      localStorage.setItem('pro', JSON.stringify(product));
      mood = 'create';
    }
    shoDataFor();
    shoData();
    clearData();
  };
  
// Creat Fourniusser
let productFor=[];

if(localStorage.proFor != null){
    productFor = JSON.parse(localStorage.proFor)
}else{
    productFor = [];
};
 function fourn(){
  let newFor = {
    nameFournisseur: nameFournisseur.value,
    crediFournisseur: crediFournisseur.value
  };
  productFor.push(newFor);
  localStorage.setItem('proFor', JSON.stringify(productFor));
  shoDataFor()
};
console.log(localStorage.proFor)
// Clear inputs Client
function clearData(){
    nomeClient.value = '';
    numeroTélèphone.value = '';
    appareil.value = '';
    panne.value = '';
    avence.value = '';
    prix.value = '';
};
// Clear inputs Client
function clearDataFur(){
  nameFournisseur.value = '';
  crediFournisseur.value = ''
}

// Validare Form 
function validationForm(e){
  let nemeValid = false;
  let numerValid = false;

  if(numeroTélèphone.value !== "" && numeroTélèphone <= 8){
    console.log('valid');
  }
  
  if(nemeValid === false || numerValid === false){
    e.preventDefault();
  }
}

// Show Data Client
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
            <td>${product[i].avence}</td>
            <td>${product[i].prix}</td>
            <td><button class="btn btn-outline-primary" onclick="updateData(${i})">update</button></td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i})">Delet</button></td>
        </tr>
        `
    }
    tcbody.innerHTML = tabl;
};
shoData();
// Show Data Four
function shoDataFor(){
  let tabl;
  for(let i = 0; i < productFor.length; i++){
      tabl += `
      <tr>
          <td>${productFor[i].nameFournisseur}</td>
          <td>${productFor[i].crediFournisseur}</td>
          <td><button class="btn btn-outline-danger" onclick="deletDataFour(${i})">Delet</button></td>
      </tr>
      `
  }
  tfbody.innerHTML = tabl;
};

shoDataFor();

// UpDate
function updateData(i){
  nomeClient.value = product[i].nomeClient;
  appareil.value = product[i].appareil;
  numeroTélèphone.value = product[i].numeroTélèphone;
  panne.value = product[i].panne;
  avence.value = product[i].avence;
  prix.value = product[i].prix;
  mood = 'update';
  tmp = i;
  btnRecevoir.innerHTML = 'Update';
  
scroll({
    top:0,
    behavior: 'smooth',
  })
  console.log(mood)
  console.log(tmp)
}
 // Delete
function deletData(i){
   const swalWithBootstrapButtons = Swal.mixin({
     customClass: {
       confirmButton: "btn btn-success",
       cancelButton: "btn btn-danger"
     },
     buttonsStyling: false
   });
   swalWithBootstrapButtons.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Yes, delete it!",
     cancelButtonText: "No, cancel!",
     reverseButtons: true
   }).then((result) => {
     if (result.isConfirmed) {
       product.splice(i,1);
       localStorage.pro = JSON.stringify(product);
       shoData();
       swalWithBootstrapButtons.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
       });
     } else if (
       /* Read more about handling dismissals below */
       result.dismiss === Swal.DismissReason.cancel
     ) {
       swalWithBootstrapButtons.fire({
         title: "Cancelled",
         text: "Your imaginary file is safe :)",
         icon: "error"
       });
     }
   });
    // Swal.fire("met2akid si nami");
    // alert('met2aked si nami')
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="#">Why do I have this issue?</a>'
    // });
};
 // Delete
function deletDataFour(i){
    productFor.splice(i,1);
    localStorage.proFor = JSON.stringify(productFor);
    shoDataFor();
}
// Delete All
function deleteAll(){
    localStorage.clear();
    product.splice(0);
    shoData();
};

// Update
// Search Mode
let searchMode = 'btnSearchName';
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
// search 
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
            <td>${product[i].avence}</td>
            <td>${product[i].prix}</td>
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
            <td>${product[i].avence}</td>
            <td>${product[i].prix}</td>
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
            <td>${product[i].avence}</td>
            <td>${product[i].prix}</td>
            <td class="text-primary">En attente</td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i} )">Delet</button></td>
        </tr>
        `
      }
    }
  }
  tcbody.innerHTML = tabl;
}
// Calcule Toutal

  let localObject = JSON.parse(localStorage.pro); 
  let prixTot = 0;
  for(let i = 0; i < product.length ; i++){
    prixTot = prixTot + +localObject[i].prix;
  };

  let localObjectFour = JSON.parse(localStorage.proFor); 
  let prixTotFour = 0;
  for(let i = 0; i < productFor.length ; i++){
    prixTotFour = prixTotFour + +localObjectFour[i].crediFournisseur;
  };

// let arry = [prixTot,prixTotFour,920,300,600, 700];
let arry = [prixTot,prixTotFour,920,300,600, 700];
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
      labels: ['PrixToutal', 'Cridi Four', 'Stag', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: arry,
        backgroundColor:[
            "Blue",
            "#f00", 
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
  // Some prix
  


  // Vue JS 
  let vm = new Vue({
    el: '#myApp',
    data: { 
      name: 'chokri',
      counter: 0,
      tabl: [5, 'fg', 524],
      tem: new Date(),

      
    },
    methods: {
      som: function (){
        let e = 0;
        for(let i = 0; i < product.length; i++){
           e +=  +product[i].prix
        };
        // console.log(e)
        return e;
    
      },
      somF: function(){
        let n = 0;
        for(let i = 0; i < productFor.length; i++){
          n += +productFor[i].crediFournisseur
        }
        return n
      },
      somT: function(){
        let nbt = 0;
        nbt = product.length
        return nbt
      }
    }
  });

  


