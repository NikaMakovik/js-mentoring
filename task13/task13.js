describe("Comparison of", function() {
    it("two numbers", function() {
      let a = 6;
      expect(a).toBe(6);
      expect(a).toBeGreaterThan(5);
      expect(a).toBeLessThan(7);
      expect(a).not.toBe(7);
      expect(a).not.toBeGreaterThan(7);
      expect(a).not.toBeLessThan(5);
    });

    it("two lines for a complete match", function() {
      let a = 'abba';
      let b = 'abba';
      let c = 'sfgds';
      expect(a).toBe(b);
      expect(a).toEqual(b);
      expect(a).not.toBe(c);
      expect(c).not.toEqual(b);
    });

    it("two lines for a partial match (contains)", function() {
      let a = 'habbah';
      let b = 'abba';
      let c = 'gggg';
      expect(a).toMatch(b);
      expect(a).not.toMatch(c);
    });

    it("arrays", function() {
      let arr1 = ['Alice', 'Bob', 4, 8];
      let arr2 = ['Alice', 'Bob', 4, 8];
      expect(arr1).not.toBe(arr2);
      expect(arr1).toEqual(arr2);
    });

    it("array of strings", function() {
      let arr1 = ['Alice', 'Bob'];
      let arr2 = ['Alice', 'Bob'];
      expect(arr1).not.toBe(arr2);
      expect(arr1).toContain('Alice');
      expect(arr1).toEqual(arr2);
    });
  });