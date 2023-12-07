import {getUsuariosComision} from '@/app/lib/data';

export default async function Home() {

  const usuarios = await getUsuariosComision();

      if(usuarios !== undefined){
        usuarios.map(u => 
          console.log(u.id)
        )
      }
      else{
        console.log("No hay datos.");
      }
     
  return (
    <>
    <h1>Página inicio</h1>
   
    </>
  )
}
