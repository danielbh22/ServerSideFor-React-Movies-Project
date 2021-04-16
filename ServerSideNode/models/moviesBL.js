const Movie = require('./movieModel');

exports.getAllMovies = () =>
{
    return new Promise((resolve,reject) =>
    {
        Movie.find({}, function(err, movies)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(movies);
            }
        })
    })
}

exports.getMovie = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        Movie.findById(id, function(err, movie)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(movie);
            }
        })
    })
}

exports.addMovie = function(movie)
{
    return new Promise((resolve,reject) =>
    {
        const newMovie = new Movie({
            name : movie.name,
            premiered : movie.premiered,
            genres : movie.genres,
            image : movie.image
        });
    
        newMovie.save(function(err)
        {
            if(err)
            {
               
                reject(err)
            }
            else
            {
                resolve('Created')
            }
        })
    }) 
}

exports.updateMovie = function(id,movie)
{
    return new Promise((resolve,reject) =>
    {
        Movie.findByIdAndUpdate(id,
            {
                name : movie.name,
                premiered : movie.premiered,
                genres : movie.genres,
                image : movie.image

            }, function(err)
            {
                if(err)
                {
                   
                    reject(err)
                }
                else
                {
                    resolve('Updated')
                }
            })
    })
} 

exports.deleteMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Movie.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted')
                }
            })
    })
} 