const smartGarbage = function (trash, bins) {

  const keys = Object.keys(bins);

  for (let i = 0; i < keys.length; i++) {

    if (trash === keys[i]) {
      bins[trash]++;
    }

  }
  return bins
   
};

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
