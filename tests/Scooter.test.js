const Scooter = require('../src/Scooter')

describe('scooter methods', () => {
  // tests here
  let scooter;
  let user; 

  beforeEach(() => {
    scooter = new Scooter("Station 1", 21, false)
    user = "John"
  })

// typeof scooter === object
  test('Scooter class should create Scooter instance', () => {
    expect(scooter).toBeInstanceOf(Scooter)
  });


// Method tests

  // rent method
  test('able to rent', () => {
    const consoleSpy = jest.spyOn(console,"log")
    scooter.rent(user) 
    expect(consoleSpy).toHaveBeenCalledWith("Successful")
    consoleSpy.mockRestore()
  });

  // dock method
  test('should be able to dock', () => {
    expect(Scooter.dock).toBe(true);
  });

  // requestRepair method

  // charge method

})