---
title: "ABAP CDS - Annotations"
description: |
  A CDS annotation(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm 'Glossary Entry') uses metadata to enrich CDS objects(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm 'Glossary Entry'). It can be specified in fixed an
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm"
abapFile: "abencds_annotations.htm"
keywords: ["do", "if", "try", "class", "data", "abencds", "annotations"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) → 

ABAP CDS - Annotations

A [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") uses metadata to enrich [CDS objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). It can be specified in fixed [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") for specific scopes of a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"), namely specific places in a piece of [CDS source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_source_code_glosry.htm "Glossary Entry").

[CDS annotation definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") can be used to create [CDS annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") themselves as [CDS objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). A definition of this type dictates precisely how it is specified as part of the annotation syntax in CDS source code. The naming and software component of an annotation definition also expresses the semantics of the annotation. This includes annotation documentation containing further information about the meaning of the annotation and its environment.

The metadata specified by annotations is saved internally when a CDS object is activated. The system class CL\_DD\_DDL\_ANNOTATION\_SERVICE is used to evaluate the annotations of [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry").

Only those annotations should be specified that have an annotation definition and the way they are specified should follow the rules in the definition. SAP delivers a set of predefined [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_annotation_glosry.htm "Glossary Entry").

-   [Defining annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition.htm)

-   [Specifying annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm)

-   [Evaluating annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm)

-   [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm)

Note

Currently, only those [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_annotation_glosry.htm "Glossary Entry") predefined by SAP should be used.

-   Only those annotations should be specified in [CDS short text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_source_code_glosry.htm "Glossary Entry") for which an annotation definition exists.

-   Partners and customers cannot currently define their own annotations.

Continue
[ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition.htm)
[ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm)
[ABAP CDS - Evaluation of Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm)
[ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm)