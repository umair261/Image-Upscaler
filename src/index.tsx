import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { loadingOnnxruntime } from './adapters/util'
import { setLanguageTag } from './paraglide/runtime'

// Set language to English immediately before rendering
setLanguageTag('en')

loadingOnnxruntime()

ReactDOM.render(<App />, document.getElementById('root'))
