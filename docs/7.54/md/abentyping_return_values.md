  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Return Values of Functional Methods

The return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") is always fully typed and is always passed as a value. An actual parameter can be appended to the return value as follows:

-   By specifying the method in an [operand position](javascript:call_link\('abenoperands_expressions.htm'\))

If a function method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the full typing of the return value (a type-friendly actual parameter is implicitly associated with it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value does not match the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

If the return value of a functional method as an actual parameter is bound to a generically typed formal parameter of type p, this uses the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.

-   In a [method call](javascript:call_link\('abapcall_method_static.htm'\)) with the addition [RECEIVING](javascript:call_link\('abapcall_method_parameters.htm'\))

If an actual parameter is specified explicitly after RECEIVING, this parameter does not have to comply with the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, the exception cannot always be handled and a runtime error can occur instead (depending on the operand positions).

Notes

-   If reference variables are returned using RECEIVING, an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is possible but a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") is not.

-   The special rule that a generic formal parameter of type p gets a length of 16 when a functional method is passed does not apply to the other generic types any, data, simple, or numeric.