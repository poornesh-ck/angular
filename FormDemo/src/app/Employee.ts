export class Emplpoyee{
  constructor(public eid:any,public ename:any,public dept:any,public salary:any){

  }
}
export let emplist:Emplpoyee[]=[new Emplpoyee(101,"AAA","HR",50000),new Emplpoyee(102,"BBB","IT",80000),new Emplpoyee(103,"CCC","MR",40000),new Emplpoyee(104,"DDD","IT",60000)]
