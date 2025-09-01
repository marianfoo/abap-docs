  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_accesspolicy.htm) →  [CDS DCL - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_generic_aspect.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ASPECT, aspect_annot, ABENCDS_F1_DCL_AS_ANNOTATIONS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ASPECT, aspect\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) in the definition of an aspect [DEFINE ASPECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_generic_aspect.htm). The character @ must be placed in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_AS_ANNOTATIONS_1)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations   

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the PFCG mapping

Character string with a maximum of 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.