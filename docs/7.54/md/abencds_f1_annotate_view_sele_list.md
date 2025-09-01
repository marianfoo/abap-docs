  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddlx_syntax.htm) →  [ABAP CDS - ANNOTATE ENTITY, VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_annotate_view.htm) → 

ABAP CDS - ANNOTATE, element\_list

Syntax

... [@element\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm)
   *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm)
    ...*\]*
    element1*\[*;
    [@element\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm)
   *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm)
    ...*\]*
    element2;
    ...;*\]*

Effect

Specifies annotations for the following:

-   [Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm) in the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_element_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

The parameters in a [CDS metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") introduced using [ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_annotate_view.htm). A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the statement ANNOTATE. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the entity that is annotated using ANNOTATE. If not, the syntax check produces a warning. An externally visible element name must be used. This is either the direct name, an alternative element name defined with [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm), or the name defined in a [name list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_name_list.htm).

All elements of the SELECT list can be used exactly once. Valid [SAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) @element\_annot can be specified before these as [element annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation [@element\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm) must be specified before each element of the list. However, the curly brackets of the ANNOTATE statement can also be empty.

Notes

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the entity for its definition.

-   Element annotations can be specified here only if this is allowed in their [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm).

-   An element that is not in the element list of the entity is handled like a normal element in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.