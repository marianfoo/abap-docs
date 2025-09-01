---
title: "SAP HANA, ABAP-Specific Session Variables"
description: |
  This example demonstrates potential Native SQL reads on session variables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) on the SAP HANA database. Source Code  Public class definition CLASS cl_demo_hana_abap_variables DEFINITION INHERITING FRO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables_abexa.htm"
abapFile: "abenhana_session_variables_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenhana", "session", "variables", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_and_hana_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20HANA%2C%20ABAP-Specific%20Session%20Variables%2C%20ABENHANA_SESSION_VARIABLES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

SAP HANA, ABAP-Specific Session Variables

This example demonstrates potential Native SQL reads on [session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) on the SAP HANA database.

Source Code   

\* Public class definition
CLASS cl\_demo\_hana\_abap\_variables DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_hana\_abap\_variables IMPLEMENTATION.
  METHOD main.
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->write(
        \`Example can be executed on SAP HANA Database only\` ).
      LEAVE PROGRAM.
    ENDIF.
    FINAL(oref) = NEW cl\_demo\_hana\_session\_variables( ).
    TRY.
        FINAL(result\_exec\_sql) =
          oref->get\_session\_variables\_exec\_sql( ).
        out->write( result\_exec\_sql ).
      CATCH cx\_sy\_native\_sql\_error INTO FINAL(exec\_sql\_exc).
        out->write( exec\_sql\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        FINAL(result\_adbc) =
          oref->get\_session\_variables\_adbc( ).
        out->write( result\_adbc ).
      CATCH cx\_sql\_exception INTO FINAL(adbc\_exc).
        out->write( adbc\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        DATA result\_amdp
         TYPE cl\_demo\_hana\_session\_variables=>session\_variables.
        oref->get\_session\_variables\_amdp(
                IMPORTING clnt     = result\_amdp-client
                          cds\_clnt = result\_amdp-cds\_client
                          unam     = result\_amdp-uname
                          lang     = result\_amdp-langu
                          date     = result\_amdp-datum ).
        out->write( result\_amdp ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_exc).
        out->write( amdp\_exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This class calls the following methods of the class CL\_DEMO\_HANA\_SESSION\_VARIABLES:

-   GET\_SESSION\_VARIABLES\_EXEC\_SQL
    
    METHOD get\_session\_variables\_exec\_sql.
      EXEC SQL.
        select SESSION\_CONTEXT('CLIENT')
               from DUMMY
               into :session\_variables-client
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('CDS\_CLIENT')
               from DUMMY
               into :session\_variables-cds\_client
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('APPLICATIONUSER')
               from DUMMY
               into :session\_variables-uname
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('LOCALE\_SAP')
               from DUMMY
               into :session\_variables-langu
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('SAP\_SYSTEM\_DATE')
               from DUMMY
               into :session\_variables-datum
      ENDEXEC.
    ENDMETHOD.
    
    This method calls the built-in function SESSION\_CONTEXT for the four ABAP-specific [session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) on the SAP HANA database in three static Native SQL statements between [EXEC - ENDEXEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec.htm). The result is returned as a column of the SELECT list of an access to the pseudo table DUMMY.
    
-   GET\_SESSION\_VARIABLES\_ADBC
    
    METHOD get\_session\_variables\_adbc.
      DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('CLIENT') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-client ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('CDS\_CLIENT') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-cds\_client ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('APPLICATIONUSER') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-uname ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('LOCALE\_SAP') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-langu ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('SAP\_SYSTEM\_DATE') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-datum ) ).
      result->next( ).
    ENDMETHOD.
    
    This method replaces the static Native SQL statements of the preceding method with corresponding Native SQL statements in [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry").
    
-   GET\_SESSION\_VARIABLES\_AMDP
    
    METHOD get\_session\_variables\_amdp
           BY DATABASE PROCEDURE FOR HDB
           LANGUAGE SQLSCRIPT.
      clnt := session\_context('CLIENT');
      cds\_clnt := session\_context('CDS\_CLIENT');
      unam := session\_context('APPLICATIONUSER');
      lang := session\_context('LOCALE\_SAP');
      date := session\_context('SAP\_SYSTEM\_DATE');
    ENDMETHOD.
    
    This method is an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") and shows how the result of the built-in function SESSION\_CONTEXT can be used directly in [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry").