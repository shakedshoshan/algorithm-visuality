export const stackSortSnippets = {
    javascript: `function sortStack(stack) {
    const tempStack = [];

    while (stack.length > 0) {
        const temp = stack.pop();
        
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }
        
        tempStack.push(temp);
    }

    // Transfer elements back to original stack
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
}`,
  
    python: `def sort_stack(stack):
    temp_stack = []

    while stack:
        temp = stack.pop()
        
        while temp_stack and temp_stack[-1] > temp:
            stack.append(temp_stack.pop())
        
        temp_stack.append(temp)

    # Transfer elements back to original stack
    while temp_stack:
        stack.append(temp_stack.pop())

    return stack`,
  
    java: `public class StackSort {
    public static Stack<Integer> sortStack(Stack<Integer> stack) {
        Stack<Integer> tempStack = new Stack<>();

        while (!stack.isEmpty()) {
            int temp = stack.pop();
            
            while (!tempStack.isEmpty() && tempStack.peek() > temp) {
                stack.push(tempStack.pop());
            }
            
            tempStack.push(temp);
        }

        // Transfer elements back to original stack
        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop());
        }

        return stack;
    }
}`,
  
    c: `#include <stdbool.h>
#include <stdlib.h>

struct Stack {
    int* array;
    int top;
    unsigned capacity;
};

void sortStack(struct Stack* stack) {
    struct Stack* tempStack = createStack(stack->capacity);

    while (!isEmpty(stack)) {
        int temp = pop(stack);
        
        while (!isEmpty(tempStack) && peek(tempStack) > temp) {
            push(stack, pop(tempStack));
        }
        
        push(tempStack, temp);
    }

    // Transfer elements back to original stack
    while (!isEmpty(tempStack)) {
        push(stack, pop(tempStack));
    }

    free(tempStack->array);
    free(tempStack);
}`,
};