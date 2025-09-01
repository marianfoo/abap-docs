  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\= - Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) → 

\= - Assign Return Values and Results

Syntax

destination = [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) *|* [func( )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) *|* [constr\_expr](javascript:call_link\('abenconstructor_expressions.htm'\)) *|* [table\_expr](javascript:call_link\('abentable_expressions.htm'\)) .

Effect

If one of the following calls or expressions is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), its return value or result is determined and assigned to the left side, destination. If necessary, type-dependent conversions are performed in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). The following items are possible on the right side:

-   A [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) including [method chainings](javascript:call_link\('abapcall_method_static_chain.htm'\)). The return value of a function method or an attribute addressed using a method chaining always has a full type that must match the type of the left side.

-   A [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") [func( )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)). The type of the return value (which in some numeric functions can be dependent on the data type of the argument) must match the type of the left side.

-   A [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [constr\_expr](javascript:call_link\('abenconstructor_expressions.htm'\)). The type of the result is determined by the type specified for the constructor expression and must match the type of the left side.

-   A [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_expr](javascript:call_link\('abentable_expressions.htm'\)). The type of the result must match the type on the left side.

The following can be specified for destination:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") that is compatible with the return value or to whose type the return value or result can be converted.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is the statically known type of the return value or result.
    

Note

If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified as an argument for one of the overloaded [numeric functions](javascript:call_link\('abenmathematical_functions.htm'\)), the function itself works like an arithmetic expression and its assignment is one of the [assignments of arithmetic expressions](javascript:call_link\('abenequals_arith_expr.htm'\)). This can cause the conversions to be performed in a different order.

Example

Assigns the return value of a method to an internal table declared inline.

METHOD m1.
  DATA(itab) = m2( ).
  ...
ENDMETHOD.