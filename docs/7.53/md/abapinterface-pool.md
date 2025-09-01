---
title: "INTERFACE-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface-pool_shortref.htm) Syntax INTERFACE-POOL. Effect The statement INTERFACE-POOL introduces an interface pool(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_pool_glosry.htm 'Glossary E
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface-pool.htm"
abapFile: "abapinterface-pool.htm"
keywords: ["do", "if", "try", "class", "abapinterface", "pool"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_statement.htm) → 

INTERFACE-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface-pool_shortref.htm)

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_pool_glosry.htm "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved.

Interface pools are edited only with the tool [Class Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_builder_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). A [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") for a global interface including the statement INTERFACE-POOL is generated automatically.

The full name of the master program of an interface pool in the [repository](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global interface, is padded with the character "=" up to and including position 30, and ends with "IP".

The names of the include programs of an interface pool included by the framework program are constructed in exactly the same way as the name of the interface pool itself, however they have different endings. Unlike in [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the actual structure of an interface pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and is not displayed in Class Builder.

Note

The statements permitted in an interface pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoo_differences_class_lib.htm).

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE is IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE==IP.