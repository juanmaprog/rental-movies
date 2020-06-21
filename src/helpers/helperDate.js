function getSumDays(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
