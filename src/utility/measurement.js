const displayMeasurement = (measurement, size) => {
  if (measurement === 'KILOGRAMS') {
    return `${size}kg`;
  }

  if (measurement === 'GRAMS') {
    return `${size}g`;
  }

  if (measurement === 'LITRE') {
    return `${size}L`;
  }

  return measurement.toLowerCase();
};

export default displayMeasurement;
