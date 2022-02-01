import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPhoneNumber } from "../../redux/phoneNumbersReducer"
import style from "./TaskOne.module.scss"

const TaskOne = () => {
   const numbers = useSelector(state => state.taskOne)
   const dispatch = useDispatch()
   const [phone, setPhone] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [isMissingNumber, setIsMissingNumber] = useState(false)
   const [isInputError, setIsInputError] = useState(false)
   const [isAddSuccess, setIsAddSuccess] = useState(false)

   const mask = '# (###) ###-##-##'
   const permittedFirstSimbols = ['7', '8', '9']

   const maskedPhone = (value, mask = '# ### ### ## ##', permittedFirstSimbols = ['7', '8', '9']) => {
      let numbersValue = value.replace(/\D/g, '')
      let formatedInputValue = ''
      const arrayMask = mask.split('')
      const arrayMaskSymbols = []
      mask.split('').forEach((elem, input) => {
         if (elem === '#') arrayMaskSymbols.push(input)
      })

      if (!numbersValue) {
         return ''
      }

      if (permittedFirstSimbols.includes(numbersValue[0])) {
         if (numbersValue[0] === '7') numbersValue = '8'
         if (numbersValue[0] === '9') numbersValue = '89'
         setIsInputError(false)
      } else {
         setIsInputError(true)
      }

      for (let i = 0; i < numbersValue.length; i++) {
         arrayMask[arrayMaskSymbols[i]] = numbersValue[i]
         formatedInputValue = arrayMask.join('').substring(0, arrayMaskSymbols[i + 1])
      }

      return formatedInputValue
   }

   const onChangeHandler = (e) => {
      let inputValue = e.target.value
      setPhone(maskedPhone(inputValue, mask, permittedFirstSimbols))
   }

   const onKeyDownHandler = (e) => {
      if (e.keyCode === 8) {
         let num = phone.replace(/\D/g, '')
         setPhone(num.substring(0, num.length))
      }
   }

   const onBlurHandler = () => {
      if (phone.replace(/\D/g, '').length < 11) {
         setIsInputError(true)
      }
   }

   const onFocusHandler = () => {
      setIsInputError(false)
   }

   const onSubmitHandler = (e) => {
      e.preventDefault()
      dispatch(addPhoneNumber(parseInt(phoneNumber, 10)))
      setPhone('')
      setPhoneNumber('')
   }

   useEffect(() => {
      if (isMissingNumber && !isInputError && phoneNumber.length === 10) {
         setIsAddSuccess(true)
      } else {
         setIsAddSuccess(false)
      }
   }, [isMissingNumber, phoneNumber, isInputError])

   useEffect(() => {
      if (phone) {
         setPhoneNumber(phone.replace(/\D/g, '').substring(1))
      }
   }, [phone])

   useEffect(() => {
      if (phoneNumber && numbers.phoneNumbers) {
         setIsMissingNumber(false)
         let coincidencesNumbers = 0
         numbers.phoneNumbers.forEach(number => {
            let isCoindences = phoneNumber !== '' && String(number).slice(0, phoneNumber.length) === phoneNumber.slice(0)
            if (isCoindences) {
               coincidencesNumbers++
            }
         })
         if (coincidencesNumbers === 0) {
            setIsMissingNumber(true)
         }
      }
   }, [phoneNumber, numbers])

   const styleInput = `${style.form__input}  ${isMissingNumber ? style.form__input_miss : ''} ${isInputError ? style.form__input_error : ''}`

   return (
      <div className={style.taskOne__container}>
         <div className={style.taskOne__wrap}>
            <form className={style.taskOne__form} onSubmit={onSubmitHandler}>
               <input className={styleInput} type="tel" value={phone} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} onBlur={onBlurHandler} onFocus={onFocusHandler} />
               <button className={style.form__button} disabled={!isAddSuccess}>Добавить</button>
            </form>
            {numbers.phoneNumbers && (
               <ul className={style.taskOne__list} >
                  {numbers.phoneNumbers
                     .filter(number => (phoneNumber !== '' && String(number).substring(0, phoneNumber.length) === phoneNumber))
                     .map(number => <li key={number}>{number}</li>)
                  }
               </ul>
            )}
         </div>
      </div>
   )
}

export default TaskOne
