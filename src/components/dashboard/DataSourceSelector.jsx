import "./DataSourceSelector.scss";
import { useState } from "react";

function DataSourceSelector() {
  const [dataSource, setDataSource] = useState("mock");
  const onOptionChange = (e) => {
    setDataSource(e.target.value);
  };

  return (
    <fieldset>
      <legend>Select data source:</legend>

      <div>
        <input
          type="radio"
          id="mock"
          name="selector"
          value="mock"
          checked={dataSource === "mock"}
          onChange={onOptionChange}
        />
        <label htmlFor="mock">Mock</label>
      </div>

      <div>
        <input
          type="radio"
          id="api"
          name="selector"
          value="api"
          checked={dataSource === "api"}
          onChange={onOptionChange}
        />
        <label htmlFor="api">API</label>
      </div>
    </fieldset>
  );
}

export default DataSourceSelector;
