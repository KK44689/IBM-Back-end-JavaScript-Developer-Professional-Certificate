var xhr = new XMLHttpRequest();
var url = "../jsons/news_article.json";
xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error("Error fetching articles:", xhr.statusText);
        return;
    }

    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById("articles");
    articlesDiv.classList.add("article");

    console.log("News Articles fetched successfully");

    articles.forEach(function (article) {
        var articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        var title = document.createElement("h2");
        title.textContent = article.title;

        var author = document.createElement("p");
        author.innerHTML = `<strong>Author:</strong> ${article.author}`;

        var date = document.createElement("p");
        date.innerHTML = `<strong>Published on:</strong> ${new Date(article.date).toLocaleDateString()}`;

        var summary = document.createElement("p");
        summary.innerHTML = `<strong>Summary:</strong> ${article.summary}`;

        var content = document.createElement("p");
        content.textContent = article.content;

        var source = document.createElement("p");
        source.innerHTML = `<strong>Source:</strong> ${article.source}</a>`;

        var tags = document.createElement("p");
        tags.innerHTML = "<strong>Tags: </strong>" + article.tags.join(", ");

        articleDiv.appendChild(title);
        articleDiv.appendChild(author);
        articleDiv.appendChild(date);
        articleDiv.appendChild(summary);
        articleDiv.appendChild(content);
        articleDiv.appendChild(source);
        articleDiv.appendChild(tags);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();