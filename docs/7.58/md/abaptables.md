  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TABLES%2C%20ABAPTABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TABLES

[Short Reference](javascript:call_link\('abaptables_shortref.htm'\))

Syntax

TABLES table\_wa.

Effect

This statement is not allowed in classes and declares a data object table\_wa as a table work area whose data type is taken from the identically named structured data type table\_wa from the ABAP Dictionary. table\_wa must be defined as a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") in the ABAP Dictionary. Either DDIC database tables or [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") with flat components can be specified for table\_wa.

Table work areas declared using TABLES are [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") and should only be declared in the global declaration part of a program for the following purpose:

-   The statement TABLES is required for exchanging data between [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") and the ABAP program, if the fields were defined in a dynpro of the program by being taken from the ABAP Dictionary. In the dynpro event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), the content of the table work area is passed to identically named dynpro fields. In [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), the system takes the data from identically named dynpro fields.
-   In [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), flat table work areas can be used to copy the data that is provided for the event [GET table\_wa](javascript:call_link\('abapget-.htm'\)) by a linked [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). TABLES is synonymous with the statement [NODES](javascript:call_link\('abapnodes.htm'\)) for this purpose.

Programming Guideline

[No table work areas except for classic dynpros](javascript:call_link\('abentable_work_area_guidl.htm'\) "Guideline")

Hints

-   Table work areas declared using TABLES behave like shared data declared using the addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)). They are shared by the programs of a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"). This feature should not be exploited for reasons outlined in [Program Groups in External Procedure Calls](javascript:call_link\('abenprogram_groups.htm'\)).
-   Table work areas declared using TABLES can be declared in subroutines and function modules, however this is not recommended. A table work area declared in a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is not local but belongs to the context of a [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). It is visible in the compilation unit as soon as it is declared and lives for as long as the compilation unit. In contrast to regular program-global data, the content of the table work areas declared in subroutines and function modules is stored temporarily when these are called. Assignments that are made during the runtime of the procedure are preserved only until the procedure is completed. When the procedure is exited, the table work areas are filled with the content that they contained when the procedure was called. Table work areas declared in procedures behave like global data to which the statement [LOCAL](javascript:call_link\('abaplocal.htm'\)) is applied in the procedure.
-   It is recommended that NODES and not TABLES is always used for interface work areas for logical databases. This makes it clear that they are nodes of logical databases.
-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cannot be specified after TABLES. A [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") should not be specified, since the usage of CDS-managed DDIC views is [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).
-   The variant [TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\)) is completely obsolete.

Example

Declaration of a table work area demo\_conn with reference to the identically named dictionary structure DEMO\_CONN in a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry").

PROGRAM demo\_dynpro\_module.
TABLES demo\_conn.
...