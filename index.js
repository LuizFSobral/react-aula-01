var container = document.getElementById("root");

function Participante(props){
    const [numero, setNumero] = React.useState(0)

    function votar(){
        setNumero(numero + 1)
    }

    return(
    <>
    <h1>{props.nome}</h1>
    <h2>{numero}</h2>
    <button onClick={votar}>Votar</button>
    </>
    )
}

function Votacao(){
    return (
        <>
        <Participante nome="Mequi" />
        <Participante nome ="Bk" />
        <Participante nome ="Papais" />
        </>
    )
}

ReactDOM.createRoot(container).render(<Votacao />)

// function Titulo(props) {
//     return (
//         <React.Fragment>
//             <h1>{props.texto} {props.subtitulo}</h1>
//         </React.Fragment>
//     )
// }

// function Titulos(){
//     return (
//         <>
//         <Titulo texto = "Minha primeira props" subtitulo="isso é um subtitulo" />
//         <Titulo texto = "Minha segunda props" />
//         <Titulo texto = "Minha terceira props" />
//         </>
//     )
// }

 


// //Forma de criar uma TAG HTML pelo JavaScript:
// // var titulo = document.createElement("h1");
// // var titulo2 = document.createElement("h1");
// // titulo.innerHTML = "Titulo inserido pelo JavaScript";
// // titulo2.innerHTML = "Hello World";
// // container.appendChild(titulo);
// // container.appendChild(titulo2);