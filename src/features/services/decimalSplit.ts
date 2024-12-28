export const decimalSplit = (value: number) => {
     // Convierte el número a un string
  const partes = value.toString().split('.');
  // Añade el separador de miles
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return partes.join('.');
}