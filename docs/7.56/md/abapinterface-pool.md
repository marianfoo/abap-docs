  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

INTERFACE-POOL

[Short Reference](javascript:call_link\('abapinterface-pool_shortref.htm'\))

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved.

Interface pools are maintained exclusively with the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") or with the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), where a [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") for a global interface including the statement INTERFACE-POOL is generated automatically.

The full name of the master program of an interface pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global interface, is padded with the character "=" up to and including position 30, and ends with "IP".

The names of the include programs of an interface pool included by the master program are constructed in exactly the same way as the name of the interface pool itself, however they have different endings. Unlike in [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the actual structure of an interface pool constructed from include programs is the internal responsibility of the [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") and the ABAP runtime framework and does not show up in the Class Builder.

Hint

The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\)).

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE is IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE==IP.