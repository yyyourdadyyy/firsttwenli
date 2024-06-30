import React from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const Order = () => {
  const [phone, setPhone] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: 'Сайт лендинг1', label: 'Сайт лендинг1' },
    { value: 'Сайт лендинг2', label: 'Сайт лендинг2' },
    { value: 'Сайт лендинг3', label: 'Сайт лендинг3' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <main className="main-order">
        <div className="rows-main-order">
          <div className="img-order">
            <img src="landing.png" alt="landing" />
          </div>
          <div className="form-order-block">
            <form className="form-order" action="post">
              <h2>Заказ</h2>
              <label htmlFor="tel">Телефон</label>
                <PhoneInput
                country={'kz'}
                value={phone}
                onChange={phone => setPhone(phone)}
                inputProps={{
                    name: 'tel',
                    required: true,
                    autoFocus: true,
                }}
                />
              <label htmlFor="name">ФИО</label>
              <input type="text" name="name" id="name-form" />
              <label htmlFor="list-services">Услуга</label>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                className="custom-select"
                classNamePrefix="custom-select"
                placeholder="Выберите услугу"
              />
              <div className="btn-form-block">
                <input type="submit" value="Оставить заявку" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};