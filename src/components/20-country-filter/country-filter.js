import React from "react";
import data from "./countries.json";
const CountryFilter = () => {
  const [countries, setCountries] = useState(data);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
};
export default CountryFilter;
