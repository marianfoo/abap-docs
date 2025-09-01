  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

Lossless Assignments

A [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") is an assignment between incompatible data types in which the [conversion](javascript:call_link\('abenconversion_glosry.htm'\) "Glossary Entry") is checked to see whether data is lost. Lossless assignments can be performed using the

-   [lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)), in which the argument is converted to a result of the specified type using the

-   [rules for lossless assignments.](javascript:call_link\('abapmove_exact.htm'\))

This makes it possible to use lossless assignments in all operand positions in which [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can be specified.

The real meaning of a lossless assignment is the following method of using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) as the right side of an [assignment](javascript:call_link\('abenequals_operator.htm'\)):

Syntax

destination = [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) #( source ).

In this case, source is converted to the data type of destination and checked accordingly.

Notes

-   If the argument of the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), a [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") is performed instead of a lossless assignment.

-   When assigning structures component by component using [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)), there is an addition EXACT for lossless assignments.

-   Using the addition EXACT in the obsolete statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)) is an obsolete form of lossless assignment.

Continue
[EXACT - Lossless Operator](javascript:call_link\('abenconstructor_expression_exact.htm'\))
[Lossless Assignments - Rules](javascript:call_link\('abapmove_exact.htm'\))