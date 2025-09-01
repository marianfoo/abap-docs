---
title: "CLASS-POOL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool_shortref.htm) Syntax CLASS-POOL MESSAGE-ID id. Addition: ... MESSAGE-ID mid(#!ABAP_ONE_ADD@1@) Effect The statement CLASS-POOL introduces a class pool(https://help.sap.com/doc/abapdocu_758_index_h
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool.htm"
abapFile: "abapclass-pool.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abapclass", "pool"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_statement.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-POOL%2C%20ABAPCLASS-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-POOL

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool_shortref.htm)

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Addition:

[... MESSAGE-ID mid](#!ABAP_ONE_ADD@1@)

Effect

The statement CLASS-POOL introduces a [class pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_pool_glosry.htm "Glossary Entry") for a [global class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") have been resolved.

Class pools are maintained in the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry") in the ABAP Workbench or with the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). A [master program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmaster_program_glosry.htm "Glossary Entry") and associated [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global class, is padded with the character \= up to and including position 30, and ends with CP. The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

A class pool is organized in include programs as follows:

-   An include program with the ending CCDEF ([CCDEF include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccdef_glosry.htm "Glossary Entry")) for class-relevant local definitions.
-   Three include programs for the [declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_part_glosry.htm "Glossary Entry") of the global class:
    -   An include program with the ending CU that contains the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) of the global class and its public [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry").
    -   An include program with the ending CO that contains the protected [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the global class.
    -   An include program with the ending CI that contains the private [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the global class.
-   An include program with the ending CCMAC for [macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry").
-   An include program with the ending CCIMP ([CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry")) for local definitions and implementations.
-   An include program with the ending CCAU ([test include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_include_glosry.htm "Glossary Entry")) for local [test classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_class_glosry.htm "Glossary Entry").
-   An include program with the ending CMnnn where nnn is a numeric index for each method implementation of the global class.

Unlike in [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), the actual structure of a class pool constructed from include programs is not shown in the Class Builder.

Programming Guideline

[Local Types for Global Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_type_glob_class_guidl.htm "Guideline")

Hints

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_interace_pools.htm).
-   Besides above include programs that actually make up the class pool, there are other include programs ending e.g. with \==CS or \==CT. These are internal helper objects of tools like ADT or Class Builder and are not included in the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). For example, the include ending with \==CS contains the [declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_part_glosry.htm "Glossary Entry") and the [implementation part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of the global class and is used for the source code based class builder.
-   It is not recommended manipulating a class pool with the statements of [dynamic program development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_dynamic.htm). Instead, appropriate APIs should be used.

Example

The name of the master program of the class pool of the global class CL\_DEMO\_CLASS\_POOL is CL\_DEMO\_CLASS\_POOL============CP. The program DEMO\_SHOW\_CP shows the class pool and all related include programs, including the tool-internal helper programs.

Addition   

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) in the class pool in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) in which the message class is specified override the addition MESSAGE-ID.