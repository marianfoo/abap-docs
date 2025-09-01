  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FUNCTION-POOL%2C%20ABAPFUNCTION-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FUNCTION-POOL

[Short Reference](javascript:call_link\('abapfunction-pool_shortref.htm'\))

Syntax

FUNCTION-POOL fpool *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
                    *\[*MESSAGE-ID mid*\]*.

Addition:

[... MESSAGE-ID mid](#!ABAP_ONE_ADD@1@)

Effect

The statement FUNCTION-POOL introduces a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved.

Function pools are maintained using the [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), where a [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") and subordinate [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are generated automatically. The statement FUNCTION-POOL is created in the [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry").

The full name of the master program of a function pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") consists of the prefix SAPL and the name fpool of the statement FUNCTION-POOL.

A function pool is used as a framework for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and is organized in include programs as follows.

-   A top include with the prefix L and the ending TOP in the declaration part of the function pool.
-   Optional include programs with the prefix L and the ending D.. for the declaration of local classes within the top include.
-   An include program with the prefix L and the ending UXX in the implementation part of the function pool. This include program includes include programs with the ending U.. for the implementation of each [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") of the function pool. This structure must not be changed.
-   Optional include programs with the prefix L and the ending P.. for the implementation of the methods of local classes in the implementation part of the function pool.
-   Optional include programs with the prefix L and the ending O.. for the implementation of [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function pool.
-   Optional include programs with the prefix L and the ending I.. for the implementation of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function pool.
-   Optional include programs with the prefix L and the ending E.. for the implementation of [event blocks](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry") in the implementation part of the function pool.
-   Optional include programs with the prefix L and the ending F.. for the implementation of [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in the implementation part of the function pool.

The periods .. represent a two-digit number. The functionality of the Function Builder is based on compliance with this naming convention.

Hint

It is not recommended manipulating a function pool with the statements of [dynamic program development](javascript:call_link\('abenabap_language_dynamic.htm'\)). Instead, appropriate APIs should be used.

Example

Structure of the function pool SAPLABAP\_DOCU from include programs:

\*&---------------------------------------------------------------------\*
\*&  Function Pool SAPLABAP\_DOCU
\*&---------------------------------------------------------------------\*
INCLUDE labap\_docutop.               " Global Declarations
INCLUDE labap\_docue00.               " Load of Program
INCLUDE labap\_docuuxx.               " Function Modules
INCLUDE labap\_docuo01.               " PBO Modules
INCLUDE labap\_docui01.               " PAI Modules
INCLUDE labap\_docue01.               " Handling of Runtime-Events
INCLUDE labap\_docup01.               " Class implementations
INCLUDE labap\_docup02.
INCLUDE labap\_docup03.
INCLUDE labap\_docup04.

The function pool includes the top include at the first position, which contains the statement FUNCTION-POOL and other include programs for data and class declarations:

\*&---------------------------------------------------------------------\*
\*&  Include           LABAP\_DOCUTOP
\*&---------------------------------------------------------------------\*
FUNCTION-POOL abap\_docu.
INCLUDE labap\_docud00.               " Global Data for Screens
INCLUDE labap\_docud01.               " Classes for Docu Display

Addition   

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in the function pool in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in which the message class is specified override the addition MESSAGE-ID.