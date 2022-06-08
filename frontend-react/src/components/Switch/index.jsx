import './styles.css'
import cx from 'classnames'
export function Switch({rounded = false , isToggled , onToggle}){

    const sliderCX = cx('slider' ,{
        rounded: rounded
    })
    return(
        <label className="switch-container">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className={sliderCX}></span>
        </label>
    )
}   