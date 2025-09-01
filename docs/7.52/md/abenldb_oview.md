---
title: "Logical Databases - Components"
description: |
  The main features of a logical database are -   a hierarchical structure(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_structure.htm) The structure defines the data view of the logical database. It generally inherits the given hierarchy of database tables defined by foreign ke
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_oview.htm"
abapFile: "abenldb_oview.htm"
keywords: ["select", "do", "if", "data", "abenldb", "oview"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) → 

Logical Databases - Components

The main features of a logical database are

-   a hierarchical [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_structure.htm)

The structure defines the data view of the logical database. It generally inherits the given hierarchy of database tables defined by foreign key dependencies and controls the order in which the data is passed to the application program. In this way, the structure determines how the other subobjects are constructed and the runtime behavior.

-   [selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_selections.htm) as a standalone standard selection screen

The selections define a standard selection screen to be used as a user interface for programs that use the logical database. The appearance of the screen is defined by the structure by default. The selections can be modified and enhanced to meet the requirements of the user.

-   a [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_program.htm) written in ABAP

The database program contains the ABAP statements for reading the data and passing it to an application program. It is basically a container for special subroutines in which the functions of the logical database are implemented. The [reporting processor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreporting_process.htm) of the runtime environment calls these subroutines in the order defined by the structure. The database program is defined by the structure and the selections and can be modified or enhanced to meet the requirements of the user.

-   [Further elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_others.htm), which add to the functions.

When an executable program is created, it can be assigned to a logical database using the Logical Database attribute. This allows the standard selection screen and the program flow to be combined with the selection screen and flow of the logical database.

Furthermore, logical databases can call the function module LDB\_PROCESS. This function module can be used to call multiple logical database from a single program and nested as required. A logical database can also be called more than once in a program, if programmed accordingly.

Note

When creating a logical database in Logical Database Builder, the following order should be kept, since this then makes it easier to generate proposal for the remaining components from the those already created. Some of the most important properties of a logical database are defined at the same time as its structure. After the definition of the structure, a proposal is created for the selection include. The structure and selection include are used to generate a template for the database program. These components can then quickly be used to create a ready-to-run logical database, in which further requirements can be implemented.

1.  Create the structure based on a root node.
2.  Associate it with a search help.
3.  Generate and edit the selection include.
4.  Generate and edit the database program.
5.  Edit further elements.

Continue
[Logical Databases - Structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_structure.htm)
[Logical Databases - Selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_selections.htm)
[Logical Databases - Database Program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_program.htm)
[Logical Databases - Further Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_others.htm)