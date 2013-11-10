define(function(name){

  function Person(name) {
    this.name = name != null ? name : 'Joe';
  }

  return Person;

});
