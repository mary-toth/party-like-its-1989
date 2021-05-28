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
        <header>
          <h1>Top Movies of 1989</h1>
        </header>
        <div>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
          </style>
          <ul>
            {this.state.results.map((movie, index) => {
              return (
                <li key={movie.index}>
                  <p>
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    />
                  </p>
                  <p className="title">
                    <h2>{movie.title}</h2>
                  </p>{' '}
                  <p className="overview">{movie.overview}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}
