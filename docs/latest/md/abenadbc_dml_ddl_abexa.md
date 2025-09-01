  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20DDL%20and%20DML%2C%20ABENADBC_DML_DDL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - DDL and DML

This example demonstrates the use of the [DDL and DML statements](javascript:call_link\('abenadbc_ddl_dml.htm'\)) with ADBC.

Source Code   

REPORT demo\_adbc\_ddl\_dml.
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
    FINAL(result) = NEW cl\_sql\_statement( )->execute\_query(
      \`SELECT val1, val2 \` &&
      \`FROM \` && dbname && \` \` &&
      \`WHERE val1 = \` && \`'\` && key && \`'\` ).
    result->set\_param( REF #( wa1 ) ).
    result->set\_param( REF #( wa2 ) ).
    FINAL(rc) = result->next( ).
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

This program makes it possible to create a database table whose name can be chosen by the user. After this, one hundred rows can be inserted into the database table, individual rows can be read, and the database table can be deleted again. The Native SQL statements are passed to methods of the class CL\_SQL\_STATEMENT using [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry").

Any exceptions are handled. When reading rows, quotation marks are escaped in the user input to prevent an [SQL injection](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry").