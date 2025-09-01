---
title: "Syntax"
description: |
  ... @element_annot1(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm) @element_annot2(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm) ... element1; @element_annot1(https://help.sap.com/do
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm"
abapFile: "abencds_f1_annotate_view_sele_list.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abencds", "annotate", "view", "sele", "list"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm) →  [ABAP CDS - ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm) → 

ABAP CDS - ANNOTATE VIEW, element\_list

Syntax

... [@element\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)
   *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)
    ...*\]*
    element1*\[*;
    [@element\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)
   *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)
    ...*\]*
    element2;
    ...;*\]*

Effect

Specifies annotations for the [elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") in a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") introduced with [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm). A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the ANNOTATE VIEW statement. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the view that is extended with ANNOTATE VIEW, otherwise the syntax check generates a warning. An externally visible element name must be used. This is either the direct name, an alternative element name defined with [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm), or the name defined in a [name list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_name_list.htm).

All elements of the SELECT list can be used exactly once. Allowed [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) @element\_annot can be listed before these as [element annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation [@element\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm) must be specified before each element of the list. However, the curly brackets of the ANNOTATE VIEW statement can also be empty.

Notes

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the view for its definition.

-   Element annotations can be specified here only if this is allowed in their [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm).

-   An element that is not in the SELECT list of the view is handled like a normal element in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS displays all annotations that can be specified in metadata extensions.