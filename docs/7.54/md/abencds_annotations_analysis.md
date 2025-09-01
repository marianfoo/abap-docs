  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) → 

ABAP CDS - Evaluation of Annotations

When an object defined in the [CDS source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_source_code_glosry.htm "Glossary Entry") is activated, the annotations defined in the [CDS annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") there are saved in internal database tables in ABAP Dictionary. These tables can then be accessed to evaluate the data. This is done for every annotation with correct syntax regardless of name and value.

-   [System Class CL\_DD\_DDL\_ANNOTATION\_SERVICE](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_1)

-   [Metadata Extensions](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_2)

-   [Direct, Inherited, and Derived Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_3)

-   [Subannotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_4)

-   [Annotation Arrays](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_5)

-   [Null Values](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_6)

-   [Annotations for Translatable Texts](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_7)

-   [Performing the Evaluation](#@@ITOC@@ABENCDS_ANNOTATIONS_ANALYSIS_8)

System Class CL\_DD\_DDL\_ANNOTATION\_SERVICE

The following documented system class is provided for evaluations of the annotations of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"):

CL\_DD\_DDL\_ANNOTATION\_SERVICE

The methods of this class return the annotations of CDS entities. By default, the annotations are returned from [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") first, and then from the CDS entity itself. In the latter case, a distinction can be made between direct, derived and inherited annotations, while in the case of inherited annotations the [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") (if present) are handled first. More specifically, an initial annotation value is returned in cases where an annotation has no values specified, rather than any default value defined in the annotation definition.

Notes

-   The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE also returns the annotations of CDS entities. It must be noted, however, that these only analyze the associated DDL source code. Annotations from metadata extensions, derived and inherited annotations, and the translations of annotations for translatable texts are ignored.

-   When the system class CL\_DD\_DDL\_ANNOTATION\_SERVICE is used to evaluate annotations, the annotations of the CDS entities are also respected, as specified in their [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") in [CDS annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"). The associated [annotation definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") are ignored by CL\_DD\_DDL\_ANNOTATION\_SERVICE. The validity of an annotation must be checked by the responsible framework.

-   [ADT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") supports the specification of valid annotations (namely annotations with an [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry")) by using colors in the source code and code completion.

Executable Example

[Evaluating Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_semantics_annotation_abexa.htm)

Metadata Extensions

[Metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extensions.htm) add further annotations to a CDS entity or override existing annotations. Currently metadata extensions can only be defined for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") and [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry"). Only specific annotations can be added to metadata extensions. These annotations are ignored when the CDS entity is activated.

The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE (except GET\_DIRECT\_ANNOS\_...) [respect](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extension_eval.htm) by default the existing metadata extensions in the current AS ABAP when the annotations of a CDS entity are evaluated. There can be multiple metadata extensions for an entity. These extensions can be distinguished by assignments to various layers, such as industry, partner, and customer, and by the association with [CDS variants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_variant_glosry.htm "Glossary Entry"). The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE collect all annotations belonging to the CDS entity in the following order:

-   Annotations from metadata extensions

-   Direct annotations from the data definition

-   Indirect annotations (derived and inherited annotations)

Here every annotation is only returned once for its scope. If annotations have the same name, the priority is determined first by the explicit specification of a CDS variant when the method is called, and then by the layers of the involved metadata extensions. The evaluation is performed using the following [steps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extension_eval.htm):

-   First the metadata extensions of the specified variant are evaluated. Here, an annotation of a higher level overrides the annotation of a lower layer.

-   Then the metadata extensions are evaluated, which are not linked to any variants. Once again, higher levels override lower levels.

-   Finally, the direct and indirect annotations of the CDS entity are evaluated. In the evaluation of the annotations inherited from the other CDS entities, any metadata extensions are taken into account first.

Annotations found in an earlier evaluation level always have the higher priority. An annotation from a later level is only returned if it has already been found in an earlier level. The results of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE show where an annotation was specified.

Notes

-   Annotations from metadata extensions are not stored in the same system tables as annotations from the DDL source code of a CDS entity. They can only be made accessible by using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. Other classes ignore metadata extensions.

-   For more information and examples related to evaluation, see [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extensions.htm) and [evaluation of metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extension_eval.htm).

-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Direct, Inherited, and Derived Annotations

In the evaluation of annotations of a CDS entity using methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, which cannot be overridden by metadata extensions, it is possible to distinguish between the following types of annotations:

-   Direct annotations

In the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm), these annotations are specified directly in the DDL source code of the CDS entity currently being evaluated. The methods GET\_DIRECT\_ANNOS\_ of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE only read these annotations.

-   Indirect annotations

In addition to returning direct annotations, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE (except for GET\_DIRECT\_ANNOS\_) also return annotations that are not specified in the DDL source code:

-   Inherited annotations
    If these annotations are not specified explicitly in the DDL source code of the CDS entity, they are taken from the dictionary objects used in the CDS entity, in accordance with the rules described in the class documentation of CL\_DD\_DDL\_ANNOTATION\_SERVICE. When other CDS entities are accessed, their annotations specified in metadata extensions, direct annotations, and derived annotations are inherited. Other dictionary objects, such as database tables and classic views, do not have any direct annotations. However, their annotations derived from assigned data elements are inherited. The view annotation [Metadata.ignorePropagatedAnnotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) can be used to specify whether the class CL\_DD\_DDL\_ANNOTATION\_SERVICE takes into account or ignores inherited annotations.

-   Derived annotations
    If these annotations are not explicitly specified or inherited in the DDL source code of the CDS entity, they are derived (if possible) from assigned data elements of ABAP Dictionary. The relevant annotations are the element and parameter annotations @EndUserText.Label, @EndUserText.QuickInfo and @EndUserText.Heading, which are supplied with texts according to rules (described in the class documentation CL\_DD\_DDL\_ANNOTATION\_SERVICE) from the field labels of assigned data elements. The annotation @EndUserText.Heading is only currently possible as an implicit annotation for this purpose. If specified directly in the DDL source code of a data definition, an annotation is not recognized as a language-dependent text. @EndUserText.Heading is also not allowed in the [DDLX source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_meta_data_extensions.htm).

Notes

-   Inheritances apply especially to those [element annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm) of [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") published in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm). A [publication](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) of a CDS association specified in a different CDS view inherits the element annotations of preceding publications.

-   Annotations derived from data elements depend on the assignment of data elements to elements of the current CDS entity. This assignment is performed in the internal metadata of a CDS entity and is not dependent on inheritance.

-   The annotations types described here apply especially to evaluations using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. Other APIs can evaluate the underlying metadata differently.

Example

The following three pieces of [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") define three views; the first two views access the third view. The only difference between the first two views is the specification of annotation @Metadata.ignorePropagatedAnnotations:true. Every view contains an element with a direct element annotation @EndUserText.label.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANIN1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_anno\_inheritance\_1
  as select from
    demo\_cds\_anno\_inheritance\_2
    {
          @EndUserText.label: 'XXXXXXXXXX'
      key id,
      key carrier,
      key flight,
          departure,
          destination
    }      

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANIN1A'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
define view demo\_cds\_anno\_inheritance\_1A
  as select from
    demo\_cds\_anno\_inheritance\_2
    {
          @EndUserText.label: 'XXXXXXXXXX'
      key id,
      key carrier,
      key flight,
          departure,
          destination
    }        

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANIN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_anno\_inheritance\_2
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
    {
      key spfli.carrid                               as id,
      key scarr.carrname                             as carrier,
          @EndUserText.label: 'YYYYYYYYYY'
      key spfli.connid                               as flight,
          spfli.cityfrom                             as departure,
          cast( spfli.cityto as demo\_destination )   as destination
    }    

The program DEMO\_CDS\_DERIVED\_INHERIT\_ANNOS uses a method of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE to read the element annotations of the first two CDS views:

-   Almost all element annotations in this example are from annotations derived from data elements. This applies especially to the annotation @EndUserText.heading, which cannot be specified in the source code. The texts of the element destination originate from data element demo\_destination, which overrides the automatic assignment to S\_TO\_CITY in a CAST expression.

-   Without the annotation @Metadata.ignorePropagatedAnnotations:true, the derived annotations are inherited from the used objects. The SOURCEOBJECT column contains the names of the objects.

-   If annotation @Metadata.ignorePropagatedAnnotations:true is used, the derivation is performed in the current view and the column SOURCEOBJECT only displays names.

-   The value of annotation @EndUserText.label of element id originates from the annotation specified directly in the first two views.

-   The value of annotation @EndUserText.label of element flight originates in the first view from the annotation, which it inherits from the second view. In the second view, this inheritance is suppressed by the annotation @Metadata.ignorePropagatedAnnotations:true.

The ABAPCATALOG.INTERNAL.ISMANDT annotation that is visible in the output is an internal annotation, which indicates the client field of a client-specific CDS entity.

Subannotations

In the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm), [subannotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensub_annotation_glosry.htm "Glossary Entry") are specified either as [comma-separated lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_subanno.htm) in curly brackets or using [structured names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). The way this metadata is saved internally is independent of the way it is specified and the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE always return subannotations as an individual annotation with a structured name.

Example

Subannotations specified as followed

@DemoAnno: {subAnno1: true,
            subAnno2: { subAnno1: 1,
                        subAnno2: { subAnno1: 1,
                                    subAnno2: 2 } } }

are the same as those specified as follows

@DemoAnno.subAnno1: true
@DemoAnno.subAnno2.subAnno1: 1
@DemoAnno.subAnno2.subAnno2.subAnno1: 1
@DemoAnno.subAnno2.subAnno2.subAnno2: 2

Evaluating either of the above using the method GET\_DIRECT\_ANNOS\_4\_ENTITY of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE produces the following

ANNONAME

VALUE

DEMOANNO.SUBANNO1

true

DEMOANNO.SUBANNO2.SUBANNO1

1

DEMOANNO.SUBANNO2.SUBANNO2.SUBANNO1

1

DEMOANNO.SUBANNO2.SUBANNO2.SUBANNO2

2

Annotation Arrays

In the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm), [annotation arrays](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") are created using [comma-separated lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_array.htm) in square brackets after a specified annotation. When this metadata is saved internally, the elements of annotation arrays are saved as individual annotations. Here, they are saved under the name of the array. A consecutive index enclosed in $ characters $1$, $2$, ... is appended to this array. Accordingly, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE return an array as individual annotations.

Note

For annotation arrays, the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) in DDL source code for [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") entities is not as strict as the syntax of [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation.htm) for [annotation definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

-   Array elements do not always have to have the same type in the annotation syntax.

-   Arrays can be nested directly in the annotation syntax.

In the internal metadata (and hence in the results of the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE), array elements with non-matching types are returned just as specified in the annotation syntax. Directly nested arrays are not saved but they are counted when the elements are indexed.

Example

The [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") specified as follows is valid [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm), but it cannot have an [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

@DemoAnno: \[ true,
             \[1,2,3\],
             { subAnno1:1, subAnno2:2} \]

The elements of the error do not have matching types and the second element is a directly nested array. The method GET\_DIRECT\_ANNOS\_4\_ENTITY of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE produces the following:

ANNONAME

VALUE

DEMOANNO$1$

true

DEMOANNO$3$.SUBANNO1

1

DEMOANNO$3$.SUBANNO2

2

It should be noted that the nested array is counted but not returned.

Null Values

For each [element annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm) of a CDS entity that is not part of an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"), the special value [null](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_value.htm) can be specified (without quotation marks). The value null leads to a syntax error at other positions. The value null means that the annotation is not returned by default by the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. The default setting can be changed with the method input parameter NULL\_VALUES.

Notes

-   Null values are only intended to hide unwanted, derived and inherited annotations in the evaluation of the annotations of a CDS entity.

-   A null value is inherited like every value. A direct annotation of a CDS entity overwrites the annotations taken from used dictionary objects. This means any values can be overwritten with the null value; a null value itself can also be overwritten.

-   In the [DDLX source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of [CDS metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), null values can be specified in exactly the same way as in the [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a CDS entity.

-   The evaluation only filters the annotations out, if a null value has been specified for their identifiers.

-   If specified, @annotation.annotation1:null only affects the identifier @annotation.annotation1 but does not affect, for example, @annotation.annotation1.annotation2.

-   If the null value is specified for an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"), this value affects the entire array. @annot:null specified for an inherited annotation array @annot:\[ ..., ..., ...\] is applied to all elements of the array.

-   The evaluation filters annotations with null values - completely regardless of whether they are predefined [SAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_annotation_glosry.htm "Glossary Entry") or not.

Example

The following two [CDS source codes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") define two views; the second view accesses the first view. In the first view, @EndUserText annotations with literal values are specified for every element of the SELECT list. In the second view, some of these values are overwritten with the value null. This occurs in the first view for the special annotation @EndUserText.heading.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_NULL1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_anno\_null\_value\_1
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
    {          
          @EndUserText.heading: null
          @EndUserText.label: 'ID'
          @EndUserText.quickInfo: 'ID'
      key spfli.carrid                               as id,
          @EndUserText.label: 'Carrier'
          @EndUserText.quickInfo: 'Carrier'
      key scarr.carrname                             as carrier,
          @EndUserText.label: 'Flight'
          @EndUserText.quickInfo: 'Flight'
      key spfli.connid                               as flight
    }      

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_NULL2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_anno\_null\_value\_2
  as select from
    demo\_cds\_anno\_null\_value\_1
    {
          @EndUserText: null
      key id,
          @EndUserText.heading: null
          @EndUserText.label: null
      key carrier,
          @EndUserText.heading: null
          @EndUserText.quickInfo: null
      key flight
    }        

The program DEMO\_CDS\_NULL\_ANNOS uses a method of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE to read the element annotations of the two CDS views. Annotations containing the value null in the second view are not reset.

-   The annotation @EndUserText: null is ignored in front of the element id. This annotation does not filter out all @EndUserText annotations of this element. This annotation would overwrite an element annotation @EndUserText: ... of the first view, which is not specified there since it is not a valid [ABAP annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry").

-   The annotations @EndUserText.label: null and @EndUserText.quickInfo: null in front of the elements carrier or flight overwrite the values of the annotations, which were inherited from the first view. They are not returned by the evaluation.

-   The derived annotation @EndUserText.Heading is assigned the value null for every element. This occurs for in the first view for the element id. For this view, the evaluation returns the annotation for the other two elements. In the second view, the value null is also set for this view and the evaluation does not return the annotation @EndUserText.Heading for any of the elements of the CDS view.

Annotations for Translatable Texts

The annotation values of annotations for which this is defined in their [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") (using the annotation [@LanguageDependency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)) are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry").

The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Notes

-   Even in [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), the annotations for translatable texts are handled specially and are created in special tables, which are connected to the translation.

-   The program ABAP\_DOCU\_TRANSLATABLE\_ANNOS shows all annotations for translatable texts.

Example

The following [CDS source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), which defines a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), contains the specific ABAP annotations that are introduced using EndUserText.

@EndUserText.label: 'Demo View mit Texten'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.sqlViewName: 'DEMO\_VIEW\_TEXTS'
define view demo\_cds\_text\_annotations
with parameters
@EndUserText.label:'Eingabeparameter'
param : abap.int4
as select from
demo\_expressions
{
@EndUserText:{ label:'Ein Element', quickInfo:'Feld' }
id
}    

The program DEMO\_CDS\_DDL\_TEXTS uses methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE to access the associated texts (in a language-dependent way). The original language of the view is German and the German texts must be available in every system. If an English translation exists, this is also read and displayed.

Performing the Evaluation

[ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") and [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") are evaluated in different ways:

-   ABAP annotations

[ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") define technical and semantic attributes of a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). They are usually evaluated for every CDS object when activated by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). ABAP annotations can modify the behavior of ABAP SQL statements that access a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"). One important example is how the client-dependency of a CDS entity is defined using the associated ABAP annotation.

-   Framework-specific annotations

In most cases, the [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") must be evaluated by the frameworks of the corresponding software components using a suitable API and are not relevant for activations and the ABAP runtime environment. Here, the names and values of these framework-specific annotations must follow the rules of the relevant framework. For SAP components, these can be taken from the tables of the [Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) document.

Annotations that are not evaluated by the ABAP runtime environment or by frameworks of other software components are usually ignored.

Continue
![Example](exa.gif "Example") [ABAP CDS, Evaluation of Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_semantics_annotation_abexa.htm)