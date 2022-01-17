class Student {

  constructor(nameOfStudent, city, fees){
    this.nameOfStudent = nameOfStudent;
    this.city = city;
    this.fees = fees;
  };

  get nameOfStudent(){
    return this.nameOfStudent;
  }

  get city(){
    return this.city;
  }

  get fees(){
    return this.fees;
  }

}

export default Student;