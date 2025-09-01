  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Annotation%20Syntax%2C%20ABENCDS_ANNOTATIONS_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - Annotation Syntax

Syntax

@*\[*<*\]*Anno*\[*: [value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_value.htm) *\]*
       *|**\[*: { [subannos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_subanno.htm) } *\]*
       *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_array.htm) \] *\]*
       *|**\[*[.subAnno*\[* ... *\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_name.htm)*\]*

Effect

A [CDS annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) is specified in [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry") by using fixed [annotation syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"). This syntax specifies the following:

-   The annotation is introduced using the character @ or the characters @<.
    
    @< can be used in the CDS DDL for CDS entities except for [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in order to specify the annotation after a list element in a comma-separated or semicolon-separated list.
    
-   A [main annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmain_annotation_glosry.htm "Glossary Entry") Anno consisting of letters, numbers, and underscores and starting with a letter. A main annotation that is not structured using [subannotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensub_annotation_glosry.htm "Glossary Entry") can be specified exactly once in a [scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm).
-   One of the following optional alternatives specified after a colon (:):
    -   An [annotation value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry") [value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_value.htm)
    -   [Subannotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensub_annotation_glosry.htm "Glossary Entry") [subannos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_subanno.htm) specified in curly brackets { ... }.
    -   Elements of an [annotation array](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_array_glosry.htm "Glossary Entry") [arrelem](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_array.htm) specified in square brackets \[ ... \].
-   The [main annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmain_annotation_glosry.htm "Glossary Entry") Anno chained with a [subannotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensub_annotation_glosry.htm "Glossary Entry") [subAnno](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_name.htm) using a period (.). The combination Anno.subAnno is a structured annotation name that can be extended using further subannotations.

An annotation name must be unique within a [scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm). Only those annotations should be specified for which a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") exists. Alongside the syntax rules above, the annotation definition also specifies the following:

-   The statement [define annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_annotation.htm) defines the name, the possible [annotation values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry"), the layout of the [subannotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensub_annotation_glosry.htm "Glossary Entry"), and whether the annotation in question is an [annotation array](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_array_glosry.htm "Glossary Entry").
-   The [annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_anno_annos.htm) of an annotation definition specify the scope of the annotation, whether it can be moved to metadata extensions, and whether a particular annotation value is translatable text.

In the [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry"), [DDLX source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the syntax check allows only those annotations that follow the rules of an annotation definition. In the [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [data definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_definition_glosry.htm "Glossary Entry"), annotation definitions modify the source code colors and code completion in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). Currently, however, they are not covered by the syntax check.

Hints

-   The evaluation of the annotations of CDS source code is currently the responsibility of the framework in which the [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") is used.
-   The annotations specified in the DDL source code of a CDS entity can be supplemented or overridden using the annotations of [CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). Here the annotations are specified with the same syntax as in the DDL source code of a CDS entity, with the following restrictions:
    -   @< cannot be used for introducing an annotation.
    -   Only those annotations can be specified for which this is noted in their [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").
-   There is a set of [SAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_sap.htm) predefined by SAP, comprising [ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") evaluated by the ABAP runtime framework and [framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") evaluated by other frameworks. All other annotations are not usually evaluated. It cannot be guaranteed, however, that a framework allows all annotations.
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.
-   The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE for [evaluating annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) of CDS entities return derived and inherited annotations alongside the annotations specified directly in the associated DDL source code.

Example

The following DDL source code for defining a CDS view entity contains ABAP annotations and other annotations at the allowed [positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm) (in other words, for the entire view, for the elements of the SELECT list, and for an input parameter).

@EndUserText.label: 'Demo View with Annotations'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@DemoAnno.vAnnot0
@DemoAnno.vAnnot1:'abc'
@DemoAnno.vAnnot2:123
@DemoAnno.vAnnot3:\[ 123, 456, 789 \]
@DemoAnno.vAnnot4:{ annot0, annot1:'abc', annot2:123 }
@DemoAnno.vAnnot5.annot0
@DemoAnno.vAnnot5.annot1:'abc'
@DemoAnno.vAnnot5.annot2:123
@DemoAnno.vAnnot6:\[ { annot0,       annot1:'abc', annot2:123 },
                    { annot0:false, annot1:'def', annot2:456 } \]
@DemoAnno.vAnnot7:{ annot0,
                    annot1:\[ 123, 456, 789 \],
                    annot2:{ annot0, annot1:'abc', annot2:123 } }
define view entity demo\_cds\_view\_annotations
  with parameters
    @EndUserText.label:'Input Parameter'
    @Environment.systemField:#USER
    param : syst\_uname
  as select from demo\_expressions
{
      @DemoAnno.fAnnot0
  key id   as key\_field,
      @EndUserText:{ label:'Some field', quickInfo:'Some info' }
      num1 as some\_field
}

[ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") are:

-   EndUserText.label, applies to the full view entity.
-   EndUserText.label and EndUserText.quickInfo for the element some\_field of the SELECT list
-   EndUserText.label and Environment.systemField for the input parameter param.

The remaining annotations are used as examples for [framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry"). An [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") that allows the specified annotations shown here could look like this:

@Scope:\[#ANNOTATE,
        #EXTEND\_VIEW,
        #ENTITY\]
@MetadataExtension.usageAllowed: true
define annotation DemoAnno {  
    vAnnot0: Boolean default true;  
    vAnnot1: String(3);  
    vAnnot2: Integer;  
    vAnnot3: array of Integer;  
    vAnnot4: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;}  
    vAnnot5: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;}  
    vAnnot6: array of { annot0:Boolean default true;  
                        annot1:String(3);  
                        annot2:Integer;}  
    vAnnot7: { annot0:Boolean default true;  
               annot1: array of Integer;  
               annot2: { annot0:Boolean default true;  
                         annot1:String(3);  
                         annot2:Integer;} };  
    @Scope:\[#PARAMETER\]  
    pAnnot1: String(3);  
    pAnnot2: Integer;  
    @Scope:\[#ELEMENT\]  
    fAnnot0: Boolean default true;  
    fAnnot1: String(3);  
    fAnnot2: Integer;  
    fAnnot3: array of Integer;  
    fAnnot4: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;} };

The class CL\_DEMO\_CDS\_DDL\_ANNOTATIONS access the metadata created by the specified annotations in the DDIC database tables DDHEADANNO, DDFIELDANNO, and DDPARAMETERANNO directly and using the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE and displays it. Note the following in particular:

-   The annotation @DemoAnno.vAnnot3 is an [annotation array](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_array_glosry.htm "Glossary Entry") consisting of three elements indicated by the indexes $1$, $2$, and $3$.
-   The annotations @DemoAnno.vAnnot4 and @DemoAnno.vAnnot5 show the alternatives to specifying a structured annotation using a [comma-separated list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_subanno.htm) in curly brackets and by using [structured names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_name.htm).

Unlike the table DDHEADANNO, the tables DDFIELDANNO and DDPARAMETERANNO for the elements and parameters also contain the name of the element or parameter for which an annotation was created.

Continue
[CDS DDL - Annotation Syntax, value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_value.htm)
[CDS DDL - Annotation Syntax, subannos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_subanno.htm)
[CDS DDL - Annotation Syntax, arrelem](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_array.htm)
[CDS DDL - Annotation Syntax, .subAnno](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_name.htm)