import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Loader from "../../components/loader";
import "../styles.css";

function Employees() {
  const [initialValues, setInitialValues] = useState([
    {
      id: 1,
      annualSalary: 3849600.0,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 2,
      annualSalary: 2049000.0,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: "",
    },
    {
      id: 3,
      annualSalary: 1032000.0,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 4,
      annualSalary: 5196720.0,
      employee_name: "Cedric Kelly",
      employee_salary: 433060,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 5,
      annualSalary: 1952400.0,
      employee_name: "Airi Satou",
      employee_salary: 162700,
      employee_age: 33,
      profile_image: "",
    },
    {
      id: 6,
      annualSalary: 4464000.0,
      employee_name: "Brielle Williamson",
      employee_salary: 372000,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 7,
      annualSalary: 1650000.0,
      employee_name: "Herrod Chandler",
      employee_salary: 137500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 8,
      annualSalary: 3934800.0,
      employee_name: "Rhona Davidson",
      employee_salary: 327900,
      employee_age: 55,
      profile_image: "",
    },
    {
      id: 9,
      annualSalary: 2466000.0,
      employee_name: "Colleen Hurst",
      employee_salary: 205500,
      employee_age: 39,
      profile_image: "",
    },
    {
      id: 10,
      annualSalary: 1243200.0,
      employee_name: "Sonya Frost",
      employee_salary: 103600,
      employee_age: 23,
      profile_image: "",
    },
    {
      id: 11,
      annualSalary: 1086720.0,
      employee_name: "Jena Gaines",
      employee_salary: 90560,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 12,
      annualSalary: 4104000.0,
      employee_name: "Quinn Flynn",
      employee_salary: 342000,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 13,
      annualSalary: 5647200.0,
      employee_name: "Charde Marshall",
      employee_salary: 470600,
      employee_age: 36,
      profile_image: "",
    },
    {
      id: 14,
      annualSalary: 3762000.0,
      employee_name: "Haley Kennedy",
      employee_salary: 313500,
      employee_age: 43,
      profile_image: "",
    },
    {
      id: 15,
      annualSalary: 4629000.0,
      employee_name: "Tatyana Fitzpatrick",
      employee_salary: 385750,
      employee_age: 19,
      profile_image: "",
    },
    {
      id: 16,
      annualSalary: 2382000.0,
      employee_name: "Michael Silva",
      employee_salary: 198500,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 17,
      annualSalary: 8700000.0,
      employee_name: "Paul Byrd",
      employee_salary: 725000,
      employee_age: 64,
      profile_image: "",
    },
    {
      id: 18,
      annualSalary: 2850000.0,
      employee_name: "Gloria Little",
      employee_salary: 237500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 19,
      annualSalary: 1584000.0,
      employee_name: "Bradley Greer",
      employee_salary: 132000,
      employee_age: 41,
      profile_image: "",
    },
    {
      id: 20,
      annualSalary: 2610000.0,
      employee_name: "Dai Rios",
      employee_salary: 217500,
      employee_age: 35,
      profile_image: "",
    },
    {
      id: 21,
      annualSalary: 4140000.0,
      employee_name: "Jenette Caldwell",
      employee_salary: 345000,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 22,
      annualSalary: 8100000.0,
      employee_name: "Yuri Berry",
      employee_salary: 675000,
      employee_age: 40,
      profile_image: "",
    },
    {
      id: 23,
      annualSalary: 1277400.0,
      employee_name: "Caesar Vance",
      employee_salary: 106450,
      employee_age: 21,
      profile_image: "",
    },
    {
      id: 24,
      annualSalary: 1027200.0,
      employee_name: "Doris Wilder",
      employee_salary: 85600,
      employee_age: 23,
      profile_image: "",
    },
  ]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      annualSalary: 3849600.0,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 2,
      annualSalary: 2049000.0,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: "",
    },
    {
      id: 3,
      annualSalary: 1032000.0,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 4,
      annualSalary: 5196720.0,
      employee_name: "Cedric Kelly",
      employee_salary: 433060,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 5,
      annualSalary: 1952400.0,
      employee_name: "Airi Satou",
      employee_salary: 162700,
      employee_age: 33,
      profile_image: "",
    },
    {
      id: 6,
      annualSalary: 4464000.0,
      employee_name: "Brielle Williamson",
      employee_salary: 372000,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 7,
      annualSalary: 1650000.0,
      employee_name: "Herrod Chandler",
      employee_salary: 137500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 8,
      annualSalary: 3934800.0,
      employee_name: "Rhona Davidson",
      employee_salary: 327900,
      employee_age: 55,
      profile_image: "",
    },
    {
      id: 9,
      annualSalary: 2466000.0,
      employee_name: "Colleen Hurst",
      employee_salary: 205500,
      employee_age: 39,
      profile_image: "",
    },
    {
      id: 10,
      annualSalary: 1243200.0,
      employee_name: "Sonya Frost",
      employee_salary: 103600,
      employee_age: 23,
      profile_image: "",
    },
    {
      id: 11,
      annualSalary: 1086720.0,
      employee_name: "Jena Gaines",
      employee_salary: 90560,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 12,
      annualSalary: 4104000.0,
      employee_name: "Quinn Flynn",
      employee_salary: 342000,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 13,
      annualSalary: 5647200.0,
      employee_name: "Charde Marshall",
      employee_salary: 470600,
      employee_age: 36,
      profile_image: "",
    },
    {
      id: 14,
      annualSalary: 3762000.0,
      employee_name: "Haley Kennedy",
      employee_salary: 313500,
      employee_age: 43,
      profile_image: "",
    },
    {
      id: 15,
      annualSalary: 4629000.0,
      employee_name: "Tatyana Fitzpatrick",
      employee_salary: 385750,
      employee_age: 19,
      profile_image: "",
    },
    {
      id: 16,
      annualSalary: 2382000.0,
      employee_name: "Michael Silva",
      employee_salary: 198500,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 17,
      annualSalary: 8700000.0,
      employee_name: "Paul Byrd",
      employee_salary: 725000,
      employee_age: 64,
      profile_image: "",
    },
    {
      id: 18,
      annualSalary: 2850000.0,
      employee_name: "Gloria Little",
      employee_salary: 237500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 19,
      annualSalary: 1584000.0,
      employee_name: "Bradley Greer",
      employee_salary: 132000,
      employee_age: 41,
      profile_image: "",
    },
    {
      id: 20,
      annualSalary: 2610000.0,
      employee_name: "Dai Rios",
      employee_salary: 217500,
      employee_age: 35,
      profile_image: "",
    },
    {
      id: 21,
      annualSalary: 4140000.0,
      employee_name: "Jenette Caldwell",
      employee_salary: 345000,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 22,
      annualSalary: 8100000.0,
      employee_name: "Yuri Berry",
      employee_salary: 675000,
      employee_age: 40,
      profile_image: "",
    },
    {
      id: 23,
      annualSalary: 1277400.0,
      employee_name: "Caesar Vance",
      employee_salary: 106450,
      employee_age: 21,
      profile_image: "",
    },
    {
      id: 24,
      annualSalary: 1027200.0,
      employee_name: "Doris Wilder",
      employee_salary: 85600,
      employee_age: 23,
      profile_image: "",
    },
  ]);

  const [allEmployees, setAllEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getEmployees() {
    setIsLoading(true);
    // const response = await axios.get(
    //   "https://employee-management-production-ea41.up.railway.app/employees",
    //   { headers: { "Access-Control-Allow-Origin": "*" } }
    // );

    fetch(
      "https://employee-management-production-ea41.up.railway.app/employees"
    ).then((resp) => console.log(resp));
    //console.log(response);
    //setAllEmployees(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const __handleSearch = () => {
    if (search.length > 0) {
      const searchValue = parseInt(search);
      let search_results = initialValues.filter((item) =>
        parseInt(item.id) === searchValue
      );
      setPosts(search_results);
    } else {
      setPosts(initialValues);
    }
  };

  return !isLoading ? (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Empleados</h2>
          <div className="dashboard-content-search">
            <input
              type="number"
              min={0}
              value={search}
              placeholder="Buscar..."
              className="dashboard-content-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="dashbord-header-btn" onClick={__handleSearch}>
              Buscar
            </button>
          </div>
        </div>

        <div>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Salario</th>
              <th>Salario anual</th>
            </thead>
            <tbody>
              {posts &&
                posts.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>${item.employee_salary}</td>
                    <td>${item.annualSalary}</td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Employees;
