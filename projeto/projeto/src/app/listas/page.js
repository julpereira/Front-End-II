import Image from "next/image";

export default function Listas() {
   const racas = ["Vira-lata", "Pit-bull", "Shitzu", "Labrador"]
   
   const racasObj = [ 
    {
        id:0,
        raca: "Vira-lata"
    },
    {
        id:1,
        raca: "Shitzu"
    },
    {
        id:2,
        raca: "Labrador"
    },
    {
        id:3,
        raca: "Pit-bull"
    },
];

   return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <h1>Listas</h1>
            
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i)=> (
                <li key={i}>{i+1} - {raca}</li>
                ))}
            </ul>
            <div>
            <h2>Lista de objetos</h2>
            {racasObj.map((racaObj) => (
                <div key={racaObj.id}>
                    <h3>{racaObj.id}</h3>
                    <Image src='' alt={racaObj.raca} width={200} height={200}></Image>
                    <p>{racaObj.raca}</p>
                </div>
            ))}
            </div>
        </div>
     )
}