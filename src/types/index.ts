export type API_Product = {
    
    id : number,
    quantity : number,
    price : number,
    attributes : {
         
        category : string,
        description : string,

        image : {
            data : {
                attributes : {
                    name : string,
                    url : string
                }
            }
        }
        ,
        title: string,
    }
}


/*

attributes
: 
category
: 
"tech"
createdAt
: 
"2024-02-14T11:14:24.838Z"
description
: 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nti."
image
: 
data
: 
attributes
: 
{name: 'image-3.jpg', alternativeText: null, caption: null, width: 1400, height: 933, …}
id
: 
3
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object
price
: 
50
publishedAt
: 
"2024-02-14T11:14:29.562Z"
title
: 
"Marketing Course"
updatedAt
: 
"2024-02-14T11:14:29.566Z"
[[Prototype]]
: 
Object

*/