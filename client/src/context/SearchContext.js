import { createContext, useReducer } from "react"

const INITIAL_STATE = {
	destination: undefined,
	dates: [],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined,
	}
}

export const SearchContext = createContext(INITIAL_STATE)

const SearchReduder = (state, action) => {
	switch (action.type) {
		case 'NEW_SEARCH':
			return action.payload;
		case 'RESET_SEARCH':
			return INITIAL_STATE
		default:
			return state;
	}

}

export const SearchContextProvider = ({ children, }) => {
	const [state, dispatch] = useReducer(SearchReduder, INITIAL_STATE)

	return (
		<SearchContext.Provider value={{ destination: state.destination, dates: state.dates, options: state.options, dispatch, }}>
			{children}
		</SearchContext.Provider>
	)

}