const $form = $('#form')
$('.on').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

const $form = $('#form2')
$('.off').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

const $form = $('#form3')
$('.on').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

const $form = $('#form4')
$('.off').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})
