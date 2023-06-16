import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import Loader from "../../components/loader";
import "../styles.css";
import axios from "axios";

function Employees() {
  const [initialValues, setInitialValues] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getEmployees() {
      setIsLoading(true);
      const response = await axios.get(
        "https://employee-management-production-ea41.up.railway.app/employees",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );

      setInitialValues(response.data);
      setPosts(response.data);

      console.log(response.data);
      setIsLoading(false);
    }

    getEmployees();
  }, []);

  const __handleSearch = () => {
    if (search.length > 0) {
      const searchValue = parseInt(search);
      let search_results = initialValues.filter(
        (item) => parseInt(item.id) === searchValue
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
