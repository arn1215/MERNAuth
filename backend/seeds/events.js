const Event = require("../models/event")
const mongoose = require("mongoose")
const dev = process.env.MONGO_URI

const events = [{
  name: "Giraffage",
  "headliner": "Giraffage",
  "description": "Join Giraffage at The Bowery",
  "startTime": new Date(),
  "images": "https://i.discogs.com/vGlq9j2dYIH41a8J1LTtfZbR0arlgN_43e3LbQ81SG8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE5OTQ0/MTAtMTYxODIyMjA0/MS02MzYwLmpwZWc.jpeg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Madeon",
  "headliner": "Madeon",
  "description": "Madeon Live at MSG",
  "startTime": new Date(),
  "images": "https://i.discogs.com/vGlq9j2dYIH41a8J1LTtfZbR0arlgN_43e3LbQ81SG8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE5OTQ0/MTAtMTYxODIyMjA0/MS02MzYwLmpwZWc.jpeg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Lil Nas X",
  "headliner": "Lil Nas X",
  "description": "Byline Bank Aragon Ballroom",
  "startTime": new Date(),
  "images": "https://ca-times.brightspotcdn.com/dims4/default/cefd45a/2147483647/strip/true/crop/9000x6000+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Fae%2F15a1b5664dd7b7174b99f2e8dccb%2Fla-photos-1staff-474260-et-env-lil-nas-x-grammy-kkn-30373.JPG",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Alan Walker",
  "headliner": "Alan Walker",
  "description": "Walkerverse at Radius",
  "startTime": new Date(),
  "images": "https://i.scdn.co/image/ab6761610000e5eb29da45fd16f4b249be105618",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "The Dear Hunter",
  "headliner": "The Dear Hunter",
  "description": "Metro",
  "startTime": new Date(),
  "images": "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dear_Hunter_-_2020.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Mac Demarco",
  "headliner": "Mac Demarco",
  "description": "The Riviera Theatre",
  "startTime": new Date(),
  "images": "https://www.mac-demarco.com/slir/w800/wp-content/uploads/2022/04/MacDeMarco_LauraLynnPetrick-2-scaled.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Denzel Curry",
  "headliner": "Denzel Curry",
  "description": "The Riviera Theatre",
  "startTime": new Date(),
  "images": "https://i.scdn.co/image/ab6761610000e5ebb00f2e31d509ddc6fa0eb24b",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Jorja Smith",
  "headliner": "Jorja Smith",
  "description": "The Salt Shed",
  "startTime": new Date(),
  "images": "https://i.guim.co.uk/img/media/fda4045a0f77505c53d8780c4d7b7e8ea4c93bff/0_63_5976_3586/master/5976.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1e01ec203f6bd2ef256d4773bb238b6",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Chris Rock",
  "headliner": "Chris Rock",
  "description": "Ego Death World Tour",
  "startTime": new Date(),
  "images": "https://www.vibe.com/wp-content/uploads/2022/02/Chris-Rock-e1645627614765.jpeg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Kevin Hart",
  "headliner": "Kevin Hart",
  "description": "United Center",
  "startTime": new Date(),
  "images": "https://www.nj.com/resizer/gIgKklZ65p9b65BOoW9HparKt2w=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/PPQW7DSMXZEJ3BJKEGA77UYAEU.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Bill Burr",
  "headliner": "Bill Burr",
  "description": "Bill Burr: Slight Return",
  "startTime": new Date(),
  "images": "https://cdn.saffire.com/images.ashx?t=ig&rid=PeoriaCivicCenter&i=TR_National_BillBurr_SG_1080x1080.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Trevor Noah",
  "headliner": "Trevor Noah",
  "description": "Back To Abnormal",
  "startTime": new Date(),
  "images": "https://pbs.twimg.com/profile_images/1329559519727214593/HCt07Dvk_400x400.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Gabriel Iglesias",
  "headliner": "Gabriel Iglesias",
  "description": "Back On Tour",
  "startTime": new Date(),
  "images": "https://i.ticketweb.com/i/00/07/76/31/11/Original.jpg?v=4",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "Trixie & Katya",
  "headliner": "Trixie & Katya",
  "description": "Fabulous Fox Theatre",
  "startTime": new Date(),
  "images": "https://hennepintheatretrust.org/wp-content/uploads/2021/12/1184-trixie-and-katya.jpg",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Memphis Grizzlies",
  "description": "Grizzlies Vs Magic",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "San Antonio",
  "description": "Rockets Vs. Spurs",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Utah Jazz",
  "description": "Raptors Vs. Utah",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Charlotte Hornets",
  "description": "Celtics Vs. Hornets",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Miami Heat",
  "description": "Heat Vs. Timberwolves",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Atlanta Hawks",
  "description": "Cavaliers Vs. Hawks",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}, {
  name: "event name",
  "headliner": "Indiana Pacers",
  "description": "Hornets Vs. Pacers",
  "startTime": new Date(),
  "images": "https://s1.ticketm.net/dam/a/2e4/68baa9a2-339a-467b-9db4-516afb4d52e4_1339941_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp",
  "ticketPrice": 10.01,
  "venueId": 1,
  ticketsInStock: 100,
  category: 'music',
  venueId: "631c2ec5619377e24d2c1a80"
}]

module.exports = events