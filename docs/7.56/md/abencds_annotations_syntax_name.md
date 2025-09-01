  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_usage.htm) →  [CDS DDL - Annotation Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) → 

CDS DDL - Annotation Syntax, .subAnno

Syntax

... .subAnno*\[*:   [value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_value.htm)  *\]*
           *|**\[*: { [subannos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_subanno.htm) } *\]*
           *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_array.htm) \] *\]*
           *|**\[*.subAnno*\[* ... *\]**\]*

Effect

Chains an [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) with a [subannotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_annotation_glosry.htm "Glossary Entry") subanno. The chaining is indicated by a period (.). The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_annotation_glosry.htm "Glossary Entry"):

-   A colon (:) followed by the following:
    -   An [annotation value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_value_glosry.htm "Glossary Entry") [value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_value.htm)
    -   Further [subannotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_annotation_glosry.htm "Glossary Entry") [subannos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_subanno.htm) specified in curly brackets { ... }.
    -   Elements of an [annotation array](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_array_glosry.htm "Glossary Entry") [arrelem](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_array.htm) in square brackets \[ ... \]
-   A chaining with a further subannotation subAnno using a period (.).

Only those subannotations should be specified that are [supported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_sub.htm) by the associated [annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

Hints

-   Alongside individual subannotations specified using structured annotation names. multiple subannotations can be specified using a [comma-separated list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_subanno.htm) and curly brackets.
-   A structured annotation name must be unique within the [scope](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_scopes.htm) of the annotation.

Example

The following [annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") is available.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The subannotations can then, for example, be specified as follows:

@DemoSubAnnos.subAnno1: true
@DemoSubAnnos.subAnno2.subAnno1: 1
@DemoSubAnnos.subAnno2.subAnno2.subAnno1: 1
@DemoSubAnnos.subAnno2.subAnno2.subAnno2: 2

This example has the same semantics as the example using [comma-separated lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_subanno.htm).