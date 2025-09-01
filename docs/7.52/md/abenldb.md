---
title: "Logical Databases (Obsolete)"
description: |
  A logical database is a special development object created and edited in Logical Database Builder. Its main component is an ABAP program that provides other ABAP programs with data from the nodes of a hierarchical tree structure. The most common purpose of logical databases is to extract data from d
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm"
abapFile: "abenldb.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenldb"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) → 

Logical Databases (Obsolete)

A logical database is a special development object created and edited in Logical Database Builder. Its main component is an ABAP program that provides other ABAP programs with data from the nodes of a hierarchical tree structure. The most common purpose of logical databases is to extract data from database tables, however other applications are feasible. The framework for using logical database is integrated into the ABAP runtime environment.

Logical databases provide a hierarchical view across database tables associated using foreign key dependencies. If parts of these dependencies construct tree-like hierarchical structures, logical databases can read data from database tables that are components of these structures. In classic ABAP, logical databases are usually used in these hierarchical structures in accordance with the principle of input, processing, and output. The actual database reads are then wrapped in the logical database. The logical database reads the data, saves it locally in the program (if necessary) and passes it row by row to an [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_interfaces.htm).

As well as reusing predefined functions for reading data from database tables, logical databases can be implemented for further central tasks, such as defining uniform selection screens, central authorization checks, or making centralized enhancements to performance.

-   [Logical Databases - Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_oview.htm)

-   [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm)

-   [Logical Databases - Use](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_usage.htm)

-   [Logical Databases - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_examples.htm)

Notes

-   Logical databases should no longer be used as they are based on cross-program usage of global data, implicit subroutine calls and [reporting event control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_processing_blocks.htm), which means that they do not comply with modern concepts. No new logical databases should be created. Instead a relevant service should be made available using a global class.

-   The function module LDB\_PROCESS can be used to access existing logical databases. This function module can be also called from a method.

Continue
[Logical Databases - Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_oview.htm)
[Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm)
[Logical Databases - Use](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_usage.htm)
[Logical Databases - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_examples.htm)