  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddlx_syntax.htm) →  [ABAP CDS - ANNOTATE ENTITY, VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm) → 

ABAP CDS - ANNOTATE, metadata\_extension\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) as a metadata extension annotation in front of the statement [ANNOTATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm). in the definition of a CDS metadata extension in [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings.

-   [Metadata Annotations](#@@ITOC@@ABENCDS_F1_METADATA_EXT_ANNOS_1)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Note

All other annotations specified in this place are extension annotations [@entity\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm), [@entity\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm), ..., [@view\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm), [@view\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm), ..., used to expand the entity.

Metadata Annotations

Defines how the [CDS metadata extension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_meta_data_extension_eval.htm) is evaluated.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.layer

Defines the priority of the metadata extension when it is [evaluated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_meta_data_extension_eval.htm) by assignment to a layer. The #CUSTOMER layer has the highest priority. The #CORE layer has the lowest priority.

#CUSTOMER:
Customer
#PARTNER:
Partner
#INDUSTRY:
SAP Industry Solution
#LOCALIZATION:
SAP Application Component
#CORE:
ABAP Platform

\-

\-