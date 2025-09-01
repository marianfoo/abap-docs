---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_758_ind
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_ap_annotations.htm"
abapFile: "abencds_f1_dcl_ap_annotations.htm"
keywords: ["do", "if", "try", "data", "abencds", "dcl", "annotations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_accesspolicy.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ACCESSPOLICY%2C%20access_policy_annot%2C%20ABENCDS_F1_DCL_AP_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations   

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

See the note

\-

\-

\-

Hint

The EndUserText.label annotation is not recommended for CDS access policies, since its value is overwritten by the identically named annotation of the [PFCG mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_pm_annotations.htm) or [aspect](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_as_annotations.htm) in question.

This means that the short text for these objects should be entered here directly and not in the CDS access policy.