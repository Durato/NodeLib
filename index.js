//fetch("https://viacep.com.br/ws/01n001000/json/")
//.then(res => res.json())
//.then(data => console.log(data))
//.catch(err => console.error(err));

const axios = require("axios");
axios.get("https://viacep.com.br/ws/01001000/json/",{timeout : 3000})
.then(res => console.log(res.data))
.catch(err => console.error(err));

//Usaria o Axios em 90% das situações por ser mais simples, porém quando a necessidade de muita performance eu usaria o fetch.