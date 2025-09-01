---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_753_ind
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm"
abapFile: "abencds_f1_dcl_pm_annotations.htm"
keywords: ["do", "if", "try", "abencds", "dcl", "annotations"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_PM_ANNOTATIONS_1)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the PFCG mapping

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.