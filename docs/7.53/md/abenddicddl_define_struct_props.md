  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancementCategory : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in its original language.

-   @AbapCatalog.enhancementCategory defines the [enhancement category of the structure](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The following can be specified for enh\_cat:

-   #NOT\_CLASSIFIED - [Not classified](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #NOT\_EXTENSIBLE - [Cannot be enhanced (extended)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER - [Can be enhanced (extended) and is character-like](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (extended) and is character-like or numeric](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_ANY - [Can be enhanced (extended) in any way](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

Notes

-   If specified, #NOT\_CLASSIFIED is used only to display existing structures with this property. Any new or modified structures should always have an enhancement category.

-   The same annotations must also be specified in the definition of a database table using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) and an append structure using [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

-   The syntax used to specify the properties is based on [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no visible associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").