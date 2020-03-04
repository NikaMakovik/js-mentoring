describe("Comparison of", () => {
    it("two numbers", () => {
      const a = 6;
      expect(a).toBe(6);
      expect(a).toBeGreaterThan(5);
      expect(a).toBeLessThan(7);
      expect(a).not.toBe(7);
      expect(a).not.toBeGreaterThan(7);
      expect(a).not.toBeLessThan(5);
    });

    it("two lines for a complete match", () => {
      const a = 'abba';
      const b = 'abba';
      const c = 'sfgds';
      expect(a).toBe(b);
      expect(a).toEqual(b);
      expect(a).not.toBe(c);
      expect(c).not.toEqual(b);
    });

    it("two lines for a partial match (contains)", () => {
      const a = 'habbah';
      const b = 'abba';
      const c = 'gggg';
      expect(a).toMatch(b);
      expect(a).not.toMatch(c);
    });

    it("arrays", () => {
      const arr1 = ['Alice', 'Bob', 4, 8];
      const arr2 = ['Alice', 'Bob', 4, 8];
      expect(arr1).not.toBe(arr2);
      expect(arr1).toEqual(arr2);
    });

    it("array of strings", () => {
      const arr1 = ['Alice', 'Bob'];
      const arr2 = ['Alice', 'Bob'];
      expect(arr1).not.toBe(arr2);
      expect(arr1).toContain('Alice');
      expect(arr1).toEqual(arr2);
    });
  });