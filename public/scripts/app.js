var person = 0;
$(function(){
  console.log('document loaded up');

  $('#person').on('click','button', updateVotes)

  //we do not need 'event next to button'
  displayVotes();
  getBio();
});



function getBio() {
  $.ajax({
    url: '/bio',
    type: 'GET',
    success: displayBio
  });
}

function displayBio(bios) {
  console.log(bios);

  bios.forEach(function(bio) {
    $('#person').append('<li>Name: ' + bio.name +  ' Bio: '+ bio.bio  + '</li>');
    $('#person').append('<button type="button" data-name="' + bio.name + '"><img src="'+ bio.photo +'" alt="image of person"/>LIKE ME!</button>');
  });
}

// function votes()  {
//   $.ajax({
//     url: '/bio',
//     type: 'POST',
//     success: displayVotes
//   });
//
// }

function displayVotes() {
  console.log("TESTED");
  $.ajax({
    url: '/likes',
    type: 'GET',
    success: appendVotes
});
}

function appendVotes(votes) {
  $("#Nolan").text(votes.nolan);
  $("#Charlie").text(votes.charlie);
  $("#Rukia").text(votes.rukia);
}

function updateVotes(event){
  //person === 'Nolan'
var person = $(this).data('name');
  $.ajax({
    url: '/likes',
    //add person to above line
    type: 'POST',
    //created an object with name of person
    data: {name: person},
    //and you can delete the above line
    success: displayVotes
});
}
