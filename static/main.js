const onlineStatus = document.querySelector('#onlineStatus');
const playersCounter = document.querySelector('#playersCounter');
const domainName = document.querySelector('#domainName')
const motd = document.querySelector('#motd')
const playerName = document.querySelector('#playersName')
const pluginsName = document.querySelector('#plugins')
const mainContent = document.querySelector('#mainContent')
const urlAPI = "https://api.mcsrvstat.us/2/181.36.178.94"


const getAPI = async () => {
    const data = await fetch(urlAPI);
    const mcinfo = await  data.json();
    //online status
    if(mcinfo.online){
        onlineStatus.textContent = 'ONLINE'
    }else{
        onlineStatus.innerHTML =`
        <a style="color:red;">OFFLINE</a>
        `
    }

    //currentPlayers
    playersCounter.innerHTML = `
    <a style="color:white;"> Players Online:</a> ${mcinfo.players.online}/${mcinfo.players.max} `

    //domainName
    domainName.innerHTML = `
    <a style="color:white;">IP:</a>waiters.ddns.net
    `
    
    // domainName.textContent = "waiters.ddns.net"

    //PlayersName

    if(mcinfo.players.list){
        playerName.innerHTML = `
        <th class="text-center">
        <p style="color:white;">Players Names:</p>>
        </th>
        ${mcinfo.players.list.map(data =>{
            return `<tr>
                        <td>${data}</td>
                    </tr>`
        })}`
    }else{
        playerName.textContent = 'No one on server'
    }

    // Pluggins names
    /*
    pluginsName.innerHTML = `
    <th class="text-center">
    <p style="color:white;">Plugins:</p>>
    </th>
    ${mcinfo.plugins.names.map(data =>{
        return `<tr>
                    <td>${data}</td>
                </tr>`
    })}`
    
    */

    //Motd
    motd.innerHTML = `${mcinfo.motd.html[0]}<br> ${mcinfo.motd.html[1]}`

    

    console.log(mcinfo)
}

const getStatus = async () =>{ 

}

getAPI();
