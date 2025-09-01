  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddla_syntax.htm) →  [ABAP CDS - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm) → 

ABAP CDS - DEFINE ANNOTATION, subannos

Syntax

... *\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)*\]*
    *\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)*\]*
    ...
    subAnno1*{*: [type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm);*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_arr.htm)*}*;
    *\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)*\]*
    *\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)*\]*
    ...
    subAnno2*{*: [type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm);*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_arr.htm)*}*;
    ...

Effect

Structures a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") using [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1, subAnno2, .... The subannotations are defined in a semicolon-separated list in curly brackets { ... } in the statement [define annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm) (a semicolon must be placed after the final entry in the list too). The names of the subannotations of an annotation must be unique.

Each subannotation is specified using the same syntax as when the [main annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_annotation_glosry.htm "Glossary Entry") is specified after [define annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm). This means the following:

-   The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter.

-   [type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm) can be used to define the possible [annotation value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry") for a subannotation

-   A subannotation can itself be structured using further subannotations subannos

-   A subannotation can be defined as an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") of array elements [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_arr.htm) using array of

Annotation definition annotations [@annotation\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), [@annotation\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), ... can be specified in front of each subannotation. These annotations override any identically named annotation definition annotations specified for the structured annotation itself. Any annotations not specified directly in front of a subannotation are inherited by the next higher annotation in the hierarchy.

Notes

-   Colons (:) in front of the opening curly bracket and semicolons (;) after the closing curly structuring bracket { ... } are optional.

-   In the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm), structured annotations are specified either using [comma-separated lists in curly brackets](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_subanno.htm) or using [structured names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm).

Example

Defines a structured [main annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_annotation_glosry.htm "Glossary Entry") DemoAnnoMain with three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry"), two of which are themselves structured. The semicolons after the closing curly structuring brackets are omitted here.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoMain{ subAnno1: Boolean;  
                                subAnno2{ subsubAnno1:String(3);  
                                          subsubAnno2:Integer;}  
                                subAnno3{ subsubAnno1:String(3);  
                                          subsubAnno2:Integer;} }

This annotation can be used as follows in CDS source code:

@DemoAnnoMain: {subAnno1:true,
                subAnno2:{subsubAnno1:'X',
                          subsubAnno2:100},
                subAnno3:{subsubAnno1:'Y',
                          subsubAnno2:200} }

The exact same result can be achieved as follows:

@DemoAnnoMain.subAnno1:true
@DemoAnnoMain.subAnno2.subsubAnno1:'X'
@DemoAnnoMain.subAnno2.subsubAnno2:100
@DemoAnnoMain.subAnno3.subsubAnno1:'Y'
@DemoAnnoMain.subAnno3.subsubAnno2:200