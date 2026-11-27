import { guardarDato, obtenerDato } from "../storage/LocalStorage";

const CLAVE = "usuarios";

export const validarUsuario = (usuario) => {
  const nombre = (usuario.nombre ?? "").trim();
  if (!nombre) return "El nombre es obligatorio";

  const edad = Number(usuario.edad);
  if (usuario.edad === "" || usuario.edad == null || !Number.isInteger(edad) || edad < 1 || edad > 120) {
    return "La edad debe ser un número entero entre 1 y 120";
  }
  return null;
};

export const obtenerUsuarios = async () => {
  return (await obtenerDato(CLAVE)) || [];
};

export const crearUsuario = async (usuario) => {
  const error = validarUsuario(usuario);
  if (error) throw new Error(error);

  const usuarios = await obtenerUsuarios();
  const nuevo = {
    id: Date.now().toString(),
    nombre: usuario.nombre.trim(),
    edad: Number(usuario.edad),
  };
  await guardarDato(CLAVE, [...usuarios, nuevo]);
  return nuevo;
};

export const actualizarUsuario = async (id, datos) => {
  const error = validarUsuario(datos);
  if (error) throw new Error(error);

  const usuarios = await obtenerUsuarios();
  const actualizados = usuarios.map((u) =>
    u.id === id ? { ...u, nombre: datos.nombre.trim(), edad: Number(datos.edad) } : u
  );
  await guardarDato(CLAVE, actualizados);
};

export const eliminarUsuario = async (id) => {
  const usuarios = await obtenerUsuarios();
  await guardarDato(CLAVE, usuarios.filter((u) => u.id !== id));
};