  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abexas.htm) → 

AMDP - Method with Specified Service Connection

The example demonstrates an AMDP method with the input parameter connection.

Source Code

REPORT demo\_amdp\_connection.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    DATA connection TYPE dbcon\_name VALUE 'R/3\*my\_conn'.
    cl\_demo\_input=>request( CHANGING field = connection ).
    TRY.
        NEW cl\_demo\_amdp\_connection(
              )->get\_scarr( EXPORTING
                              connection = connection
                              clnt       = sy-mandt
                            IMPORTING
                              carriers = DATA(result) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A simple [SQLScript procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") is implemented in the AMDP method GET\_SCARR of the AMDP class CL\_DEMO\_AMDP\_CONNECTION:

METHOD get\_scarr BY DATABASE PROCEDURE FOR HDB
                      LANGUAGE SQLSCRIPT
                      USING scarr.
  carriers  = select \*
                     from scarr
                     WHERE mandt  = clnt;
ENDMETHOD.

The method also has an optional input parameter with the predefined name connection, which can be used to specify whether the [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_connection_glosry.htm "Glossary Entry") is used. If an allowed name such as "DEFAULT" or "R/3\*my\_conn" is passed, the method is executed using either the standard connection or a service connection. Invalid names raise an exception and the exception text is displayed.