export const hashTableInsertSnippets = {
    javascript: `function insertHashTable(hashTable, key, value) {
    const bucketIndex = hash(key) % hashTable.length;
    const bucket = hashTable[bucketIndex];

    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
            bucket[i].value = value; // Update value if key exists
            return;
        }
    }

    // If key doesn't exist, add new key-value pair
    bucket.push({ key, value });
}

function hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    return total;
}`,
  
    python: `def insert_hash_table(hash_table, key, value):
    bucket_index = hash(key) % len(hash_table)
    bucket = hash_table[bucket_index]

    # Check if key already exists
    for item in bucket:
        if item[0] == key:
            item[1] = value  # Update value if key exists
            return

    # If key doesn't exist, add new key-value pair
    bucket.append((key, value))

def hash(key):
    return sum(ord(char) for char in str(key))`,
  
    java: `public class HashTableInsert {
    public static void insertHashTable(List<List<Entry<String, String>>> hashTable, String key, String value) {
        int bucketIndex = hash(key) % hashTable.size();
        List<Entry<String, String>> bucket = hashTable.get(bucketIndex);

        // Check if key already exists
        for (Entry<String, String> entry : bucket) {
            if (entry.getKey().equals(key)) {
                entry.setValue(value); // Update value if key exists
                return;
            }
        }

        // If key doesn't exist, add new key-value pair
        bucket.add(new AbstractMap.SimpleEntry<>(key, value));
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
    struct Entry* next;
};

struct HashTable {
    struct Entry** buckets;
    int size;
};

void insertHashTable(struct HashTable* hashTable, const char* key, const char* value) {
    int bucketIndex = hash(key) % hashTable->size;
    struct Entry* entry = hashTable->buckets[bucketIndex];

    // Check if key already exists
    while (entry != NULL) {
        if (strcmp(entry->key, key) == 0) {
            free(entry->value);
            entry->value = strdup(value); // Update value if key exists
            return;
        }
        entry = entry->next;
    }

    // If key doesn't exist, add new key-value pair
    struct Entry* newEntry = malloc(sizeof(struct Entry));
    newEntry->key = strdup(key);
    newEntry->value = strdup(value);
    newEntry->next = hashTable->buckets[bucketIndex];
    hashTable->buckets[bucketIndex] = newEntry;
}

unsigned int hash(const char* key) {
    unsigned int total = 0;
    while (*key) {
        total += *key++;
    }
    return total;
}`,
};