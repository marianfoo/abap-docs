  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm) → 

string\_exp - Performance Note

If on the right side of an [assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_string_expr.htm) strings in a [string expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm) are appended to a variable str with the type string specified on the left side of the assignment, the variable is used directly in the following cases without producing an interim result.

-   str &&= dobj1 && dobj2 && ... .
-   str = |{ str }...{ dobj1 \[format\_options\] }...{ dobj2 \[format\_options\] }...|.

The appended strings cannot be dependent on str for the compiler:

-   The target field str can occur only once in the string expression, and only at the very beginning.
-   No formatting options can be used on str in a [string template](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates.htm).
-   Only directly specified data objects dobj1, dobj2, ... and no other [expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_glosry.htm "Glossary Entry") or [functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_glosry.htm "Glossary Entry") can be listed, even if they are not dependent on str.

Optimization is therefore deactivated in the following cases:

-   str &&= ... && meth( ... ) && ... .
-   str &&= ... && str && ... .
-   str = |{ str }...{ expr( ... ) }...|.
-   str = |{ str format\_options }...|.
-   str = |{ str }...{ str }...|.

Deactivating optimization for assignments that are not used very often is usually uncritical, it is strongly recommend to only use optimizable forms within loops, because otherwise the runtime would increase quadratically with the number of iterations. Within loops, the results of expressions and functions that can only be determined there should be assigned to helper variables dobj1, dobj2, and so on, and these should be used.

Hint

If optimization is deactivated, the runtime is quadratically dependent on the number of iterations, since the length of the string in the interim result increases in proportion with the number of iterations and has to be copied to the result in every loop pass.

Example

In the following example for generating an HTML file, there is no optimization. The runtime depends quadratically on the number of iterations n.

DATA(n) = 10000.
DATA(html) = \`<html><body><table border=1>\`.
DO n TIMES.
  html = |{ html }<tr><td>{
            CONV string( ipow( base = sy-index exp = 2 ) )
            }</td></tr>|.
ENDDO.
html = html && \`</table></body></html>\`.

The following example shows how the runtime can be optimized by using a helper variable. The bigger n is, the greater the runtime difference to the previous example.

DATA(n) = 10000.
DATA(html) = \`<html><body><table border=1>\`.
DATA square type string.
DO n TIMES.
  square = ipow( base = sy-index exp = 2 ).
  html = |{ html }<tr><td>{ square }</td></tr>|.
ENDDO.
html = html && \`</table></body></html>\`.

Executable Example

[Concatenating Strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_concatenation_abexa.htm)

Continue
![Example](exa.gif "Example") [string\_exp - Concatenating Strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_concatenation_abexa.htm)