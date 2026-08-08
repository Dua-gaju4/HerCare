import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    console.error('ErrorBoundary caught', error, info)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div style={{ padding: 24, background: '#fff0f2', color: '#7f1d1d', minHeight: '100vh' }}>
        <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{String(error && (error.stack || error.message || error))}</pre>
        <p>Please copy the error text and share it — this helps me fix the bug.</p>
      </div>
    )
  }
}

export default ErrorBoundary
