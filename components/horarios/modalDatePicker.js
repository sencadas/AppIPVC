import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';

export default ({changeDate, selectedDate}) => {
  const [open, setOpen] = useState(false);

  //   console.log(selectedDate);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        Selecionar uma data especifica
      </Button>

      <DatePicker
        modal
        open={open}
        date={selectedDate}
        mode="date"
        locale="pt"
        onConfirm={date => {
          setOpen(false);
          changeDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
