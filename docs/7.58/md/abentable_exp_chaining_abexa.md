  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm) →  [table\_exp - Chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_chaining.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Chainings%2C%20ABENTABLE_EXP_CHAINING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Chainings

This example demonstrates how table expressions are chained.

Source Code   

\* Public class definition
CLASS cl\_demo\_tab\_exp\_chaining DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA: langu TYPE sy-langu,
          index TYPE if\_abap\_docu=>abap\_index\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_tab\_exp\_chaining IMPLEMENTATION.
  METHOD main.
    "Read a column of a nested table with table statements
    out->begin\_section( \`Table Statements\` ).
    READ TABLE index WITH KEY key1 = 'ASSIGNING'
                     ASSIGNING FIELD-SYMBOL(<wa1>).
    READ TABLE <wa1>-docu\_objects WITH KEY key2 = 'READ TABLE itab'
                                  ASSIGNING FIELD-SYMBOL(<wa2>).
    IF sy-subrc = 0.
      FINAL(title1) =
        cl\_abap\_docu=>get\_title(
          langu   = langu
          object  = <wa2>-docu\_name
          version = if\_abap\_docu=>union ).
      out->write\_data( title1 ).
    ELSE.
      out->write\_text( \`Nothing found\` ).
    ENDIF.
    "Read a column of a nested table with chained table expressions
    out->next\_section( \`Table Expressions\` ).
    TRY.
        FINAL(title2) =
          cl\_abap\_docu=>get\_title(
            langu   = langu
            object  = index\[ key1 = 'ASSIGNING'
                           \]-docu\_objects\[ key2 = 'READ TABLE itab'
                           \]-docu\_name
            version = if\_abap\_docu=>union  ).
        out->write\_data( title2 ).
      CATCH cx\_sy\_itab\_line\_not\_found ##no\_handler.
        out->write\_text( \`Nothing found\` ).
    ENDTRY.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    langu = sy-langu.
    IF langu <> 'D'.
      langu = 'E'.
    ENDIF.
    FINAL(index) = cl\_abap\_docu=>get\_abap\_index(
                    langu   = langu
                    version = if\_abap\_docu=>unicode ).
    me->index = index->\*.
  ENDMETHOD.
ENDCLASS.

Description   

The example shows how a nested internal table is read using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) and using a chained [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm).

-   Reads using statements require the statement READ TABLE to be used twice and two explicitly declared field symbols. The first field symbol wa1 is used in the second READ statement and the second field symbol wa2 is used to pass the result to a method.
-   When reads are performed using table expressions, they can be chained and passed to the method directly. No explicitly declared field symbols are required.

The result of both reads is the same.