1. How does sequential animation differ from parallel animation?
    
    -  In sequential animation, the animations run one after the other, whereas in parallel animation, the animations all run at the same time.
2. How can you run your Angular application using server-side rendering?

    - Create a server-side app that uses Angular Universal.

3. What is the difference between using @Output() binding or a local variable to communicate between nested components?
   - @Output() binding allows you to pass values to the parent component, whereas a local variable provides the parent with access to the child's properties and methods.

4. Why would you use form input validation?
   - To check the accuracy and completeness of the user's input

5. You must create a reference to the following div element in your application. What format would you use to add a template reference variable named title to the div? ` <div id="title-div">Title</div>` 
   - #title

6. You use the following code to subscribe to an observable. When you run the code, it does not log anything to the console. How can you determine if the observable is working correctly?
   - Add the optional error() and complete() handlers.

``` js
getDetail() {
  return this.http.get<Detail>(this.detailUrl);
}
``` 

``` js
getDetailResponse(): Observable<HttpResponse<Detail>> {
  return this.http.get<Detail>(
    this.detailUrl, { observe: 'response' });
}
``` 

7. What does the query() function do?
   - Finds inner HTML elements


1. When using a delete operation, why does the subscribe() method work without a callback?
- Because the delete operation does not generate any result.


3. How would you apply two-way binding in your code?
By combining property binding and event binding
