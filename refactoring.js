// var sessions = {
//     mobile: [1,2,3],
//     tablet:[2,4,5],
//     desktop:[6,7,8],
// }

// function printData(id, name, sessions){
//     var div = document.createElement('div')
//     div.id = id
//     div.textContent = name + ' : ' + sessions
//     document.querySelector('body').appendChild
// }


//My First

// var sessions = {
//     mobile:[1,2,3],
//     tablet:[3,4,5],
//     desktop:[6,7,8],
// }

// function printData(id, sessions){
//     var div = document.createElement('div')
//     div.id= id
//     div.textContent = name + ' : ' + sessions
//     document.querySelector('body').appendChild(div)
// }

// collapsing for brevity
// var sessions = { ... };
// function printData(id, nsme, sessions){ ... }

// Manually create objects and assign each one to a variable

// var mobileData = {
//     id : "mobile-container",
//     name : "mobileData",
//     sessions: sessions['mobile'],
// };

// var tabletData = {
//     id:"tablet-container",
//     name:"tabletData",
//     sessions:sessions['tablet'],
// };

// var deskData = {
//     id:"desk-container",
//     name:"deskData",
//     sessions:sessions['destop'],
// };
// // Manually invoke function
// printData(mobile-container.id,mobileData.name,mobileData.sessions)
// printData(tabletData-container.id.tabletData.name,tabletData.sessions)
// printData(deskData-container.id,deskData.name,deskData.sessions)

// fullCode.js
// 4/3/2023 the day i started understanding javascript

// var sessions = {
//     mobile:[1,2,3],
//     tablet:[3,4,5],
//     desktop:[6,7,8]
// }
// var printData = function(id,name,sessions){
//     var div=document.createElement('div')
//     div.id=id
//     div.textContent = name +  ' : ' + sessions
//     document.querySelector('body').appendChild(div)
// }

// var devices = Object.keys(devices)
// var data = devices.map(function(device){
//     return{
//         id:device + '-container',
//         name:device,
//         sessions:sessions[device]

//     }
// })
// data.forEach(function(device){
//     printData(device.id,device.name,device.sessions)
// })

const sessions = {
    mobile:[1,2,3],
    tablet:[3,4,5],
    desktop:[6,7,8]
}

const printData = function(id,name,sessions){
    const div=document.createElement('div')
    div.id=id
    div.textContent ='${name} : ${sessions}'
    document.querySelector('body').appendChild(div)
}

const devices = Object.keys(sessions)
const data = devices.map(function(device){
    return{
        id:'${device}-container',
        name:device,
        sessions:sessions[device],
    }
})

data.forEach(function(device){
    printData(device.id,device.name, device.sessions)
})