---
title: "CLASS-POOL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool_shortref.htm) Syntax CLASS-POOL MESSAGE-ID id. Effect The statement CLASS-POOL introduces a class pool(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm 'Glossary
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool.htm"
abapFile: "abapclass-pool.htm"
keywords: ["do", "if", "try", "method", "class", "types", "abapclass", "pool"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Program-initiating statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_statement.htm) → 

CLASS-POOL

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool_shortref.htm)

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Effect

The statement CLASS-POOL introduces a [class pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry") for a [global class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_class_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") have been resolved. The addition MESSAGE-ID of the statement CLASS-POOL has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm).

Class pools are maintained in the [Class Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_builder_glosry.htm "Glossary Entry") in the ABAP Workbench or with the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"). A [master program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmaster_program_glosry.htm "Glossary Entry") and associated [include programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global class, is padded with the character \= up to and including position 30, and ends with "CP". The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

A class pool is organized in include programs as follows:

-   An include program with the ending CCDEF ([CCDEF include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenccdef_glosry.htm "Glossary Entry")) for class-relevant local definitions.

-   Three include programs for the [declaration part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_part_glosry.htm "Glossary Entry") of the global class:

-   An include program with the ending CU that contains the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_definition.htm) of the global class and its public [visibility section](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvisibility_section_glosry.htm "Glossary Entry").

-   An include program with the ending CO that contains the public [visibility section](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the global class.

-   An include program with the ending CI that contains the private [visibility section](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the global class.

-   An include program with the ending CCMAC for [macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm "Glossary Entry").

-   An include program with the ending CCIMP ([CCIMP include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenccimp_glosry.htm "Glossary Entry")) for local definitions and implementations.

-   An include program with the ending CCAU ([test include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_include_glosry.htm "Glossary Entry")) for local [test classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm "Glossary Entry").

-   An include program with the ending CMnnn where nnn is a numeric index for each method implementation of the global class.

Unlike in [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), the actual structure of a class pool constructed from include programs is not shown in the Class Builder.

Programming Guideline

[Local Types for Global Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_type_glob_class_guidl.htm "Guideline")

Hints

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_interace_pools.htm).

-   There is also a program ending with CS that consists of the [declaration part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_part_glosry.htm "Glossary Entry") and the [implementation part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of the global class.

Example

The name of the master program of the class pool of the global class CL\_ABAP\_BROWSER is CL\_ABAP\_BROWSER===============CP.