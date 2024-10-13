export const stackSearchSnippets = {
    javascript: `function searchStack(stack, target) {
    const tempStack = [];
    let found = false;

    while (stack.length > 0) {
        const current = stack.pop();
        if (current === target) {
            found = true;
            break;
        }
        tempStack.push(current);
    }

    // Restore the original stack
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return found;
}`,
  
    python: `def search_stack(stack, target):
    temp_stack = []
    found = False

    while stack:
        current = stack.pop()
        if current == target:
            found = True
            break
        temp_stack.append(current)

    # Restore the original stack
    while temp_stack:
        stack.append(temp_stack.pop())

    return found`,
  
    java: `public class StackSearch {
    public static boolean searchStack(Stack<Integer> stack, int target) {
        Stack<Integer> tempStack = new Stack<>();
        boolean found = false;

        while (!stack.isEmpty()) {
            int current = stack.pop();
            if (current == target) {
                found = true;
                break;
            }
            tempStack.push(current);
        }

        // Restore the original stack
        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop());
        }

        return found;
    }
}`,
  
    c: `#include <stdbool.h>
#include <stdlib.h>

struct Stack {
    int* array;
    int top;
    unsigned capacity;
};

bool searchStack(struct Stack* stack, int target) {
    struct Stack* tempStack = createStack(stack->capacity);
    bool found = false;

    while (!isEmpty(stack)) {
        int current = pop(stack);
        if (current == target) {
            found = true;
            break;
        }
        push(tempStack, current);
    }

    // Restore the original stack
    while (!isEmpty(tempStack)) {
        push(stack, pop(tempStack));
    }

    free(tempStack->array);
    free(tempStack);

    return found;
}`,
};