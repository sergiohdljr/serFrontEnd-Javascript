// -----------MAP------------
// exemplos
// dado esse array de objetos js
const musicas = [
  { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
  { id: 2, name: "Oblivion", artist: "Mastodon" },
  { id: 3, name: "Flying Whales", artist: "Gojira" },
  { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" },
];

// transformação de um array de objetos em um array de strings
const musicasString = musicas.map(musica=>musica.name)
// console.log(musicasString) // recebe ums array com todos nomes das músicas

const musicasLowerCase = musicasString.map(musica => musica.toLocaleLowerCase())
// console.log(musicasLowerCase)//modificando todos elementos do array para lowerCase
// --------------------------------

// -----------FILTER----------

//filtrar os números pares e ímpares 
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12]
const numeroPares = numeros.filter(numero => numero % 2 == 0)
const numerosImpares = numeros.filter(numero=>numero % 2 != 0 )
// console.log(numeroPares)
// console.log(numerosImpares)

//simples filtragem por string

const kanyeNames = ['Yeezy','Yeezus','Yandhi','Ye']

const ye = kanyeNames.filter(name =>name.includes("Ye") )
// console.log(ye)

const kanyeSongs = [
    {id: 1,artist:'Kanye West', song:'Hurricane', album:'Donda' },
    {id: 2,artist:'Kanye West', song:'Power', album:'My Beautiful Dark Twisted Fantasy'},
    {id: 3,artist:'Kanye West', song:'Moon', album:'Donda'},
    {id: 4,artist:'Kanye West', song:'FML', album:'The Life Of Pablo' }
]

const DondaSongs = kanyeSongs.filter((song)=>{
  return song.album === "Donda"  
})

// console.log(DondaSongs)

// ------------REDUCE-------------

const idades = [25,30,22,34,25,30]

const somaIdades = idades.reduce(function(acc,idadeAtual){
    return acc + idadeAtual
},0)

const mediaIdades = somaIdades/idades.length
// console.log(mediaIdades)

const multi = [musicas,[{id: 112, name: "Chop Suey",artist :"System of a Down"}]]

const flatMult = multi.reduce((acc,currValue)=>{ return acc.concat(currValue)
},[])

// console.log(flatMult)

const scores = [23,63,23,35]
const total = scores.reduce((acc,scoreAtual)=>{
    return acc + scoreAtual
},0)

// console.log(total)

let arrays = [[1,2,3],[4,5],[6]]
const arrayUnico = arrays.reduce((acc,array)=>{
    return acc.concat(array)
},[])

// console.log(arrayUnico)