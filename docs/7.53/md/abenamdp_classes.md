---
title: "AMDP - Classes"
description: |
  An AMDP class is a global class in the class library(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_library_glosry.htm 'Glossary Entry') that contains one or more of the following tag interfaces(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentag_interface_gl
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_classes.htm"
abapFile: "abenamdp_classes.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenamdp", "classes"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) → 

AMDP - Classes

An AMDP class is a global class in the [class library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_library_glosry.htm "Glossary Entry") that contains one or more of the following [tag interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentag_interface_glosry.htm "Glossary Entry"):

The names of the interfaces all start with IF\_AMDP\_MARKER and a suffix indicates the database system for which the ABAP Managed Database Procedures can be implemented in AMDP methods of the class.

An AMDP class can contain both regular methods and [AMDP methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_methods.htm). It can contain one or more AMDP methods for each database system specified by a tag interface.

Example

Simple example for an AMDP class. The class CL\_DEMO\_AMDP\_SCARR binds the interface IF\_AMDP\_MARKER\_HDB and contains an AMDP method SELECT\_SCARR that gets data from the database table SCARR:

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