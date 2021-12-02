import React from "react";
import ItemContainer from "../containers/ItemsPageContainer"

class ItemPage extends React.Component {

    render() {
        return (
          <div className="ItemPage">
              <h1>Danh Sách </h1>
              <ItemContainer />
          </div>
        );
      }
    }
    
    export default ItemPage;
    