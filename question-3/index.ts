//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let person_name : string=" \t\t \t\t\n \n\nHUMA MOHSIN\n\n \n\t\t\t\t";
console.log(person_name);//Print the name once, so the whitespace around the name is displayed. 

//Then 
console.log(person_name.trim());//print the name after stripping the white spaces.
