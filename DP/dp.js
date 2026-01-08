var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    
    const NEG_INF = -1e9;

    
    const dp = Array.from({ length: n + 1 }, () =>
        Array(m + 1).fill(NEG_INF)
    );

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const product = nums1[i - 1] * nums2[j - 1];

            dp[i][j] = Math.max(
                product + Math.max(dp[i - 1][j - 1], 0), // take pair
                dp[i - 1][j],                            // skip nums1
                dp[i][j - 1]                             // skip nums2
            );
        }
    }

    return dp[n][m];
};
