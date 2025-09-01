  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Bulk%20Access%2C%20ABENADBC_DML_DDL_BULK_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Bulk Access

This example demonstrates bulk access in ADBC.

Source Code   

REPORT demo\_adbc\_ddl\_dml\_bulk\_access.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
PARAMETERS  p\_name TYPE c LENGTH 10 DEFAULT 'mytab'.
SELECTION-SCREEN SKIP.
PARAMETERS: p\_create RADIOBUTTON GROUP grp,
            p\_insert RADIOBUTTON GROUP grp,
            p\_delete RADIOBUTTON GROUP grp,
            p\_select RADIOBUTTON GROUP grp,
            p\_drop   RADIOBUTTON GROUP grp.
SELECTION-SCREEN SKIP.
PARAMETERS  p\_key TYPE i DEFAULT 10.
CLASS adbc DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: dbname TYPE string,
                BEGIN OF wa,
                  col1 TYPE c LENGTH 10,
                  col2 TYPE c LENGTH 10,
                END OF wa,
                itab LIKE TABLE OF wa.
    CLASS-METHODS: create RAISING cx\_sql\_exception,
                   insert RETURNING VALUE(rc) TYPE i
                          RAISING cx\_sql\_exception,
                   delete RETURNING VALUE(rc) TYPE i
                          RAISING cx\_sql\_exception,
                   select RETURNING VALUE(rc) TYPE i
                          RAISING cx\_sql\_exception,
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
          FINAL(rci) = insert( ).
          MESSAGE rci && ' lines inserted' TYPE 'S'.
        ELSEIF p\_delete = 'X'.
          FINAL(rcd) = delete( ).
          MESSAGE rcd && ' lines deleted' TYPE 'S'.
        ELSEIF p\_select = 'X'.
          FINAL(rcs) = select( ).
          MESSAGE rcs && ' lines selected' TYPE 'S'.
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
    sql->set\_param\_table( REF #( itab ) ).
    DO 50 TIMES.
      wa-col1 = sy-index.
      wa-col2 = ipow( base = sy-index exp = 2 ).
      APPEND wa TO itab.
    ENDDO.
    rc = sql->execute\_update(
       \`INSERT INTO \` && dbname && \` VALUES (?,?)\` ).
  ENDMETHOD.
  METHOD delete.
    DATA itab LIKE TABLE OF wa-col1.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param\_table( REF #( itab ) ).
    CLEAR itab.
    DO 10 TIMES.
      APPEND sy-index + p\_key - 1 TO itab.
    ENDDO.
    rc = sql->execute\_update(
       \`DELETE FROM \` && dbname && \` WHERE val1 = ?\`  ).
  ENDMETHOD.
  METHOD select.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    FINAL(result) = sql->execute\_query(
      \`SELECT val1, val2 \` &&
      \`FROM \` && dbname  ).
    result->set\_param\_table( itab\_ref = REF #( itab ) ).
    rc = result->next\_package( ).
    IF rc > 0.
      cl\_abap\_demo\_services=>list\_table( itab ).
    ENDIF.
    result->close( ).
  ENDMETHOD.
  METHOD drop.
    NEW cl\_sql\_statement( )->execute\_ddl(
     \`DROP TABLE \` && dbname ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  adbc=>main( ).

Description   

This program makes it possible to create and delete a database table whose name can be chosen by the user. Rows can be inserted into the database table, deleted again, all rows can be read, and the database table can be deleted again.

In all methods for DML statements, parameters are bound using an internal table.

-   insert writes all rows of an internal table to the database table whose key value does not yet exist there.
-   delete deletes all rows of a database table whose key value occurs in an internal table.
-   select reads the result set of a query across all rows of the database table to an internal table.