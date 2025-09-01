  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP Method with Specified Service Connection

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

A simple [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") is implemented in the AMDP method GET\_SCARR of the AMDP class CL\_DEMO\_AMDP\_CONNECTION:

METHOD get\_scarr BY DATABASE PROCEDURE FOR HDB
                      LANGUAGE SQLSCRIPT
                      USING scarr.
  carriers  = select \*
                     from scarr
                     WHERE mandt  = clnt;
ENDMETHOD.

The method also has an optional input parameter with the predefined name connection. This is used to specify whether the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is used. If a permitted name such as "DEFAULT" or "R/3\*my\_conn" is passed, the method is executed using either the standard connection or a service connection. Invalid names raise an exception and an exception is text is displayed.