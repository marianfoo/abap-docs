  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20SAP%20Annotations%2C%20ABENCDS_ANNOTATIONS_SAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - SAP Annotations

SAP annotations are [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") created and delivered by SAP as [CDS objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry") in the form of [CDS annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

The annotation definitions determine the following for these objects:

-   The name of the annotation
-   The [annotation values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_value_glosry.htm "Glossary Entry") that can be specified
-   [Subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensub_annotation_glosry.htm "Glossary Entry") that can be specified
-   [Annotation arrays](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") that can be specified

Any SAP annotations specified in [annotation syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") in [CDS source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_source_code_glosry.htm "Glossary Entry") are evaluated by SAP. These include:

-   [ABAP annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm)
-   [Framework-specific annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm)

ABAP annotations are evaluated when the object defined in the CDS source code is activated or when the object is used in the ABAP runtime framework. Framework-specific annotations, on the other hand, are evaluated by frameworks of other software components. An ABAP annotation can also be evaluated by frameworks of other software components. Any application annotations that are not evaluated by a framework are ignored.

Hints

-   Apart from the SAP annotations delivered by SAP, no annotations should currently be specified in [CDS source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_source_code_glosry.htm "Glossary Entry").
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.

Continue
[ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm)
[ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm)