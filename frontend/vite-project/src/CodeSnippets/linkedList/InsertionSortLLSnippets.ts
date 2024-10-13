export const insertionSortLLSnippets = {
    javascript: `function insertionSort(head) {
    if (!head || !head.next) return head;

    let sorted = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        
        if (sorted === null || sorted.value >= current.value) {
            current.next = sorted;
            sorted = current;
        } else {
            let search = sorted;
            while (search.next !== null && search.next.value < current.value) {
                search = search.next;
            }
            current.next = search.next;
            search.next = current;
        }
        
        current = next;
    }

    return sorted;
}`,
  
    python: `def insertion_sort(head):
    if not head or not head.next:
        return head

    sorted = None
    current = head

    while current:
        next_node = current.next
        
        if not sorted or sorted.value >= current.value:
            current.next = sorted
            sorted = current
        else:
            search = sorted
            while search.next and search.next.value < current.value:
                search = search.next
            current.next = search.next
            search.next = current
        
        current = next_node

    return sorted`,
  
    java: `public class InsertionSort {
    public static Node insertionSort(Node head) {
        if (head == null || head.next == null)
            return head;

        Node sorted = null;
        Node current = head;

        while (current != null) {
            Node next = current.next;
            
            if (sorted == null || sorted.value >= current.value) {
                current.next = sorted;
                sorted = current;
            } else {
                Node search = sorted;
                while (search.next != null && search.next.value < current.value) {
                    search = search.next;
                }
                current.next = search.next;
                search.next = current;
            }
            
            current = next;
        }

        return sorted;
    }
}`,
  
    c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node* next;
};

struct Node* insertionSort(struct Node* head) {
    if (head == NULL || head->next == NULL)
        return head;

    struct Node* sorted = NULL;
    struct Node* current = head;

    while (current != NULL) {
        struct Node* next = current->next;
        
        if (sorted == NULL || sorted->value >= current->value) {
            current->next = sorted;
            sorted = current;
        } else {
            struct Node* search = sorted;
            while (search->next != NULL && search->next->value < current->value) {
                search = search->next;
            }
            current->next = search->next;
            search->next = current;
        }
        
        current = next;
    }

    return sorted;
}`,
};