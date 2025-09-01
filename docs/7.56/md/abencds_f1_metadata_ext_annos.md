  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

CDS DDL - ANNOTATE, metadata\_extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a metadata extension annotation in front of the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) in the definition of a CDS metadata extension in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings.

-   [Metadata Annotations](#abencds-f1-metadata-ext-annos-1---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---hint--all-other-annotations-specified-in-this-place-are-extension-annotations--entity\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@entity\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., [@view\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@view\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., used to expand the entity.

Metadata Annotations

Defines how the [CDS metadata extension](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) is evaluated.

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
ABAP platform

\-

\-