---
title: "ADBC - Stored Procedure"
description: |
  The example demonstrates the execution of a stored procedure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_procedure.htm) using ADBC. Source Code  Public class definition CLASS cl_demo_adbc_stored_procedure DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREAT
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_procedure_abexa.htm"
abapFile: "abenadbc_procedure_abexa.htm"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "abenadbc", "procedure", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Stored%20Procedure%2C%20ABENADBC_PROCEDURE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Stored Procedure

The example demonstrates the execution of a [stored procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_procedure.htm) using ADBC.

Source Code   

\* Public class definition
CLASS cl\_demo\_adbc\_stored\_procedure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_adbc\_stored\_procedure IMPLEMENTATION.
  METHOD main.
    DATA incprice TYPE sflight-price.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    cl\_demo\_input=>new( )->request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    FINAL(sql) = NEW cl\_sql\_statement( ).
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
              IMPORTING
                dbschema = schema.
            sql->execute\_ddl(
               \`CREATE DBPROC abap\_docu\_demo\_incprice \`
            && \`(IN inc VARCHAR(15)) AS \`
            && \`UPDATE \`
            && cl\_abap\_dyn\_prg=>check\_whitelist\_str(
                 val = schema
                 whitelist = \`SAP\` && sy-sysid ) && \`.sflight \`
            && \`  SET price = price + TO\_NUMBER(:inc)\`
            && \`  WHERE mandt = '\` && sy-mandt && \`'; \` ).
            FINAL(char\_incprice) = CONV string( incprice ).
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
            out->write( \`Example is not supported for \`
                                     && sy-dbsys ).
            LEAVE PROGRAM.
        ENDCASE.
      CATCH cx\_sql\_exception cx\_abap\_not\_in\_whitelist INTO FINAL(err).
        out->write( err->get\_text( ) ).
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      out->write( \`Price increased succesfully\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Using the method EXECUTE\_PROCEDURE of the class CL\_SQL\_STATEMENT, the [SQLScript procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") increase\_price defined by using the method EXECUTE\_DDL is called. This increases all the flight prices in the table SFLIGHT in the current client by the value contained in the parameter incprice.

This procedure must be implemented specially for each database. The databases in this example are the SAP HANA database, MaxDB, and Oracle. This example class can only be executed for these databases.

The executable example [AMDP, simple procedure call of an SQLScript procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexa.htm) shows how the procedure can be managed and called as an [ABAP Managed Database Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm). A further [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_db_procedure_abexa.htm), specific to SAP HANA database, shows how the procedure is called using the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm).