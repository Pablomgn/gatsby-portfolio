import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About me</h1>
            <p>Hi, I'm a digital designer based on Spain.</p>
            <p><Link to="/contact">Contact me!</Link></p>
        </Layout>
    )
} 

export default AboutPage