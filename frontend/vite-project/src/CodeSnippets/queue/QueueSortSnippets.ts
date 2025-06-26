export const queueSortSnippets = {
  javascript: `function queueSort(queue) {
  if (queue.length <= 1) return queue;
  
  const result = [];
  const tempQueue = [...queue];
  
  while (tempQueue.length > 0) {
    // Find minimum element
    let minIndex = 0;
    let minValue = tempQueue[0];
    
    for (let i = 1; i < tempQueue.length; i++) {
      if (tempQueue[i] < minValue) {
        minIndex = i;
        minValue = tempQueue[i];
      }
    }
    
    // Remove minimum and add to result
    result.push(tempQueue.splice(minIndex, 1)[0]);
  }
  
  return result;
}

// Usage
const queue = [64, 34, 25, 12, 22, 11, 90];
console.log(queueSort(queue));`,

  python: `def queue_sort(queue):
    if len(queue) <= 1:
        return queue
    
    result = []
    temp_queue = queue.copy()
    
    while temp_queue:
        # Find minimum element
        min_value = min(temp_queue)
        min_index = temp_queue.index(min_value)
        
        # Remove minimum and add to result
        result.append(temp_queue.pop(min_index))
    
    return result

# Usage
queue = [64, 34, 25, 12, 22, 11, 90]
print(queue_sort(queue))`,

  java: `import java.util.*;

public class QueueSort {
    public static List<Integer> queueSort(List<Integer> queue) {
        if (queue.size() <= 1) return new ArrayList<>(queue);
        
        List<Integer> result = new ArrayList<>();
        List<Integer> tempQueue = new ArrayList<>(queue);
        
        while (!tempQueue.isEmpty()) {
            // Find minimum element
            int minIndex = 0;
            int minValue = tempQueue.get(0);
            
            for (int i = 1; i < tempQueue.size(); i++) {
                if (tempQueue.get(i) < minValue) {
                    minIndex = i;
                    minValue = tempQueue.get(i);
                }
            }
            
            // Remove minimum and add to result
            result.add(tempQueue.remove(minIndex));
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        List<Integer> queue = Arrays.asList(64, 34, 25, 12, 22, 11, 90);
        System.out.println(queueSort(queue));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void queueSort(int arr[], int n) {
    int* result = malloc(n * sizeof(int));
    int* temp = malloc(n * sizeof(int));
    
    // Copy original array to temp
    for (int i = 0; i < n; i++) {
        temp[i] = arr[i];
    }
    
    int tempSize = n;
    int resultIndex = 0;
    
    while (tempSize > 0) {
        // Find minimum element
        int minIndex = 0;
        int minValue = temp[0];
        
        for (int i = 1; i < tempSize; i++) {
            if (temp[i] < minValue) {
                minIndex = i;
                minValue = temp[i];
            }
        }
        
        // Add minimum to result
        result[resultIndex++] = minValue;
        
        // Remove minimum from temp array
        for (int i = minIndex; i < tempSize - 1; i++) {
            temp[i] = temp[i + 1];
        }
        tempSize--;
    }
    
    // Copy result back to original array
    for (int i = 0; i < n; i++) {
        arr[i] = result[i];
    }
    
    free(result);
    free(temp);
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    queueSort(arr, n);
    
    printf("Sorted queue: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`
}; 