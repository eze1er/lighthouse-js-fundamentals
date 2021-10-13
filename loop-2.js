let  log = log[2]; // only care about the actual contents
  const num = i + 15;
  if (num % 10 === 0) {
    assert.equal(log, "BattyBeacon", "For number " + num + " output should be BattyBeacon but I found " + log);
  } else if (num % 2 === 0) {
    assert.equal(log, "Batty", "For number " + num + " output should be Batty but I found " + log);
  } else if (num % 5 === 0) {
    assert.equal(log, "Beacon", "For number " + num + " output should be Beacon but I found " + log);
  } else {
    expect(log).to.be.equal(num)
  }

