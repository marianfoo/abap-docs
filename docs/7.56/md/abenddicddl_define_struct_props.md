  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_structure.htm) → 

DDIC DDL - DEFINE STRUCTURE, structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancementCategory : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_sema.htm) in its original language.
-   @AbapCatalog.enhancementCategory defines the [enhancement category of the structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm). The following can be specified for enh\_cat:
    -   #NOT\_CLASSIFIED - [Not classified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm)
    -   #NOT\_EXTENSIBLE - [Cannot be enhanced (extended)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_CHARACTER - [Can be enhanced (extended) and is character-like](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (extended) and is character-like or numeric](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_ANY - [Can be enhanced (extended) in any way](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm)

Hints

-   The specification #NOT\_CLASSIFIED is only intended for displaying existing structures of this property. Any new or modified structures should always have an enhancement category.
-   The same annotations must also be specified in the definition of a DDIC database table using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_table.htm) and an append structure using [EXTEND TYPE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_extend_type.htm).
-   The syntax used to specify the properties is based on [CDS annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry"). There are, however, no visible associated [annotation definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").