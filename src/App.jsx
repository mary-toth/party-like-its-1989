import React, { Component } from 'react'

export class App extends Component {
  state = {
    results: [],
  }

  fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=b7dfa37a948564feb2574c3b7f05e737'
    )
    const data = await response.json()
    this.setState({ results: data.results })
    console.log(data)
    console.log(this.state.results)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        <h1>Party Like It's 1989</h1>
        <div>
          <ul>
            {this.state.results.map((movie, index) => {
              return (
                <li key={movie.index}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  />
                  {movie.title} {movie.overview}
                </li>
              )
            })}
            {/* {this.state.results.map((movie, index) => {
              return <li key={movie.index}>{movie.overview}</li>
            })} */}
          </ul>
        </div>
      </>
    )
  }
}
