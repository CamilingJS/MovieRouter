import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Navigation</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, i) => {
                        /**
                         * You will have to modify your buttons in one of two possible ways
                         * in order for your page to be rerouted
                         *
                         * This may be helpful reading: https://tylermcginnis.com/react-router-programmatically-navigate/
                         */
                        return (
                            <tr key={movie.imdbID}>
                                <th>{i + 1}</th>
                                <td>{movie.Title}</td>
                                <td className="d-flex justify-content-around">
                                    <button className="btn btn-info">People</button>
                                    <button className="btn btn-primary">Poster</button>
                                    <button className="btn btn-secondary">Ratings</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

Movies.propTypes = {
    Movies: PropTypes.arrayOf(PropTypes.object),
    selectMovie: PropTypes.func
}

export default Movies;