
export const getExerciseName = (exercises, id) => {

    console.log(exercises);
    
    for (let i = 0; i < exercises.length; i++) {
        if (exercises[i].id === id) {
            return exercises[i].name;
        }
    }
    
    return 'Exercise not found';

}

export default { getExerciseName };