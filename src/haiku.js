export class Haiku
{
  constructor(inputPoem)
  {
    this.poem = inputPoem;
  }

  correctLineNumber() {
    let lineArr = this.poem.split('\n');
    if (lineArr.length != 3)
    {
      return false;
    }
    return true;
  }
}