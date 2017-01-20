
var person = 0;
$(function(){
  console.log('document loaded up');

  $('#person').on('click','button', event, updateVotes)

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

  $.ajax({
    url: '/bio',
    type: 'POST',
    data: person = $(this).data('name'),
    success: displayVotes
});
}

  // function likeCounter() {
  //   if (person == 'nolan'){
  //     nolan++;
  //   }else if (person == 'rukia') {
  //     rukia++;
  //   }else if (person == 'charlie') {
  //     charlie++;
  //   }
  //
  //   }
  // }
