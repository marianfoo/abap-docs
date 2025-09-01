  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobjects_statements.htm) → 

TABLES

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_shortref.htm)

Syntax

TABLES table\_wa.

Effect

This statement is not allowed in classes and declares a data object table\_wa as a table work area whose data type is taken from the identically named structured data type table\_wa from the ABAP Dictionary. table\_wa must be defined as a [flat structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_structure_glosry.htm "Glossary Entry") in the ABAP Dictionary. Either DDIC database tables or [DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm "Glossary Entry") with flat components can be specified for table\_wa.

Table work areas declared using TABLES are [interface work areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") and should only be declared in the global declaration part of a program for the following purpose:

-   The statement TABLES is required for exchanging data between [dynpro fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_field_glosry.htm "Glossary Entry") and the ABAP program, if the fields were defined in a dynpro of the program by being taken from the ABAP Dictionary. In the dynpro event [PBO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpbo_glosry.htm "Glossary Entry"), the content of the table work area is passed to identically named dynpro fields. In [PAI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpai_glosry.htm "Glossary Entry"), the system takes the data from identically named dynpro fields.
-   In [executable programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), flat table work areas can be used to copy the data that is provided for the event [GET table\_wa](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) by a linked [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). TABLES is synonymous with the statement [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm) for this purpose.

Programming Guideline

[No table work areas except for classic dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_guidl.htm "Guideline")

Hints

-   Table work areas declared using TABLES behave like shared data declared using the addition [COMMON PART](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_common.htm). They are shared by the programs of a [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry"). This feature should not be exploited for reasons outlined in [Program Groups in External Procedure Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_groups.htm).
-   Table work areas declared using TABLES can be declared in subroutines and function modules, however this is not recommended. A table work area declared in a [procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") is not local but belongs to the context of a [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It is visible in the compilation unit as soon as it is declared and lives for as long as the compilation unit. In contrast to regular program-global data, the content of the table work areas declared in subroutines and function modules is stored temporarily when these are called. Assignments that are made during the runtime of the procedure are preserved only until the procedure is completed. When the procedure is exited, the table work areas are filled with the content that they contained when the procedure was called. Table work areas declared in procedures behave like global data to which the statement [LOCAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplocal.htm) is applied in the procedure.
-   It is recommended that NODES and not TABLES is always used for interface work areas for logical databases. This makes it clear that they are nodes of logical databases.
-   A [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") cannot be specified after TABLES. However, a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") can be specified.
-   The variant [TABLES \*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_asterisk.htm) is completely obsolete.

Example

Declaration of a table work area demo\_conn with reference to the identically named dictionary structure DEMO\_CONN in a [module pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodul_pool_glosry.htm "Glossary Entry").

PROGRAM demo\_dynpro\_module.
TABLES demo\_conn.
...