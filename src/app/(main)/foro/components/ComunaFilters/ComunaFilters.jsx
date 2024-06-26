'use client'

import regionesData from './regionesData.json'
import { useState, useContext } from 'react'
import styles from './ComunaFilters.module.css'
import { UserContext } from '@/components/context/userContext'
import { useRouter, usePathname } from 'next/navigation'

function ComunaFilters({page}) {
    const router = useRouter()
    const { user } = useContext(UserContext)
    const pathname = usePathname()

    const [region, setRegion] = useState(user.data.region)
    const [comuna, setComuna] = useState(user.data.comuna)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(pathname == '/foro/comuna'){
            if(region!=='' && comuna !== ''){
                router.push(`/foro/comuna/?comuna=${comuna}&page=${page}`)
            }
        }
    }

    return (
        <form className={styles.filterForm} onSubmit={handleSubmit}>
            <label htmlFor="selectRegion" className={styles.inputLabel}></label>
            <select
                type="text"
                className={styles.selectRegion}
                id='selectRegion'
                value={region}
                onChange={(e) => {
                    setRegion(e.target.value)
                    setComuna('')
                }}
                required
            >
                <option value=''>Región</option>
                {regionesData.regiones.map((region, index) => (
                    <option key={index} value={region.region}>
                        {region.region}
                    </option>
                ))}
            </select>

            <label htmlFor="selectComuna" className={styles.inputLabel}></label>
            <select
                type="text"
                className={styles.selectComuna}
                id='selectComuna'
                value={comuna}
                onChange={(e) => {
                    setComuna(e.target.value)
                }}
                disabled={region === ''}
                required
            >
                <option value="">Comuna</option>
                {regionesData.regiones
                    .find((r) => r.region === region)?.comunas.map((comuna, index) => (
                        <option key={index} value={comuna}>
                            {comuna}
                        </option>
                    ))}
            </select>

            <div className={styles.buttonBox}>
                <button className={styles.searchBtn}>Buscar</button>
            </div>

        </form>
    )
}

export default ComunaFilters
