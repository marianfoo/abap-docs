  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddla_syntax.htm) →  [ABAP CDS - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation.htm) → 

ABAP CDS - DEFINE ANNOTATION, annotation\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as an annotation definition annotation in front of the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation.htm) or in front of a [subannotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensub_annotation_glosry.htm "Glossary Entry") in an [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation @Scope must be specified here using the value #ANNOTATION.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_annotation_glosry.htm "Glossary Entry") and in front of the names of [subannotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensub_annotation_glosry.htm "Glossary Entry"). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [AbapAnnotation Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_1)

-   [API Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_2)

-   [CompatibilityContract Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_3)

-   [LanguageDependency Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_4)

-   [MetadataExtension Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_5)

-   [Scope Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_6)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

Specify how the annotation can be released.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

API.state\[ \]

Defines how the annotation can be released.

#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM:
The annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").
#RELEASED\_FOR\_KEY\_USER\_APPS:
The annotation can be used in CDS entities defined in [ABAP for Key Users](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry"). This is not yet possible.
#NOT\_RELEASED:
The annotation cannot be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").

#NOT\_RELEASED

\-

CompatibilityContract Annotations

Define the usability of the annotation in CDS entities as specified by a [release contract](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelease_contract_glosry.htm "Glossary Entry").

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

Defines whether the [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be modified in a CDS entity with release contract rc after its release

#ANY:
All annotation values can be changed as required
#UPDATE:
Specific annotation values can be changed as required
#FALSE\_TO\_TRUE:
Specific truth values can be changed from false to true.
#TRUE\_TO\_FALSE:
Specific truth values can be changed from true to false.
#ADD:
Annotation values can be added to [annotation arrays](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") but not removed
#REMOVE:
Annotation values can be removed from [annotation arrays](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") but not added
#NONE:
Annotation values cannot be modified
#CUSTOM:
The way the annotation values can be modified is defined and checked specific to the framework in question

\-

\-

Here, the subannotation rc specifies a [release contract](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelease_contract_glosry.htm "Glossary Entry") in the annotation syntax. The following can be specified:

-   c0

The release contract C0 permits extension fields to be added at specific extension points.

-   c1

The release contract C1 guarantees a stable interface for use within AS ABAP.

-   c2

The release contract C2 guarantees a stable interface for uses outside AS ABAP too.

In annotation definitions delivered by SAP, the annotations @CompatibilityContract must be specified for the release contract C1 and C2, both for the main annotation and for every subannotation. They define the usability of the main annotations and subannotations in the [CDS source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_source_code_glosry.htm "Glossary Entry") of a CDS entity with respect to their release contract. A CDS entity is mapped to a release contract using tools such as [ADT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") or in special transactions, and not in its CDS source code.

Note

When specified, the annotation @CompatibilityContract can be governed by framework-specific conditions, such as the features of analytic frameworks that consume CDS views. SAP reserves the right to modify @CompatibilityContract if these framework-specific conditions change.

Example

Example of the use of the annotation @CompatibilityContract in an [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). The annotation that follows can be used in CDS entities with the release contract c1. Here, it can added and removed even after the release of a CDS entity and the annotation values can be modified. It cannot be used in CDS entities with the release contract c0 and c2.

@CompatibilityContract: {
   c0: { usageAllowed: false },
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }

LanguageDependency Annotations

Define the translatability of texts with the type [String](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation_type.htm).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

LanguageDependency.maxLength

Specifies that the [annotation value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry") is a translatable text.

The maximum usable length of the text. The recommended length is determined by the length determined in the [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation_type.htm). No values greater than the recommended value can be specified.

\-

\-

Notes

-   The annotation LanguageDependency.maxLength can only be specified for annotations of [String](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_annotation_type.htm) with lengths between 10 and 255. This means that it can usually only be used directly in front of subannotations of this type.

-   The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

MetadataExtension Annotations

Specify how annotations are moved to [CDS metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

MetadataExtension.usageAllowed

Specifies whether the annotation can be specified in a metadata extension when the statement [ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_annotate_view.htm) is used.

true:
The annotation can be specified in a metadata extension
false:
The annotation cannot be specified in a metadata extension

false

true

Note

Alongside @MetadataExtension.usageAllowed:true, the scope specified using the annotation @Scope determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be permitted for this scope.

Scope Annotations

Define the [scope of the annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Scope\[ \]

Defines the [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) of the annotation.

#ACCESSPOLICY:
CDS access policy
#ANNOTATE:
CDS metadata extension
#ANNOTATION:
CDSm annotation
#ASPECT:
not yet documented
#ELEMENT:
Element
#ENTITY:
CDS entity
#EXTEND\_VIEW:
CDS view extension
#PARAMETER:
Parameter
#PFCG\_MAPPING:
PFCG mapping
#ROLE:
CDS role
#SERVICE:
not yet documented
#SIMPLE\_TYPE:
currently not used
#TABLE\_FUNCTION:
CDS table function
#VIEW:
CDS-View

\-

\-

The [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) of each annotation must be defined using @Scope. It determines the places in CDS source code where the annotation can be [specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_usage.htm). @Scope is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"), which means that multiple [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

This translation does not reflect the current version of the documentation.