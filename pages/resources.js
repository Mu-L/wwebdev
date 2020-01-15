import React from 'react'
import * as ui from '../ui'
import { SubscribeForm, Layout } from '../components'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout
        title="Free Resources and Tools for your usage"
    >
        <ui.Container>
            { generateResources() }
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Home
