export const starWarsDataParser = data => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  const genderMap = {
    male: "mars",
    female: "venus",
    "n/a": "genderless"
  };

  return data.map(p => {
    return {
      name: p.name,
      birth_year: p.birth_year,
      eye_color: p.eye_color,
      gender: p.gender,
      gender_symbol: genderMap[p.gender],
      hair_color: p.hair_color,
      height: p.height,
      mass: p.mass,
      skin_color: p.skin_color,
      films: p.films
    };
  });
};

export const filmsDataParser = data => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.map(f => {
    return {
      title: f.title,
      release_date: f.release_date,
      episode_id: f.episode_id,
      url: f.url
    };
  });
};
