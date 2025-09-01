---
title: "Syntax"
description: |
  destination = meth( )(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_functional.htm)  func( )(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm)  constr_expr(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_return_values.htm"
abapFile: "abenequals_return_values.htm"
keywords: ["do", "if", "try", "method", "data", "types", "internal-table", "abenequals", "return", "values"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [\=, Assignment Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%3D%2C%20Assign%20Return%20Values%20and%20Results%2C%20ABENEQUALS_RETURN_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

\=, Assign Return Values and Results

Syntax

destination = [meth( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_functional.htm) *|* [func( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm) *|* [constr\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) *|* [table\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm).

Effect

If one of the following calls or expressions is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm), their return value or result is determined and assigned to the left side, destination. If necessary, type-dependent conversions are performed in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm). The following items are possible on the right side:

-   A [functional method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") [meth( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_functional.htm) including [method chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_chain.htm). The return value of a function method or an attribute addressed using a method chaining always has a complete type that must match the type of the left side.
-   A [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") [func( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm). The type of the return value, which can depend on the data type of the argument in some numeric functions, must match the type of the left side.
-   A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") [constr\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm). The type of the result is determined by the type specified for the constructor expression and must match the type of the left side.
-   A [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm). The type of the result must match the type on the left side.

The following can be specified for destination:

-   A [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvariable_glosry.htm "Glossary Entry") that is compatible with the return value or result, or in whose type the return value or result can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm). The data type of the declared variable var is the statically known type of the return value or result. If an [offset/length specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length.htm) is applied to the result of a chaining where a constructor expression or a table expression is involved, the data type of the declared variable is the data type of the result in its full length and not in the length of the substring.

Hint

If an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified as an argument for one of the overloaded [numeric functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_functions.htm), the function itself works like an arithmetic expression and its assignment is one of the [assignments of arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_arith_expr.htm), which can cause a different order of conversions.

Example

Assignment of the return value of a method to an internal table declared inline.

METHOD m1.
  DATA(itab) = m2( ).
  ...
ENDMETHOD.

Example

The example shows different results when assigning offset/length specifications to inline declarations. The first offset/length specification is directly applied to a data object and the resulting data object has type n of length 2. The second offset/length specification is applied to the result of a constructor expression and the resulting data object has type n of length 8. The last output shows that the data type of the substring is used at runtime when passed to a method.

TYPES text TYPE n LENGTH 8.
DATA  text TYPE text VALUE '12345678'.
FINAL(test1) = text+2(2).
FINAL(test2) = CAST text( REF text( text ) )->\*+2(2).
cl\_demo\_output=>new(
  )->write( test1
  )->write( test2
  )->write( CAST text( REF text( text ) )->\*+2(2)
  )->display( ).