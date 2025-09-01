  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_cast](javascript:call_link\('abensql_cast.htm'\)) → 

sql\_exp - Cast Expression

This example demonstrates [cast expressions](javascript:call_link\('abensql_cast.htm'\)) in ABAP SQL.

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
           INTO @DATA(result).
    DATA(text)  = \`\`.
    DO.
      ASSIGN COMPONENT sy-index
             OF STRUCTURE result
             TO FIELD-SYMBOL(<col>).
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