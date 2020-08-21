const apiKey = 'Tkhk-JVgNTBFKB8aVdaiNXnTTg4-Pr03xfE3ma3kThJwV5O9-kalBJMRDOw_s7RKmqswVMYbgnR-13kytSdY9cl6miGSBXKnQAkjduXd213_MVHJpUTb-ujSspWRWnYx'

const yelp = {

    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
            Authorization: `Bearer ${apiKey}`} 
        })
            .then((response) => {
                
                return response.json()
                    .then((jsonResponse) => {
                    console.log(jsonResponse)
                    if(jsonResponse.businesses){
                        return jsonResponse.businesses.map(business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                    } 
                })
            } 
    
        })
    })
    }
}
export default yelp