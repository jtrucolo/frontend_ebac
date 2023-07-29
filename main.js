$(document).ready(function() {
    const username = $('#name');
    const avatar = $('#img');
    const followers = $('#followers');
    const following = $('#following');
    const repository = $('#repository');
    const profile_link = $('#profile');

    try {
        fetch('https://api.github.com/users/jtrucolo')
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            avatar.attr("src", json.avatar_url)
            username.text(json.name)
            followers.text(json.followers)
            following.text(json.following)
            repository.text(json.public_repos)
            profile_link.attr("href", json.html_url)
        })
    }
    catch(e) {
        alert('Erro na requisição', e);
    }
})
