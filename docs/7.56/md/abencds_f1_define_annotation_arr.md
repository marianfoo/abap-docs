  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation.htm) → 

CDS DDL - DEFINE ANNOTATION, arrelem

Syntax

... *{*[type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm);*}**|**{* {[subannos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_sub.htm)}*\[*;*\]**}*

Effect

Defines the elements of an [annotation array](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_array_glosry.htm "Glossary Entry"). If specified after a colon of a [main annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_annotation_glosry.htm "Glossary Entry") or [subannotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_annotation_glosry.htm "Glossary Entry") defined using [define annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation.htm), array of turns the annotation specified in front of the colon into an array of the elements specified after array of:

-   [type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) defines an annotation array for [annotation values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The following applies here:
    -   The addition [enum](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) can be used
    -   The addition [default](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) cannot be used
    -   The type specification must be closed using a semicolon (;).
-   {[subannos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_sub.htm)} defines an annotation array for [subannotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_annotation_glosry.htm "Glossary Entry") in curly brackets. If specified, subannotations can be closed using an optional semicolon (;).

The same information can be specified for [type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) and [subannos](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_sub.htm) as for elementary annotations. It is not possible to define a further annotation array directly. Subannotations can, however, be arrays themselves.

Hint

When an annotation array is used in [annotation syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) in CDS source code, a [comma-separated list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_array.htm) is specified in square brackets. This list contains the information defined by [type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) or [structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_sub.htm) as often as necessary.

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