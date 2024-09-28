document.addEventListener('DOMContentLoaded', async function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const resposElement = document.querySelector('#repos');
    const followerElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        const res = await fetch('https://api.github.com/users/SpitSmoke');

        
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }

        const json = await res.json();
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followerElement.innerText = json.followers;
        resposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        
    }
});
