  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

TABLES

[Quick Reference](javascript:call_link\('abaptables_shortref.htm'\))

Syntax

TABLES table\_wa.

Effect

This statement is not allowed in classes and declares a data object table\_wa as a table work area whose data type is adopted from the identically named structured data type table\_wa from the ABAP Dictionary. table\_wa must be defined as a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") in the ABAP Dictionary. This means either database tables or [classic views](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") can be specified for table\_wa.

Table work areas declared using TABLES are [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") and should only be declared in the global declaration part of a program for the following purpose:

-   The statement TABLES is required for exchanging data between [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") and the ABAP program, if the fields were defined in a dynpro in the program by being taken from ABAP Dictionary, . In the dynpro event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), the content of the table work area is passed to identically named dynpro fields. In [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), the system takes the data from identically named dynpro fields.
    
-   In [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), flat table work areas can be used to apply data that is provided for the event [GET table\_wa](javascript:call_link\('abapget-.htm'\)) from an associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). TABLES is synonymous with the statement [NODES](javascript:call_link\('abapnodes.htm'\)) for this purpose.
    

Programming Guideline

[No table work areas except for classic dynpros](javascript:call_link\('abentable_work_area_guidl.htm'\) "Guideline")

Notes

-   Table areas declared using TABLES behave like shared data declared using the addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)). They are shared by the programs of a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"). This feature should not be exploited due to the reasons outlined in [Program Groups in External Procedure Calls](javascript:call_link\('abenprogram_groups.htm'\)).
    
-   Table work areas declared using TABLES can be declared in subroutines and function modules, however this is not recommended. A table work area declared in a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is not local but belongs to the context of a [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry"). The table work area is visible as soon as the framework program is declared and exists for the duration of the framework program. In contrast to normal program-global data, the content of the table work areas declared in subroutines and function modules is stored temporarily when these subroutines and function modules are called. Assignments that were made during runtime of the procedure are preserved until the procedure is completed. When the procedure is exited, the table work areas are filled with the contents that they contained when the procedure was called. Table work areas declared in procedures behave like global data to which the statement [LOCAL](javascript:call_link\('abaplocal.htm'\)) is applied in the procedure.
    
-   It is advisable to always use NODES and not TABLES for interface work areas for logical databases. This makes it clear that they are nodes of logical databases.
    
-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cannot be specified after TABLES. However, a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be specified.
    
-   The variant [TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\)) is completely obsolete.
    

Example

Declaration of a table work area demo\_conn with reference to the dictionary structure of the same name DEMO\_CONN in a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry").

PROGRAM demo\_dynpro\_module.
TABLES demo\_conn.
...