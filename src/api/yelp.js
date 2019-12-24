import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer 6Wn32dLuUtXWF6oh45O7aXfXJj_qVAyRijBxURac57dwUkLRVxUUDfu3vnY1yTtsxcqWVL6O49qpQcDWG3Dbryf8u71MtLpha4Ww66Z3PYG4iz1l31uX3KTbZQD9XXYx',
    },
})
