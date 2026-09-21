import { test, expect } from '@playwright/test';

let contentId = "";

test.describe.configure({
    mode: 'serial'
})


test.describe("api testcases" , ()=>{


 test("Api testing", async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects");
    expect(response.status()).toBe(200)
    let responseBody = await response.json();
    console.log(responseBody); 
});


 test("Api testing post", async ({ request }) => {
    const response = await request.post("https://api.restful-api.dev/objects",
        {
            headers : {
                "Content-Type":"application/json"
            },
            data : {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }
        );
    expect(response.status()).toBe(200)
    let responseBody = await response.json();
    console.log(responseBody.id); 
    contentId = responseBody.id;
});


 test("Api testing put", async ({ request }) => {
    const response = await request.put(`https://api.restful-api.dev/objects/${contentId}`,
        {
            headers : {
                "Content-Type":"application/json"
            },
            data : {
                "name": "Vaibhav Pro 16",
                "data": {
                    "year": 2019,
                    "price": 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
                }
                }
            }   
        );
    expect(response.status()).toBe(200)
    let responseBody = await response.json();
    console.log(responseBody.id); 
    contentId = responseBody.id;
});
})