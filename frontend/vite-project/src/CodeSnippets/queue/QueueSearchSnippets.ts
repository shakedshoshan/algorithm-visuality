export const queueSearchSnippets = {
  javascript: `function queueSearch(queue, target) {
  // Search from front to rear (FIFO order)
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === target) {
      return i; // Return position if found
    }
  }
  return -1; // Not found
}

// Alternative implementation using dequeue operations
function queueSearchDequeue(queue, target) {
  const tempQueue = [...queue];
  let position = 0;
  
  while (tempQueue.length > 0) {
    const current = tempQueue.shift(); // Dequeue from front
    if (current === target) {
      return position;
    }
    position++;
  }
  return -1; // Not found
}

// Usage
const queue = [12, 34, 56, 78, 90];
console.log(queueSearch(queue, 56)); // Output: 2
console.log(queueSearch(queue, 99)); // Output: -1`,

  python: `def queue_search(queue, target):
    """Search from front to rear (FIFO order)"""
    for i, element in enumerate(queue):
        if element == target:
            return i  # Return position if found
    return -1  # Not found

def queue_search_dequeue(queue, target):
    """Alternative implementation using dequeue operations"""
    from collections import deque
    temp_queue = deque(queue)
    position = 0
    
    while temp_queue:
        current = temp_queue.popleft()  # Dequeue from front
        if current == target:
            return position
        position += 1
    return -1  # Not found

# Usage
queue = [12, 34, 56, 78, 90]
print(queue_search(queue, 56))  # Output: 2
print(queue_search(queue, 99))  # Output: -1`,

  java: `import java.util.*;

public class QueueSearch {
    public static int queueSearch(List<Integer> queue, int target) {
        // Search from front to rear (FIFO order)
        for (int i = 0; i < queue.size(); i++) {
            if (queue.get(i) == target) {
                return i; // Return position if found
            }
        }
        return -1; // Not found
    }
    
    public static int queueSearchDequeue(Queue<Integer> queue, int target) {
        // Alternative implementation using dequeue operations
        Queue<Integer> tempQueue = new LinkedList<>(queue);
        int position = 0;
        
        while (!tempQueue.isEmpty()) {
            int current = tempQueue.poll(); // Dequeue from front
            if (current == target) {
                return position;
            }
            position++;
        }
        return -1; // Not found
    }
    
    public static void main(String[] args) {
        List<Integer> queue = Arrays.asList(12, 34, 56, 78, 90);
        System.out.println(queueSearch(queue, 56)); // Output: 2
        System.out.println(queueSearch(queue, 99)); // Output: -1
        
        Queue<Integer> linkedQueue = new LinkedList<>(queue);
        System.out.println(queueSearchDequeue(linkedQueue, 56)); // Output: 2
    }
}`,

  c: `#include <stdio.h>

int queueSearch(int queue[], int size, int target) {
    // Search from front to rear (FIFO order)
    for (int i = 0; i < size; i++) {
        if (queue[i] == target) {
            return i; // Return position if found
        }
    }
    return -1; // Not found
}

// Queue structure for dequeue implementation
typedef struct {
    int* data;
    int front;
    int rear;
    int size;
    int capacity;
} Queue;

Queue* createQueue(int capacity) {
    Queue* queue = malloc(sizeof(Queue));
    queue->data = malloc(capacity * sizeof(int));
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
    queue->capacity = capacity;
    return queue;
}

void enqueue(Queue* queue, int value) {
    if (queue->size < queue->capacity) {
        queue->rear = (queue->rear + 1) % queue->capacity;
        queue->data[queue->rear] = value;
        queue->size++;
    }
}

int dequeue(Queue* queue) {
    if (queue->size > 0) {
        int value = queue->data[queue->front];
        queue->front = (queue->front + 1) % queue->capacity;
        queue->size--;
        return value;
    }
    return -1; // Queue is empty
}

int queueSearchDequeue(Queue* originalQueue, int target) {
    Queue* tempQueue = createQueue(originalQueue->capacity);
    
    // Copy elements to temp queue
    for (int i = 0; i < originalQueue->size; i++) {
        int index = (originalQueue->front + i) % originalQueue->capacity;
        enqueue(tempQueue, originalQueue->data[index]);
    }
    
    int position = 0;
    while (tempQueue->size > 0) {
        int current = dequeue(tempQueue);
        if (current == target) {
            free(tempQueue->data);
            free(tempQueue);
            return position;
        }
        position++;
    }
    
    free(tempQueue->data);
    free(tempQueue);
    return -1; // Not found
}

int main() {
    int queue[] = {12, 34, 56, 78, 90};
    int size = sizeof(queue) / sizeof(queue[0]);
    
    printf("Search result: %d\\n", queueSearch(queue, size, 56)); // Output: 2
    printf("Search result: %d\\n", queueSearch(queue, size, 99)); // Output: -1
    
    return 0;
}`
}; 