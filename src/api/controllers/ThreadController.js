const ThreadModel = require('../models/ThreadModel');

module.exports = {
    
    async createThread(req, res){
        ThreadModel.create(req.body, (error, data) => {
            if(data){
                res.json(data);
            }
            else{
                console.error(error);
            }
        })
    },

    async getAllThreads(req, res){
        ThreadModel.findAll({board_id: req.params.board_id}, (error, data) => {
            if(data){
                res.json(data);
            }
            else{
                console.error(error);
            }
        })
    },

    async deleteThread(req, res){
        ThreadModel.find({id: req.body.thread_id, delete_password: req.body.delete_password}, (error, data) => {
            if(data){
                ThreadModel.deleteById(req.params.thread_id, (error, data) => {
                    if(data){
                        res.json(data);
                    }
                    else{
                        console.error(error);
                    }
                })
            }
            else{
                console.error(error);
            }
        })
    },

    async updateThread(req, res){
        ThreadModel.updateById(req.body.thread_id, {reported: true}, (error, data) => {
            if(data){
                res.json(data);
            }
            else{
                console.error(error);
            }
        })
    }
}