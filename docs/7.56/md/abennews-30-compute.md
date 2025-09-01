  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 3.0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-30.htm) → 

Arithmetic Expressions in Release 3.0

[1\. Exponentiation](#!ABAP_MODIFICATION_1@1@)
[2\. New Arithmetic Functions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Exponentiation
The [COMPUTE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm) statement now supports the operator "\*\*". Previously, the exponential operation "X \*\* Y" was awkward to express. Either repeated multiplication had to be used (if Y was an integer) or the expression "EXP( Y \* LOG( X ) )" for any exponent Y.

Modification 2   

New Arithmetic Functions
Most common arithmetic functions are now supported. The functions ABS, SIGN, CEIL, FLOOR, TRUNC, and FRAC are suitable for all numeric types (I, P, and F). The functions SIN and COS, intended mainly for floating point operands, were already available, as well as EXP, LOG, and SQRT. The following have been added:

-   The trigonometry functions TAN, ACOS, ASIN, and ATAN
-   The hyperbola functions COSH, SINH, and TANH
-   The logarithm function LOG10