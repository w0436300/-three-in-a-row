    // function to determine the color based on the current state
    function getColorFromState(state) {
        switch (state) {
            case 0: return '#e47298'; // Empty (State 0)
            case 1: return '#209e31';  // State 1
            case 2: return 'white';  // State 2
            default: return '#e47298';
        }
    }

    export {getColorFromState}