  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_1)

-   [AbapCatalog-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_3)

-   [ClientDependent-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientHandling-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_5)

-   [DataAging-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [EndUserText-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_7)

-   [Environment-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [LanguageDependency-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_9)

-   [MappingRole-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [Metadata-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_11)

-   [MetadataExtension-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Scope\[ \]-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_13)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

Note

See also [ABAP Annotation Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_ddla.htm).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)

Boolean

\-

true

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

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Integer

\-

000

\-

\-

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

\-

\-

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

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

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(1298)

\-

\-

\-

\-

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

\-

\-

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)

String(16)

\-

\-

\-

\-

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(16)

\-

\-

\-

\-

AbapCatalog.viewEnhancementCategory\[ \]

CDS view (specifies how the view can be extended using CDS view extensions)

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

AccessControl.authorizationCheck

CDS access control (specifies implicit access control)

[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

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

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

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

ClientHandling.algorithm

Specifies client handling

[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

ClientHandling.type

Specifies client dependency

[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

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

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

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

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

EndUserText.label

Texts, short text connected to translation

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)
[View Extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)
[Parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
[Role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_role_annotations.htm)
[Table Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)
[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

String(60)

\-

\-

X

X

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)
[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)
[Parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

String(100)

\-

\-

X

X

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Environment.sql.passValue

currently only evaluated by SADL

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)

Boolean

\-

true

\-

\-

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)

Integer

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

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_role_annotations.htm)

Boolean

\-

true

\-

\-

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Metadata.allowExtensions

Metadata, controls extensibility via metadata extensions

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata (specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE)

[View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)

Boolean

\-

true

\-

\-

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)

Boolean

\-

true

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

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)

String(20)

#ANNOTATE
#ANNOTATION
#ELEMENT
#EXTEND\_VIEW
#PARAMETER
#ROLE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

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

Semantics.amount.currencyCode

Currency field

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)

ElementRef

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)

Boolean

\-

true

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)

ElementRef

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)

Boolean

\-

true

\-

\-