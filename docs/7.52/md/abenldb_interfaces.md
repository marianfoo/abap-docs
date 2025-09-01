---
title: "Interface Work Areas for Logical Databases"
description: |
  The following statement declares an interface work area(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm 'Glossary Entry') intended for use with logical databases only: -   NODES(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_interfaces.htm"
abapFile: "abenldb_interfaces.htm"
keywords: ["select", "do", "if", "try", "data", "abenldb", "interfaces"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) → 

Interface Work Areas for Logical Databases

The following statement declares an [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") intended for use with logical databases only:

-   [NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm)

The statement NODES must be listed both in the [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database and in the [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") associated with the logical database. In the database program, NODES determines which data can be passed from the logical database. In the executable program, NODES determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) can also be used.

Notes

-   If you no longer use logical databases, then you no longer require the statement NODES.

-   If you still want to use logical databases, use NODES instead of TABLES. This specifies clearly that the interface is intended for logical databases.

Continue
[NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm)