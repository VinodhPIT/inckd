
export const prepareRequest2 = (parameters) => {
  const request = {
    sort: parameters.sort,
    page_no: "0",
    paginator_count: parameters.paginator_count,
    search_key: "",
  };

  // if (parameters.location && parameters.category == 'artists') {
  //   request.longitude = parameters.location.lon || parameters.location.lon
  //   request.latitude = parameters.location.lat || parameters.location.lat
  // }

  // request.style = parameters.style ? [parameters.style] : []

  return request;
};

export const searchParam = (parameters) => {
  

  const request = {
    sort: "newest",
    page_no: parameters.page_no,
    paginator_count: parameters.category === "all" ? 10 : 19,
    search_key: parameters.search_key,
  };

  if (parameters.latitude && parameters.category == 'artist') {
    request.longitude = parameters.longitude
    request.latitude = parameters.latitude
  }
  request.style = parameters.style ? [parameters.style] : [];

  
  return request;
};



export const addAdsToResults = async (results) => {
  const totalCount = results.length;

  if (totalCount < 15) {
    return results;
  }

  // Calculate the number of ads to add (2 ads for every 19 products)
  const adsCount = Math.floor(totalCount / 19) * 2;

  for (let i = 0; i < adsCount; i++) {
    const randomizedIndex = Math.floor(Math.random() * 19);
    results.splice((i + 1) * 19 - randomizedIndex, 0, { _index: "ad", colspan: 2 });
  }

  results.forEach((item) => {
    if (item._index !== "ad") {
      item.colspan = 1;
    }
  });

  

  return results;
};

