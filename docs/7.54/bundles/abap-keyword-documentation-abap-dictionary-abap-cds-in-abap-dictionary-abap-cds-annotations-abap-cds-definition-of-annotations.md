# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Definition of Annotations

Included pages: 9


### abencds_anno_definition.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) → 

ABAP CDS - Definition of Annotations

The [CDS annotations](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") that can be specified in [CDS source code](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be dictated by [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). A CDS annotation definition defines a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). It describes how this annotation is intended to be used in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The description covers the following:

-   The name of a [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry")

-   The possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry")

-   Whether it can be structured using [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry")

-   Whether [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") can be specified

An annotation is defined in a separate piece of [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") and is transported with this code. DDLA source code for annotation definitions can define precisely one identically named [CDS annotation](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) using the CDS DDL statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) (this annotation can, however, be the main annotation of subannotations). DDLA source code of this type can only be edited in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") DDLA source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Notes

-   The annotations defined as CDS objects are used by the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") for source code coloring and Code Completion when [annotations are specified](javascript:call_link\('abencds_anno_usage.htm'\)).

-   The syntax check for the definition of a CDS entity in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry").

-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") should currently be used.

-   [SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) lists all DDLA source code delivered by SAP.

Continue
[ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\))


### abencds_f1_ddla_syntax.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) → 

ABAP CDS - DDL for Annotation Definitions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") as [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))

Notes

-   The [DDLA source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of annotation definitions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DDLA source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for annotation definitions, but not two dashes (\--).

Continue
[ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))


### abencds_f1_define_annotation.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION

Syntax

*\[*[@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
*\[*[@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
...
*\[*define*\]* annotation Anno *{*  :   [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)); *}*
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

Notes

-   Put simply, an annotation definition dictates how the annotation needs to be specified in CDS source code in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.

-   The type specification determines which [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in the annotation syntax when the annotation is used.

-   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) or as [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

-   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](javascript:call_link\('abencds_annotations_syntax_array.htm'\)).

-   The syntax check in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"), and [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") specified.

-   When [annotations are evaluated](javascript:call_link\('abencds_semantics_annotation_abexa.htm'\)) in a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations are respected as specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of the entity. The associated annotation definitions are ignored.

-   Alongside the rules defined by the statement define annotation, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

Example

Defines a structured annotation. The [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") DemoAnnoStruct has [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1 to subAnno4. The subannotations subAnno3 and subAnno4 are [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). (Here, subAnno4 is structured.)

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoStruct  
  { subAnno1 : Boolean default true;  
    subAnno2 : Integer enum { I1; I2; I3; } default #I1;  
    subAnno3 : array of String(10);  
    subAnno4 : array of { comp1 : String(1);  
                          comp2 : String(2);  
                        };  
  };

The annotation defined in this way permits the following to be specified in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") in a piece of [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") that defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as a [view annotation](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or as a [function annotation](javascript:call_link\('abencds_f1_function_annotations.htm'\)):

-   Specifies the subannotation subAnno1 once (the default value true is used here implicitly):

@DemoAnnoStruct.subAnno1

-   Specifies the subannotations subAnno1 and subAnno2 together in curly brackets (the default values are overwritten by explicit [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") here. In subAnno2, one of the fixed enumeration values is used:

@DemoAnnoStruct:{subAnno1:false, subAnno2:#I2}

-   Specifies annotation values for the annotation array subAnno3. The values within the quotation marks can have a maximum of ten characters:

@DemoAnnoStruct.subAnno3:\['a','abc','abcdefghij'\]

-   Specifies annotation values for the structured annotation array subAnno4.

@DemoAnnoStruct.subAnno4:\[ {comp1: 'a', comp2: 'b' },
                           {comp1: 'c', comp2: 'd' },
                           {comp1: 'e', comp2: ‘f' } \]

Continue
[ABAP CDS - DEFINE ANNOTATION, annotation\_annot](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))
[ABAP CDS - DEFINE ANNOTATION, type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))
[ABAP CDS - DEFINE ANNOTATION, subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))
[ABAP CDS - DEFINE ANNOTATION, arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))


### abencds_f1_define_anno_annos.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION, annotation\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an annotation definition annotation in front of the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) or in front of a [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") in an [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation @Scope must be specified here using the value #ANNOTATION.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") and in front of the names of [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [AbapAnnotation Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_1)

-   [API Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_2)

-   [CompatibilityContract Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_3)

-   [LanguageDependency Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_4)

-   [MetadataExtension Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_5)

-   [Scope Annotations](#@@ITOC@@ABENCDS_F1_DEFINE_ANNO_ANNOS_6)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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
The annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").
#RELEASED\_FOR\_KEY\_USER\_APPS:
The annotation can be used in CDS entities defined in [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry"). This is not yet possible.
#NOT\_RELEASED:
The annotation cannot be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").

#NOT\_RELEASED

\-

CompatibilityContract Annotations

Define the usability of the annotation in CDS entities as specified by a [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry").

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

The release contract C0 permits extension fields to be added at specific extension points.

-   c1

The release contract C1 guarantees a stable interface for use within AS ABAP.

-   c2

The release contract C2 guarantees a stable interface for uses outside AS ABAP too.

In annotation definitions delivered by SAP, the annotations @CompatibilityContract must be specified for the release contract C1 and C2, both for the main annotation and for every subannotation. They define the usability of the main annotations and subannotations in the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") of a CDS entity with respect to their release contract. A CDS entity is mapped to a release contract using tools such as [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or in special transactions, and not in its CDS source code.

Note

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

Specifies whether the annotation can be specified in a metadata extension when the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) is used.

true:
The annotation can be specified in a metadata extension
false:
The annotation cannot be specified in a metadata extension

false

true

Note

Alongside @MetadataExtension.usageAllowed:true, the scope specified using the annotation @Scope determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be permitted for this scope.

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

The [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of each annotation must be defined using @Scope. It determines the places in CDS source code where the annotation can be [specified](javascript:call_link\('abencds_anno_usage.htm'\)). @Scope is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"), which means that multiple [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

This translation does not reflect the current version of the documentation.


### abencds_f1_define_annotation_type.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION, type

Syntax

... dtype *\[*enum { SYMBOL1; SYMBOL2; ... }*\]* *\[*default val*|*#SYMBOL*\]*

Effect

Defines the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") to be specified when a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") defined using [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)) is [used](javascript:call_link\('abencds_annotations_syntax.htm'\)).

dtype is used to define the type. The following tables show the possible options for dtype and their meaning for the annotation values. dtype and any predefined values are case-sensitive.

Value Types

dtype

Annotation Value

Boolean

Truth values true and false.

Decimal(len,dec)

Numeric literal without quotation marks and with an optional decimal point and a maximum of len minus dec integer digits and a maximum of dec decimal places. A number between 1 and 31 can be specified for len and a number between 0 and 14 can be specified for dec, but dec cannot be greater than len.

DecimalFloat

Numeric literal without quotation marks. The same values can be specified as in the source field of an ABAP conversion from [c to decfloat34](javascript:call_link\('abenconversion_type_c.htm'\))

Integer

Numeric literal without quotation marks and decimal separator in the value range of the ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)).

String(len)

Character literal in quotation marks with a maximum length len. A number between 0 and 1298 can be specified for len.

Reference Types

dtype

Annotation Value

AssociationRef

Name of a CDS association

ElementRef

Name of an element

EntityRef

Name of an entity

KeyElement

Name of a key field

ParameterRef

Name of a parameter

When [used](javascript:call_link\('abencds_annotations_syntax_value.htm'\)), the annotation value of a reference type must be specified as a character literal in quotation marks and without blanks. The object specified must exist.

enum { SYMBOL1; SYMBOL; ... } can be used to specify a semicolon-separated (;) list of enumeration symbols SYMBOL1, SYMBOL2, ... in uppercase letters and in curly brackets. A semicolon must also be placed after the final entry in the list here. When an annotation is used, only one of the enumeration symbols prefixed with the # character can be used as an [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). If enumeration symbols are specified for the type String, the symbols become the enumeration values explicitly. In this case, the length specified for String must be at least as long as the longest enumeration symbol.

default can be used to specify a type-friendly default value applied when an annotation is used and no explicit [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") is specified. The following applies here:

-   Only true can be specified as a default value for the type Boolean.

-   If enumeration symbols are defined, the default value of one of these symbols must be prefixed with the # character.

-   No default value can be specified for reference types.

-   No default values can be specified for the elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

Notes

-   The truth values for the type boolean can also be specified as 'true' and 'false' in quotation marks.

-   The smallest feasible size is 1 for one character.

-   The default value defined using default describes the default value applied when the annotation is used in its framework. If an annotation is not used, there can be another default value (described in the documentation of the annotation). The default value of the annotation definition is ignored when the annotation is saved and [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) internally.

Example

The following annotation definition dictates truth values as possible annotation values of the annotation:

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoBoolean : Boolean;

The annotation can be used as followed in CDS source code:

-   @DemoAnnoBoolean: true

-   @DemoAnnoBoolean: false

-   @DemoAnnoBoolean: 'true'

-   @DemoAnnoBoolean: 'false'

Example

The following annotation definition dictates enumeration values as possible annotation values of the annotation. In the case of the type String, the enumeration symbols are also the enumeration values and a length of at least 10 must be specified for the type, since the longest enumeration symbol as 10 characters.

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoEnum : String(10)  
                                 enum{SHORT\_TEXT;TEXT;LONG\_TEXT;};

The annotation can be used as followed in CDS source code:

-   @DemoAnnoEnum: #SHORT\_TEXT

-   @DemoAnnoEnum: #TEXT

-   @DemoAnnoEnum: #LONG\_TEXT

Example

The following annotation definition dictates numeric literals as possible annotation values of the annotation (a default value is defined here).

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoDefault : Integer default 0;

The annotation can be used as follows in CDS source code, with and without a value being specified:

-   @DemoAnnoDefault

-   @DemoAnnoDefault: 100

Example

The following annotation definition has incorrect syntax. The length of the specified default value must be at least 3.

annotation DemoAnno : String(1) default 'XXX';


### abencds_f1_define_annotation_sub.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION, subannos

Syntax

... *\[*[@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
    *\[*[@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
    ...
    subAnno1*{*: [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\));*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))*}*;
    *\[*[@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
    *\[*[@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
    ...
    subAnno2*{*: [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\));*}**|**{**\[*:*\]*{subannos}*\[*;*\]**}**|**{*:array of [arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))*}*;
    ...

Effect

Structures a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") using [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1, subAnno2, ... . The subannotations are defined in a semicolon-separated list in curly brackets { ... } in the statement [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)) (a semicolon must be placed after the final entry in the list too). The names of the subannotations of an annotation must be unique.

Each subannotation is specified using the same syntax as when the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") is specified after [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)). This means the following:

-   The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter.

-   [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) can be used to define the possible [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") for a subannotation

-   A subannotation can itself be structured using further subannotations subannos

-   A subannotation can be defined as an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") of array elements [arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\)) using array of

Annotation definition annotations [@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), [@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), ... can be specified in front of each subannotation. These annotations override any identically named annotation definition annotations specified for the structured annotation itself. Any annotations not specified directly in front of a subannotation are inherited by the next higher annotation in the hierarchy.

Notes

-   Colons (:) in front of the opening curly bracket and semicolons (;) after the closing curly structuring bracket { ... } are optional.

-   In the [annotation syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)), structured annotations are specified either using [comma-separated lists in curly brackets](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) or using [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

Example

Defines a structured [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") DemoAnnoMain with three [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"), two of which are themselves structured. The semicolons after the closing curly structuring brackets are omitted here.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION, arrelem

Syntax

... *{*[type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\));*}**|**{* {[subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))}*\[*;*\]**}*

Effect

Defines the elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). If specified after a colon of a [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") or [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") defined using [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)), array of turns the annotation specified in front of the colon into an array of the elements specified after array of:

-   [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) defines an annotation array for [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The following applies here:

-   The addition [enum](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) can be used

-   The addition [default](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) cannot be used

-   The type specification must be closed using a semicolon (;).

-   {[subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))} defines an annotation array for [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") in curly brackets. If specified, subannotations can be closed using an optional semicolon (;).

The same information can be specified for [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) and [subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) as for elementary annotations. It is not possible to define a further annotation array directly. Subannotations can, however, be arrays themselves.

Note

When an annotation array is used in [annotation syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) in CDS source code, a [comma-separated list](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) is specified in square brackets. This list contains the information defined dictated by [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) or [structure](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) as often as necessary.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) → 

ABAP CDS - DEFINE ANNOTATION

Syntax

*\[*[@annotation\_annot1](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
*\[*[@annotation\_annot2](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))*\]*
...
*\[*define*\]* annotation Anno *{*  :   [type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)); *}*
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

Notes

-   Put simply, an annotation definition dictates how the annotation needs to be specified in CDS source code in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.

-   The type specification determines which [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified in the annotation syntax when the annotation is used.

-   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) or as [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

-   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](javascript:call_link\('abencds_annotations_syntax_array.htm'\)).

-   The syntax check in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"), and [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") specified.

-   When [annotations are evaluated](javascript:call_link\('abencds_semantics_annotation_abexa.htm'\)) in a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations are respected as specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of the entity. The associated annotation definitions are ignored.

-   Alongside the rules defined by the statement define annotation, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

Example

Defines a structured annotation. The [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") DemoAnnoStruct has [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1 to subAnno4. The subannotations subAnno3 and subAnno4 are [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). (Here, subAnno4 is structured.)

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoStruct  
  { subAnno1 : Boolean default true;  
    subAnno2 : Integer enum { I1; I2; I3; } default #I1;  
    subAnno3 : array of String(10);  
    subAnno4 : array of { comp1 : String(1);  
                          comp2 : String(2);  
                        };  
  };

The annotation defined in this way permits the following to be specified in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") in a piece of [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") that defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as a [view annotation](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or as a [function annotation](javascript:call_link\('abencds_f1_function_annotations.htm'\)):

-   Specifies the subannotation subAnno1 once (the default value true is used here implicitly):

@DemoAnnoStruct.subAnno1

-   Specifies the subannotations subAnno1 and subAnno2 together in curly brackets (the default values are overwritten by explicit [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") here. In subAnno2, one of the fixed enumeration values is used:

@DemoAnnoStruct:{subAnno1:false, subAnno2:#I2}

-   Specifies annotation values for the annotation array subAnno3. The values within the quotation marks can have a maximum of ten characters:

@DemoAnnoStruct.subAnno3:\['a','abc','abcdefghij'\]

-   Specifies annotation values for the structured annotation array subAnno4.

@DemoAnnoStruct.subAnno4:\[ {comp1: 'a', comp2: 'b' },
                           {comp1: 'c', comp2: 'd' },
                           {comp1: 'e', comp2: ‘f' } \]

Continue
[ABAP CDS - DEFINE ANNOTATION, annotation\_annot](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))
[ABAP CDS - DEFINE ANNOTATION, type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))
[ABAP CDS - DEFINE ANNOTATION, subannos](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\))
[ABAP CDS - DEFINE ANNOTATION, arrelem](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))


### abencds_f1_ddla_syntax.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) → 

ABAP CDS - DDL for Annotation Definitions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") as [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))

Notes

-   The [DDLA source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of annotation definitions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DDLA source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for annotation definitions, but not two dashes (\--).

Continue
[ABAP CDS - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))
