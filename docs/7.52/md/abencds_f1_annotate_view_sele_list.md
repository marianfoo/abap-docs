  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

ABAP CDS - ANNOTATE VIEW, element\_list

Syntax

... [@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))
    ...*\]*
    element1*\[*;
    [@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))
    ...*\]*
    element2;
    ...;*\]*

Effect

Specifies annotations for the [elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced with [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the ANNOTATE VIEW statement. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the view that is extended with ANNOTATE VIEW, otherwise the syntax check generates a warning. An externally visible element name must be used. This is either the direct name, an alternative element name defined with [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\)), or the name defined in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)).

All elements of the SELECT list can be used exactly once. Allowed [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @element\_annot can be listed before these as [element annotations](javascript:call_link\('abencds_f1_element_annotations.htm'\)). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation [@element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)) must be specified before each element of the list. However, the curly brackets of the ANNOTATE VIEW statement can also be empty.

Notes

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the view for its definition.

-   Element annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).

-   An element that is not in the SELECT list of the view is handled like a normal element in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS displays all annotations that can be specified in metadata extensions.