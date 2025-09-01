  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Arithmetic Expressions in Release 3.0

[1\. New operation: Exponentiation](#!ABAP_MODIFICATION_1@1@)
[2\. New arithmetic functions](#!ABAP_MODIFICATION_2@2@)

Modification 1

Exponentiation
The [COMPUTE](javascript:call_link\('abapcompute.htm'\)) statement now supports the operator "\*\*". Previously, the exponential operation "X \*\* Y" was awkward to express. You either had to use repeated multiplication (if Y was an integer) or the expression "EXP( Y \* LOG( X ) )" for any exponent Y.

Modification 2

New arithmetic functions
Most common arithmetic functions are now supported. The functions ABS, SIGN, CEIL, FLOOR, TRUNC, and FRAC are suitable for all numeric types (I, P, and F). The functions SIN and COS, intended mainly for floating point operands, were already available, as well as EXP, LOG and SQRT. The following have now been added:

-   the trigonometry functions TAN, ACOS, ASIN, and ATAN
    
-   the hyperbola functions COSH, SINH, and TANH
    
-   the logarithm function LOG10