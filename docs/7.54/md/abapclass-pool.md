  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Introductory Statements for Programs](javascript:call_link\('abenabap_program_statement.htm'\)) → 

CLASS-POOL

[Quick Reference](javascript:call_link\('abapclass-pool_shortref.htm'\))

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Effect

The statement CLASS-POOL introduces a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") have been resolved. The addition MESSAGE-ID of the statement CLASS-POOL has the same meaning as in the statement [REPORT](javascript:call_link\('abapreport.htm'\)).

Class pools are edited in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in ABAP Workbench. Here, a [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") for a global class and associated [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global class, is padded with the character "=" up to and including position 30, and ends with "CP".

The names of the include programs of a class pool included by the framework program are constructed in exactly the same way as the name of the class pool itself, however they have different endings. Unlike in [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), the actual structure of a class pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and is not displayed in Class Builder.

Note

The statements permitted in a class pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenoo_differences_class_lib.htm'\)).

Example

The name of the master program of the class pool of the global class CL\_ABAP\_BROWSER is CL\_ABAP\_BROWSER===============CP.