  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, ABENCDS_F1_DEFINE_ANNOTATION, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION

Syntax

*\[*[@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
*\[*[@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
...
*\[*define*\]* annotation Anno *{*  : [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)); *}*
                       *|* *{* *\[*:*\]* {[subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))}*\[*;*\]* *}*
                       *|* *{*  :   array of [arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\)) *}*

Effect

The statement define annotation defines a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") with the name Anno in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry"). The annotation Anno is the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") of the current [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), which can be structured with optional [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"). The DDLA source code of an annotation definition can contain the definition of exactly one main annotation, whose name must match the name of the DDLA source code. The names are case-sensitive. Annotations of the definition annotation, [@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), [@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), ..., can be specified before the statement define annotation. These are inherited by subannotations or overwritten there.

The statement define annotation creates the annotation Anno as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"), which is transported using the DDLA source code. The definition of the annotation Anno describes how it is to be used in other CDS source code in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   Anno is the name of the annotation. It can contain letters, numbers, and underscores, and must start with a letter. Only annotations with names defined in this way should be [used](javascript:call_link\('abencds_annotations_syntax.htm'\)).
-   One of the following must be specified after the name:
    -   A colon (:) followed by the definition of the type [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) of the annotation. Enumerations and a default value can be defined when the type is specified. The type specification must be closed using a (;).
    -   An optional colon (:) followed by the structuring of the annotation using [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) in curly brackets {...}. This can be closed using an optional semicolon (;).
    -   A colon (:) followed by the definition of the elements of an array using array of. This makes the annotation Anno into an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") of the elements defined using [arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\)). These elements can be a type specification or subannotations.

Hints

-   Put simply, an annotation definition specifies how the annotation needs to be specified in CDS source code in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.
    -   The type specification determines which [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in the annotation syntax when the annotation is used.
    -   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) or as [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).
    -   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](javascript:call_link\('abencds_annotations_syntax_array.htm'\)).
-   The syntax check in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"), and [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") specified.
-   When [annotations are evaluated](javascript:call_link\('abencds_semantics_annotation_abexa.htm'\)) in a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations are respected as specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of the entity. The associated annotation definitions are ignored.
-   Alongside the rules defined by the statement define annotation, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

Example

Defines a structured annotation. The [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") DEMOANNOSTRUCT has [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1 to subAnno4. The subannotations subAnno3 and subAnno4 are [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). (Here, subAnno4 is structured.)

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoStruct  
  { subAnno1 : Boolean default true;  
    subAnno2 : Integer enum { I1; I2; I3; } default #I1;  
    subAnno3 : array of String(10);  
    subAnno4 : array of { comp1 : String(1);  
                          comp2 : String(2);  
                        };  
  };

The annotation defined in this way allows the following to be specified in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") in a piece of [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") that defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as a view annotation ([CDS view entity](javascript:call_link\('abencds_view_entity_anno.htm'\)), [CDS projection view](javascript:call_link\('abencds_proj_view_annotations.htm'\)), [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_view_anno_v1.htm'\))) or as a [function annotation](javascript:call_link\('abencds_f1_function_annotations.htm'\)):

-   Specifies the subannotation subAnno1 once (the default value true is used here implicitly):
    
    @DemoAnnoStruct.subAnno1
    
-   Specifies the subannotations subAnno1 and subAnno2 together in curly brackets (the default values are overwritten by explicit [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") here. In subAnno2, one of the fixed enumerated values is used:
    
    @DemoAnnoStruct:{subAnno1:false, subAnno2:#I2}
    
-   Specifies annotation values for the annotation array subAnno3. The values within the quotation marks can have a maximum of ten characters:
    
    @DemoAnnoStruct.subAnno3:\['a','abc','abcdefghij'\]
    
-   Specifies annotation values for the structured annotation array subAnno4.
    
    @DemoAnnoStruct.subAnno4:\[ {comp1: 'a', comp2: 'b' },
                               {comp1: 'c', comp2: 'd' },
                               {comp1: 'e', comp2: 'f' } \]
    

Continue
[CDS DDL - DEFINE ANNOTATION, annotation\_annot](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))
[CDS DDL - DEFINE ANNOTATION, type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))
[CDS DDL - DEFINE ANNOTATION, subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))
[CDS DDL - DEFINE ANNOTATION, arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))