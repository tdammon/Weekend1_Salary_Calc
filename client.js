$(document).ready(readyNow);

function readyNow() {

    class Employee {// create an employee class
        constructor(first,last,id,job,salary){
            this.first = first;
            this.last = last;
            this.id = id;
            this.job = job;
            this.salary= parseFloat(salary).toFixed(2);// makes sure salary is a number with two decimal places
        }
    }

    let employees = [];// makes an empty array named employees

    $('#addEmployee').on('click',function(){// do something when the #addEmployee button is clicked
        event.preventDefault();//prevents the form from refreshing the page
        employees.push(new Employee($('#first').val(),$('#last').val(),$('#id').val(),$('#job').val(),$('#salary').val()));//creates a new employee object from the information put in the input fields
        console.log(employees);//test
        
        $('#table').empty();//clears the table
        $('#table').append(`<tr><th>First</th><th>Last</th><th>ID</th><th>Position</th><th>Salary</th>`)// add table headers
        modifyTable();// call the modify Table function
    });

    $('#table').on('click', '#delete', function(){//do something when the delete button is pressed
        console.log($(this).closest('tr').find("#code").text());//looks at the row in which the delete button was pressed and returns the text within the 'id' column
        for(let index in employees){//loops through the indecies of employees
            if(employees[index].id == $(this).closest('tr').find("#code").text()){//if an employee.id is equal to the value in the specified id column
                employees.splice(index,1);//remove the employee
                console.log(index)//test
                
            }
        }
        modifyTable();//run the function to append the new employee list
    })

    function modifyTable() {
        let totalMonthlySalary= 0;//reset totalMonthlySalary to 0

        $('#table').empty();// emplty table and than add headers in
        $('#table').append(`<tr><th>First</th><th>Last</th><th>ID</th><th>Position</th><th>Salary</th>`)

        for(let employee of employees){//loop through employees array
            $('#table').append(`<tr><td>${employee.first}<button id="delete">X</button></td><td>${employee.last}</td><td id='code'>${employee.id}</td><td>${employee.job}</td><td>$${employee.salary}</td></tr>`)//append employee info to the table
            totalMonthlySalary+= Number((employee.salary/12).toFixed(2));//calculates the monthly salary of each employee and adds the totals of all employees (number 2 decimals)
            console.log(totalMonthlySalary);//test
            $('#first').val( '' );//clear input fields
            $('#last').val( '' );
            $('#id').val( '' );
            $('#job').val( '' );
            $('#salary').val( '' );
        }
        $('#table').append(`<tr><td colspan='5' id='left'><b>Total Monthly</b>: $${totalMonthlySalary}</td></tr>`)//appends one long table row to the bottom of the table containing the total monthly $
        if(totalMonthlySalary > 20000){//checks if total monthly costs exceed $20000
            $('#left').toggleClass("red");//turn the monthly expense row red if costs are too high
        }
    }

}

