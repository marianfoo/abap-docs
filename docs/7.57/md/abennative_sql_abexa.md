  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXEC SQL - Use, ABENNATIVE_SQL_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

EXEC SQL - Use

This example demonstrates the use of embedded static Native SQL.

Source Code   

REPORT demo\_exec\_sql.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
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

The program is the static equivalent of the executable [ADBC](javascript:call_link\('abenadbc_dml_ddl_abexa.htm'\)) example. The name of the database abap\_docu\_demo\_mytab cannot be modified. Instead of passing the SQL statements dynamically to methods of the class CL\_SQL\_STATEMENT, they are specified statically between EXEC and ENDEXEC. Attempts to insert existing rows can only be detected using sy-subrc and the corresponding SQL exception must be raised explicitly.