class LocalStorage {
  ArrayTareas = [];

  AgregarTareaLocalStorage(contenidoTarea){
      this.ArrayTareas.push(contenidoTarea);
      console.log(this.ArrayTareas);
  }
}
