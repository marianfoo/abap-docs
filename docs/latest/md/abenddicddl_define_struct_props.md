  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20structure_annos%2C%20ABENDDICDDL_DEFINE_STRUCT_PROPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

DDIC DDL - DEFINE STRUCTURE, structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancement.category : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   @EndUserText.label defines the [short text of the structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in its original language in quotation marks.
-   @AbapCatalog.enhancement.category defines the [enhancement category of the structure](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The following can be specified for enh\_cat:
    -   #NOT\_CLASSIFIED - [Not classified](javascript:call_link\('abenddic_structures_enh_cat.htm'\))
    -   #NOT\_EXTENSIBLE - [Cannot be enhanced](javascript:call_link\('abenddic_structures_enh_cat.htm'\))
    -   #EXTENSIBLE\_CHARACTER - [Can be enhanced (character-like)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))
    -   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (character-like or numeric)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))
    -   #EXTENSIBLE\_ANY - [Can be enhanced (deep)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

Hints

-   The specification #NOT\_CLASSIFIED is only intended for displaying existing structures of this property. Any new or modified structures should always have an enhancement category.
-   The syntax used to specify the properties is similar to [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").
-   The same annotations must also be specified in the definition of a DDIC database table using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) and an append structure using [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).