  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [CDS DDL - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ANNOTATION%2C%20annotation_annot%2C%20ABENCDS_F1_DEFINE_ANNO_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - DEFINE ANNOTATION, annotation\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an annotation definition annotation in front of the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) or in front of a [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") in an [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation @Scope must be specified here using the value #ANNOTATION.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") and in front of the names of [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapAnnotation Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_1)
-   [API Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_2)
-   [CompatibilityContract Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_3)
-   [LanguageDependency Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_4)
-   [MetadataExtension Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_5)
-   [Scope Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_6)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

Specify the visibility for an [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

API.state\[ \]

Defines for which ABAP language version the annotation is [released as an API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").

#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM:
The annotation is released for ABAP language version [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry").
#RELEASED\_FOR\_KEY\_USER\_APPS:
The annotation is released for ABAP language version [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry").
#NOT\_RELEASED:
The annotation is not released as an API.

#NOT\_RELEASED

\-

CompatibilityContract Annotations   

Define the usability of the annotation in CDS entities with a certain [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry").

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

Defines whether the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be modified in a CDS entity with release contract rc after its release

#ANY:
All annotation values can be changed as required
#UPDATE:
Specific annotation values can be changed as required
#FALSE\_TO\_TRUE:
Specific truth values can be changed from false to true.
#TRUE\_TO\_FALSE:
Specific truth values can be changed from true to false.
#ADD:
Annotation values can be added to [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") but not removed
#REMOVE:
Annotation values can be removed from [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") but not added
#NONE:
Annotation values cannot be modified
#CUSTOM:
The way the annotation values can be modified is defined and checked specific to the framework in question

\-

\-

Here, the subannotation rc specifies a [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry") in the annotation syntax. The following can be specified:

-   c0
    
    The [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") allows extension fields to be added at specific extension points.
    
-   c1
    
    The [C1 contract](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry") guarantees a stable interface for use within AS ABAP.
    
-   c2
    
    The [C2 contract](javascript:call_link\('abenc2_contract_glosry.htm'\) "Glossary Entry") guarantees a stable interface for uses outside AS ABAP too.
    

In annotation definitions delivered by SAP, the annotations @CompatibilityContract must be specified for the release contract C1 and C2, both for the main annotation and for every subannotation. They define the usability of the main annotations and subannotations in the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") of a CDS entity with respect to their release contract. A CDS entity is mapped to a release contract using tools such as [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or in special transactions, and not in its CDS source code.

Hint

When specified, the annotation @CompatibilityContract can be governed by framework-specific conditions, such as the features of analytic frameworks that consume CDS views. SAP reserves the right to modify @CompatibilityContract if these framework-specific conditions change.

Example

Example of the use of the annotation @CompatibilityContract in an [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). The annotation that follows can be used in CDS entities with the release contract c1. Here, it can added and removed even after the release of a CDS entity and the annotation values can be modified. It cannot be used in CDS entities with the release contract c0 and c2.

@CompatibilityContract: {
   c0: { usageAllowed: false },
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }

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

Hints

-   The annotation LanguageDependency.maxLength can only be specified for annotations of [String](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) with lengths between 10 and 255. This means that it can usually only be used directly in front of subannotations of this type.
-   The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

MetadataExtension Annotations   

Specify how annotations are moved to [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

MetadataExtension.usageAllowed

Specifies whether the annotation can be specified in a metadata extension when the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) is used.

true:
The annotation can be specified in a metadata extension
false:
The annotation cannot be specified in a metadata extension

false

true

Hint

Alongside @MetadataExtension.usageAllowed:true, the scope specified using the annotation @Scope determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be allowed for this scope.

Scope Annotations   

Define the [scope of the annotation](javascript:call_link\('abencds_annotations_scopes.htm'\)).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Scope\[ \]

Defines the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the annotation.

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

\- The [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of each annotation must be defined using @Scope. It determines the places in CDS source code where the annotation can be [specified](javascript:call_link\('abencds_anno_usage.htm'\)). @Scope is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"), which means that multiple [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

Hint

While the annotation value #ENTITY defines that an annotation can be specified in the definition of any CDS entity, this is not the case for the annotation value #VIEW. The annotation value #VIEW defines that an annotation can be specified in the definition of one of the possible kinds of CDS views (view entity, projection view, DDIC-based view) but it does not define exactly where. There is a special a set of [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be used in [DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") only. The ABAP annotations that can be specified for a kind of view are documented for the respective DEFINE statement. For an overview see [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).