  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

ABAP CDS - Annotation Syntax, subannos

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

Note

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

Example

Applies the following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The annotation can then, for example, be specified as follows:

@DemoSubAnnos: {subAnno1: true,
                subAnno2: {subAnno1: 1,
                            subAnno2: {subAnno1: 1,
                                        subAnno2: 2 } } }

This example has the same semantics as the example using [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).