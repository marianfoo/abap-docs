  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_abexas.htm) → 

ADBC - Stored Procedure

The example demonstrates the execution of a [stored procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_procedure.htm) using ADBC.

Source Code

REPORT demo\_adbc\_stored\_procedure.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
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

Using the method EXECUTE\_PROCEDURE of the class CL\_SQL\_STATEMENT, the [SQLScript procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") increase\_price defined in the same program using the method EXECUTE\_DDL is called. This raises all the flight prices in the table SFLIGHT in the current client by the value contained in the parameter incprice.

This procedure must be implemented specially for each database. The databases in this example are the SAP HANA database, MaxDB, and Oracle. This example program can only be executed for these databases.

The executable example [AMDP, simple procedure call of an SQL Script procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abexa.htm) shows how the procedure can be managed and called as an [ABAP Managed Database Procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm). A further [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_db_procedure_abexa.htm), specific to SAP HANA database, shows how the procedure is called using the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_database_procedure.htm).