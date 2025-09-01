  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACE-POOL%2C%20ABAPINTERFACE-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACE-POOL

[Short Reference](javascript:call_link\('abapinterface-pool_shortref.htm'\))

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") for a [global interface](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved.

Interface pools are maintained exclusively with the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") or with the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). A [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") and an associated [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are generated automatically. The statement INTERFACE-POOL is created in the master program.

The full name of the master program of an interface pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global interface, is padded with the character \= up to and including position 30, and ends with IP.

The name of the include program of an interface pool included by the master program is constructed in exactly the same way as the name of the interface pool itself, however with an different ending. An interface pool is organized in the following include program:

-   An include program with the ending IU that contains the complete code of the global interface between the statements [INTERFACE](javascript:call_link\('abapinterface.htm'\)) and [ENDINTERFACE](javascript:call_link\('abapendinterface.htm'\))

Hints

-   The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\)).
-   It is not recommended manipulating an interface pool with the statements of [dynamic program development](javascript:call_link\('abenabap_language_dynamic.htm'\)). Instead, appropriate APIs should be used.

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_INTERFACE\_POOL is IF\_DEMO\_INTERFACE\_POOL========IP and it includes IF\_DEMO\_INTERFACE\_POOL========IU