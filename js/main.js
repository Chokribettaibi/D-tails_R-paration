let barCanvas = document.getElementById('barCanvas');

// let barChart = new Chart(barCanvas, {
//     type: "bar",
//     data: {
//         labels: ["Bettaibi", "Chokri", "Hong Kong"],
//         datasets: [{
//             data: [241, 232, 140, 50],
//             backgroundColor: [
//                 "red",
//                 "#00f"
//             ]
//         }]
//     }
// })
  let arry = [500,200,920,300,600, 700]
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

  console.log(location);
  // console.log(typeof location);
  // console.log(location.host);
  // console.log(typeof location.host);
  console.log(location.host);
  console.log(location.hostname);
  console.log(window.ondrop)

  window.onscroll = ()=>{
    console.log(scrollX, scrollY)
  }
  window.ondrop = ()=>{
    console.log("OK")
  }

