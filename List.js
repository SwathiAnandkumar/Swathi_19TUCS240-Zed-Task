const mongoose = require('mongoose');

const ListSchema=new mongoose.Schema({
    FareId:{
        type:Number
    },
    FareAmount:{
        type:Number
    },
    CategoryId:{
        type:Number
    },
    RouteName:{
        type:String
    },
    isActive:{
        type:Boolean
    },
    ValidTill:{
        type:String
    },
    CreatedDate:{
        type:Date
    },
    createdby:{
        type:String
    },
    LastUpdatedDate:{
        type:Date
    },
    LastUpdatedBy:{
        type:String
    },
    AgencyId:{
        type:Number
    },
    serverdate:{
        type:Date
    },
    Type:{
        type:String
    },
    ExpiryTime:{
        type:String
    },
    ZoneId:{
        type:Number
    },
    Farename:{
        type:String
    },
    MaxCount:{
        type:Number
    },
    ProductDescription:{
        type:String
    },
    ProductMiscDescription:{
        type:String
    },
    VerificationStatus:{
        type:Number
    },
    PaymentMode:{
        type:Number
    },
    ProductName:{
        type:String
    },
    ProductCost:{
        type:Number
    },
    ProductVegCategory:{
        type:Number
    },
    ProductImageURL:{
        type:String
    },
    Category:{
        type:String
    }
},{timestamps:true})

module.exports =mongoose.model('List',ListSchema)












