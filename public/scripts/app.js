$(function(){
  console.log('document loaded up');

  $('button').on('click', event, updateVotes);
    // votes();
    person = $(this).data('name');

    updateVotes();
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
  $.ajax({
    url: '/likes',
    type: 'GET',
    success: updateVotes



})
}

function updateVotes(event){
  $.ajax({
    url: '/likes',
    type: 'POST',
    data: person = $(this).data('name'),
    success: displayVotes
})
}
