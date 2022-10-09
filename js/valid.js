document.getElementById('nameModal').addEventListener('mouseenter', function(event) {
    event.target.setAttribute('autocomplete', 'off');
    });
    
    const validateModal = new JustValidate('#formModal',{});

    let selectorModal = document.querySelector(".phoneMask");
    let imModal = new Inputmask ("+7 (999) 999-99-99");
    imModal.mask(selectorModal);
    
    validateModal.addField('#nameModal', [
        {
        rule: 'required',
        errorMessage : 'Введите имя'
        },
        {
        rule: 'minLength',
        value: 2,
        errorMessage : 'Минимум 2 символа'
        },
    ])
    .addField("#emailModal", [
        {
        rule: 'required',
        errorMessage : 'Введите почту'
        },
        {
        rule: 'email',
        errorMessage : 'Ошибка в почте'
        },
    ])
    .addField("#phoneMaskModal", [
        {
          validator: (value) => {
            const phone = selectorModal.inputmask.unmaskedvalue();
            return Boolean(Number(phone) && phone.length > 0);
          },
          errorMessage : 'Введите телефон'
        },
        {
          validator: (value) => {
            const phone = selectorModal.inputmask.unmaskedvalue();
            return Boolean(Number(phone) && phone.length === 10);
          },
          errorMessage : 'Введите телефон полностью'
        }
    ]);