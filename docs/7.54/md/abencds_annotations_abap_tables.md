  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_1)

-   [AbapCatalog-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_3)

-   [API-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_5)

-   [ClientHandling-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_7)

-   [DataAging-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_9)

-   [Environment-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_11)

-   [MappingRole-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_13)

-   [MetadataExtension-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_15)

-   [Scope\[ \]-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

Obsolete: Replaced by Consumption.dbHints\[ \]

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

Texts, implicit annotation for data element header

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM