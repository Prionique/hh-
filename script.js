document.getElementById("hub").addEventListener("input", () => {
    console.log(document.getElementById("hub").innerText.trim());

    if (document.getElementById("hub").innerText.trim() === "login") {
        setTimeout(() => {
            if (prompt("Password") === "703168") {
                window.location.href = "dashboard.html"
    
            }
        }, 1000)
        
    }
});
