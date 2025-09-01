---
title: "ABAP CDS - Metadata Extensions"
description: |
  A CDS metadata extension(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm 'Glossary Entry') (MDE) adds CDS annotations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm 'Glossary Entry') to a CDS entity(http
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extensions.htm"
abapFile: "abencds_meta_data_extensions.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abencds", "meta", "extensions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_usage.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Metadata Extensions, ABENCDS_META_DATA_EXTENSIONS, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Metadata Extensions

A [CDS metadata extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") (MDE) adds [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") to a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") that are not specified in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of the [data definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_definition_glosry.htm "Glossary Entry"). Currently CDS metadata extensions can be created for [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry"), [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), and [CDS abstract entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

A CDS metadata extension is a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") that is defined and transported in a separate piece of [DDLX source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"). These pieces of DDLX source code can only be edited in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). DDLX source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). Once a CDS metadata extension has been activated for a CDS entity, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE take the annotations of the associated metadata extensions into account by default when [evaluating the annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) of this entity.

Alongside the [CDS DDL statements for data definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm), there is a CDS DDL statement for defining metadata extensions in DDLX source code. A prerequisite for extending a CDS entity with metadata extensions is that the annotation @Metadata.allowExtensions (with the default value true) is specified in the DDL source code of the CDS entity.

A CDS entity can have more than one CDS metadata extension. The following rules determine which metadata extension to use to [evaluate the annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm):

-   Each metadata extension is assigned to a layer, such as branch, partner, or customer. The layer determines the priority of the evaluation.
-   A metadata extension can be joined to a [CDS variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry"). The CDS variant can be specified during the evaluation of the annotations of a CDS entity to select the metadata extension.

In an evaluation with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the metadata extensions of the specified variant are searched for annotations first, and then the metadata extensions without a join to a variant. In each case, the priority is determined by the layers of the metadata extensions. Next, the direct and indirect annotations of the CDS entity itself are added that do not have an entry in a metadata extension.

For more information, see the following:

-   [DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddlx_syntax.htm)
-   [Evaluation of Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm)

Hints

-   The [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") and the activation of a CDS entity are completely independent of any metadata extensions for this entity. For this reason, a metadata extension can only add annotations that are not already evaluated during the activation of the CDS entity.
-   Metadata extensions separate the way metadata is specified from the actual data definition, and thus support the [separation of concerns (SoC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenseperation_concerns_guidl.htm "Guideline") concept. Specifying the annotations that are not required to activate a CDS entity outside the DDL source code of the CDS entity has the following advantages:
    -   It greatly improves the readability of the DDL source code of a data definition if it does not have to list all the metadata.
    -   The metadata can be specified and transported independently of the data definition.
    -   Separating the activation of metadata from the data definition avoids the need for mass activation of dependent repository objects that can occur when activating a data definition.
-   When using metadata extensions for [framework-specific annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk.htm), note the relevant rules. Otherwise error messages can occur during framework-specific checks.
-   Layers and CDS variants allow frameworks, partners, and customers to override the metadata of a CDS entity without making modifications.
-   Metadata extensions can be connected to the [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry"), making them switchable.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Continue
[ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddlx_syntax.htm)
[ABAP CDS - Evaluation of Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm)
![Example](exa.gif "Example") [CDS Metadata Extensions with CDS Variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotate_view_abexa.htm)