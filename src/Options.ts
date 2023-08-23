import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react"

export type Views = "days" | "months" | "years" | "decades"

export interface IDatePickerContext {
	options: IOptions
	view: Views
	setView: Dispatch<SetStateAction<Views>>
	show: boolean
	setShow: (show: boolean) => void
	selectedDate: Date
	changeSelectedDate: (action: "prev" | "next" | "date" | "today", date: Date) => void
	showSelectedDate: boolean
	setShowSelectedDate: Dispatch<SetStateAction<boolean>>
	selectedMonth: number
	selectedYear: number
	getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | null | undefined) => string
}
interface ITheme {
	background: string
	todayBtn: string
	clearBtn: string
	icons: string
	text: string
	disabledText: string
	input: string
	inputIcon: string
	selected: string
}

interface IIcons {
	prev: () => ReactElement | JSX.Element
	next: () => ReactElement | JSX.Element
}

export interface IOptions {
	title?: string
	autoHide?: boolean
	todayBtn?: boolean
	todayBtnText?: string
	clearBtn?: boolean
	clearBtnText?: string
	maxDate?: Date
	minDate?: Date
	theme?: ITheme
	icons?: IIcons
	datepickerClassNames?: string
	defaultDate?: Date | null
	language?: string
	weekDays?: string[]
	disabledDates?: Date[]
	inputNameProp?: string
	inputIdProp?: string
	inputPlaceholderProp?: string
	renderFooter?: (props: IDatePickerContext) => ReactNode
	inputDateFormatProp?: Intl.DateTimeFormatOptions
}

const options: IOptions = {
	autoHide: true,
	todayBtn: true,
	clearBtn: true,
	todayBtnText: "Today",
	clearBtnText: "Clear",
	theme: {
		background: "",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	datepickerClassNames: "",
	defaultDate: new Date(),
	language: "en",
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric",
	},
}

export default options
