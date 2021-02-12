function knapsackUnbounded(items, maxweight, maxvolume) {
    var n = items.length;
    var best_value = 0;
    var count = new Array(n)
    var best = new Array(n)
    function recurseKnapsack(i, value, weight, volume) {
        var j, m1, m2, m;
        if (i == n) {
            if (value > best_value) {
                best_value = value;
                for (j = 0; j < n; j++) {
                    best[j] = count[j];
                }
            }
            return;
        }
        m1 = Math.floor(weight / items[i].weight);
        m2 = Math.floor(volume / items[i].volume);
        m = m1 < m2 ? m1 : m2;
        for (count[i] = m; count[i] >= 0; count[i]--) {
            recurseKnapsack(
                i + 1,
                value + count[i] * items[i].value,
                weight - count[i] * items[i].weight,
                volume - count[i] * items[i].volume
            );
        }
    }
    recurseKnapsack(0, 0, maxweight, maxvolume);
    return best_value;
}
