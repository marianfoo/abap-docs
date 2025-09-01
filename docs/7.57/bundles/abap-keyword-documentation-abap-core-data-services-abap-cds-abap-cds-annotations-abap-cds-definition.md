# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Annotations / ABAP CDS - Definition of Annotations

Included pages: 9


### abencds_anno_definition.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Definition of Annotations, ABENCDS_ANNO_DEFINITION, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Definition of Annotations

The [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_source_code_glosry.htm "Glossary Entry") that can be specified in [CDS source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") are governed by [CDS annotation definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). A CDS annotation definition defines a [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") as a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry"). It describes how this annotation is intended to be used in [CDS source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The description covers the following:

-   The name of a [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry")
-   The possible [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry")
-   Whether it can be structured using [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry")
-   Whether [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") can be specified

An annotation is defined in a separate piece of [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and is transported with this code. DDLA source code for annotation definitions can define exactly one identically named [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) using the CDS DDL statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) (this annotation can, however, be the main annotation of subannotations). DDLA source code of this type can only be edited in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). DDLA source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Hints

-   The annotations defined as CDS objects are used by the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") for source code coloring and Code Completion when [annotations are specified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_usage.htm).
-   The syntax check for the definition of a CDS entity in [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry").
-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_annotation_glosry.htm "Glossary Entry") should currently be used.
-   [SAP Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_sap.htm) lists all DDLA source code delivered by SAP.

Continue
[ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm)


### abencds_f1_ddla_syntax.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - DDL for Annotation Definitions, ABENCDS_F1_DDLA_SYNTAX, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - DDL for Annotation Definitions

Alongside the [DDL statements for data definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm), the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in ABAP CDS makes it possible to define [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") as [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") in [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry"). The following statement is used here:

-   [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm)

Hints

-   The [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of annotation definitions has its own editor in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DDLA source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   Two slashes (//) can be used as [comment characters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm) in [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for annotation definitions, but not two dashes (\--).

Continue
[CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm)


### abencds_f1_define_annotation.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, ABENCDS_F1_DEFINE_ANNOTATION, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION

Syntax

*\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
*\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
...
*\[*define*\]* annotation Anno *{*  : [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm); *}*
                       *|* *{* *\[*:*\]* {[subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)}*\[*;*\]* *}*
                       *|* *{*  :   array of [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm) *}*

Effect

The statement define annotation defines a [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") with the name Anno in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in the [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry"). The annotation Anno is the [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") of the current [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), which can be structured with optional [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"). The DDLA source code of an annotation definition can contain the definition of exactly one main annotation, whose name must match the name of the DDLA source code. The names are case-sensitive. Annotations of the definition annotation, [@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), [@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), ..., can be specified before the statement define annotation. These are inherited by subannotations or overwritten there.

The statement define annotation creates the annotation Anno as a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry"), which is transported using the DDLA source code. The definition of the annotation Anno describes how it is to be used in other CDS source code in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"):

-   Anno is the name of the annotation. It can contain letters, numbers, and underscores, and must start with a letter. Only annotations with names defined in this way should be [used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm).
-   One of the following must be specified after the name:
    -   A colon (:) followed by the definition of the type [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) of the annotation. Enumerations and a default value can be defined when the type is specified. The type specification must be closed using a (;).
    -   An optional colon (:) followed by the structuring of the annotation using [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") [subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm) in curly brackets {...}. This can be closed using an optional semicolon (;).
    -   A colon (:) followed by the definition of the elements of an array using array of. This makes the annotation Anno into an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") of the elements defined using [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm). These elements can be a type specification or subannotations.

Hints

-   Put simply, an annotation definition specifies how the annotation needs to be specified in CDS source code in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.
    -   The type specification determines which [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified in the annotation syntax when the annotation is used.
    -   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_subanno.htm) or as [structured names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_name.htm).
    -   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_array.htm).
-   The syntax check in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"), [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"), and [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") specified.
-   When [annotations are evaluated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_semantics_annotation_abexa.htm) in a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations are respected as specified in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of the entity. The associated annotation definitions are ignored.
-   Alongside the rules defined by the statement define annotation, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

Example

Defines a structured annotation. The [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") DEMOANNOSTRUCT has [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1 to subAnno4. The subannotations subAnno3 and subAnno4 are [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry"). (Here, subAnno4 is structured.)

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoStruct  
  { subAnno1 : Boolean default true;  
    subAnno2 : Integer enum { I1; I2; I3; } default #I1;  
    subAnno3 : array of String(10);  
    subAnno4 : array of { comp1 : String(1);  
                          comp2 : String(2);  
                        };  
  };

The annotation defined in this way allows the following to be specified in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") in a piece of [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") that defines a [CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a view annotation ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm), [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm), [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm)) or as a [function annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_function_annotations.htm):

-   Specifies the subannotation subAnno1 once (the default value true is used here implicitly):
    
    @DemoAnnoStruct.subAnno1
    
-   Specifies the subannotations subAnno1 and subAnno2 together in curly brackets (the default values are overwritten by explicit [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") here. In subAnno2, one of the fixed enumerated values is used:
    
    @DemoAnnoStruct:{subAnno1:false, subAnno2:#I2}
    
-   Specifies annotation values for the annotation array subAnno3. The values within the quotation marks can have a maximum of ten characters:
    
    @DemoAnnoStruct.subAnno3:\['a','abc','abcdefghij'\]
    
-   Specifies annotation values for the structured annotation array subAnno4.
    
    @DemoAnnoStruct.subAnno4:\[ {comp1: 'a', comp2: 'b' },
                               {comp1: 'c', comp2: 'd' },
                               {comp1: 'e', comp2: 'f' } \]
    

Continue
[CDS DDL - DEFINE ANNOTATION, annotation\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)
[CDS DDL - DEFINE ANNOTATION, type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm)
[CDS DDL - DEFINE ANNOTATION, subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)
[CDS DDL - DEFINE ANNOTATION, arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm)


### abencds_f1_define_anno_annos.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, annotation_annot, ABENCDS_F1_DEFINE_ANNO_ANNOS, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION, annotation\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) as an annotation definition annotation in front of the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) or in front of a [subannotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") in an [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation @Scope must be specified here using the value #ANNOTATION.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") and in front of the names of [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapAnnotation Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_1)
-   [API Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_2)
-   [CompatibilityContract Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_3)
-   [LanguageDependency Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_4)
-   [MetadataExtension Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_5)
-   [Scope Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_6)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapAnnotation Annotations   

Specify how the annotation can be used.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapAnnotation.definitionHidden

Hidden annotation

true:
The annotation is used for tests and demonstrations. It is not detected using source code color and or by Code Completion and cannot be used in production CDS source code
false:
Public annotation for use in production CDS source code

false

true

API Annotations   

Specify the visibility for an [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

API.state\[ \]

Defines for which ABAP language version the annotation is [released as an API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").

#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM:
The annotation is released for ABAP language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").
#RELEASED\_FOR\_KEY\_USER\_APPS:
The annotation is released for ABAP language version [ABAP for Key Users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry").
#NOT\_RELEASED:
The annotation is not released as an API.

#NOT\_RELEASED

\-

CompatibilityContract Annotations   

Define the usability of the annotation in CDS entities with a certain [release contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

CompatibilityContract.rc.usageAllowed

Defines the usability in CDS entities with release contract rc.

true:
The annotation can be used
false:
The annotation cannot be used

false

true

CompatibilityContract.rc.allowedChanges.annotation\[ \]

Defines whether the annotation can be added or removed in a CDS entity with release contract rc after its release

#ANY:
The annotation can be added and removed
#ADD:
The annotation can be added but not removed
#REMOVE:
The annotation can be removed but not added
#NONE:
The annotation cannot be added or removed
#CUSTOM:
The way the annotation can be modified is defined and checked specific to the framework in question

\-

\-

CompatibilityContract.rc.allowedChanges.value\[ \]

Defines whether the [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be modified in a CDS entity with release contract rc after its release

#ANY:
All annotation values can be changed as required
#UPDATE:
Specific annotation values can be changed as required
#FALSE\_TO\_TRUE:
Specific truth values can be changed from false to true.
#TRUE\_TO\_FALSE:
Specific truth values can be changed from true to false.
#ADD:
Annotation values can be added to [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") but not removed
#REMOVE:
Annotation values can be removed from [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") but not added
#NONE:
Annotation values cannot be modified
#CUSTOM:
The way the annotation values can be modified is defined and checked specific to the framework in question

\-

\-

Here, the subannotation rc specifies a [release contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry") in the annotation syntax. The following can be specified:

-   c0
    
    The [C0 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry") allows extension fields to be added at specific extension points.
    
-   c1
    
    The [C1 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry") guarantees a stable interface for use within AS ABAP.
    
-   c2
    
    The [C2 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc2_contract_glosry.htm "Glossary Entry") guarantees a stable interface for uses outside AS ABAP too.
    

In annotation definitions delivered by SAP, the annotations @CompatibilityContract must be specified for the release contract C1 and C2, both for the main annotation and for every subannotation. They define the usability of the main annotations and subannotations in the [CDS source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_source_code_glosry.htm "Glossary Entry") of a CDS entity with respect to their release contract. A CDS entity is mapped to a release contract using tools such as [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") or in special transactions, and not in its CDS source code.

Hint

When specified, the annotation @CompatibilityContract can be governed by framework-specific conditions, such as the features of analytic frameworks that consume CDS views. SAP reserves the right to modify @CompatibilityContract if these framework-specific conditions change.

Example

Example of the use of the annotation @CompatibilityContract in an [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). The annotation that follows can be used in CDS entities with the release contract c1. Here, it can added and removed even after the release of a CDS entity and the annotation values can be modified. It cannot be used in CDS entities with the release contract c0 and c2.

@CompatibilityContract: {
   c0: { usageAllowed: false },
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }

LanguageDependency Annotations   

Define the translatability of texts with the type [String](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

LanguageDependency.maxLength

Specifies that the [annotation value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") is a translatable text.

The maximum usable length of the text. The recommended length is determined by the length determined in the [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm). No values greater than the recommended value can be specified.

\-

\-

Hints

-   The annotation LanguageDependency.maxLength can only be specified for annotations of [String](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) with lengths between 10 and 255. This means that it can usually only be used directly in front of subannotations of this type.
-   The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

MetadataExtension Annotations   

Specify how annotations are moved to [CDS metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

MetadataExtension.usageAllowed

Specifies whether the annotation can be specified in a metadata extension when the statement [ANNOTATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view.htm) is used.

true:
The annotation can be specified in a metadata extension
false:
The annotation cannot be specified in a metadata extension

false

true

Hint

Alongside @MetadataExtension.usageAllowed:true, the scope specified using the annotation @Scope determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be allowed for this scope.

Scope Annotations   

Define the [scope of the annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Scope\[ \]

Defines the [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm) of the annotation.

#ACCESSPOLICY:
CDS access policy
#ANNOTATE:
CDS metadata extension
#ANNOTATION:
CDS annotation
#ASPECT:
not yet documented
#ELEMENT:
Element
#ENTITY:
any CDS
#EXTEND\_VIEW:
CDS view extension
#PARAMETER:
Parameter
#PFCG\_MAPPING:
PFCG mapping
#ROLE:
CDS role
#SERVICE:
CDS service definition
#SIMPLE\_TYPE:
currently not used
#TABLE\_FUNCTION:
CDS table function
#VIEW:
CDS view (view entity, projection view, DDIC-based view)

\-

\- The [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm) of each annotation must be defined using @Scope. It determines the places in CDS source code where the annotation can be [specified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_usage.htm). @Scope is an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry"), which means that multiple [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

Hint

While the annotation value #ENTITY defines that an annotation can be specified in the definition of any CDS entity, this is not the case for the annotation value #VIEW. The annotation value #VIEW defines that an annotation can be specified in the definition of one of the possible kinds of CDS views (view entity, projection view, DDIC-based view) but it does not define exactly where. There is a special a set of [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be used in [DDIC-based views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") only. The ABAP annotations that can be specified for a kind of view are documented for the respective DEFINE statement. For an overview see [ABAP Annotation Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_abap_tables.htm).


### abencds_f1_define_annotation_type.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, type, ABENCDS_F1_DEFINE_ANNOTATION_TYPE, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION, type

Syntax

... dtype *\[*enum { SYMBOL1; SYMBOL2; ... }*\]* *\[*default val*|*#SYMBOL*\]*

Effect

Defines the [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") to be specified when a [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") defined using [define annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) is [used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) in a CDS entity.

dtype is used to define the type. The following tables show the possible options for dtype and their meaning for the annotation values. dtype and any predefined values are case-sensitive.

Value Types

dtype

Annotation Value

Boolean

Truth values true and false.

Decimal(len,dec)

Numeric literal without quotation marks and with an optional decimal point and a maximum of len minus dec integer digits and a maximum of dec decimal places. A number between 1 and 31 can be specified for len and a number between 0 and 14 can be specified for dec, but dec cannot be greater than len.

DecimalFloat

Numeric literal without quotation marks. The same values can be specified as in the source field of an ABAP conversion from [c to decfloat34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_c.htm)

Integer

Numeric literal without quotation marks and decimal separator in the value range of the ABAP type [i](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm).

String(len)

Character literal in quotation marks with a maximum length len. A number between 0 and 1298 can be specified for len.

Reference Types

dtype

Annotation Value

AssociationRef

Name of a CDS association that is exposed in the SELECT list where the annotation is used. If the association is defined in the same CDS entity, the annotation value must be the association's name. If the association is defined in another entity, the annotation value must be a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).

ElementRef

Name of an element of the CDS entity where the annotation is used. For elements of association targets, the annotation value is a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).

EntityRef

Name of any CDS entity.

KeyElement

Name of a key field of the CDS entity where the annotation is used.

LocalDefinitionRef

Name of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the current CDS entity. The data source can either be defined after FROM or as an [association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_association_v2.htm). If an alias name is specified for the data source, this alias name must be specified as annotation value.

ParameterRef

Name of a parameter of the CDS entity where the annotation is used.

When [used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_value.htm), the annotation value of a reference type must be specified as a character literal in quotation marks and without blanks. The object specified must exist.

enum { SYMBOL1; SYMBOL; ... } can be used to specify a semicolon-separated (;) list of enumeration symbols SYMBOL1, SYMBOL2, ... in uppercase letters and in curly brackets. A semicolon must also be placed after the final entry in the list here. When an annotation is used, only one of the enumeration symbols prefixed with the # character can be used as an [annotation value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"). If enumeration symbols are specified for the type String, the symbols become the enumerated values explicitly. In this case, the length specified for String must be at least as long as the longest enumeration symbol.

default can be used to specify a type-compliant default value applied when an annotation is used and no explicit [annotation value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") is specified. The following applies here:

-   Only true can be specified as a default value for the type Boolean.
-   If enumeration symbols are defined, the default value of one of these symbols must be prefixed with the # character.
-   No default value can be specified for reference types.
-   No default values can be specified for the elements of an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry").

Hints

-   The truth values for the type boolean can also be specified as 'true' and 'false' in quotation marks.
-   The smallest feasible size is 1 for one character.
-   The default value defined using default describes the default value applied when the annotation is used in its framework. If an annotation is not used, there can be another default value (described in the documentation of the annotation). The default value of the annotation definition is ignored when the annotation is saved and [evaluated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) internally.

Example

The following annotation definition specifies truth values as possible annotation values of the annotation:

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoBoolean : Boolean;

The annotation can be used as followed in CDS source code:

-   @DemoAnnoBoolean: true
-   @DemoAnnoBoolean: false
-   @DemoAnnoBoolean: 'true'
-   @DemoAnnoBoolean: 'false'

Example

The following annotation definition specifies enumerated values as possible annotation values of the annotation. In the case of the type String, the enumeration symbols are also the enumerated values and a length of at least 10 must be specified for the type, since the longest enumeration symbol as 10 characters.

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoEnum : String(10)  
                                 enum{SHORT\_TEXT;TEXT;LONG\_TEXT;};

The annotation can be used as followed in CDS source code:

-   @DemoAnnoEnum: #SHORT\_TEXT
-   @DemoAnnoEnum: #TEXT
-   @DemoAnnoEnum: #LONG\_TEXT

Example

The following annotation definition specifies numeric literals as possible annotation values of the annotation (a default value is defined here).

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoDefault : Integer default 0;

The annotation can be used as follows in CDS source code, with and without a value being specified:

-   @DemoAnnoDefault
-   @DemoAnnoDefault: 100

Example

The following annotation definition has incorrect syntax. The specified length 1 is not sufficient for the specified default value of length 3.

annotation DemoAnno : String(1) default 'XXX';


### abencds_f1_define_annotation_sub.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, subannos, ABENCDS_F1_DEFINE_ANNOTATION_SUB, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION, subannos

Syntax

... *\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
    *\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
    ...
    subAnno1*{*: [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm);*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm)*}*;
    *\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
    *\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
    ...
    subAnno2*{*: [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm);*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm)*}*;
    ...

Effect

Structures a [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") using [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1, subAnno2, ... . The subannotations are defined in a semicolon-separated list in curly brackets { ... } in the statement [define annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) (a semicolon must be placed after the final entry in the list too). The names of the subannotations of an annotation must be unique.

Each subannotation is specified using the same syntax as when the [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") is specified after [define annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm). This means the following:

-   The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter.
-   [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) can be used to define the possible [annotation value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") for a subannotation
-   A subannotation can itself be structured using further subannotations subannos
-   A subannotation can be defined as an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") of array elements [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm) using array of

Annotation definition annotations [@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), [@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), ... can be specified in front of each subannotation. These annotations override any identically named annotation definition annotations specified for the structured annotation itself. Any annotations not specified directly in front of a subannotation are inherited by the next higher annotation in the hierarchy.

Hints

-   Colons (:) in front of the opening curly bracket and semicolons (;) after the closing curly structuring bracket { ... } are optional.
-   In the [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm), structured annotations are specified either using [comma-separated lists in curly brackets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_subanno.htm) or using [structured names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_name.htm).

Example

Defines a structured [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") DemoAnnoMain with three [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"), two of which are themselves structured. The semicolons after the closing curly structuring brackets are omitted here.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoMain{ subAnno1: Boolean;  
                                subAnno2{ subsubAnno1:String(3);  
                                          subsubAnno2:Integer;}  
                                subAnno3{ subsubAnno1:String(3);  
                                          subsubAnno2:Integer;} }

The annotation can be used, for example, as followed in CDS source code:

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


### abencds_f1_define_annotation_arr.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, arrelem, ABENCDS_F1_DEFINE_ANNOTATION_ARR, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION, arrelem

Syntax

... *{*[type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm);*}**|**{* {[subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)}*\[*;*\]**}*

Effect

Defines the elements of an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry"). If specified after a colon of a [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") or [subannotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") defined using [define annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm), array of turns the annotation specified in front of the colon into an array of the elements specified after array of:

-   [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) defines an annotation array for [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The following applies here:
    -   The addition [enum](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) can be used
    -   The addition [default](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) cannot be used
    -   The type specification must be closed using a semicolon (;).
-   {[subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)} defines an annotation array for [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") in curly brackets. If specified, subannotations can be closed using an optional semicolon (;).

The same information can be specified for [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) and [subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm) as for elementary annotations. It is not possible to define a further annotation array directly. Subannotations can, however, be arrays themselves.

Hint

When an annotation array is used in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) in CDS source code, a [comma-separated list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_array.htm) is specified in square brackets. This list contains the information defined by [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) or [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm) as often as necessary.

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


### abencds_f1_define_annotation.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddla_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ANNOTATION, ABENCDS_F1_DEFINE_ANNOTATION, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ANNOTATION

Syntax

*\[*[@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
*\[*[@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)*\]*
...
*\[*define*\]* annotation Anno *{*  : [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm); *}*
                       *|* *{* *\[*:*\]* {[subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)}*\[*;*\]* *}*
                       *|* *{*  :   array of [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm) *}*

Effect

The statement define annotation defines a [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") with the name Anno in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in the [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry"). The annotation Anno is the [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") of the current [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), which can be structured with optional [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"). The DDLA source code of an annotation definition can contain the definition of exactly one main annotation, whose name must match the name of the DDLA source code. The names are case-sensitive. Annotations of the definition annotation, [@annotation\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), [@annotation\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm), ..., can be specified before the statement define annotation. These are inherited by subannotations or overwritten there.

The statement define annotation creates the annotation Anno as a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry"), which is transported using the DDLA source code. The definition of the annotation Anno describes how it is to be used in other CDS source code in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"):

-   Anno is the name of the annotation. It can contain letters, numbers, and underscores, and must start with a letter. Only annotations with names defined in this way should be [used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm).
-   One of the following must be specified after the name:
    -   A colon (:) followed by the definition of the type [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm) of the annotation. Enumerations and a default value can be defined when the type is specified. The type specification must be closed using a (;).
    -   An optional colon (:) followed by the structuring of the annotation using [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") [subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm) in curly brackets {...}. This can be closed using an optional semicolon (;).
    -   A colon (:) followed by the definition of the elements of an array using array of. This makes the annotation Anno into an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") of the elements defined using [arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm). These elements can be a type specification or subannotations.

Hints

-   Put simply, an annotation definition specifies how the annotation needs to be specified in CDS source code in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.
    -   The type specification determines which [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified in the annotation syntax when the annotation is used.
    -   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_subanno.htm) or as [structured names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_name.htm).
    -   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_array.htm).
-   The syntax check in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"), [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry"), and [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") specified.
-   When [annotations are evaluated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_semantics_annotation_abexa.htm) in a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations are respected as specified in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of the entity. The associated annotation definitions are ignored.
-   Alongside the rules defined by the statement define annotation, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

Example

Defines a structured annotation. The [main annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_annotation_glosry.htm "Glossary Entry") DEMOANNOSTRUCT has [subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1 to subAnno4. The subannotations subAnno3 and subAnno4 are [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry"). (Here, subAnno4 is structured.)

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoStruct  
  { subAnno1 : Boolean default true;  
    subAnno2 : Integer enum { I1; I2; I3; } default #I1;  
    subAnno3 : array of String(10);  
    subAnno4 : array of { comp1 : String(1);  
                          comp2 : String(2);  
                        };  
  };

The annotation defined in this way allows the following to be specified in [annotation syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") in a piece of [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") that defines a [CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a view annotation ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm), [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm), [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm)) or as a [function annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_function_annotations.htm):

-   Specifies the subannotation subAnno1 once (the default value true is used here implicitly):
    
    @DemoAnnoStruct.subAnno1
    
-   Specifies the subannotations subAnno1 and subAnno2 together in curly brackets (the default values are overwritten by explicit [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") here. In subAnno2, one of the fixed enumerated values is used:
    
    @DemoAnnoStruct:{subAnno1:false, subAnno2:#I2}
    
-   Specifies annotation values for the annotation array subAnno3. The values within the quotation marks can have a maximum of ten characters:
    
    @DemoAnnoStruct.subAnno3:\['a','abc','abcdefghij'\]
    
-   Specifies annotation values for the structured annotation array subAnno4.
    
    @DemoAnnoStruct.subAnno4:\[ {comp1: 'a', comp2: 'b' },
                               {comp1: 'c', comp2: 'd' },
                               {comp1: 'e', comp2: 'f' } \]
    

Continue
[CDS DDL - DEFINE ANNOTATION, annotation\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)
[CDS DDL - DEFINE ANNOTATION, type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_type.htm)
[CDS DDL - DEFINE ANNOTATION, subannos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_sub.htm)
[CDS DDL - DEFINE ANNOTATION, arrelem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation_arr.htm)


### abencds_f1_ddla_syntax.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - DDL for Annotation Definitions, ABENCDS_F1_DDLA_SYNTAX, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - DDL for Annotation Definitions

Alongside the [DDL statements for data definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm), the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in ABAP CDS makes it possible to define [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") as [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") in [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry"). The following statement is used here:

-   [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm)

Hints

-   The [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of annotation definitions has its own editor in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DDLA source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   Two slashes (//) can be used as [comment characters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm) in [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for annotation definitions, but not two dashes (\--).

Continue
[CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm)
