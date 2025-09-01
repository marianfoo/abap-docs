---
title: "LDB - Interface Work Areas"
description: |
  The following statement declares an interface work area(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_work_area_glosry.htm 'Glossary Entry') intended for use with logical databases only: -   NODES(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_interfaces.htm"
abapFile: "abenldb_interfaces.htm"
keywords: ["select", "do", "if", "try", "data", "abenldb", "interfaces"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) → 

LDB - Interface Work Areas

The following statement declares an [interface work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") intended for use with logical databases only:

-   [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm)

The statement NODES must be specified both in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database and in the [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") linked with the logical database. In the database program, NODES determines which data can be passed from the logical database. In the executable program, NODES determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm) can also be used.

Hints

-   If logical databases are no longer used, the statement NODES is obsolete.
-   If logical databases are still used, NODES should be used instead of TABLES. This specifies clearly that the interface is intended for logical databases.

Continue
[NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm)