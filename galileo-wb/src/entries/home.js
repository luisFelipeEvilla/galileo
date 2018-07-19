import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home.js'

import data from '../api.json'

const $HomeContainer = document.getElementById('homeContainer');

render(<Home data={data}/>, $HomeContainer)
