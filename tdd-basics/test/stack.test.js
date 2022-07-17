class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    get peek() {
        return this.items[this.top];
    }
    push(element) {
        this.top++;
        this.items[this.top] = element;
    }
    pop() {
        const popped = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return popped;
    }
}

describe("Stack without array", () => {
    let stack = new Stack();
    beforeEach(() => {
        stack = new Stack();
    });

    it("is created empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it("can push to the top", () => {
        stack.push("🥑");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("🥑");
    });

    it("can pop off from the top", () => {
        stack.push("🥑");
        stack.push("🥥");
        stack.push("🥦");
        expect(stack.pop()).toBe("🥦");
        // expect(stack.top).toBe(-1);
    });
});