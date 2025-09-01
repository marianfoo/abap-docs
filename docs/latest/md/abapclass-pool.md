  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-POOL%2C%20ABAPCLASS-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-POOL

[Short Reference](javascript:call_link\('abapclass-pool_shortref.htm'\))

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Addition:

[... MESSAGE-ID mid](#!ABAP_ONE_ADD@1@)

Effect

The statement CLASS-POOL introduces a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") for a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") have been resolved.

Class pools are maintained in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in the ABAP Workbench or with the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). A [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") and associated [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global class, is padded with the character \= up to and including position 30, and ends with CP. The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

A class pool is organized in include programs as follows:

-   An include program with the ending CCDEF ([CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry")) for class-relevant local definitions.
-   Three include programs for the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") of the global class:
    -   An include program with the ending CU that contains the statement [CLASS DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) of the global class and its public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry").
    -   An include program with the ending CO that contains the protected [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the global class.
    -   An include program with the ending CI that contains the private [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the global class.
-   An include program with the ending CCMAC for [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry").
-   An include program with the ending CCIMP ([CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry")) for local definitions and implementations.
-   An include program with the ending CCAU ([test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry")) for local [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").
-   An include program with the ending CMnnn where nnn is a numeric index for each method implementation of the global class.

Unlike in [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the actual structure of a class pool constructed from include programs is not shown in the Class Builder.

Programming Guideline

[Local Types for Global Classes](javascript:call_link\('abenlocal_type_glob_class_guidl.htm'\) "Guideline")

Hints

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\)).
-   Besides above include programs that actually make up the class pool, there are other include programs ending e.g. with \==CS or \==CT. These are internal helper objects of tools like ADT or Class Builder and are not included in the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). For example, the include ending with \==CS contains the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") and the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of the global class and is used for the source code based class builder.
-   It is not recommended manipulating a class pool with the statements of [dynamic program development](javascript:call_link\('abenabap_language_dynamic.htm'\)). Instead, appropriate APIs should be used.

Example

The name of the master program of the class pool of the global class CL\_DEMO\_CLASS\_POOL is CL\_DEMO\_CLASS\_POOL============CP. The program DEMO\_SHOW\_CP shows the class pool and all related include programs, including the tool-internal helper programs.

Addition   

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in the class pool in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in which the message class is specified override the addition MESSAGE-ID.