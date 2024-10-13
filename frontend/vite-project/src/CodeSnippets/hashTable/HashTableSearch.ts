export const hashTableSearchSnippets = {
    javascript: `function searchHashTable(hashTable, key) {
    const bucketIndex = hash(key) % hashTable.length;
    const bucket = hashTable[bucketIndex];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
            return bucket[i].value;
        }
    }

    return null; // Key not found
}

function hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    return total;
}`,
  
    python: `def search_hash_table(hash_table, key):
    bucket_index = hash(key) % len(hash_table)
    bucket = hash_table[bucket_index]

    for item in bucket:
        if item[0] == key:
            return item[1]

    return None  # Key not found

def hash(key):
    return sum(ord(char) for char in str(key))`,
  
    java: `public class HashTableSearch {
    public static String searchHashTable(List<List<Entry<String, String>>> hashTable, String key) {
        int bucketIndex = hash(key) % hashTable.size();
        List<Entry<String, String>> bucket = hashTable.get(bucketIndex);

        for (Entry<String, String> entry : bucket) {
            if (entry.getKey().equals(key)) {
                return entry.getValue();
            }
        }

        return null; // Key not found
    }

    private static int hash(String key) {
        int total = 0;
        for (char c : key.toCharArray()) {
            total += c;
        }
        return total;
    }
}`,
  
    c: `#include <string.h>
#include <stdlib.h>

struct Entry {
    char* key;
    char* value;
};

struct HashTable {
    struct Entry** buckets;
    int size;
};

char* searchHashTable(struct HashTable* hashTable, const char* key) {
    int bucketIndex = hash(key) % hashTable->size;
    struct Entry* entry = hashTable->buckets[bucketIndex];

    while (entry != NULL) {
        if (strcmp(entry->key, key) == 0) {
            return entry->value;
        }
        entry = entry->next;
    }

    return NULL; // Key not found
}

unsigned int hash(const char* key) {
    unsigned int total = 0;
    while (*key) {
        total += *key++;
    }
    return total;
}`,
};