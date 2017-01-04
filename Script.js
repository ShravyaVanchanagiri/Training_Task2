/**
 * Created by vanchanagiri shravya on 1/3/2017.
 */
var emp = function() {
    var empid, empname, emptype, empdob, empexperience, empdoj;
    /*var getEmpDetails=empDetails;*/
    return {
        getId: getId,
        getName: getName,
        getType: getType,
        getDob: getDob,
        getExperience: getExperience,
        getDoj: getDoj,
        setId: setId,
        setName: setName,
        setType: setType,
        setDob: setDob,
        setExperience: setExperience,
        setDoj: setDoj
    };

    function setId(id) {

        empid = id;
    }

    function getId() {

        return empid;
    }

    function setName(name) {
        empname = name;
    }

    function getName() {
        return empname;
    }

    function setDob(dob) {
        empdob = dob;
    }

    function getDob() {
        return empdob;
    }

    function setType(type) {
        emptype = type;
    }

    function getType() {
        return emptype;
    }

    function setExperience(experience) {
        empexperience = experience;
    }

    function getExperience() {
        return empexperience;
    }

    function setDoj(doj) {
        empdoj = doj;
    }

    function getDoj() {
        return empdoj;
    }
}
$(document).ready(function() {
    getEmployees();
});

function getEmployees() {
    $.getJSON("Employee.json",
        function(json) {
            // console.log(json);
            //console.log(json.length);

            var empDetail = [];
            for (var i = 0; i < json.length; i++) {
                var emp1 = new emp();
                emp1.setId(json[i].eid);
                emp1.setName(json[i].name);
                emp1.setType(json[i].type);
                emp1.setDob(json[i].dob);
                emp1.setExperience(json[i].experience);
                emp1.setDoj(json[i].doj);
                empDetail.push(emp1);

            }
            drawTable(empDetail);
        });
}

function drawTable(empList) {

    for (var i = 0; i < empList.length; i++) {
        var tr;
        console.log(empList.length);
        // console.log(i);
        //var emp=empList[i];

        tr = $('<tr/>');

        tr.append("<td>" + empList[i].getId() + "</td>");
        tr.append("<td>" + empList[i].getName() + "</td>");
        tr.append("<td>" + empList[i].getType() + "</td>");
        tr.append("<td>" + empList[i].getDob() + "</td>");
        tr.append("<td>" + empList[i].getExperience() + "</td>");
        tr.append("<td>" + empList[i].getDoj() + "</td>");
        $('#empDetails').append(tr);

        tr.on('click', function() {
            $('#empDetails').find('tr').click(function() {
                updateEmployees(empList[($(this).index())])
            });
        });
    }
}

function updateEmployees(obj) {
    $('#getDetails p').html("");
    $('#getDetails p').append('Employee id:' + obj.getId() + '<br>');
    $('#getDetails p').append('Employee Name:' + obj.getName() + '<br>');
    $('#getDetails p').append('Employee Type:' + obj.getType() + '<br>');
    $('#getDetails p').append('Employee Date of birth:' + obj.getDob() + '<br>');
    $('#getDetails p').append('Employee Experience:' + obj.getExperience() + '<br>');
    $('#getDetails p').append('Employee Date of Joining:' + obj.getDoj() + '<br>');
}