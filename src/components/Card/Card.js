import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

function Card({id, name, imageUrl, frequency, cores, threads, price, TDP, technicalProcess, onClickAddCpu, addedCount}) {
    const onAddCpu = () => {
        const obj = {
            id, 
            name, 
            cores, 
            frequency, 
            price,
            imageUrl
        }
        onClickAddCpu(obj)
    }

    return (
        <div className="cardBlock">
            <img src={imageUrl} className="card-img-top" alt={'CPU'}/>
            <h4 className="card-title">{name}</h4>
            <div className="cardBlock--selector">
                <ul>
                    <li className="active">{cores} ядер</li>
                    <li className="active">{frequency} Мгц</li>
                </ul>
                <ul>
                    <li className="active">{threads} потоков</li>
                    <li className="active">{TDP} Вт</li>
                    <li className="active">{technicalProcess} нм</li>
                </ul>
            </div>
            <div className="cardBlock-bottom d-flex">
                <div className="cardBlock--price mt-3">Цена: {price}₽</div>
                <Button onClick={onAddCpu} className="button--add ml-auto" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    )
}

export default Card
         