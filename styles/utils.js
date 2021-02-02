export const addOpacityToColor = (color, opacity) => {
  /* utilidad para agregar opacidad a los colores */
  /*  los ultimos 2 digitos de un color en rbg le dan el valor de la opacidad desde 00 a ff en esta funcionalidad se le dad el balor en decimal y se hace la comversion para luego obtener el valor rgb con el valor de opacidad requerido */
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
