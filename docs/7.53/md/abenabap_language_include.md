  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) → 

Include Programs

Include programs are used to split [ABAP source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm "Glossary Entry") into individual [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). An ABAP program can be created in the [program attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") using the [program type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm), however, include programs can be integrated into [compilation units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Notes

-   For the [global declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of an ABAP program, a special [top include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentop_include_glosry.htm "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") such as [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") or [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)