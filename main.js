$(document).ready(function() {
    const nameElement = $('#name')
    const usernameElement = $('#username')
    const avatarElement = $('#avatar')
    const reposElement = $('#repos')
    const followersElement = $('#followers')
    const followingElement = $('#following')
    const linkElement = $('#link')

    const apiGithub = 'https://api.github.com/users/aweinfurter'

    fetch(apiGithub)
    .then(function(answer) {
        return answer.json()
    })
    .then(function(json) {
        $(nameElement).text(json.name)
        $(usernameElement).text(json.login)
        $(avatarElement).attr('src', json.avatar_url)
        $(reposElement).text(json.public_repos)
        $(followersElement).text(json.followers)
        $(followingElement).text(json.following)
        $(linkElement).attr('href', json.html_url)
    })

})