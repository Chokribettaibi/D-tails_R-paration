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
let nmbA = document.getElementById('nmbA');
let boxx = document.querySelectorAll('.boxx')
let boxTwe = document.getElementById('boxTwe');
let afficheurAff = document.getElementById('afficheurAff');
let dashboard = document.getElementById('dashboard');
let boxThree = document.getElementById('boxThree');
let boxFore = document.getElementById('boxFore')

// afficheurAff.onclick = affActiv();
document.addEventListener("click", function(e){
    console.log(e.target.id)
    if(e.target.id === "afficheurAff") {
        boxOne.className = "boxx"
        boxTwe.className = "active";
        boxThree.className = "boxx";
        boxFore.className = "boxx"
    } else if(e.target.id === "foraff") {
        boxOne.className = "boxx"
        boxTwe.className = "boxx"
        boxThree.className = "active";
        boxFore.className = "boxx"
    } else if (e.target.id === "dashboard") {
        boxOne.className = "active"
        boxTwe.className = "boxx"
        boxThree.className = "boxx";
        boxFore.className = "boxx"
    } else if (e.target.id === "commend") {
        boxOne.className = "boxx"
        boxTwe.className = "boxx"
        boxThree.className = "boxx";
        boxFore.className = "active"
    }
    }
)

// function affActiv(){
//     for(let i=0;i<=2;i++){
//         boxx.item(i).classList.toggle('active');
//     }
//     console.log('hello')
// }

// Create Data
let product;
if (localStorage.pro != null) {
    product = JSON.parse(localStorage.pro);
} else {
    product = [];
}

// Create Client
function red() {
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
        top: 100000,
        behavior: 'smooth',
    });
    console.log(mood);
    if (mood === 'create') {
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
}

// Create Fournisseur
let productFor = [];
if (localStorage.proFor != null) {
    productFor = JSON.parse(localStorage.proFor);
} else {
    productFor = [];
}

function fourn() {
    let newFor = {
        nameFournisseur: nameFournisseur.value,
        crediFournisseur: crediFournisseur.value
    };
    productFor.push(newFor);
    localStorage.setItem('proFor', JSON.stringify(productFor));
    shoDataFor();
}

// Clear inputs Client
function clearData() {
    nomeClient.value = '';
    numeroTélèphone.value = '';
    appareil.value = '';
    panne.value = '';
    avence.value = '';
    prix.value = '';
}

// Clear inputs Fournisseur
function clearDataFur() {
    nameFournisseur.value = '';
    crediFournisseur.value = '';
}

// Validate Form
function validationForm(e) {
    let nemeValid = false;
    let numerValid = false;

    if (numeroTélèphone.value !== "" && numeroTélèphone.value.length <= 8) {
        numerValid = true;
    }

    if (nemeValid === false || numerValid === false) {
        e.preventDefault();
    }
}

// Show Data Client
function shoData() {
    let tabl = '';
    for (let i = 0; i < product.length; i++) {
        tabl += `
        <tr>
            <td>${i}</td>
            <td>${product[i].nomeClient}</td>
            <td>${product[i].appareil}</td>
            <td>${product[i].numeroTélèphone}</td>
            <td>${product[i].panne}</td>
            <td>${product[i].avence}</td>
            <td>${product[i].prix}</td>
            <td><button class="btn btn-outline-primary" onclick="updateData(${i})"><i class="bi bi-arrow-counterclockwise"></i></button></td>
            <td><button class="btn btn-outline-danger" onclick="deletData(${i})"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>
        `;
    }
    tcbody.innerHTML = tabl;
}

shoData();

// Show Data Fournisseur
function shoDataFor() {
    let tabl = '';
    for (let i = 0; i < productFor.length; i++) {
        tabl += `
        <tr>
            <td>${productFor[i].nameFournisseur}</td>
            <td>${productFor[i].crediFournisseur}</td>
            <td><button class="btn btn-outline-danger" onclick="deletDataFour(${i})"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>
        `;
    }
    tfbody.innerHTML = tabl;
}

shoDataFor();

// Update Data
function updateData(i) {
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
        top: 0,
        behavior: 'smooth',
    });
}

// Delete Data
function deletData(i) {
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
            product.splice(i, 1);
            localStorage.pro = JSON.stringify(product);
            shoData();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
}

// Delete Fournisseur Data
function deletDataFour(i) {
    productFor.splice(i, 1);
    localStorage.proFor = JSON.stringify(productFor);
    shoDataFor();
}

// Delete All
function deleteAll() {
    localStorage.clear();
    product.splice(0);
    shoData();
}

// Search Mode
let searchMode = 'btnSearchName';
function getSearchMode(id) {
    if (id == 'btnSearchName') {
        searchMode = "btnSearchName";
        search.placeholder = 'Search By Name';
    } else if (id == 'btnSearchNumero') {
        searchMode = 'btnSearchNumero';
        search.placeholder = 'Search By Numero télèphone';
    } else if (id == 'btnSearchAppareil') {
        searchMode = 'btnSearchAppareil';
        search.placeholder = 'Search By Appareil';
    }
    search.focus();
}

// Search
function recherch(e) {
    let tabl = '';
    if (searchMode == 'btnSearchName') {
        for (let i = 0; i < product.length; i++) {
            if (product[i].nomeClient.includes(e)) {
                tabl += `
                <tr>
                    <td>${i}</td>
                    <td>${product[i].nomeClient}</td>
                    <td>${product[i].appareil}</td>
                    <td>${product[i].numeroTélèphone}</td>
                    <td>${product[i].panne}</td>
                    <td>${product[i].avence}</td>
                    <td>${product[i].prix}</td>
                    <td class="text-primary">En attente</td>
                    <td><button class="btn btn-outline-danger" onclick="deletData(${i})">Delete</button></td>
                </tr>
                `;
            }
        }
    } else if (searchMode == 'btnSearchNumero') {
        for (let i = 0; i < product.length; i++) {
            if (product[i].numeroTélèphone.includes(e)) {
                tabl += `
                <tr>
                    <td>${i}</td>
                    <td>${product[i].nomeClient}</td>
                    <td>${product[i].appareil}</td>
                    <td>${product[i].numeroTélèphone}</td>
                    <td>${product[i].panne}</td>
                    <td>${product[i].avence}</td>
                    <td>${product[i].prix}</td>
                    <td class="text-primary">En attente</td>
                    <td><button class="btn btn-outline-danger" onclick="deletData(${i})">Delete</button></td>
                </tr>
                `;
            }
        }
    } else if (searchMode == 'btnSearchAppareil') {
        for (let i = 0; i < product.length; i++) {
            if (product[i].appareil.includes(e)) {
                tabl += `
                <tr>
                    <td>${i}</td>
                    <td>${product[i].nomeClient}</td>
                    <td>${product[i].appareil}</td>
                    <td>${product[i].numeroTélèphone}</td>
                    <td>${product[i].panne}</td>
                    <td>${product[i].avence}</td>
                    <td>${product[i].prix}</td>
                    <td class="text-primary">En attente</td>
                    <td><button class="btn btn-outline-danger" onclick="deletData(${i})">Delete</button></td>
                </tr>
                `;
            }
        }
    }
    tcbody.innerHTML = tabl;
}

// Chart Initialization
const ctxn = document.getElementById('myChart');
new Chart(ctxn, {
    type: 'pie',
    data: {
        labels: ['dépenses', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [200, 800, 920, 300, 600, 700],
            backgroundColor: [
                "#727272",
                "#f00",
                "#007bff"
            ],
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
            data: [200, 800, 920, 300, 600, 700],
            backgroundColor: [
                "Blue",
                "#f00",
                "Yellow",
                "Green",
                "Purple"
            ],
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

// Vue.js Integration
let vm = new Vue({
    el: '#myApp',
    data: {
        name: 'chokri',
        counter: 0,
        tabl: [5, 'fg', 524],
        tem: new Date(),
    },
    methods: {
        som: function () {
            let e = 0;
            for (let i = 0; i < product.length; i++) {
                e += +product[i].prix;
            }
            return e;
        },
        somF: function () {
            let n = 0;
            for (let i = 0; i < productFor.length; i++) {
                n += +productFor[i].crediFournisseur;
            }
            return n;
        },
        somT: function () {
            let nbt = 0;
            nbt = product.length;
            return nbt;
        }
    }
});
