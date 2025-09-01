  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicative Method Call](javascript:call_link\('abenpredicative_method_calls.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicative%20Method%20Calls%2C%20ABENPREDICATIVE_METHOD_CALL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

rel\_exp - Predicative Method Calls

This example demonstrates [predicative method calls](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_prdctv\_method\_call DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_prdctv\_method\_call IMPLEMENTATION.
  METHOD main.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      out->write(
         'This demo cannot be executed in a production system' ).
      RETURN.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    out->next\_section( 'IF' ).
    IF cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ).
      out->write( 'Filled' ).
    ELSE.
      out->write( 'Not filled' ).
    ENDIF.
    out->next\_section( 'COND'
      )->write( COND string(
                  WHEN cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) )
                    THEN \`Filled\`
                  ELSE \`Not filled\` ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The functional method IS\_PRODUCTION\_SYSTEM of the class CL\_ABAP\_DEMO\_SERVICES is called [predicatively](javascript:call_link\('abenpredicative_method_calls.htm'\)) in a [control statement](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") IF to ensure that the current system is not a production system. The method called is a [predicate method](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry").

The functional method GET\_SPFLI of the class CL\_DEMO\_SPFLI is then called [predicatively](javascript:call_link\('abenpredicative_method_calls.htm'\)) once in a [control statement](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") IF and once in a [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") COND. In this case, it is not a [predicate method](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry"). The relational expressions are true or false, depending on whether the internal table returned is empty or filled.