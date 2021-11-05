# State Management Planning Steps

## Values

- smurfs: array of smurf objects
- isLoading: boolean for waiting on an API call
- error: string with error message

## States

- base: smurfs array populated (but potentially empty), isLoading is false, error is empty
- loading: smurfs array is empty, isLoading is true, error is empty
- error: smurfs array is empty, isLoading is false, error has error message

## Actions

- setSmurfs: sets state to base, spreads received array of smurfs to state.smurfs
- setLoading: sets state to loading
- setError: sets state to error, assigns received string to state.error
- fetchSmurfs: thunk function that calls setLoading, makes an API call, calls setSmurfs with response data if API call is successful, calls setError with error message if API call is unsuccessful
