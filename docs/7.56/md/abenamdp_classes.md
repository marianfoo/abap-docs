  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Classes

An AMDP class is a global class in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") that implements one or more of the following [tag interfaces](javascript:call_link\('abentag_interface_glosry.htm'\) "Glossary Entry"):

-   IF\_AMDP\_MARKER\_HDB for the SAP HANA database

The names of the interfaces all start with IF\_AMDP\_MARKER and a suffix indicates the database system for which the ABAP Managed Database Procedures can be implemented in AMDP methods of the class.

An AMDP class can contain both regular methods and [AMDP methods](javascript:call_link\('abenamdp_methods.htm'\)). It can contain one or more AMDP methods for each database system specified by a tag interface.

Example

Simple example for an AMDP class. The class CL\_DEMO\_AMDP\_SCARR implements the interface IF\_AMDP\_MARKER\_HDB and contains an AMDP method SELECT\_SCARR that gets data from the database table SCARR:

METHOD select\_scarr
       BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING scarr.
  scarr\_tab =
  SELECT \*
         FROM "SCARR"
         WHERE mandt = clnt
         ORDER BY carrid;
ENDMETHOD.

The following program section calls the method and produces the result.

DATA result TYPE cl\_demo\_amdp\_scarr=>scarr\_tab.
NEW cl\_demo\_amdp\_scarr( )->select\_scarr(
  EXPORTING clnt = sy-mandt
  IMPORTING scarr\_tab = result ).
cl\_demo\_output=>display( result ).