const friends = ['jhon jhona', 'smith smitha', 'ron rona', 'kon kona'];

let bestFriends = '';

for(const friend of friends){
    if(friend.length > bestFriends.length){
        bestFriends = friend;
    }
}
console.log(bestFriends);