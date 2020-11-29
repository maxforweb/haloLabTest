export default ( {errors, values} ) => {
    const rules = { 

        name: ( errors, value ) => {
            
            if ( !value ) {
                errors.name = 'Required';
            }
            else if ( !/^[A-Za-z]+$/.test(value) ) {
                errors.name = "Only letters allowed"
            }
            console.log(value)
            console.log(errors)

        },

        phone: ( errors, value ) => {
           if(!value) {
               errors.phone = 'Required'
           }
           else if ( !/^[0-9]*$/.test(value) ) {
               
               errors.phone = 'Only numbers'
           }
           else if ( !/^\d{12}$/.test(value) ) {
               errors.phone = 'Number should contain 12 digits'
           }

        }

    }

    Object.keys(values).forEach( 
        key => rules[ key ] && rules[ key ](errors, values[key]) 
      );
}