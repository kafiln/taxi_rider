import { AppService } from './app.service';

describe('The price calculator service', () => {
  const service = new AppService();
  //TODO: parameterize the test
  it('should return the right price', () => {
    const price = service.getPrice('2020-01-01T00:00:00.000Z', 720, 5);
    expect(price).toBe(7.25);
  });
  it('should return the right price', () => {
    const price = service.getPrice('2020-01-01T16:30:00.000Z', 4000, 5);
    expect(price).toBe(8.25);
  });
  it('should return the right price', () => {
    const price = service.getPrice('2020-01-04T05:20:00.000Z', 2000, 10);
    expect(price).toBe(13.5);
  });
});
