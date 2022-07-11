CapStone Project: ShopForHome

*In the project we have made an ecommerce website to take ShopForHome business online

We have divided project in two parts for Frontend and Backend

**********************Frontend****************************

In this we have made the UI for the web application


Approach:-

We have developed UI with react and backend is connected to database using MongoDB.
For authorization we are saving token in cookie and data is being stored in local storage
Token is passed as a header to verify authorization 
same landing page is there for every one

after logging in based in the role of the user he will get access to features of admin and user

Admin role 
	-can perform CRUD operation on USer, products, coupons
 	-can see stocks and analyse sales report
User role
	-can see different products
	-can add to cart or wishlist
	-can update cart according to necessity
	-can apply coupons
	-can search for a product with tag
	

**********************Backend*************************
we have made different services on different servers 
-login, logout,register service : port 8080
-Products CRUD : port 8081
-users CRUD : port 8082
-Cart : port 8083 
- wishlist : port 8084
-Discounts or Coupons : port 8085
with the concurrently package we can start all the package at a time with command
npm run dev-both

Under api-gateway folder we have made gateway for admin, user, app

the working of all the functionalities is explained in the attatched 



the main application will be running through react at port 3000
all oher services will run on different ports in the backend with the microservices to keep the application running if any one or more service has some issue , then other services will continue to serve 
# CapstoneGithub
