  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Include Programs

Include programs are used to split [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") into individual [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). An ABAP program can be created in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") using the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)), however, include programs can be integrated into [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline")

Notes

-   For the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of an ABAP program, a special [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") such as [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](javascript:call_link\('abapinclude_prog.htm'\))