1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## **Ans**  :  
The getElementById is a function that take an ID as argument , select the single element in the DOM which contains that ID and return the element,  it can return null if no element contains the ID in the DOM. The getElementsByClassName is a function that take a class as argument , selects all elements in the DOM that share the class name and returns them as a HTMLCollection. The querySelector is function that take a CSS Selector as argument, it selects and returns the first element that matches with the given CSS selector . The querySelectorAll function also take a CSS Selector as arugument but selects and returns all elements of the DOM that matches with the given CSS Selector and return them as a NodeList.





2.How do you create and insert a new element into the DOM?

## **Ans** :  
We can create a new element with createElement() function, this function takes the tagName as argument , Then we can insert the element into a container tag with appendChild() function, this function takes the newly created element as arugument and add into the container. example :
      let newElement = document.createElement('p');
      container.appendChild(newElement);





3.What is Event Bubbling and how does it work?

## **Ans** :  
Event Bubbling is a situation where an event on an element also triggers the events of its parent elements. For example, if an HTML page has a <section> containing multiple <div> elements, and each <div> has multiple buttons, and all these elements have their own events, if someone performs an action on a button like clicking, key pressing, or moving the mouse that trigger it's event will also trigger the event on its parent <div> and the <section>. This bubbling can be stopped using the stopPropagation() function.






4. What is Event Delegation in JavaScript? Why is it useful?
 
## **Ans** :  
The Event Delegation is a technique where we add the event listener to the parent element instead of adding similar event to multiple child elements. When someone performs actions like clicking, key pressing, or moving the mouse on any child element, it triggers the parent element’s event through Event Bubbling. Since the event belongs to the parent, the addEventListener function still provides the child element as a parameter on which the user performed the action. This technique is very useful , it helps us to reduce codebase by adding single event on parent which work for multiple child element ,  and the event also work on the elements added through javascript in the DOM later.






5.What is the difference between preventDefault() and stopPropagation() methods?

## **Ans** : 
The preventDefault() function used to prevent default submitting feature of form tag  when the button is clicked  and the stopPropagation() function used to stop the Event Bubbling effect.





