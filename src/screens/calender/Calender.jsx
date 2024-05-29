import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../../constants/colors.constant';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const theme = {
    backgroundColor: COLORS.WHITE,
    calendarBackground: COLORS.WHITE,
    textSectionTitleColor: COLORS.TEXTSECONDARY,
    textSectionTitleDisabledColor: COLORS.TEXTSECONDARY,
    selectedDayBackgroundColor: COLORS.PRIMARY,
    selectedDayTextColor: COLORS.WHITE,
    todayTextColor: COLORS.SECONDARY,
    dayTextColor: COLORS.TEXTPRIMARY,
    textDisabledColor: COLORS.TEXTSECONDARY,
    dotColor: COLORS.PRIMARY,
    selectedDotColor: COLORS.WHITE,
    arrowColor: COLORS.SECONDARY,
    disabledArrowColor: COLORS.TEXTSECONDARY,
    monthTextColor: COLORS.PRIMARY,
    indicatorColor: COLORS.PRIMARY,
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = () => {
    if (newEvent.trim()) {
      setEvents({
        ...events,
        [selectedDate]: [...(events[selectedDate] || []), newEvent],
      });
      setNewEvent('');
      setModalVisible(false);
    } else {
      Alert.alert('Invalid Event', 'Event description cannot be empty.');
    }
  };

  const renderEventsForDate = (date) => {
    return events[date] ? (
      <View style={styles.eventsContainer}>
        {events[date].map((event, index) => (
          <Text key={index} style={styles.eventText}>- {event}</Text>
        ))}
      </View>
    ) : null;
  };

  const renderAllEvents = () => {
    const allEvents = Object.keys(events).map((date) => {
      return (
        <View key={date} style={styles.eventItem}>
          <Text style={styles.eventDate}>{date}</Text>
          {events[date].map((event, index) => (
            <Text key={index} style={styles.eventDescription}>- {event}</Text>
          ))}
        </View>
      );
    });
    return <ScrollView>{allEvents}</ScrollView>;
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-05-29'}
        minDate={'2020-05-10'}
        maxDate={'2025-05-30'}
        onDayPress={handleDayPress}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        theme={theme}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: COLORS.PRIMARY };
            return acc;
          }, {}),
          [selectedDate]: {
            selected: true,
            selectedColor: COLORS.PRIMARY,
          },
        }}
      />
      {selectedDate && renderEventsForDate(selectedDate)}
      <Text style={styles.allEventsTitle}>All Events</Text>
      {renderAllEvents()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Event for {selectedDate}</Text>
          <TextInput
            style={styles.input}
            placeholder="Event Description"
            value={newEvent}
            onChangeText={setNewEvent}
          />
          <TouchableOpacity style={styles.addButton} onPress={addEvent}>
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    padding: 10,
  },
  selectedDateContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedDateText: {
    color: COLORS.TEXTPRIMARY,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: COLORS.TEXTPRIMARY,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.SECONDARY,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventsContainer: {
    marginTop: 20,
    padding: 10,
  },
  eventText: {
    color: COLORS.TEXTPRIMARY,
    fontSize: 14,
  },
  allEventsTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
  eventItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 5,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  eventDescription: {
    fontSize: 14,
    color: COLORS.TEXTPRIMARY,
  },
});
