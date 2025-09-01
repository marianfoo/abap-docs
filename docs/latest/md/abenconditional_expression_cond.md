  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COND%2C%20Conditional%20Operator%2C%20ABENCONDITIONAL_EXPRESSION_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COND, Conditional Operator

Syntax

... COND type( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
               WHEN [log\_exp1](javascript:call_link\('abenlogexp.htm'\)) THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result1](javascript:call_link\('abenconditional_expression_result.htm'\))
             *\[* WHEN [log\_exp2](javascript:call_link\('abenlogexp.htm'\)) THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result2](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]*
             ...
             *\[* ELSE *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [resultn](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]* ) ...

Effect

A [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") with the conditional operator COND has a result [result](javascript:call_link\('abenconditional_expression_result.htm'\)) that is dependent on logical expressions. Either a value with the data type specified by type is created or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, an operand with a type known statically must be specified after the first THEN, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) statement can be specified after THEN in this case.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abencond_constructor_inference.htm'\)).
    -   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") must be possible.

WHEN must be specified at least once with any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) in the parentheses. This can be followed by any number of WHEN statements with further logical expressions. An ELSE can be specified at the end. The expression evaluates the logical expressions one after the other and selects the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) specified after THEN of the first logical expression whose result is true. The selected [result](javascript:call_link\('abenconditional_expression_result.htm'\)) determines the result of the conditional expression. If none of the logical expressions are true, the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

To define local helper fields, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified before the first WHEN, after every THEN, and after ELSE.

Hints

-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types c, n, and x.

Example

Transformation of a time to 12 hour format using a conditional expression in an operand position. The type of the result is used by the operand after the first THEN specification and is therefore string.

CLASS cx\_cant\_be DEFINITION INHERITING FROM cx\_no\_check.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
    cl\_demo\_output=>display(
      COND #( LET t = '120000' IN
              WHEN time < t THEN
                |{ time TIME = ISO } AM|
              WHEN time > t AND time < '240000' THEN
                |{ CONV t( time - 12 \* 3600 ) TIME = ISO } PM|
              WHEN time = t THEN
                \`High Noon\`
              ELSE
                THROW cx\_cant\_be( ) ) ).
  ENDMETHOD.
ENDCLASS.