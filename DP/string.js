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

 
