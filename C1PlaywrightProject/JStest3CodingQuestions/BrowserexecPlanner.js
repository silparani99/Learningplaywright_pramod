function browserexecPlanner(Allbrowsers,blockedBrowsers){
    let runnablebrowsers=[];
    let blockedbrowsers=[];

    for(let i=0; i<Allbrowsers.length; i++){
        if (Allbrowsers[i]===blockedBrowsers[0]){
            blockedbrowsers.push(Allbrowsers[i]);
        }
        else{
            runnablebrowsers.push(Allbrowsers[i]);

        }
    }
    console.log({runnable: runnablebrowsers, blocked: blockedbrowsers,plan: 
        "Run on "+runnablebrowsers.join(", ") + " | Skip: " + blockedbrowsers.join(", ")    
    });


}

let Allbrowsers = ["chrome", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];
browserexecPlanner(Allbrowsers, blockedBrowsers); 