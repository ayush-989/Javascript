var minimumDeleteSum = function(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    // dp[i][j] = minimum ASCII delete sum to make s1[0..i-1] and s2[0..j-1] equal
    const dp = Array.from({ length: n + 1 }, () =>
        Array(m + 1).fill(0)
    );

    // Base case: delete all characters from s1
    for (let i = 1; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }

    // Base case: delete all characters from s2
    for (let j = 1; j <= m; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }

    // Fill DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt(i - 1),
                    dp[i][j - 1] + s2.charCodeAt(j - 1)
                );
            }
        }
    }

    return dp[n][m];
};
