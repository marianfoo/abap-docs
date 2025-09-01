  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) →  [rel\_exp - Predicative Method Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_calls.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicative%20Method%20Calls%2C%20ABENPREDICATIVE_METHOD_CALL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

rel\_exp - Predicative Method Calls

This example demonstrates [predicative method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry").

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

The functional method IS\_PRODUCTION\_SYSTEM of the class CL\_ABAP\_DEMO\_SERVICES is called [predicatively](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_calls.htm) in a [control statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_statement_glosry.htm "Glossary Entry") IF to ensure that the current system is not a production system. The method called is a [predicate method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_method_glosry.htm "Glossary Entry").

The functional method GET\_SPFLI of the class CL\_DEMO\_SPFLI is then called [predicatively](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_calls.htm) once in a [control statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_statement_glosry.htm "Glossary Entry") IF and once in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry") COND. In this case, it is not a [predicate method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_method_glosry.htm "Glossary Entry"). The relational expressions are true or false, depending on whether the internal table returned is empty or filled.