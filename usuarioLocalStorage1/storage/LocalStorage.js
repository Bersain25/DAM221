export const guardarDato = async (clave, valor) => {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (error) {
    console.error("Error al guardar:", error);
    return false;
  }
};

export const obtenerDato = async (clave) => {
  try {
    const dato = localStorage.getItem(clave);
    return dato ? JSON.parse(dato) : null;
  } catch (error) {
    console.error("Error al leer:", error);
    return null;
  }
};

export const eliminarDato = async (clave) => {
  try {
    localStorage.removeItem(clave);
    return true;
  } catch (error) {
    console.error("Error al eliminar:", error);
    return false;
  }
};