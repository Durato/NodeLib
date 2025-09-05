//COWSAY
//const cowsay = require('cowsay');
//console.log(cowsay.say({
//text: "Oi, eu sou uma vaquinha programadora!",
//e: "^^",
//T: "U "
//}));

//CHALK
//import chalk from 'chalk';
//console.log(chalk.blue('Texto azul'));
//console.log(chalk.green.bold('Texto verde em negrito'));
//console.log(chalk.red.bgYellow('Erro!'));

//LODASH
//const _ = require('lodash');
//const numeros = [1, 2, 3, 4, 5];
//console.log(_.shuffle(numeros)); // embaralha
//console.log(_.sum(numeros)); // soma tudo

//FIGLET
//const figlet = require('figlet');
//figlet('Hello World!', (err, data) => {
//if (!err) console.log(data);
//});

//FAKERJS
//const { faker } = require('@faker-js/faker');
//console.log(faker.person.fullName());
//console.log(faker.internet.email());
//console.log(faker.location.city());

//DAYJS
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
console.log(dayjs().format('DD/MM/YYYY HH:mm'));
console.log(dayjs().add(7, 'day').fromNow()); // daqui a 7 dias
