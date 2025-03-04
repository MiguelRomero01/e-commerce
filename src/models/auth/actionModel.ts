export type action = 
| { type: 'SET_USERNAME'; payload: string }
| { type: 'SET_PASSWORD'; payload: string }
| { type: 'SET_REPEAT_PASSWORD'; payload: string }
| { type: 'SET_MESSAGE'; payload: string }
| { type: 'SET_ERROR'; payload: string}