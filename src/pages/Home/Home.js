import React,{Fragment, useCallback, useEffect} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Card from '../../components/Card/Card'
import Categories from '../../components/Categories/Categories'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../../redux/actions/filters'
import { fetchCpu } from '../../redux/actions/cpu'
import LoadingCard from '../../components/Card/LoadingCard'
import { addCpuToBasket } from '../../redux/actions/basket'

const categoryNames = ['4 ядра', '6 ядер', '8 ядер', '10 ядер', '12 ядер', '16 ядер']

function Home() {
    const dispatch = useDispatch() 
    const items = useSelector(({ cpu }) => cpu.items)
    const loading = useSelector(({ cpu }) => cpu.loading)
    const {category} = useSelector(({ filters }) => filters)
    const basketItems = useSelector(({ basket }) => basket.items)

    useEffect(() => {
        dispatch(fetchCpu(category))
    },[category, dispatch])
    
    const onSelectCategory = useCallback( index => {
        dispatch(setCategory(index))
    }, [dispatch])

    const handleAddCpuToBasket = obj =>{
        dispatch(addCpuToBasket(obj))
    }

    return(
        <Fragment>
            <Navbar/>
            <div className="container pt-4">
                <Categories 
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                />
                <div className="row">
                    {loading ?
                        Array(15)
                        .fill(0)
                        .map((_,index) => (
                            <div className="col-sm-4 mb-3" key={index}> 
                                <LoadingCard />
                            </div>
                            )
                        )
                        :
                        items.map((obj) => (
                            <div className="col-sm-4 mb-3 " key={obj.id}>
                                <Card
                                addedCount={basketItems[obj.id] && basketItems[obj.id].items.length}
                                onClickAddCpu={handleAddCpuToBasket} 
                                {...obj}
                                />
                            </div>
                        ))
                        
                    }
                </div>
            </div>
        </Fragment>
        )
    }
export default Home