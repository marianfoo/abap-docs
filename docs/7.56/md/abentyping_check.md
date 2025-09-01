  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping.htm) → 

Checking Typing

When data objects are assigned to typed [field symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [actual parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenactual_parameter_glosry.htm "Glossary Entry") are assigned to typed [formal parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of [procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_check_general.htm)

Special rules apply to:

-   [Return values of functional methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_return_values.htm)
-   [Literals as actual parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_literals.htm)
-   [Functions and expressions as actual parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_arith_expr.htm)

Hint

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_check_general.htm)
[Return Values of Functional Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_return_values.htm)
[Literals as Actual Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_literals.htm)
[Functions and Expressions as Actual Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_arith_expr.htm)