import { useEffect, useState } from "react";
import Icon from "../../assets/Icon/Icon";
import { OptionItem } from "../OptionItem/OptionItem";
import './DropdownList.css';


export const DropdownList = ({
    icon,
    options,
    name,
    dropdown,
    handler
}) => {
    const [items, setItems] = useState();
    // const [selectedItems, setSelectedItems] = useState([]);
  
    useEffect(() => {
       setItems(options); 
    //   setSelectedItems([]);  
    }, [options]);
  

    const handleOnChange = (value) => {
        // let newItems = value.selected
        //   ? items.filter((e) => e.id !== value.id)
        //   : [...items, { name: value.name, id: value.id }];
    
        // let newSelectedItems = !value.selected
        //   ? selectedItems.filter((x) => x.id !== value.id)
        //   : [...selectedItems, { name: value.name, id: value.id }];
        // setItems(newItems);
        // setSelectedItems(newSelectedItems);
        handler({
          value,  
        //   value: newSelectedItems,
        //   name,
        });
      };

    return (
        <div className="dropdown">
        <button type="button" className="dropbtn">
          {dropdown}
          <span className="dropbtn_icon">
            <Icon svg={icon || "arrowDown"} title={icon || "arrowDown"} />
          </span>
        </button>

        <div className="dropdown-content">
          {items?.map((item) => {
            return (
              <div key={`${item.id}-${item.name}`} className="dropdown-item">
                <OptionItem
                  name={item.name}
                  value={item.id}
                  handler={handler}
                  selected={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
}