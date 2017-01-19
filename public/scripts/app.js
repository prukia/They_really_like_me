var nolan = 0;
var rukia = 0;
var charlie =0;
var person = 0;
$(function(){
  console.log('document loaded up');

  $('button').on('click', function(){
    votes();
    person = $(this).data('name');
  });

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

function votes()  {
  $.ajax({
    url: '/bio',
    type: 'POST',
    success: displayVotes
  });

}

function displayVotes() {
  $.ajax({
    url: '/bio',
    type: 'GET',
    success: updateVotes


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
