---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_anno.htm"
abapFile: "abencds_simple_type_anno.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencds", "simple", "type", "anno"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm) →  [ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_types.htm) →  [CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Simple%20Type%2C%20type_annot%2C%20ABENCDS_SIMPLE_TYPE_ANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS TDL - CDS Simple Type, type\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) as a simple type annotation in the definition of a CDS simple type in front of the statement [DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_anno_annos.htm) should be specified using the value #SIMPLE\_TYPE.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value.

-   [AbapCatalog Annotations](#abencds-simple-type-anno-1-------endusertext-annotations---@ITOC@@ABENCDS_SIMPLE_TYPE_ANNO_2)
-   [ObjectModel Annotations](#abencds-simple-type-anno-3-------inheritance-of-annotations---@ITOC@@ABENCDS_SIMPLE_TYPE_ANNO_4)

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

Hint

[CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") are not supported for CDS simple types. If required, metadata extensions can be added to a CDS simple type when the simple type is used in another CDS object, such as a CDS view entity.

AbapCatalog Annotations   

Technical settings of a CDS simple type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.typeSpec.changeDocumentRelevant

Specifies whether changes to fields with reference to this simple type are logged when change document objects are involved.

true:
Change documents are written.
false:
Change documents are not written.

false

true

AbapCatalog.typeSpec.conversionExit

If specified, connects the CDS simple type to a [conversion exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry").

'name'
The name of the conversion exit can be a character string with a maximum of 5 characters consisting of letters, numbers, and underscores.

\-

\-

-   The change document settings of a CDS simple type are similar to the change document settings of DDIC data elements described in topic [DDIC - Semantic Properties of Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements_sema.htm). If a CDS simple type is based on a DDIC data element, this setting is inherited from the data element and the annotation value is set in accordance with the DDIC setting.
-   When a CDS simple type is typed with a DDIC data element, the conversion exit of the data element is automatically reused as conversion exit of the simple type.

EndUserText Annotations   

Translatable texts of a type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.heading

Translatable heading of a type.

Character string with maximum 55 characters.

\-

\-

EndUserText.label

Translatable short text of a type.

Character string with maximum 60 characters.

\-

\-

EndUserText.quickInfo

Translatable tooltip of a type.

String

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

ObjectModel Annotations   

The following subannotations of ObjectModel define technical settings for a CDS simple type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.upperCase

Specifies whether a CDS simple type is case-sensitive or not.

true
The output of this CDS simple type is all uppercase letters.
false
The output of this CDS simple type can be uppercase and lowercase letters.

false

true

-   The annotation @ObjectModel.upperCase is only available if the CDS simple type has a character-like data type. In case of numeric types, a syntax check error occurs.
-   The annotation @ObjectModel.upperCase is evaluated by frameworks such as OData.
-   The annotation @ObjectModel.upperCase is mapped to the semantic DDIC domain property Lowercase letters. If a CDS simple type is typed using a data element that in turn is typed using a DDIC domain, the annotation value is derived from the domain setting. If the domain allows only uppercase letters, then the annotation value in the simple type is set to true. If the domain also allows lowercase letters the annotation is not set at all. If not set, the default value is false.

Inheritance of Annotations   

If a CDS simple type is based on another CDS simple type, it inherits the annotations of the underlying simple type. If required, these annotations can be overwritten using locally defined annotations in the overlying simple type.

Example

The following CDS simple type is based on a built-in data type in ABAP Dictionary.

@EndUserText.heading: 'abc'
@EndUserText.label: 'myLabel'
@EndUserText.quickInfo: 'lala'  
define type demo\_simple\_type : abap.int4;

The following CDS simple type reuses the simple type DEMO\_SIMPLE\_TYPE. It inherits its properties and metadata.

define type DEMO\_SIMPLE\_TYPE\_2 : DEMO\_SIMPLE\_TYPE;

The following code snippet evaluates the annotations of the simple type using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

DATA(o) = cl\_demo\_output=>new( ).
cl\_dd\_ddl\_annotation\_service=>get\_annos\_4\_elementary\_type(
   EXPORTING
     type\_name =    'DEMO\_SIMPLE\_TYPE\_2'
   IMPORTING
     annos      =    DATA(annos) ).
o->write( annos ).
o->display( ).

Result: The following image shows the result of the evaluation of annotations. The three @EndUserText annotations and their values are inherited from the underlying CDS simple type DEMO\_SIMPLE\_TYPE.

![Figure](simple_type_anno.jpg)