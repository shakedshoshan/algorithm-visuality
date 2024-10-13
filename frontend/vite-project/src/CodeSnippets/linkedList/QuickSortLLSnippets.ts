export const quickSortLLSnippets = {
    javascript: `function quickSort(head) {
    if (!head || !head.next) return head;

    let pivot = head;
    let current = head.next;
    pivot.next = null;
    let left = null;
    let right = null;

    while (current) {
        let next = current.next;
        if (current.value < pivot.value) {
            current.next = left;
            left = current;
        } else {
            current.next = right;
            right = current;
        }
        current = next;
    }

    left = quickSort(left);
    right = quickSort(right);

    if (!left) return pivot;

    let leftTail = left;
    while (leftTail.next) {
        leftTail = leftTail.next;
    }
    leftTail.next = pivot;
    pivot.next = right;

    return left;
}`,
  
    python: `def quick_sort(head):
    if not head or not head.next:
        return head

    pivot = head
    current = head.next
    pivot.next = None
    left = right = None

    while current:
        next_node = current.next
        if current.value < pivot.value:
            current.next = left
            left = current
        else:
            current.next = right
            right = current
        current = next_node

    left = quick_sort(left)
    right = quick_sort(right)

    if not left:
        return pivot

    left_tail = left
    while left_tail.next:
        left_tail = left_tail.next
    left_tail.next = pivot
    pivot.next = right

    return left`,
  
    java: `public class QuickSort {
    public static Node quickSort(Node head) {
        if (head == null || head.next == null)
            return head;

        Node pivot = head;
        Node current = head.next;
        pivot.next = null;
        Node left = null;
        Node right = null;

        while (current != null) {
            Node next = current.next;
            if (current.value < pivot.value) {
                current.next = left;
                left = current;
            } else {
                current.next = right;
                right = current;
            }
            current = next;
        }

        left = quickSort(left);
        right = quickSort(right);

        if (left == null)
            return pivot;

        Node leftTail = left;
        while (leftTail.next != null) {
            leftTail = leftTail.next;
        }
        leftTail.next = pivot;
        pivot.next = right;

        return left;
    }
}`,
  
    c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node* next;
};

struct Node* quickSort(struct Node* head) {
    if (head == NULL || head->next == NULL)
        return head;

    struct Node* pivot = head;
    struct Node* current = head->next;
    pivot->next = NULL;
    struct Node* left = NULL;
    struct Node* right = NULL;

    while (current != NULL) {
        struct Node* next = current->next;
        if (current->value < pivot->value) {
            current->next = left;
            left = current;
        } else {
            current->next = right;
            right = current;
        }
        current = next;
    }

    left = quickSort(left);
    right = quickSort(right);

    if (left == NULL)
        return pivot;

    struct Node* leftTail = left;
    while (leftTail->next != NULL) {
        leftTail = leftTail->next;
    }
    leftTail->next = pivot;
    pivot->next = right;

    return left;
}`,
};