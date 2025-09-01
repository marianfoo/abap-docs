# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP Database Access / Native SQL / ADBC - ABAP Database Connectivity / ADBC Examples

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenadbc_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_abexas.htm)
- [abenadbc_dml_ddl_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_abexa.htm)
- [abenadbc_dml_ddl_binding_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_binding_abexa.htm)
- [abenadbc_dml_ddl_bulk_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_bulk_abexa.htm)
- [abenadbc_query_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query_abexa.htm)
- [abenadbc_procedure_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_procedure_abexa.htm)
- [abenadbc_sql_prepared_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_sql_prepared_abexa.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.959Z

---

### abenadbc_abexas.htm

> **📖 Official SAP Documentation**: [abenadbc_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) → 

ADBC Examples

Continue
![Example](exa.gif "Example") [ADBC, DDL, and DML](javascript:call_link\('abenadbc_dml_ddl_abexa.htm'\))
![Example](exa.gif "Example") [ADBC, Parameter Binding](javascript:call_link\('abenadbc_dml_ddl_binding_abexa.htm'\))
![Example](exa.gif "Example") [ADBC, Bulk Access](javascript:call_link\('abenadbc_dml_ddl_bulk_abexa.htm'\))
![Example](exa.gif "Example") [ADBC, Query](javascript:call_link\('abenadbc_query_abexa.htm'\))
![Example](exa.gif "Example") [ADBC, Stored Procedure](javascript:call_link\('abenadbc_procedure_abexa.htm'\))
![Example](exa.gif "Example") [ADBC, Prepared Statement](javascript:call_link\('abenadbc_sql_prepared_abexa.htm'\))



**📖 Source**: [abenadbc_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_abexas.htm)

### abenadbc_dml_ddl_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_dml_ddl_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, DDL, and DML

This example demonstrates the use of the [DDL and DML statements](javascript:call_link\('abenadbc_ddl_dml.htm'\)) with ADBC.

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

This program makes it possible to create a database table whose name can be chosen by the user. One hundred rows can be inserted in the database table, individual rows can be read, and the database table can be deleted. The Native SQL statements are passed to methods of the class CL\_SQL\_STATEMENT using [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry").

Any exceptions are handled. When rows are exported, quotation marks are escaped in the user input. This prevents [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenadbc_dml_ddl_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_abexa.htm)

### abenadbc_dml_ddl_binding_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_dml_ddl_binding_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_binding_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Parameter Binding

The example demonstrates the binding of parameters in ADBC.

Source Code

REPORT demo\_adbc\_ddl\_dml\_binding.
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
    DATA(sql) = NEW cl\_sql\_statement( ).
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
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( REF #( key ) ).
    DATA(result) = sql->execute\_query(
      \`SELECT val1, val2 \` &&
      \`FROM \` && dbname && \` \` &&
      \`WHERE val1 = ?\` ).
    IF p\_params = abap\_true.
      result->set\_param( REF #( wa1 ) ).
      result->set\_param( REF #( wa2 ) ).
      DATA(rc1) = result->next( ).
      IF rc1 > 0.
        msg = |Result { wa1 }: { wa2 }|.
      ELSE.
        msg = 'No entry found'.
      ENDIF.
    ELSEIF p\_struct = abap\_true.
      result->set\_param\_struct( REF #( wa ) ).
      DATA(rc2) = result->next( ).
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

The program is identical to the executable example for [DDL and DML](javascript:call_link\('abenadbc_dml_ddl_abexa.htm'\)), except that here the arguments of the statements INSERT and SELECT are specified in the form of parameters ? that are bound to ABAP data objects. Instead of binding multiple parameters to ABAP data objects, they can also be bound to individual data objects or to a structure.

The parameter binding removes the need to escape quotation marks in the user input for the key when reading data.



**📖 Source**: [abenadbc_dml_ddl_binding_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_binding_abexa.htm)

### abenadbc_dml_ddl_bulk_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_dml_ddl_bulk_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_bulk_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Bulk Access

This example demonstrates bulk access in ADBC.

Source Code

REPORT demo\_adbc\_ddl\_dml\_bulk\_access.
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
      CATCH cx\_abap\_invalid\_name INTO DATA(exc1).
        MESSAGE exc1 TYPE 'I' DISPLAY LIKE 'E'.
        RETURN.
    ENDTRY.
    TRY.
        IF p\_create = 'X'.
          create( ).
          MESSAGE 'Create was successful' TYPE 'S'.
        ELSEIF p\_insert = 'X'.
          DATA(rci) = insert( ).
          MESSAGE rci && ' lines inserted' TYPE 'S'.
        ELSEIF p\_delete = 'X'.
          DATA(rcd) = delete( ).
          MESSAGE rcd && ' lines deleted' TYPE 'S'.
        ELSEIF p\_select = 'X'.
          DATA(rcs) = select( ).
          MESSAGE rcs && ' lines selected' TYPE 'S'.
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
    DATA(sql) = NEW cl\_sql\_statement( ).
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
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param\_table( REF #( itab ) ).
    CLEAR itab.
    DO 10 TIMES.
      APPEND sy-index + p\_key - 1 TO itab.
    ENDDO.
    rc = sql->execute\_update(
       \`DELETE FROM \` && dbname && \` WHERE val1 = ?\`  ).
  ENDMETHOD.
  METHOD select.
    DATA(sql) = NEW cl\_sql\_statement( ).
    DATA(result) = sql->execute\_query(
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

This program makes it possible to create and delete a database table whose name can be chosen by the user. Rows can be inserted in the database table, deleted again, all rows can be read, and the database table can be deleted.

In all methods for DML statements, parameters are bound using an internal table.

-   insert writes all rows of an internal table to the database table whose key value does not yet exist there.

-   delete deletes all rows of a database table whose key value occurs in an internal table.

-   select reads the results set of a query across all rows of the database table to an internal table.



**📖 Source**: [abenadbc_dml_ddl_bulk_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_dml_ddl_bulk_abexa.htm)

### abenadbc_query_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_query_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Query

This example demonstrates the execution of a [query](javascript:call_link\('abenadbc_query.htm'\)) with ADBC.

Source Code

REPORT demo\_adbc\_query.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF result\_line,
                  carrid TYPE sflight-carrid,
                  connid TYPE sflight-connid,
                  fldate TYPE sflight-fldate,
                END OF result\_line,
                result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid.
    DATA cols TYPE adbc\_column\_tab.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) )
                    ( CONV adbc\_name( 'FLDATE' ) ) ).
    cl\_demo\_input=>request( CHANGING field = carrid ).
    TRY.
        DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
         \`SELECT carrid, connid, fldate \` &&
         \`FROM sflight \` &&
         \`WHERE mandt  = \` && \`'\` && sy-mandt && \`' AND\` &&
         \`      carrid = \` &&  cl\_abap\_dyn\_prg=>quote(
                                 to\_upper( carrid ) ) ).
        result->set\_param\_table( itab\_ref = REF #( result\_tab )
                                 corresponding\_fields = cols ).
        IF result->next\_package( ) > 0.
          SORT result\_tab BY carrid connid fldate.
          cl\_demo\_output=>display( result\_tab ).
        ENDIF.
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display(  err->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method EXECUTE\_QUERY from the class CL\_SQL\_STATEMENT is used to extract three columns of the database table SFLIGHT for the current client. An appropriate internal table is bound to the results set using the method SET\_PARAM\_TABLE of the class CL\_SQL\_RESULT\_SET. Using the method NEXT\_PACKAGE, all the rows of the results set are transported into the internal table.

Quotation marks are escaped in the user input. This prevents [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenadbc_query_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query_abexa.htm)

### abenadbc_procedure_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_procedure_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_procedure_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Stored Procedure

The example demonstrates the execution of a [stored procedure](javascript:call_link\('abenadbc_procedure.htm'\)) using ADBC.

Source Code

REPORT demo\_adbc\_stored\_procedure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA incprice TYPE sflight-price.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    cl\_demo\_input=>request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    DATA(sql) = NEW cl\_sql\_statement( ).
    TRY.
        CASE substring( val = cl\_db\_sys=>dbsys\_type len = 3 ).
          WHEN 'HDB'.
            TRY.
                sql->execute\_ddl(
                  'DROP PROCEDURE abap\_docu\_demo\_incprice' ).
              CATCH cx\_sql\_exception ##NO\_HANDLER.
            ENDTRY.
            sql->execute\_ddl(
               \`CREATE PROCEDURE  \`
            && \`abap\_docu\_demo\_incprice (IN inc DECIMAL(15,2)) AS \`
            && \`BEGIN \`
            && \`UPDATE sflight SET price = price + :inc\`
            && \`               WHERE mandt = '\` && sy-mandt && \`'; \`
            && \`END\` ).
            sql->set\_param( data\_ref = REF #( incprice )
                            inout    = cl\_sql\_statement=>c\_param\_in ).
            sql->execute\_procedure(
              proc\_name = 'abap\_docu\_demo\_incprice' ).
          WHEN 'ADA'.
            TRY.
                sql->execute\_ddl(
                  'DROP PROCEDURE abap\_docu\_demo\_incprice' ).
              CATCH cx\_sql\_exception ##NO\_HANDLER.
            ENDTRY.
            DATA schema TYPE c LENGTH 256.
            CALL FUNCTION 'DB\_DBSCHEMA\_CURRENT'
                 IMPORTING dbschema = schema.
            sql->execute\_ddl(
               \`CREATE DBPROC abap\_docu\_demo\_incprice \`
            && \`(IN inc VARCHAR(15)) AS \`
            && \`UPDATE \`
            && cl\_abap\_dyn\_prg=>check\_whitelist\_str(
                 val = schema
                 whitelist = \`SAP\` && sy-sysid ) && \`.sflight \`
            && \`  SET price = price + TO\_NUMBER(:inc)\`
            && \`  WHERE mandt = '\` && sy-mandt && \`'; \` ).
            DATA(char\_incprice) = CONV string( incprice ).
            sql->set\_param( data\_ref = REF #( char\_incprice )
                            inout    = cl\_sql\_statement=>c\_param\_in ).
            sql->execute\_procedure(
              proc\_name = 'abap\_docu\_demo\_incprice' ).
          WHEN 'ORA'.
            sql->execute\_ddl(
              \`CREATE OR REPLACE PROCEDURE \`
            && \`abap\_docu\_demo\_incprice (inc IN NUMBER) IS \`
            && \`BEGIN \`
            && \`UPDATE sflight SET price = price + inc\`
            && \`               WHERE mandt = '\` && sy-mandt && \`'; \`
            && \`END;\` ).
            sql->set\_param( data\_ref = REF #( incprice )
                            inout    = cl\_sql\_statement=>c\_param\_in ).
            sql->execute\_procedure(
              proc\_name = 'abap\_docu\_demo\_incprice' ).
          WHEN OTHERS.
            cl\_demo\_output=>display( \`Example is not supported for \`
                                     && sy-dbsys ).
            LEAVE PROGRAM.
        ENDCASE.
      CATCH cx\_sql\_exception cx\_abap\_not\_in\_whitelist INTO DATA(err).
        cl\_demo\_output=>display( err->get\_text( ) ).
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      cl\_demo\_output=>display( \`Price increased succesfully\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Using the method EXECUTE\_PROCEDURE of the class CL\_SQL\_STATEMENT, the [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") increase\_price defined in the same program using the method EXECUTE\_DDL is called. This raises all the flight prices in the table SFLIGHT in the current client by the value contained in the parameter incprice.

This procedure must be implemented specially for each database. The databases in this example are the SAP HANA database, MaxDB, and Oracle. This example program can only be executed for these databases.

The executable example [AMDP, simple procedure call of an SQL Script procedure](javascript:call_link\('abenamdp_abexa.htm'\)) shows how the procedure can be managed and called as an [ABAP Managed Database Procedure](javascript:call_link\('abenamdp.htm'\)). A further [executable example](javascript:call_link\('abencall_db_procedure_abexa.htm'\)), specific to SAP HANA database, shows how the procedure is called using the statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)).



**📖 Source**: [abenadbc_procedure_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_procedure_abexa.htm)

### abenadbc_sql_prepared_abexa.htm

> **📖 Official SAP Documentation**: [abenadbc_sql_prepared_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_sql_prepared_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenadbc_sql_prepared_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_sql_prepared_abexa.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Prepared Statement

The example demonstrates how a [prepared statement](javascript:call_link\('abencl_sql_prepared_statement.htm'\)) is created and executed using ADBC.

Source Code

REPORT demo\_adbc\_prepared\_statement.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF result\_line,
                  carrid TYPE sflight-carrid,
                  connid TYPE sflight-connid,
                END OF result\_line,
                result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  sql        TYPE REF TO cl\_sql\_prepared\_statement,
           cols       TYPE adbc\_column\_tab,
           carrid     TYPE sflight-carrid,
           carrid\_tab TYPE TABLE OF sflight-carrid.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) ) ).
    carrid\_tab = VALUE #( ( CONV s\_carrid( 'AA' ) )
                          ( CONV s\_carrid( 'LH' ) )
                          ( CONV s\_carrid( 'UA' ) ) ).
    TRY.
        sql = NEW #( \`SELECT carrid, connid \`      &&
                     \`FROM spfli \`                 &&
                     \`WHERE mandt = '\` && sy-mandt &&
                     \`' AND carrid = ?\` ).
        sql->set\_param( REF #( carrid ) ).
        LOOP AT carrid\_tab INTO carrid.
          DATA(result) = sql->execute\_query( ).
          result->set\_param\_struct( struct\_ref = REF #( result\_line )
                                    corresponding\_fields = cols ).
          result\_tab = VALUE #( BASE result\_tab
                                FOR j = 1 WHILE result->next( ) > 0
                                ( result\_line ) ).
        ENDLOOP.
        sql->close( ).
        cl\_demo\_output=>display( result\_tab ).
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display( err->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, a [query](javascript:call_link\('abenadbc_query.htm'\)) is instantiated as a prepared statement and is executed with various parameters.

The work process cannot switch between the calls of the prepared statement, which means that dialogs using dynpros are not possible in the corresponding loop. Instead, the parameters to be evaluated are prepared and collected in a single internal table and the results lists are prepared and collected in another internal table.
