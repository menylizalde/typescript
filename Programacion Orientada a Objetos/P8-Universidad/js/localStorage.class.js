class LocalStorageManipular {
  static AgregarCarritoLocalStorage(informacioncurso) {
    const cursosLS = this.ObtenerCursoLocalStorage();
    cursosLS.push(informacioncurso);
    localStorage.setItem("cursos", JSON.stringify(cursosLS));
  }

  static ObtenerCursoLocalStorage(){
      if(localStorage.getItem("cursos") == null) return[];
      return JSON.parse(localStorage.getItem("cursos"));
  }
}
