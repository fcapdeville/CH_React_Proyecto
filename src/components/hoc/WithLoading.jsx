import React, { useEffect, useState } from 'react'

const WithLoading = (WrappedComponent) => {
    const WithLoadingComponent = ({isLoading, ...props}) => {
        const [ loading, setLoading ] = useState(isLoading)
        useEffect(() => {
            setLoading(isLoading)
        }, [isLoading])

        return (
            <div>
                {loading && <p>cargando...</p>}
                <WrappedComponent {...props}/>
            </div>
        )
    }
    return WithLoadingComponent
}

export default WithLoading
