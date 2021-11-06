import { useEffect, useState } from 'react';
import { OptionItem } from '../OptionItem/OptionItem';
import './FormListOptions.css'


export const FormListOptions = ({ options, handler, title, group, validation, name , msjError}) => {
  const [ items, setItems ] = useState([])
  const [ selectedItems, setSelectedItems ] = useState([]) 
  const [ error, setError ] = useState({error: false, msjError})

  useEffect(()=>{
    setItems(options)
    setSelectedItems([])
    console.log("ENTRE AL EFECT__________")
  },[options])


  const handleOnChange = (value) => {
      let newItems = value.selected ? items.filter( e => e.id !== value.id ) : [...items, { name:value.name, id: value.id }];
      // console.log("EL FILTER_____", items.filter( e =>{ 
      //   console.log("==================================")
      //   console.log((e.id !== value.id), e.id , value.id) 
      //   console.log("==================================")
      //   if(e.id !== value.id)
      //   return(e)
      // }))
      let newSelectedItems = !value.selected ? selectedItems.filter( x => x.id !== value.id ) : [...selectedItems, { name:value.name, id: value.id }];
      validation(newSelectedItems) ? setError({error: false, msjError:""}) : setError({ error:true, msjError })  
      setItems(newItems)
      setSelectedItems(newSelectedItems)
      handler({value:newSelectedItems.map( x => x.id), error: !validation(newSelectedItems) , name})
      
  // console.log("lo que llega",value, validation(newSelectedItems) )
  // console.log("NIT",newItems)
  // console.log("SI", newSelectedItems)
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
                    key={`${group}-${item.id}`}
                    name= {item.name}
                    value= {item.id}
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
                <li key={`${group}-${item.name}`}>
                  <OptionItem 
                    name= {item.name}
                    value= {item.id}
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
