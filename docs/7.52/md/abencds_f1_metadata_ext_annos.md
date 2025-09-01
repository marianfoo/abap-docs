  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

ABAP CDS - ANNOTATE VIEW, metadata\_extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies [Annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of a CDS metadata extension of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") before statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation, [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings.

-   [Metadata annotations](#abencds-f1-metadata-ext-annos-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---note--all-other-annotations-specified-in-this-place-are-extension-annotations--view\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@view\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., used to expand the view.

Metadata annotations

Control of the [evaluation of the CDS metadata extension](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.layer

Defines the priority of the metadata extension when it is [evaluated](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) by assignment to a layer. The #CUSTOMER layer has the highest priority. The #CORE layer has the lowest priority.

#CUSTOMER:
Customer
#PARTNER:
Partner
#INDUSTRY:
SAP Industry Solution
#LOCALIZATION:
SAP Application Component
#CORE:
SAP NetWeaver

\-

\-