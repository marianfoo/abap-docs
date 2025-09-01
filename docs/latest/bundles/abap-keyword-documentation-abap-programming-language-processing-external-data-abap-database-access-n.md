# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / Native SQL / Embedded Native SQL (EXEC SQL) / EXEC SQL - Examples

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenexec_sql_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_abexas.htm)
- [abennative_sql_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_abexa.htm)
- [abenexec_sql_db_function_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_db_function_abexa.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.929Z

---

### abenexec_sql_abexas.htm

> **📖 Official SAP Documentation**: [abenexec_sql_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20Examples%2C%20ABENEXEC_SQL_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXEC SQL - Examples

-   [EXEC SQL - Use](javascript:call_link\('abennative_sql_abexa.htm'\))
-   [EXEC SQL - Access to Database Functions](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))

Continue
![Example](exa.gif "Example") [EXEC SQL - Use](javascript:call_link\('abennative_sql_abexa.htm'\))
![Example](exa.gif "Example") [EXEC SQL - Access to Database Functions](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))



**📖 Source**: [abenexec_sql_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_abexas.htm)

### abennative_sql_abexa.htm

> **📖 Official SAP Documentation**: [abennative_sql_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20Use%2C%20ABENNATIVE_SQL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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



**📖 Source**: [abennative_sql_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_abexa.htm)

### abenexec_sql_db_function_abexa.htm

> **📖 Official SAP Documentation**: [abenexec_sql_db_function_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_db_function_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenexec_sql_db_function_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexec_sql_db_function_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20Access%20to%20Database%20Functions%2C%20ABENEXEC_SQL_DB_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

EXEC SQL - Access to Database Functions

This example demonstrates how a database function is accessed using static Native SQL.

Source Code   

\* Public class definition
CLASS cl\_demo\_exec\_sql\_db\_function DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_exec\_sql\_db\_function IMPLEMENTATION.
  METHOD main.
    TRY.
        EXEC SQL.
          DROP FUNCTION abap\_docu\_demo\_scalar\_function;
        ENDEXEC.
        EXEC SQL.
          CREATE FUNCTION
            abap\_docu\_demo\_scalar\_function
              ( IN p1 NVARCHAR(5), IN p2 NVARCHAR(5) )
              RETURNS r NVARCHAR(10) AS
              BEGIN
                r = concat(p1,p2);
              END;
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
        out->write( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions
      FROM TABLE @( VALUE #( ( id = 'X' char1 = 'xxxxxaaaaa' )
                             ( id = 'Y' char1 = 'yyyyybbbbb' )
                             ( id = 'Z' char1 = 'zzzzzccccc' ) ) ).
    DATA in1 TYPE c LENGTH 5 VALUE 'yyyyy'.
    DATA in2 TYPE c LENGTH 5 VALUE 'bbbbb'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = in1
      )->add\_field( CHANGING field = in2 )->request( ).
    DATA result TYPE demo\_expressions-id.
    TRY.
        EXEC SQL.
          select id
                 from demo\_expressions
                 where char1 = abap\_docu\_demo\_scalar\_function(:in1,
                                                              :in2)
                 into :result
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

After [EXEC SQL](javascript:call_link\('abapexec.htm'\)), this example creates a scalar [database function](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") with two input parameters and uses this function in the WHERE condition of a SELECT statement.
