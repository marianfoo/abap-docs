  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lossless%20Assignments%2C%20ABENLOSSLESS_MOVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lossless Assignments

In a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"), the assigned content is checked to see whether the assignment is lossless before [converting](javascript:call_link\('abenconversion_glosry.htm'\) "Glossary Entry") it to an incompatible target object. Lossless assignments can be performed using the

-   [lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)), in which the argument is converted to a result of the specified type using the
-   [rules for lossless assignments.](javascript:call_link\('abapmove_exact.htm'\))

This makes it possible to use lossless assignments in all operand positions in which [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can be specified.

A lossless assignment in the true sense of the word is the following use of a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) as the right side of an [assignment](javascript:call_link\('abenequals_operator.htm'\)):

Syntax

destination = [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) #( source ).

In this case, source is converted to the data type of destination and checked accordingly.

Hints

-   If the argument of the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), a [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") is performed instead of a lossless assignment.
-   When assigning structures component by component using [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)), there is an addition EXACT for lossless assignments.
-   Using the addition EXACT in the obsolete statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)) is an obsolete form of lossless assignment.

Continue
[EXACT, Lossless Operator](javascript:call_link\('abenconstructor_expression_exact.htm'\))
[Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\))