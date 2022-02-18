const KEY_DATE = (new Date()).getDate()

const locSt_init = () => {
  var data_entry = localStorage.getItem(KEY_DATE)
  if (data_entry !== null)
    data_entry = JSON.parse(data_entry)
  else {
    //console.log(JSON.stringify({re: []}))
    localStorage.setItem(KEY_DATE, '{"registered_time_set": []}')
  }
  return data_entry
}

const locSt_addNewTimeSet = time_set => {
  var temp_data = JSON.parse(localStorage.getItem(KEY_DATE))
  temp_data.registered_time_set.push(0)
  temp_data.registered_time_set[temp_data.registered_time_set.length -1] = time_set
  localStorage.setItem(KEY_DATE, JSON.stringify(temp_data))
}

export default locSt_init

export {locSt_addNewTimeSet}
