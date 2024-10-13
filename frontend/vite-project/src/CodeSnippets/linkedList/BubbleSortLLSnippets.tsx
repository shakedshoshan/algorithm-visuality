export const bubbleSortLLSnippets = {
    javascript: `function bubbleSort(head) {
    if (!head || !head.next) return head;
    
    let swapped;
    let current;
    let tail = null;

    do {
        swapped = false;
        current = head;

        while (current.next !== tail) {
            if (current.value > current.next.value) {
                // Swap values
                let temp = current.value;
                current.value = current.next.value;
                current.next.value = temp;
                swapped = true;
            }
            current = current.next;
        }
        tail = current;
    } while (swapped);

    return head;
}`,
  
    python: `def bubble_sort(head):
    if not head or not head.next:
        return head
    
    swapped = True
    tail = None

    while swapped:
        swapped = False
        current = head

        while current.next != tail:
            if current.value > current.next.value:
                # Swap values
                current.value, current.next.value = current.next.value, current.value
                swapped = True
            current = current.next
        tail = current
    
    return head`,
  
    java: `public class BubbleSort {
    public static Node bubbleSort(Node head) {
        if (head == null || head.next == null)
            return head;

        boolean swapped;
        Node current;
        Node tail = null;

        do {
            swapped = false;
            current = head;

            while (current.next != tail) {
                if (current.value > current.next.value) {
                    // Swap values
                    int temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
            tail = current;
        } while (swapped);

        return head;
    }
}`,
  
    c: `#include <stdbool.h>

struct Node {
    int value;
    struct Node* next;
};

struct Node* bubbleSort(struct Node* head) {
    if (head == NULL || head->next == NULL)
        return head;

    bool swapped;
    struct Node* current;
    struct Node* tail = NULL;

    do {
        swapped = false;
        current = head;

        while (current->next != tail) {
            if (current->value > current->next->value) {
                // Swap values
                int temp = current->value;
                current->value = current->next->value;
                current->next->value = temp;
                swapped = true;
            }
            current = current->next;
        }
        tail = current;
    } while (swapped);

    return head;
}`,
};