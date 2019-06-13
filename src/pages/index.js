import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hola Dan,</h1>
            <h2>¿Qué tal andas?</h2>
        </Layout>
    )
}

export default IndexPage