---
title: "EXEC SQL, Use"
description: |
  This example demonstrates the use of embedded static Native SQL. Source Code REPORT demo_exec_sql. PARAMETERS: p_create RADIOBUTTON GROUP grp, p_insert RADIOBUTTON GROUP grp, p_select RADIOBUTTON GROUP grp, p_drop   RADIOBUTTON GROUP grp. SELECTION-SCREEN SKIP. PARAMETERS  p_key TYPE i DEFAUL
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_abexa.htm"
abapFile: "abennative_sql_abexa.htm"
keywords: ["select", "insert", "do", "if", "try", "catch", "method", "class", "data", "abennative", "sql", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm) →  [EXEC SQL - Embedded Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennativesql.htm) →  [EXEC SQL - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexec_sql_abexas.htm) → 

EXEC SQL, Use

This example demonstrates the use of embedded static Native SQL.

Source Code

REPORT demo\_exec\_sql.
PARAMETERS: p\_create RADIOBUTTON GROUP grp,
            p\_insert RADIOBUTTON GROUP grp,
            p\_select RADIOBUTTON GROUP grp,
            p\_drop   RADIOBUTTON GROUP grp.
SELECTION-SCREEN SKIP.
PARAMETERS  p\_key TYPE i DEFAULT 1.
CLASS native\_sql DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: wa1 TYPE c LENGTH 10,
                wa2 TYPE c LENGTH 10,
                err TYPE REF TO cx\_sy\_native\_sql\_error.
    CLASS-METHODS: create RAISING cx\_sy\_native\_sql\_error,
                   insert RAISING cx\_sy\_native\_sql\_error,
                   select RAISING cx\_sy\_native\_sql\_error,
                   drop   RAISING cx\_sy\_native\_sql\_error.
ENDCLASS.
CLASS native\_sql IMPLEMENTATION.
  METHOD main.
    TRY.
        IF p\_create = 'X'.
          create( ).
          MESSAGE 'Create was successful' TYPE 'S'.
        ELSEIF p\_insert = 'X'.
          insert( ).
          MESSAGE 'Insert was successful' TYPE 'S'.
        ELSEIF p\_select = 'X'.
          select( ).
          MESSAGE 'Select was successful' TYPE 'S'.
        ELSEIF p\_drop   = 'X'.
          drop( ).
          MESSAGE 'Drop was successful' TYPE 'S'.
        ENDIF.
      CATCH cx\_sy\_native\_sql\_error INTO err.
        MESSAGE err TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD create.
    EXEC SQL.
      CREATE TABLE abap\_docu\_demo\_mytab (
               val1 char(10) NOT NULL,
               val2 char(10) NOT NULL,
               PRIMARY KEY (val1)      )
    ENDEXEC.
  ENDMETHOD.
  METHOD insert.
    DO 100 TIMES.
      wa1 = sy-index.
      wa2 = sy-index \*\* 2.
      EXEC SQL.
        INSERT INTO abap\_docu\_demo\_mytab VALUES (:wa1, :wa2)
      ENDEXEC.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx\_sy\_native\_sql\_error
          EXPORTING
            textid = cx\_sy\_native\_sql\_error=>key\_already\_exists.
      ENDIF.
    ENDDO.
  ENDMETHOD.
  METHOD select.
    DATA: msg TYPE c LENGTH 30,
          key TYPE c LENGTH 10.
    p\_key = cl\_abap\_dyn\_prg=>escape\_quotes( CONV string( p\_key ) ).
    key = p\_key.
    EXEC SQL.
      SELECT val1, val2
             INTO :wa1, :wa2
             FROM abap\_docu\_demo\_mytab
             WHERE val1 = :key
    ENDEXEC.
    IF sy-subrc = 0.
      WRITE: 'Result:' TO msg,
             wa1 TO msg+10,
             wa2 TO msg+20.
    ELSE.
      msg = 'No entry found'.
    ENDIF.
    MESSAGE msg TYPE 'I'.
  ENDMETHOD.
  METHOD drop.
    EXEC SQL.
      DROP TABLE abap\_docu\_demo\_mytab
    ENDEXEC.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  native\_sql=>main( ).

Description

The program is the static equivalent of the executable [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_abexa.htm) example. The name of the database abap\_docu\_demo\_mytab cannot be modified. Instead of passing the SQL statements dynamically to methods of the class CL\_SQL\_STATEMENT, they are specified statically between EXEC and ENDEXEC. Attempts to insert rows that already exist are caught using sy-subrc and the corresponding SQL exception must be raised explicitly.