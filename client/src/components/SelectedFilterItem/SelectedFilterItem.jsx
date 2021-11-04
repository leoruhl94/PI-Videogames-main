
export const SelectedFilterItem = ({value}) => {

    const handleOnClick = (e) => {
        console.log("cerrame")
    }

    return(
        <div>
            <span>
                {value}
            </span>
            <button onClick={handleOnClick}>X</button>
        </div>
    )
}