# profile-ecommerce-website


# ShopOn

 An E-commerce shopping cart application using Reactjs. The application will feature a product listing page showcasing various products with details and an "Add to Cart" functionality. Additionally, a dedicated cart page will allow users to manage items, including quantity adjustments, removal, and total price calculations with potential discounts.



## Authors

- [@sanjay5577](https://github.com/sanjay5577/)


## Features

- Product Listing Page
- Add to Cart Functionality
- Cart Page
- Responsivness


## API Reference
https://fakestoreapi.com/

#### Get all products

```http
  GET /products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  | `Fetches all products` |

#### Get item

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |




## Demo

https://profile-ecommerce-website.vercel.app/  - link for demo


## Deployment

**Deploying to Vercel**

Commit and push your changes to your repository.

Connect your GitHub/GitLab/Bitbucket account to Vercel.

Import your repository to Vercel.

Vercel will automatically build and deploy your project.

Your app will be live at https://your-vercel-app-url.vercel.app.

For more details, you can refer to the Vercel documentation.


## Run Locally

Clone the project

```bash
  git clone https://github.com/sanjay5577/profile-ecommerce-website.git
```

Go to the project directory

```bash
  cd shopon
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** React, TailwindCSS

**Data Source:** https://fakestoreapi.com/

