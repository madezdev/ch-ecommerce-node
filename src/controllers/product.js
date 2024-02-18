import { response, request } from "express";

const GetProduct = (req = request, res = response) => {

    const { q, name = 'no name', page = 1, limit } = req.query;

  res.json({
    msg: "Get API - Controller",
  });
};

const PostProduct = (req = request, res = response) => {

    const product = req.body;

    res.json({
        msg: "Post API - Controller",
        product
    });
};

const PutProduct = (req = request, res = response) => {

    const { pid } = req.params;

    res.json({
        msg: "Put API - Controller",
        pid
    });
};

const DeleteProduct = (req = request, res = response) => {

    const { pid } = req.params;

    res.json({
        msg: "Delete API - Controller",
        pid
    });
}


export  {  
    GetProduct,
    PostProduct,
    PutProduct,
    DeleteProduct 
};