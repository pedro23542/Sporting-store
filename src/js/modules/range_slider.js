import noUiSlider from 'nouislider/dist/nouislider';

const mainRangeSlider = () => {

  const rangeSlider = document.querySelector('#range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [500, 999999],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [100000]
      },

      tooltips: [true, true],
      format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
          return Math.round(value);
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
          return Number(value);
        }
      }
    });


    // Связаваем rangeSlider с inputs
    const input0 = document.querySelector('#input-0');
    const input1 = document.querySelector('#input-1');
    const inputs = [input0, input1];

    // rangeSlider.noUiSlider.on('update', function (values, handle) { //values: запись типа ["22794.00", "999999.00"]   handle: 0 or 1
    //   inputs[handle].value = Math.round(values[handle]); //так мы будем обращатся к одному из inputs в зависимости чему равен handle(0 или 1)
    // });

    //Реализация 'кнопки перемищяются при вводе значений в input'
    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('input', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });

  }

};
export default mainRangeSlider;