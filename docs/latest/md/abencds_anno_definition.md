---
title: "ABAP CDS - Definition of Annotations"
description: |
  The CDS annotations(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_source_code_glosry.htm 'Glossary Entry') that can be specified in CDS source code(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm 'Glossary Entry') are govern
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition.htm"
abapFile: "abencds_anno_definition.htm"
keywords: ["do", "if", "try", "data", "abencds", "anno", "definition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Definition%20of%20Annotations%2C%20ABENCDS_ANNO_DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP CDS - Definition of Annotations

The [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_source_code_glosry.htm "Glossary Entry") that can be specified in [CDS source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") are governed by [CDS annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). A CDS annotation definition defines a [CDS annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") as a [CDS object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry"). It describes how this annotation is intended to be used in [CDS source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The description covers the following:

-   The name of a [main annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmain_annotation_glosry.htm "Glossary Entry")
-   The possible [annotation values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_value_glosry.htm "Glossary Entry")
-   Whether it can be structured using [subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensub_annotation_glosry.htm "Glossary Entry")
-   Whether [annotation arrays](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") can be specified

An annotation is defined in a separate piece of [DDLA source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and is transported with this code. DDLA source code for annotation definitions can define exactly one identically named [CDS annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddla_syntax.htm) using the CDS DDL statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation.htm) (this annotation can, however, be the main annotation of subannotations). DDLA source code of this type can only be edited in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). DDLA source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Hints

-   The annotations defined as CDS objects are used by the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") for source code coloring and Code Completion when [annotations are specified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_usage.htm).
-   The syntax check for the definition of a CDS entity in [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry").
-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_annotation_glosry.htm "Glossary Entry") should currently be used.
-   [SAP Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_sap.htm) lists all DDLA source code delivered by SAP.

Continue
[ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddla_syntax.htm)