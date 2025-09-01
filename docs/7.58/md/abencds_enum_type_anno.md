  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20type_annot%2C%20ABENCDS_ENUM_TYPE_ANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS TDL - CDS Enumerated Type, type\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an enumerated type annotation in the definition of a CDS enumerated type in front of the statement [DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified using the value #SIMPLE\_TYPE.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value.

-   [AbapCatalog Annotations](#@@ITOC@@ABENCDS_ENUM_TYPE_ANNO_1)
-   [EndUserText Annotations](#@@ITOC@@ABENCDS_ENUM_TYPE_ANNO_2)
-   [ObjectModel Annotations](#@@ITOC@@ABENCDS_ENUM_TYPE_ANNO_3)
-   [Inheritance of Annotations](#@@ITOC@@ABENCDS_ENUM_TYPE_ANNO_4)

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

Hint

[CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE) are not supported for CDS enumerated types. If required, the metadata of an enumerated type can be extended when the enumerated type is used in another CDS object, such as a CDS view entity.

AbapCatalog Annotations   

Technical settings of a CDS enumerated type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.typeSpec.changeDocumentRelevant

Specifies whether changes to fields with reference to this enumerated type are logged when change document objects are involved.

true:
Change documents are written.
false:
Change documents are not written.

false

true

AbapCatalog.typeSpec.conversionExit

If specified, connects the CDS enumerated type to a [conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry").

'name'
The name of the conversion exit can be a character string with a maximum of 5 characters consisting of letters, numbers, and underscores.

\-

\-

-   The change document settings of a CDS enumerated type are similar to the change document settings of DDIC data elements described in topic [DDIC - Semantic Properties of Data Elements](javascript:call_link\('abenddic_data_elements_sema.htm'\)).

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

ObjectModel Annotations   

The following subannotations of ObjectModel define technical settings for a CDS enumerated type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.upperCase

Specifies whether a CDS enumerated type is transformed to all uppercase letters or not.

true
The output of this CDS enumerated type is all uppercase letters.
false
The output of this CDS enumerated type can be uppercase and lowercase letters. Lowercase letters are preserved.

false

true

-   The annotation @ObjectModel.upperCase is only available if the CDS enumerated type has a character-like data type. In case of numeric types, a syntax check error occurs.
-   The annotation @ObjectModel.upperCase is evaluated by frameworks such as OData.

Inheritance of Annotations   

If a CDS enumerated type is based on another CDS enumerated type, it inherits the annotations of the underlying enumerated type. If required, these annotations can be overwritten using locally defined annotations in the overlying enumerated type.