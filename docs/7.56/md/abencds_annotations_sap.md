  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) → 

ABAP CDS - SAP Annotations

SAP annotations are [CDS annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") created and delivered by SAP as [CDS objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry") in the form of [CDS annotation definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

The annotation definitions determine the following for these objects:

-   The name of the annotation
-   The [annotation values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_value_glosry.htm "Glossary Entry") that can be specified
-   [Subannotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_annotation_glosry.htm "Glossary Entry") that can be specified
-   [Annotation arrays](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_array_glosry.htm "Glossary Entry") that can be specified

Any SAP annotations specified in [annotation syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") in [CDS source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_source_code_glosry.htm "Glossary Entry") are evaluated by SAP. These include:

-   [ABAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_abap.htm)
-   [Framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm)

ABAP annotations are evaluated when the object defined in the CDS source code is activated or when the object is used in the ABAP runtime framework. Framework-specific annotations, on the other hand, are evaluated by frameworks of other software components. An ABAP annotation can also be evaluated by frameworks of other software components. Any application annotations that are not evaluated by a framework are ignored.

Hints

-   Apart from the SAP annotations delivered by SAP, no annotations should currently be specified in [CDS source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_source_code_glosry.htm "Glossary Entry").
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.

Continue
[ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_abap.htm)
[ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm)