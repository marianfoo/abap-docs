  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicative Method Call](javascript:call_link\('abenpredicative_method_calls.htm'\)) → 

Predicative Method Calls

This example demonstrates [predicative method calls](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_predicative\_method\_call.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      cl\_demo\_output=>display(
         'This demo cannot be executed in a production system' ).
      LEAVE PROGRAM.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'IF' ).
    IF cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ).
      out->write( 'Filled' ).
    ELSE.
      out->write( 'Not filled' ).
    ENDIF.
    out->next\_section( 'COND'
      )->write( COND string(
                  WHEN cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) )
                    THEN \`Filled\`
                  ELSE \`Not filled\` )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The functional method IS\_PRODUCTION\_SYSTEM of the class CL\_ABAP\_DEMO\_SERVICES is called [predicatively](javascript:call_link\('abenpredicative_method_calls.htm'\)) in a [control statement](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") IF to verify that the current system is not a production system. The method called is a [predicate method](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry").

The functional method GET\_SPFLI of the class CL\_DEMO\_SPFLI is then called [predicatively](javascript:call_link\('abenpredicative_method_calls.htm'\)) once in a [control statement](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") IF and once in a [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") COND. In this case, it is not a [predicate method](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry"). The relational expressions are true or false, depending on whether the internal table returned is empty or filled.