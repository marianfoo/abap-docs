  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Classes%2C%20ABENAMDP_CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Classes

An AMDP class is a global class in the [class library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_library_glosry.htm "Glossary Entry") that implements the following [tag interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentag_interface_glosry.htm "Glossary Entry"):

-   IF\_AMDP\_MARKER\_HDB for the SAP HANA database.

The suffix \_HDB stands for the SAP HANA database and it is currently the only database system for which the ABAP Managed Database Procedures can be implemented in AMDP methods of the class.

An AMDP class can contain both regular methods and [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm).

Example

Simple example for an AMDP class. The class CL\_DEMO\_AMDP\_SCARR implements the interface IF\_AMDP\_MARKER\_HDB and contains an AMDP method SELECT\_SCARR that reads data from the database table SCARR:

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

The following program section calls the method and displays the result.

DATA result TYPE cl\_demo\_amdp\_scarr=>scarr\_tab.
NEW cl\_demo\_amdp\_scarr( )->select\_scarr(
  EXPORTING clnt = sy-mandt
  IMPORTING scarr\_tab = result ).
cl\_demo\_output=>display( result ).