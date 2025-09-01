  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_cast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - Cast Expression, ABENSQL_EXPR_CAST_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

sql\_exp - Cast Expression

This example demonstrates [cast expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) in ABAP SQL.

Source Code   

REPORT demo\_sql\_expr\_cast.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM @( VALUE #(
             id   = 'X'
             num1 = 111
             numlong1 = '123456789'
             dec3 = '123.456'
             dats2 = sy-datum ) ).
    SELECT SINGLE
           FROM demo\_expressions
           FIELDS CAST( num1     AS CHAR( 20 ) ) AS col1,
                  CAST( numlong1 AS CHAR( 20 ) ) AS col2,
                  CAST( dec3     AS CHAR( 20 ) ) AS col3,
                  CAST( dats2    AS CHAR( 20 ) ) AS col4
           WHERE id = 'X'
           INTO @FINAL(result).
    DATA(text)  = \`\`.
    DO.
      ASSIGN result-(sy-index) TO FIELD-SYMBOL(<col>).
      IF sy-subrc = 0.
        text = text && <col> && \`, \`.
      ELSE.
        EXIT.
      ENDIF.
    ENDDO.
    CONDENSE text.
    SHIFT text RIGHT DELETING TRAILING \`,\`.
    cl\_demo\_output=>display( text ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Transforms numeric columns and a date field from a DDIC database table to columns of the type CHAR, which makes it possible to process them as character strings in the ABAP program.