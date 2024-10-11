export const recursiveSearchSnippets = {
    javascript: `function recursiveSearch(head, target) {
    // Base case: if the list is empty, target is not found
    if (head === null) {
        return null;
    }
    
    // If the current node's value matches the target, we found it
    if (head.value === target) {
        return head;
    }
    
    // Recursive case: search in the rest of the list
    return recursiveSearch(head.next, target);
}`,
  
    python: `def recursive_search(head, target):
    # Base case: if the list is empty, target is not found
    if head is None:
        return None
    
    # If the current node's value matches the target, we found it
    if head.value == target:
        return head
    
    # Recursive case: search in the rest of the list
    return recursive_search(head.next, target)`,
  
    java: `public class RecursiveSearch {
    public static Node recursiveSearch(Node head, int target) {
        // Base case: if the list is empty, target is not found
        if (head == null) {
            return null;
        }
        
        // If the current node's value matches the target, we found it
        if (head.value == target) {
            return head;
        }
        
        // Recursive case: search in the rest of the list
        return recursiveSearch(head.next, target);
    }
}`,
  
    c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node* next;
};

struct Node* recursiveSearch(struct Node* head, int target) {
    // Base case: if the list is empty, target is not found
    if (head == NULL) {
        return NULL;
    }
    
    // If the current node's value matches the target, we found it
    if (head->value == target) {
        return head;
    }
    
    // Recursive case: search in the rest of the list
    return recursiveSearch(head->next, target);
}`,
};