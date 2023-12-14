import { getUsuariosComision } from '@/app/lib/data';

export default async function Home() {

  const usuarios = await getUsuariosComision();

  return (
    <>
      <h1>Página inicio</h1>
      
        <div className="flex min-h-screen items-center justify-center">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">NOMBRE</th>
                  <th className="py-3 px-4 text-left">AREA</th>
                  <th className="py-3 px-4 text-left">RESPONSABLE</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {
                  usuarios.map(usuario =>
                    <tr key={usuario.id} className="border-b border-blue-gray-200">
                      <td className="py-3 px-4">
                        {usuario.id}
                      </td>
                      <td className="py-3 px-4">
                        {usuario.nombre}
                      </td>
                      <td className="py-3 px-4">
                        {usuario.area_fk}
                      </td>
                      <td className="py-3 px-4">
                        {usuario.responsable ? 'true' : 'false'}
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      
    </>
  )
}
