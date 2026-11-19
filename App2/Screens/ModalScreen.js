import { useState, useRef, useMemo, useCallback} from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import { View, Text, Modal, TextInput, Pressable, StyleSheet, StatusBar, FlatList} from 'react-native';
import BottomSheet, { BottomSheetView} from '@gorhom/bottom-sheet';

export default function ModalScreen() {
    const [modalVisible, setmodalVisible] = useState(false);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const[priority, setPriority] = useState('Media');

    const botttomSheetRef = useState(null);
    const nextTaskId = useRef(0);
    const snapPoints = useMemo (() => [ '35%', '55%'], []);

    const openBottomSheet = useCallback(() => {
        botttomSheetRef.current?.snapToIndex(0);
    }, []);

    const saveTask = () => {
        const taskName = task.trim();
        if(taskName === ''){
            return;
        }
        
        setTasks((currentTasks) => [
            ...currentTasks,
            {
                id: nextTaskId.current++,
                name: taskName,
                priority
            }

        ]);
        setTask('');
        setmodalVisible(false);
    };

    const selectPriority = (selectedPriority) => {
        setPriority(selectedPriority);
        botttomSheetRef.current?.close();
    }

    return(
        <GestureHandlerRootView style={styles.root} >
            <StatusBar barStyle='dark-content'/>
            <View style={styles.container}>
                <Text style={styles.title}>Organiza tus tareas papu</Text>
                <Text style={styles.subtitle}>Crea una nueva tarea papu</Text>

                <Pressable style={styles.primaryButtom} onPress={() => {setmodalVisible(true)}}>
                    <Text style={styles.buttomText}>+ Nueva tarea papu</Text>
                </Pressable>

                <Pressable style={styles.secondaryButtom} onPress={() =>{openBotttomSheet}}>
                    <Text style={styles.buttonText}>Seleccionar prioridad papu</Text>
                </Pressable>
                
                <FlatList style={styles.tasksList}
                contentContainerStyle={styles.taskListContent}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.taskCard}>
                        <Text style={styles.cardTitle}>Tarea {index + 1}</Text>
                        <Text style={styles.taskText}>{item.name}</Text>
                        <Text style={styles.priorityText}>Prioridad papu: {item.priority}</Text>
                    </View>    
                )}
                />
            </View>

            <Modal visible={modalVisible} animationType='slide'
            transparent onRequestClose={() => setmodalVisible(false)}>
                <View styles={styles.modalBackground}>
                    <Text style={styles.modalTitle}>Nueva tarea papu</Text>
                    <Text style={styles.description}>Escribe el nombre de tu actividad papu</Text>
                    <TextInput
                    style={styles.input}
                    placeholder ='Ej. Estudar React Native'
                    value={task}
                    onChangeText={setTask}/>

                    <Pressable style={styles.primaryButton} on Press={saveTask}>
                        <Text style={styles.buttonText}>Guardar tarea papu</Text>
                    </Pressable>

                    <Pressable style={styles.cancelButton} onPress={() =>{setmodalVisible(false)}}>
                        <Text style={styles.cancelText}>Cancelar</Text>
                    </Pressable>
                </View>
            </Modal>

            <BottomSheet ref={botttomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDowntoClose
            blackgroundStyle={styles.sheetBackground}
            handlerIndicatorStyle={styles.handlerIndicator}>
                <BottomSheetView style={styles.sheetContent}>
                    <text styles={styles.sheetTitle}>Selecciona la prioridad papu</text>
                    <Text styles={styles.description}>Elige la importancia de tu tarea papu</Text>
                    {['Baja', 'Media', 'Alta'].map((item) => {
                        return (
                            <Pressable
                            key={item}
                            style={[styles.priorityOption, priority === item && styles.selectedOption]}
                            onPress={() => selectedPriority(item)}
                            >
                                <Text style={[styles.priorityText, priority === item && styles.selectedText]}>
                                    {item}
                                </Text>
                            </Pressable>
                        );
                    })

                    }
                </BottomSheetView>
            </BottomSheet>
            
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        blackgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})