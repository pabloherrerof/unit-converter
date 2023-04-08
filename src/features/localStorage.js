export const createSavedLocalStorage = (foto) => {
  const savedLocalStorage = localStorage.getItem("saved");
  if (savedLocalStorage != null) {
    const savedLocalStorageObject = JSON.parse(savedLocalStorage); // {data: []}
    savedLocalStorageObject.data.push(foto);
    const savedLocalStorageUpdatedEncoded = JSON.stringify(
      savedLocalStorageObject
    );
    localStorage.setItem("saved", savedLocalStorageUpdatedEncoded);
  } else {
    let objectLocalStorage = {
      data: [],
    };
    objectLocalStorage.data.push(foto);
    let savedLocalStorageUpdatedEncoded = JSON.stringify(objectLocalStorage);
    localStorage.setItem("saved", savedLocalStorageUpdatedEncoded);
  }
};

//Function that returns the data of the LocalStorage
export const readSavedLocalStorage = () => {
  const savedLocalStorage = localStorage.getItem("saved");
  if (savedLocalStorage != null) {
    const savedLocalStorageObject = JSON.parse(savedLocalStorage); // {data: []}
    return savedLocalStorageObject.data;
  }
  return [];
};

//Function that checks if a photo exists on the LocalStorage
export const checkIfExistsFoto = (foto) => {
  let exits = false;
  readSavedLocalStorage().forEach((obj) => {
    if (obj != null) {
      if (obj.id === foto.id) {
        exits = true;
      }
    }
  });
  return exits;
};

//Function that deletes a photo from the LocalStorage
export const deleteSavedLocalStorage = (object) => {
  const savedLocalStorage = localStorage.getItem("saved");
  if (savedLocalStorage !== null) {
    const savedLocalStorageParse = JSON.parse(savedLocalStorage);

    let savedFiltrada = savedLocalStorageParse.data.filter(
      (obj) => obj.result !== object.result
    );

    const savedFiltradasData = {
      data: savedFiltrada,
    };
    localStorage.setItem("saved", JSON.stringify(savedFiltradasData));
  }
};
