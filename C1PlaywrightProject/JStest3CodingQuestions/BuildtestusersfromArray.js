function buildTestUsers(names, roles) {
    let users = [];
        for (let i = 0; i < names.length; i++) {
      let  username = names[i].toLowerCase().replace(" ", "_");
    let email=username+"@playwrightbath.com";
    users.push({username: username, email: email, role: roles[i]});
  
}
  return users;
}

let names=["Amit kumar","Neha singh"];
let roles=["admin","viewer"];
console.log(buildTestUsers(names, roles));

