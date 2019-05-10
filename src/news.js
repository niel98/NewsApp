const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=df16826639e44fb1acd82b8a659bdcc8";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}