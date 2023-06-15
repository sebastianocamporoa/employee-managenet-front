import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Loader from "../../components/loader";

function Hotels() {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
  const [allHotels, setAllHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getHotels() {
    setIsLoading(true);
    const response = await axios.get(
      "https://employee-management-production-ea41.up.railway.app/employees"
    );
    console.log(response);
    //setAllHotels(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getHotels();
  }, []);

  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length > 0) {
      let search_results = allHotels.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.address.toLowerCase().includes(search.toLowerCase()) ||
          item.city.toLowerCase().includes(search.toLowerCase()) ||
          item.nit.toLowerCase().includes(search.toLowerCase())
      );
      setAllHotels(search_results);
    } else {
      getHotels();
    }
  };

  return !isLoading ? (
    <div className="dashboard-content">
      <div className="dashbord-header-container">
        <button className="dashbord-header-btn">Nuevo hotel</button>
      </div>

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Hoteles</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Buscar..."
              className="dashboard-content-input"
              onChange={(e) => __handleSearch(e)}
            />
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
              {posts.blogs &&
                posts.blogs.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>$</td>
                    <td>$</td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>

        {allHotels.length !== 0 ? (
          <></>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No hay hoteles registrados</span>
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Hotels;
