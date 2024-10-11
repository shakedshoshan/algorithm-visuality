export const iterationSearchSnippets = {
    javascript: `function iterationSearch(head, target) {
    let current = head;
    while (current !== null) {
        if (current.value === target) {
            return current; // Found the target
        }
        current = current.next;
    }
    return null; // Target not found
}`,
  
    python: `def iteration_search(head, target):
    current = head
    while current is not None:
        if current.value == target:
            return current  # Found the target
        current = current.next
    return None  # Target not found`,
  
    java: `public class IterationSearch {
    public static Node iterationSearch(Node head, int target) {
        Node current = head;
        while (current != null) {
            if (current.value == target) {
                return current; // Found the target
            }
            current = current.next;
        }
        return null; // Target not found
    }
}`,
  
    c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node* next;
};

struct Node* iterationSearch(struct Node* head, int target) {
    struct Node* current = head;
    while (current != NULL) {
        if (current->value == target) {
            return current; // Found the target
        }
        current = current->next;
    }
    return NULL; // Target not found
}`,
};