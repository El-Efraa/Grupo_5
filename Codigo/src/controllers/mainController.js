let controller={
    index:(req, res)=>{
       return  res.render('home')
    },
    register: (req, res) => {
        return  res.render ('registro')
    },
    /*createU: (req, res) => {
        let usuario={

        }


        return  req.body
    },
    */
    login:(req, res) => {
        return  res.render('login')
    }
}

module.exports=controller;


