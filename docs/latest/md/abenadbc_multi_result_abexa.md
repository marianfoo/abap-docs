  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Multiple%20Result%20Sets%2C%20ABENADBC_MULTI_RESULT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Multiple Result Sets

This example demonstrates how to access multiple result sets with ADBC.

Source Code   

\* Public class definition
CLASS cl\_demo\_adbc\_mult\_results DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_adbc\_mult\_results IMPLEMENTATION.
  METHOD main.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    IF substring( val = cl\_db\_sys=>dbsys\_type len = 3 ) <> 'HDB'.
      RETURN.
    ENDIF.
    TRY.
        sql->execute\_ddl(
                    'DROP TYPE abap\_docu\_demo\_i' ).
        sql->execute\_ddl(
                    'DROP PROCEDURE abap\_docu\_demo\_two\_results' ).
      CATCH cx\_sql\_exception ##NO\_HANDLER.
    ENDTRY.
    TRY.
        sql->execute\_ddl(
          \`CREATE TYPE abap\_docu\_demo\_i AS TABLE ( column INTEGER )\` ).
        sql->execute\_ddl(
          \`CREATE PROCEDURE abap\_docu\_demo\_two\_results\` &&
          \`(OUT p\_out1 abap\_docu\_demo\_i,\` &&
          \` OUT p\_out2 abap\_docu\_demo\_i ) \` &&
          \`LANGUAGE SQLSCRIPT READS SQL DATA AS \` &&
          \`BEGIN \` &&
          \`p\_out1 = SELECT generated\_period\_start AS column\` &&
          \`  FROM series\_generate\_integer(1, 1, 6); \` &&
          \`p\_out2 = SELECT generated\_period\_start AS column\` &&
          \`  FROM series\_generate\_integer(1, 1, 11); \` &&
          \`END;\`  ).
      CATCH cx\_sql\_exception cx\_abap\_not\_in\_whitelist
         INTO FINAL(err\_crea).
        out->write( err\_crea->get\_text( ) ).
        RETURN.
    ENDTRY.
    TYPES: BEGIN OF struc,
             column TYPE i,
           END OF struc.
    DATA result1 TYPE TABLE OF struc WITH EMPTY KEY.
    DATA result2 TYPE TABLE OF struc WITH EMPTY KEY.
    TRY.
        FINAL(result\_sets) = sql->execute(
          'CALL abap\_docu\_demo\_two\_results( ?, ? )' ).
        result\_sets->set\_param\_table( itab\_ref = REF #( result1 ) ).
        result\_sets->next\_package(  ).
        out->write( result1 ).
        IF result\_sets->next\_result\_set( ).
          result\_sets->set\_param\_table( itab\_ref = REF #( result2 ) ).
          result\_sets->next\_package(  ).
          out->write( result2 ).
        ENDIF.
      CATCH cx\_sql\_exception cx\_abap\_not\_in\_whitelist
              INTO FINAL(err\_call).
        out->write( err\_call->get\_text( ) ).
        RETURN.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The example creates a database procedure ABAP\_DOCU\_DEMO\_TWO\_RESULTS on a [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") that has two tabular output parameters. The parameters are filled with different values by a built-in SQL function. When calling the procedure with method EXECUTE of ADBC class CL\_SQL\_STATEMENT, the return value references an object of class CL\_SQL\_RESULT\_SET that allows access to both result sets. After accessing the first one, method NEXT\_RESULT\_SET is used to switch to the second one. To each result set, an ABAP data object must be assigned for reading the result. Here, internal tables are assigned with SET\_PARAM\_TABLE.