class Game {
  constructor(pId, pTitol, pData, pPegi, pEmpresa, pGenere) {
    this.id = pId;
    this.titol = pTitol;
    this.data = pData;
    this.pegi = pPegi;
    this.empresa = pEmpresa;
    this.genere = pGenere;
  }
  print(){
 return `id:${this.id} - name:${this.name} - developer:${this.developer}`;
 }
}
