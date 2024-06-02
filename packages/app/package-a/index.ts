import TestClass from "@ehwillows/lib.package-b/TestClass.js";
import { packageBTest } from "@ehwillows/lib.package-b/index.js";

(async () => {
    packageBTest();

    const test = new TestClass({
        truth: false,
        type: 'Good',
        
    });

    console.log(`${test.type} - ${test.truth}`);
})();