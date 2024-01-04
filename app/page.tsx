
import { getUsuariosComision } from '@/app/lib/data';
import { getAreasComision } from '@/app/lib/data';
import { getUsuarioArea } from '@/app/lib/data';
import Link from 'next/link';
import { useState } from 'react';

export default async function Home() {

  'use server';
  const usuarios = await getUsuariosComision();
  const areas = await getAreasComision();
  
  'use client';
  let usuario = null;
  const [pantalla, setPantalla] = useState({ accion: "", idUsuario: 0 });
  if (pantalla.idUsuario !== 0) {
    usuario = await getUsuarioArea(pantalla.idUsuario);
  }

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
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usuario, index) =>
              <tr key={usuario.id} className={index % 2 === 0 ? "p-1 border-solid border-b border-gray-600 bg-gray-100" : "p-1 border-solid border-b border-gray-600"}>
                <td className="p-2 text-center">
                  {usuario.id}
                </td>
                <td className="p-2 text-center">
                  {usuario.nombre}
                </td>
                <td className="p-2 text-center">
                  {areas.filter(area => area.id === usuario.area_fk).map(areaFiltrada => areaFiltrada.nombre)}
                </td>
                <td className="p-2 text-center">
                  {usuario.responsable ? 'SI' : 'NO'}
                </td>
                <td className="p-2 text-center">
                  {
                    <Link
                      className='p-2 rounded-md bg-green-600 hover:bg-green-500 text-white'
                      key={index}
                      href={'#'}
                    >
                      Modificar
                    </Link>
                  }
                </td>
                <td className="p-2 text-center">
                  {
                    <Link
                      className='p-2 rounded-md bg-red-600 hover:bg-red-500 text-white'
                      key={index}
                      href={'#'}
                    >
                      Borrar
                    </Link>
                  }
                </td>
                <td className="p-2 text-center">
                  {
                    <Link
                      className='p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white'
                      key={index}
                      href={'/ui/components/comision?id=' + usuario.id}
                    >
                      Peticion GET
                    </Link>
                  }
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </>
  )
}
