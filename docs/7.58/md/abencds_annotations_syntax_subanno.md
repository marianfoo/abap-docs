  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [CDS DDL - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Annotation%20Syntax%2C%20subannos%2C%20ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CDS DDL - Annotation Syntax, subannos

Syntax

... subAnno1*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](javascript:call_link\('abencds_annotations_syntax_name.htm'\))*\]*,
    subAnno2*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](javascript:call_link\('abencds_annotations_syntax_name.htm'\))*\]*,
    ...

Effect

Comma-separated list of [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1, subAnno2, ... in the curly brackets of an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)). The name of a subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry"):

-   A colon (:) followed by the following:
    -   An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))
    -   Further [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subannos specified in curly brackets { ... }.
    -   Elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) in square brackets \[ ... \]
-   The chaining of the subannotations subAnno1, subAnno2, ... with a further subannotation [subAnno](javascript:call_link\('abencds_annotations_syntax_name.htm'\)) using a period (.).

Only those subannotations should be specified that are [supported](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) by the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Hint

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

Example

The following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") is available.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The annotation can then, for example, be specified as follows:

@DemoSubAnnos: {subAnno1: true,
                subAnno2: { subAnno1: 1,
                            subAnno2: { subAnno1: 1,
                                        subAnno2: 2 } } }

This example has the same semantics as the example using [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).