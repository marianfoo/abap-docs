  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate.htm) →  [rel\_exp - Predicative Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_calls.htm) → 

Predicative Method Calls

This example demonstrates [predicative method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry").

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

The functional method IS\_PRODUCTION\_SYSTEM of the class CL\_ABAP\_DEMO\_SERVICES is called [predicatively](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_calls.htm) in a [control statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_statement_glosry.htm "Glossary Entry") IF to verify that the current system is not a production system. The method called is a [predicate method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_method_glosry.htm "Glossary Entry").

The functional method GET\_SPFLI of the class CL\_DEMO\_SPFLI is then called [predicatively](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_calls.htm) once in a [control statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_statement_glosry.htm "Glossary Entry") IF and once in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_glosry.htm "Glossary Entry") COND. In this case, it is not a [predicate method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_method_glosry.htm "Glossary Entry"). The relational expressions are true or false, depending on whether the internal table returned is empty or filled.