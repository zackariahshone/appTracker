

const API = {
    delete : (id)=>{
        fetch ('/deletedata', {
            method: 'DELETE', 
            body: id
        }).then()
    },
    // update :('/updateapp)=>{}
}

module.exports = API 