import { useState } from "react";
import "./App.css";

function App() {
  const [salario, setSalario] = useState("");
  const [atualizarSalario, setAtualizarSalario] = useState("");
  const [result, setResult] = useState("");
  const [valorPago, setValorAserPago] = useState();
  const [valorDesconto, setdValorAserPago] = useState();



  const[tempo, setTempo] = useState();
  const[velocidade, setVelocidade] =useState();
  const[distacia, setDistancia] = useState();
  const[litrosDeGasolina, setLitrosDeGasolina] =useState();



  const[maisVotados, setmaisVotados] = useState();
  const[municipio, setMunicipio] = useState();
  const[eleitores, setEleitores] = useState();
  const[resultado, setResultado] = useState();


  const[resultadoGasolina, setResultadoGasolina] = useState();
  const[km, setKm] = useState();
  const[tipoCarro, setTipoCarro] = useState();

  const[n1, setN1] =useState();
  const[n2, setN2] =useState();  
  const[n3, setN3] =useState();
  const[media , setMedia] =useState();


  const[lado1, setLado1] =useState();  
  const[lado2 , setLado2] =useState(); 
  const[lado3, setLado3] =useState();
  const[resultTiangulo, setResultTiangulo] = useState();

  const[matricula, setMatricula] =useState();  
  const[resultadoMatricula, setResultadoMatricula,] =useState();  
 
function matriculaAluno() {
  let verificarMatricula =  ((parseInt(matricula) / 100000) * 100000) / 100000;
  let passarAnoInteiro = parseInt(verificarMatricula)
  let pegarParteInt =  parseInt(((verificarMatricula - parseInt(verificarMatricula)) * 1000) /100)

  if(pegarParteInt===1){
    setResultadoMatricula("Este aluno foi matriculado em 20"+ passarAnoInteiro + " e ele foi matriculado no " + pegarParteInt + "° semestre")
  }
  else if(pegarParteInt===2){
    setResultadoMatricula("Este aluno foi matriculado em 20"+passarAnoInteiro + " e ele foi matriculado no " + pegarParteInt +"° semestre")
  }
  else{
    setResultadoMatricula("Erro! matricula invalida")
  }
  console.log(pegarParteInt)
  console.log(verificarMatricula) 
  
}
 
function verificarTriangulo() {

  if(lado1 === lado2 && lado1 === lado3){
    setResultTiangulo("triângulo equilátero")
  }
  else if(lado1 === lado2 | lado2  === lado3 | lado1 === lado3 ){
    setResultTiangulo("triângulo isósceles")
  }
  else{
    setResultTiangulo("triângulo escaleno")
  }
  
}

function mediaAluno() {
  let mediaAluno = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) /3 
   if(mediaAluno >= 7 ){
    setMedia("Aluno aprovado! media: " + mediaAluno.toFixed(2))
   }
   else if(mediaAluno  >=3 && mediaAluno <7){
    setMedia("Aluno vai para a prova final: " + mediaAluno.toFixed(2))
   }
   else{
    setMedia("Aluno reprovado: " + mediaAluno.toFixed(2))
   }
   
  }  

function gasolina(){
  if(tipoCarro ==="C"){
    setResultadoGasolina((parseFloat(km) / 12).toFixed(1))
  }
  else if(tipoCarro ==="B"){
    setResultadoGasolina((parseFloat(km) / 9).toFixed(1))
  }
  else if(tipoCarro ==="A"){
    setResultadoGasolina((parseFloat(km) / 8).toFixed(1))
  }
  else{
    setResultadoGasolina("tipo de carro invalido!")
  }
  console.log(tipoCarro)
}

  
  
  function eleicoes(){
   
    if(parseInt(eleitores) <=200000){
      setResultado("não vai ter segundo turno, pois só em tem segundo turno em cidades que tem mais de 200,000");
    }
    else{
      if(parseInt(maisVotados) > eleitores/2){
        setResultado("não vai ter segundo turno no municipio" + municipio)
      }
      else{
        setResultado("vai ter segundo turno no municipio" + municipio)
      }
    }
    
   
   

  }

 function velocidadeMedia(){
  let d = parseFloat(tempo) * parseFloat(velocidade)
  setDistancia(d);
  setLitrosDeGasolina(d/12);
 }

  function calular(e) {
    e.preventDefault();
    let CalculoSalario = parseFloat(salario);
    let k = parseInt(atualizarSalario);
    let precoKw = (CalculoSalario * 0.1) / 100;
    let valorAserPago = precoKw * k;
    let disconto =  valorAserPago - (valorAserPago * 0.1)
    setValorAserPago(valorAserPago);
    setdValorAserPago(disconto)
    setResult(precoKw);
  }
  return (
    <div className="App">
      <h3>Informe o Valor em reais</h3>
      <input placeholder="Informe o salario" onChange={(e) => setSalario(e.target.value)} type="text" />
      <input placeholder="Quantidade de Kw" onChange={(e) => setAtualizarSalario(e.target.value)} type="text" />

      <button onClick={calular}>Verificar</button>

      <br />
      {result && (
        <div style={{width:"70%", textAlign:"center"}}>
          <h1>O valor de cada Kilowalts é R${result} real</h1>
          <h1>O valor a ser pago é R${valorPago} reais</h1>
          <h1>o novo valor a ser pago pela residência com um desconto de 10%. R${valorDesconto}</h1>
        </div>
      )}

      <div>
        <h3>Calular Quantidade de litros de gasolina</h3>
        <label htmlFor=""></label>
        <input onChange={(e) => setTempo(e.target.value)} placeholder="tempo em Min" type="text" /> <br /><br />
        <input onChange={(e) => setVelocidade(e.target.value)} placeholder="velocidade media em km" type="text" /> <br /> <br />
        <button onClick={velocidadeMedia} >Verificar</button>
      </div>
      {distacia &&(
        <div style={{width:"70%", textAlign:"center"}}>
          <h1>{"A distacia percorida é: "+ distacia + " km"}</h1>
          <h1>{"A quantidade de litros de gasolina é " + litrosDeGasolina + " litros"}</h1>
        </div>
      )}

      <div >
        <h3>Eleições  municipais</h3>
        <input onChange={(e) => setMunicipio(e.target.value)} placeholder="Nome do municipio" type="text" /><br /> <br />
        <input onChange={(e) => setEleitores(e.target.value)} placeholder="quantidade de eleitores" type="text" /> <br /><br />
        <input onChange={(e) => setmaisVotados(e.target.value)} placeholder="N° voto C mais votado" type="text" /> <br /><br />
        <button onClick={eleicoes} >Verificar</button>
      </div>
      {maisVotados && (
        <div style={{width:"70%", textAlign:"center"}}>
          <h1>{resultado}</h1>
        </div>
      )}
      <div>
        <h3>Quantidade de gasolina</h3>
        <input onChange={(e) => setKm(e.target.value)}   placeholder="quantidade de KM" type="text" /><br /><br />
        <input  onChange={(e) => setTipoCarro(e.target.value)}  placeholder="tipo de carro" type="text" /><br /><br />
        <button onClick={gasolina}>Verificar</button>
      </div>
      {km &&(
        <div>
          <h1>{" o consumo estimado de combustível, no carro " + tipoCarro +" é de " + resultadoGasolina + " litros de gasolina"}</h1>
        </div>
      )}

        <div>
          <h3>Media do aluno</h3>
          <input onChange={(e) => setN1(e.target.value)}   placeholder="primeira nota" type="text" /><br /><br />
          <input  onChange={(e) => setN2(e.target.value)}  placeholder="segunda nota" type="text" /><br /><br />
          <input  onChange={(e) => setN3(e.target.value)}  placeholder="terceira nota" type="text" /><br /><br />
          <button onClick={mediaAluno}>Verificar</button>
        </div>
        {(
          <div style={{width:"70%", textAlign:"center"}}>
            <h1>{media}</h1>
          </div>
        )}

        <div>
          <h3>Verificar o triâgulo</h3>
          <input onChange={(e) => setLado1(e.target.value)}   placeholder="primeiro lado" type="text" /><br /><br />
          <input  onChange={(e) => setLado2(e.target.value)}  placeholder="segundo lado" type="text" /><br /><br />
          <input  onChange={(e) => setLado3(e.target.value)}  placeholder="terceiro lado" type="text" /><br /><br />
          <button onClick={verificarTriangulo}>Verificar</button>
        </div>
          { resultTiangulo &&(
            <div style={{width:"70%", textAlign:"center"}}>
              <h1>{resultTiangulo}</h1>
            </div>
          ) 
          }


          <div>
            <h3>Matricula da escola</h3>
            <input onChange={(e) => setMatricula(e.target.value)}   placeholder="Informe a matricula" type="text" /><br /><br />
            <button onClick={matriculaAluno}>Verificar</button>
          </div>
          {matricula &&(
            <div  style={{width:"70%", textAlign:"center"}}> 
              <h1>{resultadoMatricula}</h1>
            </div>
          )}
    </div>
  );
}

export default App;
