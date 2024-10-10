export const interpolationSearchSnippets = {
    javascript: `function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1;
        }
        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));
        if (arr[pos] === target) {
            return pos;
        }
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return -1;
}`,
  
    python: `def interpolation_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high and arr[low] <= target <= arr[high]:
        if low == high:
            return low if arr[low] == target else -1
        pos = low + int(((float(high - low) / (arr[high] - arr[low])) * (target - arr[low])))
        if arr[pos] == target:
            return pos
        if arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    return -1`,
  
    java: `public class InterpolationSearch {
    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            if (low == high) {
                if (arr[low] == target) return low;
                return -1;
            }
            int pos = low + (((high - low) / (arr[high] - arr[low])) * (target - arr[low]));
            if (arr[pos] == target) {
                return pos;
            }
            if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }
        return -1;
    }
}`,
  
    c: `#include <stdio.h>

int interpolationSearch(int arr[], int n, int target) {
    int low = 0;
    int high = n - 1;
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) return low;
            return -1;
        }
        int pos = low + (((double)(high - low) / (arr[high] - arr[low])) * (target - arr[low]));
        if (arr[pos] == target) {
            return pos;
        }
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return -1;
}`,
};