import {React,Component} from "react";

class Products extends Component{
    constructor() {
        super();
        this.state={
            products:[],
        }
    }

    async getProductsRequest(url){
        let result = null;
        result = fetch(url,{
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method:'GET',
        }).then(response=>{return response.json}).then(responseData=>{
            return responseData;
        })
        return result;
    }

    async getProducts(){
        const url = "http://localhost:9000/";
        let response = await this.getProductsRequest(url)
        let products = [];
            response.map(prod => {
                let product = {
                    id: prod.id,
                    title: prod.description,
                    category:prod.category,
                };
                products.push(product);
            })
        this.setState({products:products})
    }

    componentDidMount() {
        this.getProducts();
    }

    render(){
        return "Products"
    }

}
export default Products;