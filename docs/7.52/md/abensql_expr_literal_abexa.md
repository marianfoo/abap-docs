  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) →  [Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_abexas.htm) → 

SQL Expressions, Constant in SELECT List

This example demonstrates one way to use a constant value in the SELECT list.

Source Code

REPORT demo\_sql\_expr\_literal.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr-carrid.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    SELECT SINGLE @abap\_true
           FROM scarr
           WHERE carrid = @carrier
           INTO @DATA(exists).
      IF exists = abap\_true.
        cl\_demo\_output=>display(
          |Carrier { carrier } exists in SCARR| ).
      ELSE.
        cl\_demo\_output=>display(
          |Carrier { carrier } does not exist in SCARR| ).
      ENDIF.    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Determines whether a row exists for a WHERE condition (regardless of the content of the row). A constant is specified to make it unnecessary to specify a column of the database and transport it. The target object exists is created using an inline declaration.