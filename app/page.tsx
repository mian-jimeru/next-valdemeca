import { getUsuariosComision } from '@/app/lib/data';
import { getAreasComision } from '@/app/lib/data';

export default async function Home() {

  const usuarios = await getUsuariosComision();
  const areas = await getAreasComision();

  return (
    <>
      <h1>Página inicio</h1>
      <table className="container mx-auto">
        <thead className="bg-gray-900">
          <tr className="border-solid border-b-2 border-gray-600 text-white">
            <th className="p-3">ID</th>
            <th className="p-3">NOMBRE</th>
            <th className="p-3">AREA</th>
            <th className="p-3">RESPONSABLE</th>
            <th className="p-3"></th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usuario, index) =>
              <tr key={usuario.id} className={index % 2 === 0 ? "p-1 border-solid border-b border-gray-600 bg-gray-100" : "p-1 border-solid border-b border-gray-600"}>
                <td className="p-1 text-center">
                  {usuario.id}
                </td>
                <td className="p-1 text-center">
                  {usuario.nombre}
                </td>
                <td className="p-1 text-center">
                  { areas.filter(area => area.id === usuario.area_fk).map(areaFiltrada => areaFiltrada.nombre)}
                </td>
                <td className="p-1 text-center">
                  {usuario.responsable ? 'SI' : 'NO'}
                </td>
                <td className="p-1 text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Modificar</button>
                </td>
                <td className="p-1 text-center">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">Borrar</button>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </>
  )
}
