class TestCase {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    const method: Function = this[<never>this.name];
    method.call(this);
  }

}

class WasRun extends TestCase {

  wasRun: boolean;

  constructor(name: string) {
    super(name);
    this.wasRun = false;
  }

  testMethod(): void {
    this.wasRun = true;
  }

}

class TestCaseTest extends TestCase {

  testRunning(): void {
    const test: WasRun = new WasRun('testMethod');
    console.assert(!test.wasRun);
    test.run();
    console.assert(test.wasRun);
  }

}

new TestCaseTest('testRunning').run();
