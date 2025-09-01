  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_and_hana_abexas.htm) → 

SAP HANA, ABAP-Specific Session Variables

This example demonstrates potential Native SQL reads on [session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_session_variables.htm) on the SAP HANA database.

Source Code

REPORT demo\_hana\_session\_variables.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->display(
        \`Example can be executed on SAP HANA Database only\` ).
      LEAVE PROGRAM.
    ENDIF.
    DATA(oref) = NEW cl\_demo\_hana\_session\_variables( ).
    TRY.
        DATA(result\_exec\_sql) =
          oref->get\_session\_variables\_exec\_sql( ).
        out->write( result\_exec\_sql ).
      CATCH cx\_sy\_native\_sql\_error INTO DATA(exec\_sql\_exc).
        out->write( exec\_sql\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        DATA(result\_adbc) =
          oref->get\_session\_variables\_adbc( ).
        out->write( result\_adbc ).
      CATCH cx\_sql\_exception INTO DATA(adbc\_exc).
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
      CATCH cx\_amdp\_error INTO DATA(amdp\_exc).
        out->write( amdp\_exc->get\_text( ) ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program calls the following methods of the class CL\_DEMO\_HANA\_SESSION\_VARIABLES:

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
    
    This method calls the built-in function SESSION\_CONTEXT for the four ABAP-specific [session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_session_variables.htm) on the SAP HANA database in three static Native SQL statements between [EXEC - ENDEXEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm). The result is returned as a column of the SELECT list of an access to the pseudo table DUMMY.
    
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
    
    This method replaces the static Native SQL statements of the preceding method with corresponding Native SQL statements in [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry").
    
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
    
    This method is an [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") and shows how the result of the built-in function SESSION\_CONTEXT can be used directly in [SQLScript](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_glosry.htm "Glossary Entry").