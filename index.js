const squares = document.getElementsByClassName("square")
const container = document.getElementById("container")
const resetButton = document.getElementById("reset")
let add = "X"
function addXO(event){
    if(event.target.tagName === "DIV"){
       let quadrado = event.target.id
        squares[quadrado].innerHTML = ""
        let paragrafo = document.createElement("p")
        paragrafo.innerText = add
        if(add === "X"){
            add = "O"
        }else{
            add = "X"
        }
        squares[quadrado].appendChild(paragrafo) 
    }
    verificarGanhador()
}

container.addEventListener("click", addXO)

function verificarGanhador(){
    if(squares[0].firstChild && squares[1].firstChild && squares[2].firstChild){
        if(squares[0].firstChild.innerText === squares[1].firstChild.innerText && squares[1].firstChild.innerText === squares[2].firstChild.innerText){
            alert(`O ${squares[0].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[0].firstChild && squares[3].firstChild && squares[6].firstChild){
        if(squares[0].firstChild.innerText === squares[3].firstChild.innerText && squares[3].firstChild.innerText === squares[6].firstChild.innerText){
            alert(`O ${squares[0].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[3].firstChild && squares[4].firstChild && squares[5].firstChild){
        if(squares[3].firstChild.innerText === squares[4].firstChild.innerText && squares[4].firstChild.innerText === squares[5].firstChild.innerText){
            alert(`O ${squares[3].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[6].firstChild && squares[7].firstChild && squares[8].firstChild){
        if(squares[6].firstChild.innerText === squares[7].firstChild.innerText && squares[7].firstChild.innerText === squares[8].firstChild.innerText){
            alert(`O ${squares[6].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[1].firstChild && squares[4].firstChild && squares[7].firstChild){
        if(squares[1].firstChild.innerText === squares[4].firstChild.innerText && squares[4].firstChild.innerText === squares[7].firstChild.innerText){
            alert(`O ${squares[1].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[2].firstChild && squares[5].firstChild && squares[8].firstChild){
        if(squares[2].firstChild.innerText === squares[5].firstChild.innerText && squares[5].firstChild.innerText === squares[8].firstChild.innerText){
            alert(`O ${squares[2].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[0].firstChild && squares[4].firstChild && squares[8].firstChild){
        if(squares[0].firstChild.innerText === squares[4].firstChild.innerText && squares[4].firstChild.innerText === squares[8].firstChild.innerText){
            alert(`O ${squares[0].firstChild.innerText} ganhou!!`)
        }
    }
    if(squares[2].firstChild && squares[4].firstChild && squares[6].firstChild){
        if(squares[2].firstChild.innerText === squares[4].firstChild.innerText && squares[4].firstChild.innerText === squares[6].firstChild.innerText){
            alert(`O ${squares[2].firstChild.innerText} ganhou!!`)
        }
    }
}

function reset(){
    for(let i = 0; i < squares.length; i++){
        squares[i].innerHTML = ""
    }
    add = "X"
}

resetButton.addEventListener("click", reset)