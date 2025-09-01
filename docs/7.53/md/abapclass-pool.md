  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_statement.htm) → 

CLASS-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-pool_shortref.htm)

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Effect

The statement CLASS-POOL introduces a [class pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") have been resolved. The addition MESSAGE-ID of the statement CLASS-POOL has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport.htm).

Class pools are edited in [Class Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_builder_glosry.htm "Glossary Entry") in ABAP Workbench. Here, a [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") for a global class and associated [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global class, is padded with the character "=" up to and including position 30, and ends with "CP".

The names of the include programs of a class pool included by the framework program are constructed in exactly the same way as the name of the class pool itself, however they have different endings. Unlike in [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the actual structure of a class pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and is not displayed in Class Builder.

Note

The statements permitted in a class pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoo_differences_class_lib.htm).

Example

The name of the master program of the class pool of the global class CL\_ABAP\_BROWSER is CL\_ABAP\_BROWSER===============CP.