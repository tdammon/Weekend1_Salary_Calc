$(document).ready(readyNow);

function readyNow() {

    class Employee {
        constructor(first,last,id,job,salary){
            this.first = first;
            this.last = last;
            this.id = id;
            this.job = job;
            this.salary= parseFloat(salary).toFixed(2);
        }
    }
    let employees = [];
    let totalMonthlySalary= 0;
    $('#addEmployee').on('click',function(){
        event.preventDefault();
        employees.push(new Employee($('#first').val(),$('#last').val(),$('#id').val(),$('#job').val(),$('#salary').val()));
        console.log(employees);
        
        $('#table').empty();
        $('#table').append(`<tr><th>First</th><th>Last</th><th>ID</th><th>Position</th><th>Salary</th>`)
        for(let employee of employees){
            $('#table').append(`<tr><td>${employee.first}</td><td>${employee.last}</td><td>${employee.id}</td><td>${employee.job}</td><td>$${employee.salary}</td></tr>`)
            totalMonthlySalary+= Number((employee.salary/12).toFixed(2));
            console.log(totalMonthlySalary);
            $('#first').val( '' );
            $('#last').val( '' );
            $('#id').val( '' );
            $('#job').val( '' );
            $('#salary').val( '' );
        }
        $('#table').append(`<tr><td colspan='5' id='left'><b>Total Monthly</b>: $${totalMonthlySalary}</td></tr>`)
        if(totalMonthlySalary > 20000){
            $('.container').toggleClass("red");
            document.body.style.backgroundColor = "tomato";
        }
    });
}

