  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [CDS DDL - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

CDS DDL - Annotation Syntax, .subAnno

Syntax

... .subAnno*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*.subAnno*\[* ... *\]**\]*

Effect

Chains an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) with a [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subanno. The chaining is indicated by a period (.). The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry"):

-   A colon (:) followed by the following:
    -   An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))
    -   Further [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) specified in curly brackets { ... }.
    -   Elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) in square brackets \[ ... \]
-   A chaining with a further subannotation subAnno using a period (.).

Only those subannotations should be specified that are [supported](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) by the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Hints

-   Alongside individual subannotations specified using structured annotation names. multiple subannotations can be specified using a [comma-separated list](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) and curly brackets.
-   A structured annotation name must be unique within the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the annotation.

Example

The following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") is available.

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

This example has the same semantics as the example using [comma-separated lists](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)).