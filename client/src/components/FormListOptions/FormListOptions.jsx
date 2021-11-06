import { useEffect, useState } from 'react';
import { OptionItem } from '../OptionItem/OptionItem';
import './FormListOptions.css'


export const FormListOptions = ({ options, handler, title, group, validation, name , msjError}) => {
  const [ items, setItems ] = useState([])
  const [ selectedItems, setSelectedItems ] = useState([]) 
  const [ error, setError ] = useState({error: false, msjError})

  useEffect(()=>{
    setItems(options?.map(e => e.name))
    setSelectedItems([])
  },[options])


  const handleOnChange = (value, selected) => {
      let newItems = selected ? items.filter( e => e !== value ) : [...items, value];

      let newSelectedItems = !selected ? selectedItems.filter( e => e !== value ) : [...selectedItems, value];
      validation(newSelectedItems) ? setError({error: false, msjError:""}) : setError({ error:true, msjError })  
      setItems(newItems)
      setSelectedItems(newSelectedItems)
      handler({value:newSelectedItems, error: !validation(newSelectedItems) , name})
    }
    

  return (
    <div className="form-list-options">
        <h3>{title}</h3>
        <div className={`selected_options ${error.error? "border-error" : "" }`}>
            Selected Options:
            {
              selectedItems?.map((item) => {
                return (
                  <OptionItem 
                    key={`${group}-${item}`}
                    name= {item}
                    handler={handleOnChange}
                    selected={true}
                    />
                 );
              })
            }
            {
              error.error? <p>{error.msjError}</p>: ""
            }

        </div>
      <ul> {group}
          {
            items?.map((item) => {
              return (
                <li key={`${group}-${item}`}>
                  <OptionItem 
                  
                    name= {item}
                    handler={handleOnChange}
                    selected={false}
                    />
                </li>
              );
            })
          }
      </ul>
    </div>
  );
};
