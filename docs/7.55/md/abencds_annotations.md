  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

ABAP CDS - Annotations

A [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") enriches [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") with metadata. It can be specified in fixed [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") for specific scopes of a [CDS](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") object, namely specific places in a piece of [CDS](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") source code.

[CDS annotation](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") definitions can be used to create [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") themselves as [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). A definition of this type specifies exactly how it is specified as part of the annotation syntax in CDS source code. The naming and software component of an annotation definition also expresses the semantics of the annotation. This includes annotation documentation containing further information about the meaning of the annotation and its environment.

The metadata specified by annotations is saved internally when a CDS object is activated. The system class CL\_DD\_DDL\_ANNOTATION\_SERVICE is used to evaluate the annotations of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Only those annotations should be specified that have an annotation definition and the way they are specified should follow the rules in the definition. SAP delivers a set of predefined [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry").

-   [Defining annotations](javascript:call_link\('abencds_anno_definition.htm'\))

-   [Specifying annotations](javascript:call_link\('abencds_anno_usage.htm'\))

-   [Evaluating annotations](javascript:call_link\('abencds_annotations_analysis.htm'\))

-   [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\))

Hint

Currently, only those [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") predefined by SAP should be used.

-   Only those annotations should be specified in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") for which an annotation definition exists.

-   Partners and customers cannot currently define their own annotations.

Continue
[ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\))
[ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\))
[ABAP CDS - Evaluation of Annotations](javascript:call_link\('abencds_annotations_analysis.htm'\))
[ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\))