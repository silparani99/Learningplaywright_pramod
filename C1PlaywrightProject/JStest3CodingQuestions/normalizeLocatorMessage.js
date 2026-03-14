function normalmessage(message) {
    let normalizedmessage=message.trim().toLowerCase();
    normalizedmessage=normalizedmessage.replace(/\s+/g," ");
    let category="GENERAL";
    if(normalizedmessage.includes("timeout")){
        category="TIMEOUT";
            }
            else if(normalizedmessage.includes("locator")){
                category="LOCATOR";
            }

   console.log(normalizedmessage);
   console.log(category);
  }

let message="  Locator not found after TIMEOUT  ";
normalmessage(message);