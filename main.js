//const Blockchain =require("./blockchain.js");
//import {Blockchain,Block }from './blockchain.js'
var ss = require('./blockchain.js');
let user_bc= new ss.Blockchain();
user_bc.addBlock(new ss.Block(1,new Date(),{username:'zakaria',password:'1234'}));
user_bc.addBlock(new ss.Block(2,new Date(),{username:'babu',password:'1234'}));



var loghash = user_bc.checkCredential({username:'zakaria',password:'1234'})
var loghash2 = user_bc.checkCredential({username:'babu',password:'1234'})
let login_bc= new ss.Blockchain();



if(loghash!==false)
{
    login_bc.addBlock(new ss.Block(1,new Date(),{userhash:loghash}));

    // API will be called here
}
if(loghash2!==false)
{
    login_bc.addBlock(new ss.Block(2,new Date(),{userhash:loghash}));

    // API will be called here
}

//console.log('Is blockchain Valid: '+ bc.isChainValid());

// Let's now manipulate the data
//bc.chain[1].data = { amount: 100 };

// Check our chain again (will now return false)
//console.log("Blockchain valid? " + bc.isChainValid());
console.log(JSON.stringify(user_bc,null,4));
console.log(JSON.stringify(login_bc,null,4));

//console.log(bc.login({username:'zakaria',password:'1236664'}));