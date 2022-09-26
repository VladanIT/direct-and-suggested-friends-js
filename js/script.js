$.ajax({
    dataType: "json",
    url: "data/data.json",
    success: function(data){
        data.forEach(data => {
            var x = document.getElementById("dp_persons");
            var option = document.createElement("option");
            option.text = data.firstName + " " + data.surname;
            option.value = data.id;
            x.add(option);
        })
    }
});

function selectedPerson(){
    document.getElementById("direct_friends").innerHTML = "";
    document.getElementById("friends_of_friend").innerHTML = "";
    var selectedValue = document.getElementById("dp_persons").value;
    var directFriends = [];
    var fOf = [];
    var fOfs = [];

    $.ajax({
        dataType: "json",
        url: "data/data.json",
        data: selectedValue,
        success: function(data){
            data.forEach(person => {
                if(selectedValue == person.id){
                    var list_friends = person.friends;
                    data.forEach(friend => {
                        for(let i = 0; i < list_friends.length; i++){
                            if(list_friends[i] == friend.id){
                                document.getElementById("direct_friends").innerHTML += "<h6 class='friend'>" + friend.firstName + " " + friend.surname + "</h6>";
                                directFriends.push(friend.id);
                            }
                        }
                    })
                    data.forEach(person => {
                        for(let i = 0; i < directFriends[i]; i++){
                            if(directFriends[i] == person.id){
                                fOf.push(person.friends);
                            }
                        }
                        
                    })
                    fOf.forEach(friends => {
                        friends.forEach(friend =>{
                            if(friend != selectedValue){
                                fOfs.push(friend);
                            }
                        })
                    })
                    data.forEach(ff => {
                        for(let i = 0; i <= fOfs[i]; i++){
                            if(fOfs[i] == ff.id && !list_friends.includes(ff.id)){
                                document.getElementById("friends_of_friend").innerHTML += "<h6 class='friend'>" + ff.firstName + " " + ff.surname + "</h6>";
                            }
                        }
                    })
                }

            })
        }
    });
}