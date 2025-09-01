  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc.htm) →  [ADBC Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_abexas.htm) → 

ADBC, DDL, and DML

This example demonstrates the use of the [DDL and DML statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_ddl_dml.htm) with ADBC.

Source Code

REPORT demo\_adbc\_ddl\_dml.
PARAMETERS  p\_name TYPE c LENGTH 10 DEFAULT 'mytab'.
SELECTION-SCREEN SKIP.
PARAMETERS: p\_create RADIOBUTTON GROUP grp,
            p\_insert RADIOBUTTON GROUP grp,
            p\_select RADIOBUTTON GROUP grp,
            p\_drop   RADIOBUTTON GROUP grp.
SELECTION-SCREEN SKIP.
PARAMETERS  p\_key TYPE i DEFAULT 1.
CLASS adbc DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: dbname TYPE string,
                wa1    TYPE c LENGTH 10,
                wa2    TYPE c LENGTH 10.
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
      CATCH cx\_abap\_invalid\_name INTO DATA(exc1).
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
      CATCH cx\_sql\_exception INTO DATA(exc2).
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
    DO 100 TIMES.
      wa1 = sy-index.
      wa2 = ipow( base = sy-index exp = 2 ).
      NEW cl\_sql\_statement( )->execute\_update(
       \`INSERT INTO \` && dbname && \` \` &&
      \`VALUES ('\` && wa1 && \`','\` && wa2 && \`')\` ).
    ENDDO.
  ENDMETHOD.
  METHOD select.
    DATA: msg TYPE c LENGTH 30,
          key TYPE c LENGTH 10.
    p\_key = cl\_abap\_dyn\_prg=>escape\_quotes( CONV string( p\_key ) ).
    key = p\_key.
    DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
      \`SELECT val1, val2 \` &&
      \`FROM \` && dbname && \` \` &&
      \`WHERE val1 = \` && \`'\` && key && \`'\` ).
    result->set\_param( REF #( wa1 ) ).
    result->set\_param( REF #( wa2 ) ).
    DATA(rc) = result->next( ).
    IF rc > 0.
      msg = |Result { wa1 }: { wa2 }|.
    ELSE.
      msg = 'No entry found'.
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

This program makes it possible to create a database table whose name can be chosen by the user. One hundred rows can be inserted in the database table, individual rows can be read, and the database table can be deleted. The Native SQL statements are passed to methods of the class CL\_SQL\_STATEMENT using [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry").

Any exceptions are handled. When rows are exported, quotation marks are escaped in the user input. This prevents [SQL injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm "Glossary Entry").