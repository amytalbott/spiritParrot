// What this file does:
// 1. Hides the parrots on page load
// 2. Turns buttons purple when they're hovered
// 3. Makes a parrot fade in, stay for two seconds,then fade out, after a button is clicked

// Hide the parrot on page load
$('.show').hide();

// Makes buttons change color when hovered
$('button').hover(function() {
    $(this).toggleClass("hovered");
});

// When the button is pressed
$('.grid-item').on('click', 'button', function(){
  // hide the button
  $(event.target).hide();
  // fade in the parrot, show it, then fade it out
  $(event.target).next().fadeIn(2000).delay(2000).fadeOut(2000);

  // then make the button reappear


});


// This is an old version of the code, where every grid item and button is targeted specifically
// This worked, but the same code was repeated over and over again


// // Hide the parrots
// // $('.showJanuary').hide();
// // When the button is pressed
// // $('.januaryButton').on('click', function(){
//   // show the parrot
// // $('.showJanuary').show();
//   // and hide the button
// // $('.januaryButton').hide();
//
// // });
//
//
// // Hide the parrots
// $('.showFebruary').hide();
// // When the button is pressed
// $('.februaryButton').on('click', function(){
//   // show the parrot
// $('.showFebruary').show();
//   // and hide the button
// $('.februaryButton').hide();
//
// });
//
// // Hide the parrots
// $('.showMarch').hide();
// // When the button is pressed
// $('.marchButton').on('click', function(){
//   // show the parrot
// $('.showMarch').show();
//   // and hide the button
// $('.marchButton').hide();
//
// });
//
// // Hide the parrots
// $('.showApril').hide();
// // When the button is pressed
// $('.aprilButton').on('click', function(){
//   // show the parrot
// $('.showApril').show();
//   // and hide the button
// $('.aprilButton').hide();
//
// });
//
// // Hide the parrots
// $('.showMay').hide();
// // When the button is pressed
// $('.mayButton').on('click', function(){
//   // show the parrot
// $('.showMay').show();
//   // and hide the button
// $('.mayButton').hide();
//
// });
//
// // Hide the parrots
// $('.showJune').hide();
// // When the button is pressed
// $('.juneButton').on('click', function(){
//   // show the parrot
// $('.showJune').show();
//   // and hide the button
// $('.juneButton').hide();
//
// });
//
// // Hide the parrots
// $('.showJuly').hide();
// // When the button is pressed
// $('.julyButton').on('click', function(){
//   // show the parrot
// $('.showJuly').show();
//   // and hide the button
// $('.julyButton').hide();
//
// });
//
// // Hide the parrots
// $('.showAugust').hide();
// // When the button is pressed
// $('.augustButton').on('click', function(){
//   // show the parrot
// $('.showAugust').show();
//   // and hide the button
// $('.augustButton').hide();
//
// });
//
// // Hide the parrots
// $('.showSeptember').hide();
// // When the button is pressed
// $('.septemberButton').on('click', function(){
//   // show the parrot
// $('.showSeptember').show();
//   // and hide the button
// $('.septemberButton').hide();
//
// });
//
// // Hide the parrots
// $('.showOctober').hide();
// // When the button is pressed
// $('.octoberButton').on('click', function(){
//   // show the parrot
// $('.showOctober').show();
//   // and hide the button
// $('.octoberButton').hide();
//
// });
//
// // Hide the parrots
// $('.showNovember').hide();
// // When the button is pressed
// $('.novemberButton').on('click', function(){
//   // show the parrot
// $('.showNovember').show();
//   // and hide the button
// $('.novemberButton').hide();
//
// });
//
// // Hide the parrots
// $('.showDecember').hide();
// // When the button is pressed
// $('.decemberButton').on('click', function(){
//   // show the parrot
// $('.showDecember').show();
//   // and hide the button
// $('.decemberButton').hide();
//
// });
