webpackJsonp([1],{"+YNr":function(e,t){e.exports={_from:"web3",_id:"web3@1.0.0-beta.34",_inBundle:!1,_integrity:"sha1-NH5WG3hAmMtVYzFfSQR5odkfKrE=",_location:"/web3",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"web3",name:"web3",escapedName:"web3",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/web3/-/web3-1.0.0-beta.34.tgz",_shasum:"347e561b784098cb5563315f490479a1d91f2ab1",_spec:"web3",_where:"C:\\projects\\TuneTrade\\frontend",author:{name:"ethereum.org"},authors:[{name:"Fabian Vogelsteller",email:"fabian@ethereum.org",homepage:"http://frozeman.de"},{name:"Marek Kotewicz",email:"marek@parity.io",url:"https://github.com/debris"},{name:"Marian Oancea",url:"https://github.com/cubedro"},{name:"Gav Wood",email:"g@parity.io",homepage:"http://gavwood.com"},{name:"Jeffery Wilcke",email:"jeffrey.wilcke@ethereum.org",url:"https://github.com/obscuren"}],bugs:{url:"https://github.com/ethereum/web3.js/issues"},bundleDependencies:!1,dependencies:{"web3-bzz":"1.0.0-beta.34","web3-core":"1.0.0-beta.34","web3-eth":"1.0.0-beta.34","web3-eth-personal":"1.0.0-beta.34","web3-net":"1.0.0-beta.34","web3-shh":"1.0.0-beta.34","web3-utils":"1.0.0-beta.34"},deprecated:!1,description:"Ethereum JavaScript API",keywords:["Ethereum","JavaScript","API"],license:"LGPL-3.0",main:"src/index.js",name:"web3",namespace:"ethereum",repository:{type:"git",url:"https://github.com/ethereum/web3.js/tree/master/packages/web3"},types:"index.d.ts",version:"1.0.0-beta.34"}},0:function(e,t){},1:function(e,t){},"1/oy":function(e,t){},2:function(e,t){},"2fZe":function(e,t){},"2kim":function(e,t,a){"use strict";function s(e,t){return console.log("a.Name b.Name:",e.Name,t.Name),0}a.d(t,"a",function(){return f});var c=a("7+uW"),n=a("NYxO"),i=a("8+8L"),r=a("mtWM"),o=a.n(r);a("MN9Z");a("BCBd"),c.a.use(n.a),c.a.use(i.a),c.a.use(o.a);var f=new n.a.Store({state:{web3contract:{},web3account:"",owner:"",songs:[]},getters:{getCountryList:function(e){return e.countries},getCountry:function(e){return function(t){return e.countries.find(function(e){return e.ccode===t})}}},mutations:{UpdatePrice:function(e,t){for(var a in e.countries)if(e.countries[a].ccode===t.ccode){var s=t.price;s=Math.ceil(1e4*s)/1e4,e.countries[a].cprice=s,e.refreshCountries=!1}},GetSongs:function(e,t){console.log("contract from mutation:",e.web3contract),e.web3contract.GetSongs(function(t,a){console.log("Songs:",a),e.songs=a})}},actions:{updateBlockChainData:function(e){f.state.currentStorageVersion=f.state.storageVersion},ConnectToContract:function(e){var t=web3.eth.contract(smartContract);e.state.web3contract=t.at("0x38cb8f8995b1e811db10182b303913039ae2dacc"),e.state.web3contract.GetSongs(function(t,a){for(var c=[],n=0;n<a.length;n++){var i={};i.address=a[n],c.push(i),e.state.web3contract.GetSongDetailsPart1(a[n],function(e,t){var a={};a.address=t[5];var s=a.address,n=c.findIndex(function(e,t,a){return console.log("AddressIn:",s),e.address==s});c[n].OrderNum=n,c[n].Name=t[0],c[n].Author=t[1],c[n].Genre=t[2],c[n].Price=t[3].toString(),console.log("Price:",t[3].toString()),c[n].Created=t[4]}),e.state.web3contract.GetSongDetailsPart2(a[n],function(e,t){var a={};a.address=t[5];var n=a.address,i=c.findIndex(function(e,t,a){return console.log("AddressIn:",n),e.address==n});c[i].Type=t[0],c[i].Contribution=parseInt(t[1]),c[i].TotalSupply=t[2],c[i].Phase=t[3],c[i].Owner=t[4],c[i].Volume=parseInt(t[6]),c[i].address=n,c.sort(s)}),console.log("SongList:",c)}e.state.songs=c.sort(s),e.state.songs.sort(s)})}}})},3:function(e,t){},4:function(e,t){},"4Vh3":function(e,t){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},"6ZSt":function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},"8AdK":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("Menu"),e._v(" "),a("router-view")],1)],1)},c=[],n={render:s,staticRenderFns:c};t.a=n},"8YCc":function(e,t){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},"9M+g":function(e,t){},BCBd:function(e,t){smartContract=[{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"songsData2",outputs:[{name:"volume",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"i",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"songsData1",outputs:[{name:"name",type:"string"},{name:"author",type:"string"},{name:"genre",type:"string"},{name:"price",type:"uint256"},{name:"creationTime",type:"uint256"},{name:"isBand",type:"bool"},{name:"contribution",type:"uint256"},{name:"totalSupply",type:"uint256"},{name:"phase",type:"uint8"},{name:"owner",type:"address"},{name:"contractAddress",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_author",type:"string"}],name:"AddSong",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"GetSongs",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_song",type:"address"}],name:"GetSongDetailsPart1",outputs:[{name:"_name",type:"string"},{name:"_author",type:"string"},{name:"_genre",type:"string"},{name:"_price",type:"uint256"},{name:"_creationTime",type:"uint256"},{name:"_contractAddress",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_song",type:"address"}],name:"GetSongDetailsPart2",outputs:[{name:"_isBand",type:"bool"},{name:"_contribution",type:"uint256"},{name:"_totalSupply",type:"uint256"},{name:"_phase",type:"uint8"},{name:"_owner",type:"address"},{name:"_contractAddress",type:"address"},{name:"_volume",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},BZeW:function(e,t){},DFXc:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{},[e._v("\n  Token Exchange\n")])},c=[],n={render:s,staticRenderFns:c};t.a=n},GcMe:function(e,t){},GfHa:function(e,t){},I9lx:function(e,t,a){"use strict";t.a={}},Id91:function(e,t){},KYqO:function(e,t){e.exports={_from:"elliptic@^6.0.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.0.0",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.0.0",saveSpec:null,fetchSpec:"^6.0.0"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_shasum:"cac9af8762c85836187003c8dfe193e5e2eae5df",_spec:"elliptic@^6.0.0",_where:"C:\\projects\\TuneTrade\\frontend\\node_modules\\browserify-sign",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},M93x:function(e,t,a){"use strict";function s(e){a("2fZe")}var c=a("xJD8"),n=a("8AdK"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),c=a("e6fC"),n=a("M93x"),i=a("ccZh"),r=a("prqd"),o=a("Rywy"),f=a("YaEn"),d=a("qb6w"),b=(a.n(d),a("9M+g")),l=(a.n(b),a("GcMe")),u=(a.n(l),a("2kim"));s.a.use(c.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:f.a,store:u.a,template:"<App/>",components:{App:n.a,Menu:i.a,TokenExchange:r.a,NewContract:o.a}})},P8gu:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{},[e._v("\n  Footer  \n")])},c=[],n={render:s,staticRenderFns:c};t.a=n},QDfD:function(e,t){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},Rywy:function(e,t,a){"use strict";function s(e){a("BZeW")}var c=a("sFPo"),n=a("guDe"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},TVmP:function(e,t,a){"use strict";function s(e){a("Z727")}var c=a("UthT"),n=a("P8gu"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},UthT:function(e,t,a){"use strict";t.a={}},"X75/":function(e,t){},YF4k:function(e,t){},YaEn:function(e,t,a){"use strict";var s=a("7+uW"),c=a("/ocq"),n=a("nh2a"),i=a("prqd"),r=a("Rywy");s.a.use(c.a),t.a=new c.a({routes:[{path:"/SongList",name:"SongList",component:n.a},{path:"/tokenexchange",name:"TokenExchange",component:i.a},{path:"/newcontract",name:"NewContract",component:r.a}]})},YkPt:function(e,t,a){e.exports=a.p+"static/img/player.0249e2b.png"},Z727:function(e,t){},ZO9B:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("b-modal",{attrs:{id:"modalInfo","ok-only":"",show:"",centered:""},on:{hide:e.resetModal}},[s("iframe",{attrs:{width:"100%",height:"450",scrolling:"no",frameborder:"no",allow:"autoplay",src:e.musicPlayerLink}})]),e._v(" "),s("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"secondary"}},[s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Search"},model:{value:e.tablefilter,callback:function(t){e.tablefilter=t},expression:"tablefilter"}}),e._v(" "),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),e._v(" "),s("b-nav-item-dropdown",{staticStyle:{"list-style":"none"},attrs:{text:"Type",right:""}},[s("b-dropdown-item",{attrs:{href:"#"}},[e._v("Song")]),e._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[e._v("Band")]),e._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[e._v("All")])],1)],1),e._v(" "),s("b-table",{attrs:{"sort-by":e.sortBy,"current-page":e.currentPage,"per-page":e.perPage,"sort-desc":e.sortDesc,striped:"",hover:"",items:e.songs,fields:e.fields,small:"",variant:"danger",filter:e.tablefilter},on:{"update:sortBy":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"Buy",fn:function(t){return[s("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(a){a.stopPropagation(),e.info(t.item,t.index,a.target)}}},[e._v("Buy")])]}},{key:"show_details",fn:function(t){return[s("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(e){return e.stopPropagation(),t.toggleDetails(e)}}},[e._v("\n      "+e._s(t.detailsShowing?"Hide":"Show")+"  Details\n      ")])]}},{key:"TotalSupply",fn:function(t){return[e._v("\n      "+e._s(e.localNumber(t.item.TotalSupply))+"\n    ")]}},{key:"Volume",fn:function(t){return[e._v("\n      "+e._s(e.localNumber(t.item.Volume))+"\n    ")]}},{key:"Contribution",fn:function(t){return[e._v("\n      "+e._s(e.localNumber(t.item.Contribution))+"\n    ")]}},{key:"Type",fn:function(t){return[e._v("\n      "+e._s(e.SongOrBand(t.item.Type))+"\n    ")]}},{key:"Picture",fn:function(t){return[s("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 2fr"}},[s("a",{on:{click:function(t){e.playMusic()}}},[s("img",{staticClass:"player",staticStyle:{width:"30px",margin:"5px"},attrs:{src:a("YkPt"),alt:""}})]),e._v(" "),s("img",{staticStyle:{width:"50px"},attrs:{src:e.picLink(t.item.OrderNum),alt:""}})])]}},{key:"Name",fn:function(t){return[e._v('\n      "'+e._s(t.item.Name)+'"\n    ')]}},{key:"row-details",fn:function(t){return[s("b-card",{staticStyle:{"background-color":"#dadada","border-width":"1px","border-style":"solid","border-color":"black"}},[s("b-row",[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"4"}},[s("img",{attrs:{src:e.picLink(t.item.OrderNum),width:"240px",height:"240px"}})]),e._v(" "),s("b-col",{attrs:{sm:"8"}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Type:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(e.SongOrBand(t.item.Type)))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Name:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v('"'+e._s(t.item.Name)+'"')])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Author:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(t.item.Author))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Price:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(e.Price(t.item.Price)))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Phase:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(e.PhaseToString(t.item.Phase)))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Website:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[s("b-button",{attrs:{target:"_blank",href:"https://soundcloud.com/kodak-black",size:"sm",variant:"info"}},[e._v("Website")])],1)],1)],1),e._v(" "),s("b-col",{attrs:{sm:"6"}},[s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Contribution:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(t.item.Contribution))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Total Supply:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(e.localNumber(t.item.TotalSupply)))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Genre:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(t.item.Genre))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Created:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[e._v(e._s(e.getLocalTime(t.item.Created)))])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",[e._v("---\n              ")])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"5"}},[s("b",[e._v("Buy:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"auto"}},[s("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(a){a.stopPropagation(),e.info(t.item,t.index,a.target)}}},[e._v("Buy")])],1)],1)],1)],1),e._v(" "),s("b-row",[s("b-col",{staticStyle:{margin:"10px 0px"}})],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"3"}},[s("b",[e._v("Owner:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"8"}},[e._v(" 0xFb8E385876ca18d15308E8e0e2b6d026dDF6995A\n            "),s("b-link",{staticClass:"text-primary",attrs:{target:"_blank",href:"https://etherscan.io/token/0xf230b790e05390fc8295f4d3f60332c93bed42e2",variant:"danger"}},[e._v("\n              Etherscan\n            ")])],1)],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"3"}},[s("b",[e._v("Contract address: ")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"8"}},[e._v("0xFb8E385876ca18d15308E8e0e2b6d026dDF6995A\n            "),s("b-link",{staticClass:"text-primary",attrs:{target:"_blank",href:"https://etherscan.io/token/0xf230b790e05390fc8295f4d3f60332c93bed42e2",variant:"danger"}},[e._v("\n              Etherscan\n            ")])],1)],1)],1)],1),e._v(" "),s("br"),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"6"}},[s("b",[e._v("Description:")])]),e._v(" "),s("b-col",{staticClass:"text-sm-left",attrs:{sm:"6"}},[s("b")])],1),e._v(" "),s("b-row",{staticClass:"mb-2"},[s("b-col",{staticClass:"text-sm-left",attrs:{sm:"6"}},[s("p",{staticStyle:{"text-align":"justify"}},[e._v("  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),e._v(" "),s("b-col",[s("iframe",{attrs:{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425635065&color=%231f0604&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}})])],1),e._v(" "),s("br"),e._v(" "),s("b-button",{attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v("Hide Details")])],1)]}}])}),e._v(" "),s("b-pagination",{attrs:{size:"sm","per-page":e.perPage,"total-rows":e.totalRows,variant:"dark"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._v(" "),s("div",[e._v("We have "+e._s(e.songsCounter)+" songs.")])],1)},c=[],n={render:s,staticRenderFns:c};t.a=n},a4GS:function(e,t){},ccZh:function(e,t,a){"use strict";function s(e){a("YF4k")}var c=a("gR1W"),n=a("qd2D"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},eajV:function(e,t){e.exports={_from:"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",_id:"websocket@1.0.26",_inBundle:!1,_integrity:"",_location:"/websocket",_phantomChildren:{},_requested:{type:"git",raw:"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",name:"websocket",escapedName:"websocket",rawSpec:"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",saveSpec:"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",fetchSpec:"git://github.com/frozeman/WebSocket-Node.git",gitCommittish:"browserifyCompatible"},_requiredBy:["/web3-providers-ws"],_resolved:"git://github.com/frozeman/WebSocket-Node.git#6c72925e3f8aaaea8dc8450f97627e85263999f2",_spec:"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",_where:"C:\\projects\\TuneTrade\\frontend\\node_modules\\web3-providers-ws",author:{name:"Brian McKelvey",email:"brian@worlize.com",url:"https://www.worlize.com/"},browser:"lib/browser.js",bugs:{url:"https://github.com/theturtle32/WebSocket-Node/issues"},bundleDependencies:!1,config:{verbose:!1},contributors:[{name:"Iñaki Baz Castillo",email:"ibc@aliax.net",url:"http://dev.sipdoc.net"}],dependencies:{debug:"^2.2.0",nan:"^2.3.3","typedarray-to-buffer":"^3.1.2",yaeti:"^0.0.6"},deprecated:!1,description:"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",devDependencies:{"buffer-equal":"^1.0.0",faucet:"^0.0.1",gulp:"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4",jshint:"^2.0.0","jshint-stylish":"^2.2.1",tape:"^4.0.1"},directories:{lib:"./lib"},engines:{node:">=0.10.0"},homepage:"https://github.com/theturtle32/WebSocket-Node",keywords:["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],license:"Apache-2.0",main:"index",name:"websocket",repository:{type:"git",url:"git+https://github.com/theturtle32/WebSocket-Node.git"},scripts:{gulp:"gulp",install:"(node-gyp rebuild 2> builderror.log) || (exit 0)",test:"faucet test/unit"},version:"1.0.26"}},ejIc:function(e,t){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},gR1W:function(e,t,a){"use strict";t.a={name:"Menu",data:function(){return{networkId:0,metaMaskAccount:"ddd"}},created:function(){web3.currentProvider.network;var e=this;web3.currentProvider.publicConfigStore.on("update",function(t,a){console.log("web3 metmask updated"),e.metaMaskAccount=web3.eth.defaultAccount}),web3.version.getNetwork(function(t,a){e.networkId=parseInt(a)}),this.metaMaskAccount=web3.eth.defaultAccount},computed:{loggedIn:function(){return console.log(this.metaMaskAccount),void 0!==this.metaMaskAccount},metaMaskUninstalled:function(){return"undefined"==typeof web3||(console.log("web3:",web3.currentProvider.constructor.name),"MetamaskInpageProvider"!=web3.currentProvider.constructor.name)}}}},guDe:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{},[e._v("\nNewContract\n  ")])},c=[],n={render:s,staticRenderFns:c};t.a=n},nh2a:function(e,t,a){"use strict";function s(e){a("a4GS")}var c=a("v4x4"),n=a("ZO9B"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},prqd:function(e,t,a){"use strict";function s(e){a("X75/")}var c=a("I9lx"),n=a("DFXc"),i=a("VU/8"),r=s,o=i(c.a,n.a,!1,r,null,null);t.a=o.exports},qb6w:function(e,t){},qd2D:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e.metaMaskUninstalled?a("b-alert",{staticStyle:{"background-color":"#d11",color:"#f0f0f0"},attrs:{"alert-variant":"danger",variant:"danger",show:""}},[e._v(" MetaMask isn't installed. You need to install metamask in order to be able to use this application. "),a("b-link",{staticStyle:{color:"#f6851b"},attrs:{target:"_blank",href:"https://metamask.io/"}},[e._v(" Go here => MetaMask ")])],1):e._e(),e._v(" "),e.loggedIn||e.metaMaskUninstalled?e._e():a("b-alert",{staticStyle:{"background-color":"#d11",color:"#f0f0f0"},attrs:{show:""}},[e._v("Please login to MetaMask ")]),e._v(" "),a("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"info"}},[a("b-navbar-brand",[a("router-link",{attrs:{to:{name:"SongList",params:{}}}},[e._v("List")])],1),e._v(" "),a("b-navbar-brand",[a("router-link",{attrs:{to:{name:"NewContract",params:{}}}},[e._v("Create Contract")])],1),e._v(" "),a("b-navbar-brand",[a("router-link",{attrs:{to:{name:"TokenExchange",params:{}}}},[e._v("Token Exchange")])],1)],1),e._v(" "),a("div",[e._v(e._s(e.networkId)+" "+e._s(e.metaMaskAccount))])],1)},c=[],n={render:s,staticRenderFns:c};t.a=n},sFPo:function(e,t,a){"use strict";t.a={}},v4x4:function(e,t,a){"use strict";var s=a("MN9Z"),c=[{Name:"Red Hot Chilli Peppers",Author:"John Green",Type:"Song",Phase:"Pre-Sale",Price:"0.001 ETH",Contribution:"35%",TotalSupply:1200,Genre:"Pop",Created:"12/07/2018 18:56:34",Website:"Link",Buy:"Buy",show_details:""},{Name:"Red Hot Chilli Peppers",Author:"John Green",Type:"Song",Phase:"Pre-Sale",Price:"0.001 ETH",Contribution:"35%",TotalSupply:1200,Genre:"Rock",Created:"12/07/2018 18:56:34",Website:"Link",Buy:"Buy",show_details:""},{Name:"Red Hot Chilli Peppers",Author:"John Green",Type:"Song",Phase:"Pre-Sale",Price:"0.001 ETH",Contribution:"35%",TotalSupply:1200,Genre:"Trip Hop",Created:"12/07/2018 18:56:34",Website:"Link",Buy:"Buy",show_details:""},{Name:"Red Hot Chilli Peppers",Author:"John Green",Type:"Song",Phase:"Pre-Sale",Price:"0.001 ETH",Contribution:"35%",TotalSupply:1200,Genre:"Pop",Created:"12/07/2018 18:56:34",Website:"Link",Buy:"Buy",show_details:""}];t.a={data:function(){return{sortBy:"age",modalInfo:{title:"",content:""},sortDesc:!1,tablefilter:"",currentPage:1,picIteration:0,musicPlayerLink:"",perPage:10,totalRows:20,fields:[{key:"Picture",sortable:!1},{key:"Type",sortable:!1},{key:"Name",sortable:!0},{key:"Author",sortable:!0},{key:"Price",sortable:!0},{key:"Volume",sortable:!0},{key:"Contribution",sortable:!0},{key:"TotalSupply",sortable:!0},{key:"Genre",sortable:!0},{key:"show_details",sortable:!1}],items:c}},created:function(){this.$store.dispatch("ConnectToContract")},methods:{Price:function(e){return s.utils.fromWei(e,"ether")},info:function(e,t,a){this.$root.$emit("bv::show::modal","modalInfo",a)},resetModal:function(){},getLocalTime:function(e){return new Date(1e3*parseInt(e)).toLocaleString()},SongOrBand:function(e){return!0===e?"Band":"Song"},PhaseToString:function(e){switch(parseInt(e)){case 0:return"not running";case 1:return"Pre sale";case 2:return"ICO 1";case 3:return"ICO 2";case 4:return"ICO 3";case 5:return"Post ICO";case 6:return"Finished"}},playMusic:function(){console.log(this.musicPlayerLink),this.musicPlayerLink.length>0?this.musicPlayerLink="":this.musicPlayerLink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/232694761&color=%231f0604&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},localNumber:function(e){return isNaN(e)?0:parseFloat(e).toLocaleString()},picLink:function(e){return"https://source.unsplash.com/collection/1301616/"+(480+e%20)+"x480"}},computed:{songs:function(){return this.$store.state.songs},songsCounter:function(){return void 0!==this.$store.state.songs?this.$store.state.songs.length:0}}}},xJD8:function(e,t,a){"use strict";var s=a("ccZh"),c=a("TVmP");t.a={name:"app",components:{Menu:s.a,Footer:c.a}}},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0fd0c7a7a009c43c1fcc.js.map