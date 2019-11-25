<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageInput from './DemoPageInput'
import DemoPageInputCustomButton from './DemoPageInputCustomButton'
import DemoPageInputMiscellaneous from './DemoPageInputMiscellaneous'
import DemoPageInputCid from './DemoPageInputCid'
import DemoPageInputCif from './DemoPageInputCif'
import DemoPageInputNumber from './DemoPageInputNumber'
import DemoPageInputCurrency from './DemoPageInputCurrency'
import DemoPageInputUpperCase from './DemoPageInputUpperCase'
import DemoPageInputEng from './DemoPageInputEng'
import DemoPageInputThai from './DemoPageInputThai'
import DemoPageInputAddress from './DemoPageInputAddress'
import DemoPageInputMobileNumber from './DemoPageInputMobileNumber'
import DemoPageInputTelephoneNumber from './DemoPageInputTelephoneNumber'
import DemoPageInputEmail from './DemoPageInputEmail'
export default {
  name: 'ComponentInput',
  computed: {
    components() {
      return [
        DemoPageInput,
        DemoPageInputCustomButton,
        DemoPageInputMiscellaneous,
        DemoPageInputCid,
        DemoPageInputCif,
        DemoPageInputNumber,
        DemoPageInputCurrency,
        DemoPageInputUpperCase,
        DemoPageInputEng,
        DemoPageInputThai,
        DemoPageInputAddress,
        DemoPageInputMobileNumber,
        DemoPageInputTelephoneNumber,
        DemoPageInputEmail
      ]
    },
    headers() {
      return [
        {
          main: 'Basic Usage',
          sub: [
            'Input with Icon',
            'Mixed Input'
          ]
        },
        { main: 'Custom Button' },
        { main: 'Miscellaneous' },
        {
          main: 'Input CID',
          sub: [
            'Input CID with Icon',
            'Input CID Validation'
          ]
        },
        {
          main: 'Input CIF',
          sub: [
            'Input CIF with Icon'
          ]
        },
        {
          main: 'Input Number',
          sub: [
            'Input Number with Unit',
            'Customize Digits And Decimal Places',
            'Customize Min/Max',
            'Customize Number Type'
          ]
        },
        {
          main: 'Input Currency',
          sub: [
            'Input Currency with Unit'
          ]
        },
        { main: 'Input Upper Case' },
        { main: 'Input Eng' },
        { main: 'Input Thai' },
        { main: 'Input Address' },
        { main: 'Input Mobile Phone Number' },
        { main: 'Input Telephone Number' },
        { main: 'Input Email' }
      ]
    }
  }
}
</script>
