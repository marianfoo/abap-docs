  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - SAP Annotations, ABENCDS_ANNOTATIONS_SAP, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - SAP Annotations

SAP annotations are [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") created and delivered by SAP as [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in the form of [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

The annotation definitions determine the following for these objects:

-   The name of the annotation
-   The [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") that can be specified
-   [Subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") that can be specified
-   [Annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") that can be specified

Any SAP annotations specified in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") are evaluated by SAP. These include:

-   [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\))
-   [Framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\))

ABAP annotations are evaluated when the object defined in the CDS source code is activated or when the object is used in the ABAP runtime framework. Framework-specific annotations, on the other hand, are evaluated by frameworks of other software components. An ABAP annotation can also be evaluated by frameworks of other software components. Any application annotations that are not evaluated by a framework are ignored.

Hints

-   Apart from the SAP annotations delivered by SAP, no annotations should currently be specified in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry").
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.

Continue
[ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\))
[ABAP CDS - Framework-Specific Annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\))