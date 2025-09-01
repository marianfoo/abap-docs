  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Include Programs

Include programs are used to split [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") into individual [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). An ABAP program can be created in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") using the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") include program. Include programs do not need to contain program-initiating statements and cannot be generated independently of the ABAP compiler. Instead, include programs can be included in [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") using the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)).

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline")

Hints

-   For the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of an ABAP program, a special [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry") is available which is included in the compilation of individual include programs of a program.
-   [Master programs](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") such as [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") are automatically organized into include programs by the ABAP Workbench.

Continue
[INCLUDE](javascript:call_link\('abapinclude_prog.htm'\))