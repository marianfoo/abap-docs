  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Arithmetic%20Expressions%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-COMPUTE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Arithmetic Expressions in ABAP Release 3.0

[1\. Exponentiation](#!ABAP_MODIFICATION_1@1@)
[2\. New Arithmetic Functions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Exponentiation

The [COMPUTE](javascript:call_link\('abapcompute_arith.htm'\)) statement now supports the operator \*\*. Previously, the exponential operation X \*\* Y was awkward to express. Either repeated multiplication had to be used (if Y was an integer) or the expression EXP( Y \* LOG( X ) ) for any exponent Y.

Modification 2   

New Arithmetic Functions

Most common arithmetic functions are now supported. The functions ABS, SIGN, CEIL, FLOOR, TRUNC, and FRAC are suitable for all numeric types (I, P, and F). The functions SIN and COS, intended mainly for floating point operands, were already available, as well as EXP, LOG, and SQRT. The following have been added:

-   The trigonometry functions TAN, ACOS, ASIN, and ATAN
-   The hyperbola functions COSH, SINH, and TANH
-   The logarithm function LOG10