var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    
    const NEG_INF = -1e9;

    // Create dp array filled with NEG_INF
    const dp = Array.from({ length: n + 1 }, () =>
        Array(m + 1).fill(NEG_INF)
    );

};
