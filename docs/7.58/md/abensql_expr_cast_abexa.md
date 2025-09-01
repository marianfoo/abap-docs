  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_cast](javascript:call_link\('abensql_cast.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Cast%20Expression%2C%20ABENSQL_EXPR_CAST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Cast Expression

This example demonstrates [cast expressions](javascript:call_link\('abensql_cast.htm'\)) in ABAP SQL.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_cast DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_cast IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM @( VALUE #(
             id   = 'X'
             num1 = 111
             numlong1 = '123456789'
             dec3 = '123.456'
             dats2 = cl\_demo\_date\_time=>get\_system\_date( ) ) ).
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
    out->write( text ).
  ENDMETHOD.
ENDCLASS.

Description   

Transforms numeric columns and a date field from a DDIC database table to columns of the type CHAR, which makes it possible to process them as character strings in the ABAP class.