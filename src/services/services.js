const dbURL = "http://localhost8080/"

const postLanguages = (languages) => {
    fetch(dbURL + "languages", {
        method: "POST",
        body: JSON.stringify(languages),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
}

export {postLanguages}