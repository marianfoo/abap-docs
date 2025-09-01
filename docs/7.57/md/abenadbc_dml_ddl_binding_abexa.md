---
title: "ADBC - Parameter Binding"
description: |
  The example demonstrates the binding of parameters in ADBC. Source Code REPORT demo_adbc_ddl_dml_binding. 'This program uses platform dependent Native SQL. 'It may not work for every database system. PARAMETERS  p_name TYPE c LENGTH 10 DEFAULT 'mytab'. SELECTION-SCREEN SKIP. PARAMETERS: p_crea
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_dml_ddl_binding_abexa.htm"
abapFile: "abenadbc_dml_ddl_binding_abexa.htm"
keywords: ["select", "insert", "update", "do", "if", "try", "catch", "method", "class", "data", "abenadbc", "dml", "ddl", "binding", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADBC - Parameter Binding, ABENADBC_DML_DDL_BINDING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ADBC - Parameter Binding

The example demonstrates the binding of parameters in ADBC.

Source Code   

REPORT demo\_adbc\_ddl\_dml\_binding.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
PARAMETERS  p\_name TYPE c LENGTH 10 DEFAULT 'mytab'.
SELECTION-SCREEN SKIP.
PARAMETERS: p\_create RADIOBUTTON GROUP grp,
            p\_insert RADIOBUTTON GROUP grp,
            p\_select RADIOBUTTON GROUP grp,
            p\_drop   RADIOBUTTON GROUP grp.
SELECTION-SCREEN SKIP.
PARAMETERS  p\_key TYPE i DEFAULT 1.
SELECTION-SCREEN SKIP.
SELECTION-SCREEN ULINE.
PARAMETERS: p\_params RADIOBUTTON GROUP pgrp,
            p\_struct RADIOBUTTON GROUP pgrp.
CLASS adbc DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: dbname TYPE string,
                wa1    TYPE c LENGTH 10,
                wa2    TYPE c LENGTH 10,
                BEGIN OF wa,
                  col1 TYPE c LENGTH 10,
                  col2 TYPE c LENGTH 10,
                END OF wa,
                err TYPE REF TO cx\_sql\_exception.
    CLASS-METHODS: create RAISING cx\_sql\_exception,
      insert RAISING cx\_sql\_exception,
      select RAISING cx\_sql\_exception,
      drop   RAISING cx\_sql\_exception.
ENDCLASS.
CLASS adbc IMPLEMENTATION.
  METHOD main.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      MESSAGE  'This demo cannot be executed in a production system'
               TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
    TRY.
        dbname = 'ABAP\_DOCU\_DEMO\_' &&
                 cl\_abap\_dyn\_prg=>check\_variable\_name( p\_name ).
      CATCH cx\_abap\_invalid\_name INTO FINAL(exc1).
        MESSAGE exc1 TYPE 'I' DISPLAY LIKE 'E'.
        RETURN.
    ENDTRY.
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
      CATCH cx\_sql\_exception INTO FINAL(exc2).
        MESSAGE exc2 TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD create.
    NEW cl\_sql\_statement( )->execute\_ddl(
      \`CREATE TABLE \` && dbname   &&
      \`( val1 char(10) NOT NULL,\` &&
      \`  val2 char(10) NOT NULL,\` &&
      \`  PRIMARY KEY (val1) )\` ).
  ENDMETHOD.
  METHOD insert.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    DO 100 TIMES.
      IF p\_params = abap\_true.
        sql->set\_param( REF #( wa1 ) ).
        sql->set\_param( REF #( wa2 ) ).
        wa1 = sy-index.
        wa2 = sy-index \*\* 2.
      ELSEIF p\_struct = abap\_true.
        sql->set\_param\_struct( REF #( wa ) ).
        wa-col1 = sy-index.
        wa-col2 = sy-index \*\* 2.
      ENDIF.
      sql->execute\_update(
       \`INSERT INTO \` && dbname && \` VALUES (?,?)\` ).
    ENDDO.
  ENDMETHOD.
  METHOD select.
    DATA: msg TYPE c LENGTH 30,
          key TYPE c LENGTH 10.
    key = p\_key.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( REF #( key ) ).
    FINAL(result) = sql->execute\_query(
      \`SELECT val1, val2 \` &&
      \`FROM \` && dbname && \` \` &&
      \`WHERE val1 = ?\` ).
    IF p\_params = abap\_true.
      result->set\_param( REF #( wa1 ) ).
      result->set\_param( REF #( wa2 ) ).
      FINAL(rc1) = result->next( ).
      IF rc1 > 0.
        msg = |Result { wa1 }: { wa2 }|.
      ELSE.
        msg = 'No entry found'.
      ENDIF.
    ELSEIF p\_struct = abap\_true.
      result->set\_param\_struct( REF #( wa ) ).
      FINAL(rc2) = result->next( ).
      IF rc2 > 0.
        msg = |Result { wa-col1 }: { wa-col2 }|.
      ELSE.
        msg = 'No entry found'.
      ENDIF.
    ENDIF.
    result->close( ).
    MESSAGE msg TYPE 'I'.
  ENDMETHOD.
  METHOD drop.
    NEW cl\_sql\_statement( )->execute\_ddl(
     \`DROP TABLE \` && dbname ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  adbc=>main( ).

Description   

The program is identical to the executable example for [DDL and DML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_dml_ddl_abexa.htm), except that here the arguments of the statements INSERT and SELECT are specified in the form of parameters ? that are bound to ABAP data objects. Instead of binding multiple parameters to ABAP data objects, they can also be bound to individual data objects or to a structure.

The parameter binding removes the need to escape quotation marks in the user input for the key when reading data.