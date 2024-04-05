import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order', 'asc'))
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch(error => {
                console.error('error')
            })
    }, [])

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#000000', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
           <h2
               onClick={() => navigate('/')}
               style={{
                   color: '#ffffff',
                   fontSize: '24px',
                   fontWeight: 'bold',
                   cursor: 'pointer',
                   textDecoration: 'none',
                   margin: '0',
                   padding: '5px',
                   fontFamily: 'Arial, sans-serif'
               }}
           >
               Mora Equipamientos
           </h2>
           <nav style={{ display: 'flex', gap: '20px' }}>
                {
                    categories.map(cat => {
                        return <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>
                    })
                }
                <Link to='/category/Cocinas' style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 'bold', border: '2px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>Cocinas</Link>
                <Link to='/category/Campanas' style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 'bold', border: '2px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>Campanas</Link>
                <Link to='/category/Anafes' style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 'bold', border: '2px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>Anafes</Link>
           </nav>
           <CartWidget />
        </header>
    )
}

export default Navbar
