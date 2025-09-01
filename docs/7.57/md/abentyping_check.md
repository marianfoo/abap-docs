  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Checking Typing, ABENTYPING_CHECK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

Checking Typing

When data objects are assigned to typed [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") are assigned to typed [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](javascript:call_link\('abentyping_check_general.htm'\))

Special rules apply to:

-   [Return values of functional methods](javascript:call_link\('abentyping_return_values.htm'\))
-   [Literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\))
-   [Functions and expressions as actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\))

Hint

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))
[Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))
[Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))
[Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))