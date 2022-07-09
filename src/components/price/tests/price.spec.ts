import Price from '../src/index.vue';
import { mount } from '@vue/test-utils';

global.fetch = jest.fn();

describe('Price', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(Price, {
      props: {
        tid: '65',
        backgroundColor: 'red',
        request: {
          get() {
            return {
              status: {
                code: 0
              },
              data: {
                logo: '',
                market_data: {
                  price: [
                    {
                      price_latest: 100,
                      price_change_percentage_24h: 1
                    }
                  ]
                },
                symbol: 'btc',
                name: 'btc1'
              }
            };
          }
        }
      }
    });
  });
  it('should work with tid prop', async () => {
    expect(wrapper.props().tid).toBe('65');
  });
  it('should work with backgroundColor prop', async () => {
    expect(wrapper.props().backgroundColor).toBe('red');
  });
  it('should work with res data', ()=>{
    expect(wrapper.find('.symbol').text()).toBe('btc');
    expect(wrapper.find('.abbreviate').text()).toBe('btc1');
    expect(wrapper.find('.ti-coin-price').text()).toBe('$100.00');
    expect(wrapper.find('.ti-coin-change24').text()).toBe('100%');
  });
});
