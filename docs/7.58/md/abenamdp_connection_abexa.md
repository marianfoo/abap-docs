  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Method%20with%20Specified%20Service%20Connection%2C%20ABENAMDP_CONNECTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

AMDP - Method with Specified Service Connection

The example demonstrates an AMDP method with the input parameter connection.

Source Code   

\* Public class definition
CLASS cl\_demo\_amdp\_service\_cnnctn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amdp\_service\_cnnctn IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      out->write(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    DATA connection TYPE dbcon\_name VALUE 'R/3\*my\_conn'.
    cl\_demo\_input=>new( )->request( CHANGING field = connection ).
    TRY.
        NEW cl\_demo\_amdp\_connection(
              )->get\_scarr( EXPORTING
                              connection = connection
                              clnt       = sy-mandt
                            IMPORTING
                              carriers = FINAL(result) ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_error).
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

A simple [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") is implemented in the AMDP method GET\_SCARR of the AMDP class CL\_DEMO\_AMDP\_CONNECTION:

METHOD get\_scarr BY DATABASE PROCEDURE FOR HDB
                      LANGUAGE SQLSCRIPT
                      USING scarr.
  carriers  = select \*
                     from scarr
                     WHERE mandt  = clnt;
ENDMETHOD.

The method also has an optional input parameter with the predefined name connection, which can be used to specify whether the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is used. If an allowed name such as DEFAULT or R/3\*my\_conn is passed, the method is executed using either the standard connection or a service connection. Invalid names raise an exception and the exception text is displayed.