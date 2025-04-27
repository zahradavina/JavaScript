const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    const newEmployee = {
        name: name,
        email: email,
        joinYear: joinYear,
    };
    employees.push(newEmployee);
}
    addEmployee('Davin', 'davin23@gmail.com', 2023);
    console.log(employees);
    
