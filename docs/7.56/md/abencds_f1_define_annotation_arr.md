  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [CDS DDL - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

CDS DDL - DEFINE ANNOTATION, arrelem

Syntax

... *{*[type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\));*}**|**{* {[subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))}*\[*;*\]**}*

Effect

Defines the elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). If specified after a colon of a [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") or [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") defined using [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)), array of turns the annotation specified in front of the colon into an array of the elements specified after array of:

-   [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) defines an annotation array for [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The following applies here:
    -   The addition [enum](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) can be used
    -   The addition [default](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) cannot be used
    -   The type specification must be closed using a semicolon (;).
-   {[subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))} defines an annotation array for [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") in curly brackets. If specified, subannotations can be closed using an optional semicolon (;).

The same information can be specified for [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) and [subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) as for elementary annotations. It is not possible to define a further annotation array directly. Subannotations can, however, be arrays themselves.

Hint

When an annotation array is used in [annotation syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) in CDS source code, a [comma-separated list](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) is specified in square brackets. This list contains the information defined by [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) or [structure](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) as often as necessary.

Example

Defines an annotation array DemoAnnoIntegerArray for number values.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
annotation DemoAnnoIntegerArray : array of Integer;

The annotation can be used as follows in CDS source code, for example, to specify as many numbers as necessary:

@DemoAnnoIntegerArray:\[123,456,789\]

Example

Defines a structured annotation array DemoAnnoStructArray.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
annotation DemoAnnoStructArray : array of  
             { subAnno1: Boolean default true;  
               subAnno2: String(100) default 'whatsoever'; };

The annotation can be used as follows in CDS source code, for example, to specify as many subannotations as necessary:

@DemoAnnoStructArray:\[{subAnno1,      subAnno2},
                      {subAnno1:true, subAnno2:'Some Text'},
                      {subAnno1:true, subAnno2:'Other Text'} \]