export const starWarsDataParser = data => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.map(p => {
    return {
      name: p.name,
      birth_year: p.birth_year,
      eye_color: p.eye_color,
      gender: p.gender,
      hair_color: p.hair_color,
      height: p.height,
      mass: p.mass,
      skin_color: p.skin_color,
      films: p.films
    };
  });
};
