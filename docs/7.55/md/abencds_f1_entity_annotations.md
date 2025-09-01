---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm"
abapFile: "abencds_f1_entity_annotations.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abencds", "entity", "annotations"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - Common DDL Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_common_elements.htm) → 

CDS DDL - entity\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) as an entity annotation in front of the statement in the definition of a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"). Can be used for the following entities:

-   [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm)

-   [DEFINE VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm)

-   [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_table_function.htm)

-   [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

-   [DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm)

-   [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_abstract_entity.htm)

-   [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)

The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #ENTITY.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-entity-annotations-1--------metadata-annotations---@ITOC@@ABENCDS_F1_ENTITY_ANNOTATIONS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS entity

Character string with maximum 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Metadata Annotations

Defines whether metadata extensions are allowed for a CDS entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.allowExtensions

Defines whether a CDS entity can be extended with [metadata extensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_meta_data_extensions.htm)

true:
The current CDS entity can be extended.
false:
The current CDS entity cannot be extended.

false

true

Hint

Currently, [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") cannot be extended via metadata extensions. The annotation Metadata.allowExtensions can be specified for a table function but it is currently ignored.