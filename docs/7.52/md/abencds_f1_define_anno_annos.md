  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION, annotation\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an annotation definition annotation in an [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) . The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation, @Scope, must be specified here using the value #ANNOTATE.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") and in front of the names of [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. No other annotations can be specified here.

-   [Scope Annotations](#abencds-f1-define-anno-annos-1--------languagedependency-annotations---@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_2)

-   [MetadataExtension Annotations](#abencds-f1-define-anno-annos-3--------abapannotation-annotations---@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_4)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Scope Annotations

Define the [scope of the annotation](javascript:call_link\('abencds_annotations_scopes.htm'\)).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Scope:\[ \]

Defines the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the annotation.

#ANNOTATION:
CDS annotation definition
#VIEW:
CDS view
#EXTEND\_VIEW:
CDS view extension
#TABLE\_FUNCTION:
CDS table function
#PARAMETER:
Parameter
#ELEMENT:
Element
#ANNOTATE\_VIEW:
CDS metadata extension
#ROLE:
CDS role
#SIMPLE\_TYPE:
not currently used

\-

\-

The [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of each annotation must be defined using @Scope. It determines the places in CDS source code where the annotation can be [specified](javascript:call_link\('abencds_anno_usage.htm'\)). @Scope is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"), which means that multiple [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

LanguageDependency Annotations

Define the translatability of texts with the type [String](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

LanguageDependency.maxLength

Specifies that the [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") is a translatable text.

The maximum usable length of the text. The recommended length is determined by the length determined in the [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)). No values greater than the recommended value can be specified.

\-

\-

Notes

-   The annotation LanguageDependency.maxLength can only be specified for annotations of [String](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) with lengths between 10 and 255. This means that it can usually only be used directly in front of subannotations of this type.

-   The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

MetadataExtension Annotations

Specify how annotations are moved to [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

MetadataExtension.usageAllowed

Specifies whether the annotation can be specified in a metadata extension when the statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) is used.

true:
The annotation can be specified in a metadata extension
false:
The annotation cannot be specified in a metadata extension

false

true

Note

Alongside @MetadataExtension.usageAllowed:true, the scope specified using the annotation @Scope determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be permitted for this scope.

AbapAnnotation Annotations

Specifies how the annotation can be used.

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

This translation does not reflect the current version of the documentation.