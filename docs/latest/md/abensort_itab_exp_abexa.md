  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sorting%20Internal%20Tables%20Dynamically%2C%20ABENSORT_ITAB_EXP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sorting Internal Tables Dynamically

This example demonstrates how internal tables are sorted dynamically using an expression.

Source Code   

\* CCDEF
CLASS cx\_illegal\_direction DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_sort\_itab\_exp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA itab TYPE TABLE OF string WITH EMPTY KEY.
    METHODS sort\_itab
      IMPORTING direction TYPE string
      RETURNING VALUE(r)  LIKE itab
      RAISING   cx\_illegal\_direction.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sort\_itab\_exp IMPLEMENTATION.
  METHOD main.
    itab = VALUE #( ( \`b\` ) ( \`a\` ) ( \`c\` ) ).
    TRY.
        out->write( sort\_itab( 'DOWN' )
          )->write( sort\_itab( 'UP' ) ).
      CATCH cx\_illegal\_direction.
        RETURN.
    ENDTRY.
  ENDMETHOD.
  METHOD sort\_itab.
    SORT itab BY VALUE abap\_sortorder\_tab(
       ( name       = 'TABLE\_LINE'
         descending = SWITCH #( direction
                                WHEN 'UP'   THEN ' '
                                WHEN 'DOWN' THEN 'X'
                                ELSE THROW cx\_illegal\_direction( ) )
         astext     = 'X ' ) ).
    r = itab.
  ENDMETHOD.
ENDCLASS.

Description   

The method sort\_itab sorts an internal table using the statement [SORT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm), where the sort criteria are specified as a table of type abap\_sortorder\_tab constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm). The component descending of this table is set using a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry") with the case distinction [SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_switch.htm), depending on the input parameter direction.