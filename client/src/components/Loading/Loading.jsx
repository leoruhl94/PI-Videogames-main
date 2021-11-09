import Icon from '../../assets/Icon/Icon'
import './Loading.css'

export const Loading = () => {
    return (
        <div className="Loading">
            <h2>Loading...</h2>

            <span><Icon svg="loadingPoints" title="loading"/></span>

        </div>
    )
}