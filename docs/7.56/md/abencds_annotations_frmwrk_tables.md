---
title: "ABAP CDS - Framework-Specific Annotation Syntax"
description: |
  The following tables summarize the annotation syntax(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_syntax_glosry.htm 'Glossary Entry') of all framework-specific annotations(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfrmwrk_annotation_glosry.htm
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk_tables.htm"
abapFile: "abencds_annotations_frmwrk_tables.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "class", "data", "types", "abencds", "annotations", "frmwrk", "tables"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The meanings of the framework-specific annotations are documented under CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1-------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)
-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3-------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)
-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5-------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)
-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7-------event-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)
-   [Feature-Annotations](#abencds-annotations-frmwrk-tables-9-------genericpersistency-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)
-   [Hierarchy-Annotations](#abencds-annotations-frmwrk-tables-11-------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)
-   [OData-Annotations](#abencds-annotations-frmwrk-tables-13-------search-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_14)
-   [Semantics-Annotations](#abencds-annotations-frmwrk-tables-15-------ui-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_16)
-   [VDM-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_17)

Hint

See also [Framework-Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk_ddla.htm).

AccessControl-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

AccessControl.auditing.specification

View

String(1000)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl.auditing.type

View

String(20)

#CUSTOM

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl.personalData.blocking

Hierarchy
Table Function
View

String(30)

#BLOCKED\_DATA\_EXCLUDED
#BLOCKED\_DATA\_INCLUDED
#NOT\_REQUIRED
#REQUIRED

\-

\-

\-

\-

AccessControl.personalData.blockingIndicator\[ \]

Hierarchy
Table Function
View

ElementRef

\-

\-

\-

\-

\-

AccessControl.privilegedAssociations\[ \]

Hierarchy
Table Function
View

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

AccessControl.readAccess.logging.logdomain\[ \].area

Element
Hierarchy
Parameter
View

String(30)

\-

\-

\-

X

\-

AccessControl.readAccess.logging.logdomain\[ \].domain

Element
Hierarchy
Parameter
View

String(30)

\-

\-

\-

X

\-

AccessControl.readAccess.logging.output

View

Boolean

\-

\-

\-

X

\-

Aggregation-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Aggregation.allowPrecisionLoss

Entity

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Aggregation.default

Element

String(30)

#AVG
#COUNT\_DISTINCT
#FORMULA
#MAX
#MIN
#NONE
#NOP
#SUM

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Aggregation.exception

Element

String(30)

#AVG
#COUNT
#COUNT\_DISTINCT
#FIRST
#LAST
#MAX
#MEDIAN
#MIN
#NHA
#STANDARD\_DEVIATION
#SUM
#VARIANCE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Aggregation.referenceElement\[ \]

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Analytics.constraints.filter

Element

String(20)

#UNIQUE\_PER\_CELL
#UNIQUE\_PER\_QUERY

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.dataCategory

Table Function
View

String(20)

#AGGREGATIONLEVEL
#CUBE
#DIMENSION
#FACT

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.dataExtraction.alternativeKey\[ \]

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.byElement.detectDeletedRecords

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.byElement.ignoreDeletionAfterDays

Table Function
View

Integer

\-

\-

\-

X

NOT\_RELEASED

Analytics.dataExtraction.delta.byElement.maxDelayInSeconds

Table Function
View

Integer

\-

1800

\-

X

NOT\_RELEASED

Analytics.dataExtraction.delta.byElement.name

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.automatic

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].highValue

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].operator

Table Function
View

String(11)

#BETWEEN
#EQ
#GE
#GT
#LE
#LT
#NOT\_BETWEEN
#NOT\_EQ

#EQ

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].tableElement

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].value

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].role

Table Function
View

String(30)

#LEFT\_OUTER\_TO\_ONE\_JOIN
#MAIN

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].table

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].tableElement\[ \]

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].viewElement\[ \]

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.enabled

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.filter\[ \].highValue

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.filter\[ \].operator

Table Function
View

String(11)

#BETWEEN
#EQ
#GE
#GT
#LE
#LT
#NOT\_BETWEEN
#NOT\_EQ

#EQ

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.filter\[ \].value

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.filter\[ \].viewElement

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

Analytics.dataExtraction.partitionBy\[ \]

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

Analytics.excludeFromRuntimeExtensibilty

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.hidden

Element
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.hints

Table Function
View

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.internalName

Element
View

String(30)

#DEFAULT
#GLOBAL
#LOCAL

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.onlyRestrictedAttributeTextAccess

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.planning.enabled

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.processingEngine

Table Function
View

String(5)

#AE
#MDS

\-

\-

\-

NOT\_RELEASED

Analytics.query

Table Function
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.readClassName

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

Analytics.settings.columns.hierarchicalDisplay.active

Table Function
View

Boolean

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.columns.hierarchicalDisplay.expandTo

Table Function
View

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.columns.totalsLocation

Table Function
View

String(10)

#LEFT
#RIGHT

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.maxProcessingEffort

Table Function
View

String(20)

#HIGH
#LOW
#MEDIUM
#UNLIMITED

#HIGH

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.rows.hierarchicalDisplay.active

Table Function
View

Boolean

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.rows.hierarchicalDisplay.expandTo

Table Function
View

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.rows.totalsLocation

Table Function
View

String(10)

#BOTTOM
#TOP

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.runtimeExtensibility.allowed

View

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.zeroValues.handling

Table Function
View

String(20)

#HIDE
#HIDE\_IF\_ALL
#SHOW

#SHOW

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.settings.zeroValues.hideOnAxis

Table Function
View

String(20)

#COLUMNS
#ROWS
#ROWS\_COLUMNS

#ROWS\_COLUMNS

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.technicalName

Table Function
View

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.variableCheck.implementedBy

Table Function
View

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Analytics.viewModelReplication.enabled

View

Boolean

\-

true

\-

\-

NOT\_RELEASED

Analytics.writeBack.className

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

AnalyticsDetails-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

AnalyticsDetails.exceptionAggregationSteps\[ \].exceptionAggregationBehavior

Element

String(14)

#AVG
#COUNT
#COUNT\_DISTINCT
#FIRST
#LAST
#MAX
#MIN
#NHA
#STD
#SUM

\-

\-

\-

\-

AnalyticsDetails.exceptionAggregationSteps\[ \].exceptionAggregationElements\[ \]

Element

String(30)

\-

\-

\-

\-

\-

AnalyticsDetails.planning.disaggregation

Element

String(20)

#DIFFERENCE
#NONE
#TOTAL

\-

\-

\-

NOT\_RELEASED

AnalyticsDetails.planning.distribution

Element

String(20)

#EQUAL
#PROPORTIONAL
#PROPORTIONAL\_REF

\-

\-

\-

NOT\_RELEASED

AnalyticsDetails.planning.distributionReference

Element

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

AnalyticsDetails.planning.enabled

Element

Boolean

\-

true

\-

\-

NOT\_RELEASED

AnalyticsDetails.query.axis

Element

String(20)

#COLUMNS
#FREE
#ROWS

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.collisionHandling.decimals

Element

String(20)

#CONCURRENT
#DEFAULT
#THIS

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.collisionHandling.formula

Element

String(20)

#CONCURRENT
#DEFAULT
#THIS

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.collisionHandling.scaling

Element

String(20)

#CONCURRENT
#DEFAULT
#THIS

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.collisionHandling.semanticObject

Element

String(20)

#CONCURRENT
#DEFAULT
#THIS

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.decimals

Element

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.display

Element

String(20)

#KEY
#KEY\_TEXT
#TEXT
#TEXT\_KEY

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.displayHierarchy

Element

String(20)

#FILTER
#FILTER\_ONLY
#OFF
#ON

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.elementHierarchy.initiallyCollapsed

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.elementHierarchy.parent

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.formula

Element

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hidden

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchyBinding\[ \].type

Element

String(12)

#CONSTANT
#ELEMENT
#PARAMETER
#SYSTEM\_FIELD
#USER\_INPUT

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchyBinding\[ \].value

Element

String(512)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchyBinding\[ \].variableSequence

Element

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchyInitialLevel

Element

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchySettings.childNodePosition

Element

String(10)

#ABOVE
#BELOW

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchySettings.hideNodeWithOneChild

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.hierarchySettings.hidePostedNodesValues

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.ignoreFurtherFilter.forAllElements

Element

Boolean

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.ignoreFurtherFilter.forElement\[ \]

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.onCharacteristicStructure

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.resultValuesSource

Element

String(10)

#CUBE
#DIMENSION

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.reverseSign

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.scaling

Element

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.sortDirection

Element

String(20)

#ASC
#DESC

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.totals

Element

String(20)

#HIDE
#SHOW

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.query.variableSequence

Element
Parameter

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Consumption.dbHints\[ \]

View

String(1298)

\-

\-

\-

X

\-

Consumption.dbHintsCalculatedBy

View

String(255)

\-

\-

\-

\-

\-

Consumption.defaultValue

Element
Parameter

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.binding\[ \].targetElement

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.binding\[ \].targetParameter

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.binding\[ \].type

Element
Parameter

String(12)

#CONSTANT
#ELEMENT
#PARAMETER
#SYSTEM\_FIELD

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.binding\[ \].value

Element
Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.lookupEntity

Element
Parameter

EntityRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.pfcgMapping

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.resultElement

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.resultElementHigh

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.resultHierarchyNode.mapping\[ \].hierarchyElement

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.resultHierarchyNode.mapping\[ \].lookupElement

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.derivation.resultHierarchyNode.nodeTypeElement

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.dynamicLabel.binding\[ \].index

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.dynamicLabel.binding\[ \].parameter

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.dynamicLabel.label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.businessDate.at

Element
Entity

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.defaultHierarchyNode.node\[ \].element

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.defaultHierarchyNode.node\[ \].value

Element

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.defaultHierarchyNode.nodeType

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.defaultValue

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.defaultValueHigh

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.hierarchyBinding\[ \].type

Element

String(12)

#CONSTANT
#ELEMENT
#PARAMETER
#SYSTEM\_FIELD
#USER\_INPUT

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.hierarchyBinding\[ \].value

Element

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.hierarchyBinding\[ \].variableSequence

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.mandatory

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.multipleSelections

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.filter.selectionType

Element

String(20)

#HIERARCHY\_NODE
#INTERVAL
#RANGE
#SINGLE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.groupWithElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

Consumption.hidden

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.defaultHierarchyNode.node\[ \].element

Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.defaultHierarchyNode.node\[ \].value

Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.defaultHierarchyNode.nodeType

Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].type

Parameter

String(12)

#CONSTANT
#ELEMENT
#PARAMETER
#SYSTEM\_FIELD
#USER\_INPUT

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].value

Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].variableSequence

Parameter

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.hierarchyElement

Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.hierarchyNodeSelection.multipleSelections

Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.labelElement

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

Consumption.quickInfoElement

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

Consumption.ranked

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.ranking.activeFunctions\[ \].id

Entity
View

String(120)

\-

\-

\-

X

\-

Consumption.ranking.activeFunctions\[ \].weight

Entity
View

Decimal(3,2)

\-

1

\-

X

\-

Consumption.ranking.functionParameterBinding\[ \].functionId

Element

String(120)

\-

\-

\-

X

\-

Consumption.ranking.functionParameterBinding\[ \].parameterId

Element

String(120)

\-

\-

\-

X

\-

Consumption.semanticObject

Element
Entity
Parameter

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.semanticObjectMapping.additionalBinding\[ \].element

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.semanticObjectMapping.additionalBinding\[ \].localElement

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.semanticObjectMapping.element

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelp

Element
Parameter

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

Consumption.valueHelpDefault.binding.usage

Element

String(30)

#FILTER
#FILTER\_AND\_RESULT
#RESULT

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefault.display

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefault.fetchValues

Entity

String(30)

#AUTOMATICALLY\_WHEN\_DISPLAYED
#ON\_EXPLICIT\_REQUEST

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefault.initialValueIsSignificant

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].element

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localConstant

Element
Parameter

String(255)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localElement

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localParameter

Element
Parameter

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].parameter

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].usage

Element
Parameter

String(30)

#FILTER
#FILTER\_AND\_RESULT
#RESULT

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].association

Element
Parameter

AssociationRef

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].distinctValues

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].enabled

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].entity.element

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].entity.name

Element
Entity
Parameter

EntityRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].label

Element
Parameter

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].presentationVariantQualifier

Element
Parameter

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].qualifier

Element
Parameter

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Consumption.valueHelpDefinition\[ \].selectionVariantQualifier

Element
Parameter

String(120)

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].useForValidation

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

DefaultAggregation-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

DefaultAggregation

Element

String(30)

#AVG
#COUNT
#COUNT\_DISTINCT
#FORMULA
#MAX
#MIN
#NONE
#SUM

\-

\-

\-

\-

EnterpriseSearch-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

EnterpriseSearch.assignedCategories\[ \]

Entity

String(100)

\-

\-

\-

X

\-

EnterpriseSearch.commonAttributes\[ \]

Element

String(100)

\-

\-

\-

X

\-

EnterpriseSearch.configurationSet

Element

String(50)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.dclInterpretationMode

Entity

String(20)

#FLAT\_ELEMENT\_LIST
#RESPECT\_CARDINALITY

\-

\-

X

\-

EnterpriseSearch.defaultValueSuggestElement

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.enabled

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.expand

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.fieldGroupForSearchQuery\[ \].elements\[ \]

Entity

ElementRef

\-

\-

\-

X

\-

EnterpriseSearch.fieldGroupForSearchQuery\[ \].name

Entity

String(128)

\-

\-

\-

X

\-

EnterpriseSearch.filteringAttribute.caseInsensitiveAggregation

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringAttribute.considerNullValues

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringAttribute.default

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringAttribute.displayPosition

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.caseInsensitiveAggregation

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.collapse

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.complexFilter

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.considerNullValues

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.default

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.displayPosition

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.iconUrl

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.noIntervals

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.numberOfValues

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.order.by

Element

String(20)

#FILTER\_ELEMENT\_LABEL
#FILTER\_ELEMENT\_VALUE
#NUMBER\_OF\_HITS

#NUMBER\_OF\_HITS

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.order.byReference

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.filteringFacet.order.direction

Element

String(4)

#ASC
#DESC

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.hidden

Entity

Boolean

\-

true

\-

X

\-

EnterpriseSearch.hierarchy.parentChild.definition

Entity

EntityRef

\-

\-

\-

X

\-

EnterpriseSearch.highlighted.beginTag

Element

String(128)

\-

\-

\-

X

\-

EnterpriseSearch.highlighted.enabled

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.highlighted.endTag

Element

String(128)

\-

\-

\-

X

\-

EnterpriseSearch.maximumLength

Element

Integer

\-

\-

\-

X

\-

EnterpriseSearch.nlp.semanticDomain

Entity

String(50)

#ANALYTICS

\-

\-

X

\-

EnterpriseSearch.searchOptions

Element

String(500)

\-

\-

\-

X

\-

EnterpriseSearch.snippets.beginTag

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.snippets.enabled

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.snippets.endTag

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.snippets.maximumLength

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

EnterpriseSearch.technicalDescription

Element

Boolean

\-

true

\-

X

\-

Event-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Event.context.attribute

Element

String(20)

\-

\-

\-

\-

\-

Event.description

Entity

String(255)

\-

\-

X

\-

\-

Event.element.internalName

Element

String(30)

\-

\-

\-

\-

\-

Event.implementedBy\[ \]

Entity

String(255)

\-

\-

\-

\-

\-

Event.qualifiesEventType

Element

Boolean

\-

true

\-

\-

\-

Event.sapObjectNodeType

Entity

String(30)

\-

\-

\-

\-

\-

Event.sapObjectType

Entity

String(30)

\-

\-

\-

\-

\-

Event.type

Entity

String(60)

\-

\-

\-

\-

\-

Feature-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Feature

Element
Entity

String(1024)

\-

\-

\-

\-

\-

GenericPersistency-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

GenericPersistency.format.decimals

Element

ElementRef

\-

\-

\-

\-

\-

GenericPersistency.format.displayTemplate

Element

ElementRef

\-

\-

\-

\-

\-

GenericPersistency.format.exponentialDisplay.displayFormat

Element

ElementRef

\-

\-

\-

\-

\-

GenericPersistency.format.exponentialDisplay.exponentValue

Element

ElementRef

\-

\-

\-

\-

\-

GenericPersistency.format.length

Element

ElementRef

\-

\-

\-

\-

\-

GenericPersistency.property

Element

Boolean

\-

true

\-

\-

\-

GenericPersistency.propertyValue\[ \]

Element

ElementRef

\-

\-

\-

\-

\-

Hierarchy-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Hierarchy.parentChild\[ \].directory

View

AssociationRef

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].label

View

String(1298)

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].multipleParents

View

Boolean

\-

true

\-

\-

\-

Hierarchy.parentChild\[ \].name

View

String(127)

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].orphanedNode.handling

View

String(20)

#ERROR
#IGNORE
#ROOT\_NODES
#STEPPARENT\_NODE

#ROOT\_NODES

\-

\-

\-

Hierarchy.parentChild\[ \].orphanedNode.stepParentNodeId\[ \]

View

String(1298)

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].recurse.child\[ \]

View

ElementRef

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].recurse.parent\[ \]

View

ElementRef

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].recurseBy

View

ElementRef

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].rootNode.visibility

View

String(25)

#ADD\_ROOT\_NODE
#ADD\_ROOT\_NODE\_IF\_DEFINED
#DO\_NOT\_ADD\_ROOT\_NODE

#ADD\_ROOT\_NODE\_IF\_DEFINED

\-

\-

\-

Hierarchy.parentChild\[ \].siblingsOrder\[ \].by

View

ElementRef

\-

\-

\-

\-

\-

Hierarchy.parentChild\[ \].siblingsOrder\[ \].direction

View

String(4)

#ASC
#DESC

#ASC

\-

\-

\-

ObjectModel-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

ObjectModel.action\[ \].enabled

View

Boolean

\-

true

\-

\-

\-

ObjectModel.action\[ \].feature

View

String(40)

\-

\-

\-

\-

\-

ObjectModel.action\[ \].instance.bound

View

Boolean

\-

true

\-

\-

\-

ObjectModel.action\[ \].label

View

String(60)

\-

\-

X

\-

\-

ObjectModel.action\[ \].name

View

String(30)

\-

\-

\-

\-

\-

ObjectModel.action\[ \].parameter.dataType

View

EntityRef

\-

\-

\-

\-

\-

ObjectModel.action\[ \].readOnly

View

Boolean

\-

true

\-

\-

\-

ObjectModel.action\[ \].result.cardinality

View

String(30)

#ONE
#ONE\_TO\_MANY
#ZERO\_TO\_MANY
#ZERO\_TO\_ONE

\-

\-

\-

\-

ObjectModel.action\[ \].result.dataType

View

EntityRef

\-

\-

\-

\-

\-

ObjectModel.alternativeKey\[ \].element\[ \]

Table Function
View

ElementRef

\-

\-

\-

\-

\-

ObjectModel.alternativeKey\[ \].id

Table Function
View

String(30)

\-

\-

\-

\-

\-

ObjectModel.alternativeKey\[ \].uniqueness

Table Function
View

String(30)

#UNIQUE
#UNIQUE\_IF\_NOT\_INITIAL

\-

\-

\-

\-

ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.association.draft.enabled

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.association.draft.fieldNamePrefix

Element

String(16)

\-

\-

\-

\-

\-

ObjectModel.association.reverseAssociation

Element

String(30)

\-

\-

\-

\-

\-

ObjectModel.association.type\[ \]

Element

String(30)

#TO\_COMPOSITION\_CHILD
#TO\_COMPOSITION\_PARENT
#TO\_COMPOSITION\_ROOT

\-

\-

\-

\-

ObjectModel.collectiveValueHelp.for.element

Entity

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.compositionRoot

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.createEnabled

Element
Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.dataCategory

Entity
Table Function

String(30)

#HIERARCHY
#TEXT
#VALUE\_HELP

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.delegatedAction\[ \].enabled

View

Boolean

\-

true

\-

\-

\-

ObjectModel.delegatedAction\[ \].exposureName

View

String(60)

\-

\-

\-

\-

\-

ObjectModel.delegatedAction\[ \].name

View

String(30)

\-

\-

\-

\-

\-

ObjectModel.deleteEnabled

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.derivationFunction.applicableFor.dataType

Entity

String(4)

#DATS
#TIMS

\-

\-

\-

\-

ObjectModel.derivationFunction.applicableFor.dimensionView\[ \]

Entity

String(30)

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.applicableFor.element\[ \]

Entity

String(30)

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.inputElement\[ \]

Entity

ElementRef

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.result.element

Entity

ElementRef

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.result.elementHigh

Entity

ElementRef

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.result.multipleRecords

Entity

Boolean

\-

true

\-

\-

\-

ObjectModel.derivationFunction.result.nodeTypeElement

Entity

ElementRef

\-

\-

\-

\-

\-

ObjectModel.derivationFunction.result.type

Entity

String(14)

#HIERARCHY\_NODE
#INTERVAL
#SINGLE

\-

\-

\-

\-

ObjectModel.draft.concurrentEditing

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.draft.sharing

Table Function
View

String(30)

#NONE
#PUBLIC
#RESTRICTED

\-

\-

\-

\-

ObjectModel.draftEnabled

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.editableFieldFor

Element

ElementRef

\-

\-

\-

\-

\-

ObjectModel.enabled

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.entityChangeStateId

Table Function
View

String(30)

\-

\-

\-

\-

\-

ObjectModel.filter.enabled

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.filter.transformedBy

Element

String(255)

\-

\-

\-

\-

\-

ObjectModel.foreignKey.association

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.hierarchy.association

Element

AssociationRef

\-

\-

\-

\-

\-

ObjectModel.interval.upperBoundary

Parameter

ElementRef

\-

\-

\-

\-

\-

ObjectModel.lifecycle.draft.expiryBehavior

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.draft.expiryInterval

Entity
Table Function

String(20)

\-

'PT28D'

\-

\-

\-

ObjectModel.lifecycle.draft.notificationBeforeExpiryInterval

Entity
Table Function

String(20)

\-

'PT10D'

\-

\-

\-

ObjectModel.lifecycle.enqueue.expiryBehavior

Entity
Table Function

String(30)

#RELATIVE\_TO\_ENQUEUE\_START
#RELATIVE\_TO\_LAST\_CHANGE

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.enqueue.expiryInterval

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

ObjectModel.lifecycle.enqueue.notificationBeforeExpiryInterval

Entity
Table Function

String(20)

\-

'PT5M'

\-

\-

\-

ObjectModel.lifecycle.processing.expiryBehavior

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.processing.expiryInterval

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

ObjectModel.lifecycle.processing.notificationBeforeExpiryInterval

Entity
Table Function

String(20)

\-

'PT10M'

\-

\-

\-

ObjectModel.lifecycle.processor.expiryBehavior

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.processor.expiryInterval

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

ObjectModel.lifecycle.processor.notificationBeforeExpiryInterval

Entity
Table Function

String(20)

\-

'PT5M'

\-

\-

\-

ObjectModel.mandatory

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.modelCategory

Table Function
View

String(30)

#BUSINESS\_OBJECT

\-

\-

\-

\-

ObjectModel.modelingPattern

Entity

String(60)

#ANALYTICAL\_CUBE
#ANALYTICAL\_DIMENSION
#ANALYTICAL\_KPI
#ANALYTICAL\_PARENT\_CHILD\_HIERARCHY\_NODE
#ANALYTICAL\_QUERY
#COLLECTIVE\_VALUE\_HELP
#DATA\_STRUCTURE
#DERIVATION\_FUNCTION
#ENTERPRISE\_SEARCH\_PROVIDER
#LANGUAGE\_DEPENDENT\_TEXT
#NONE
#OUTPUT\_EMAIL\_DATA\_PROVIDER
#OUTPUT\_FORM\_DATA\_PROVIDER
#OUTPUT\_PARAMETER\_DETERMINATION\_DATA\_SOURCE
#PARENT\_CHILD\_HIERARCHY\_NODE\_PROVIDER
#SITUATION\_ANCHOR
#SITUATION\_DATACONTEXT
#SITUATION\_TRIGGER
#TRANSACTIONAL\_ENTITY
#TRANSACTIONAL\_PROJECTED\_ENTITY
#TRANSACTIONAL\_QUERY
#VALUE\_HELP\_PROVIDER

\-

\-

\-

\-

ObjectModel.readOnly

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.representativeKey

Entity
Table Function

KeyElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.resultSet.sizeCategory

Custom Entity
Entity
Table Function

String(3)

#XS

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.semanticKey\[ \]

Entity
Table Function

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.sort.enabled

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.sort.transformedBy

Element

String(255)

\-

\-

\-

\-

\-

ObjectModel.supportedCapabilities\[ \]

Entity

String(60)

#ANALYTICAL\_DIMENSION
#ANALYTICAL\_KPI
#ANALYTICAL\_PARENT\_CHILD\_HIERARCHY\_NODE
#ANALYTICAL\_PROVIDER
#ANALYTICAL\_QUERY
#CDS\_MODELING\_ASSOCIATION\_TARGET
#CDS\_MODELING\_DATA\_SOURCE
#COLLECTIVE\_VALUE\_HELP
#DATA\_STRUCTURE
#DERIVATION\_FUNCTION
#ENTERPRISE\_SEARCH\_PROVIDER
#EXTRACTION\_DATA\_SOURCE
#LANGUAGE\_DEPENDENT\_TEXT
#OUTPUT\_EMAIL\_DATA\_PROVIDER
#OUTPUT\_FORM\_DATA\_PROVIDER
#OUTPUT\_PARAMETER\_DETERMINATION\_DATA\_SOURCE
#PARENT\_CHILD\_HIERARCHY\_NODE\_PROVIDER
#SEARCHABLE\_ENTITY
#SITUATION\_ANCHOR
#SITUATION\_DATACONTEXT
#SITUATION\_TRIGGER
#SQL\_DATA\_SOURCE
#TRANSACTIONAL\_PROVIDER
#VALUE\_HELP\_PROVIDER

\-

\-

\-

\-

ObjectModel.text.association

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.text.control

Element
Entity

String(60)

#ASSOCIATED\_TEXT\_UI\_HIDDEN
#NONE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.text.element\[ \]

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.text.reference.association

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.transactionalProcessingDelegated

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.transactionalProcessingEnabled

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.transactionalProcessingUnitRoot

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.uniqueIdField

Entity

ElementRef

\-

\-

\-

\-

\-

ObjectModel.updateEnabled

Table Function
View

Boolean

\-

true

\-

\-

\-

ObjectModel.value.derivedFrom\[ \]

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.virtualElement

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.writeActivePersistence

Table Function
View

String(16)

\-

\-

\-

\-

\-

ObjectModel.writeDraftPersistence

Table Function
View

String(16)

\-

\-

\-

\-

\-

OData-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

OData.action\[ \].localName

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.action\[ \].name

Entity

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.entitySet.name

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.entityType.name

Entity

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.etag

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.hierarchy.recursiveHierarchy\[ \].descendantCountElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].distanceFromRootElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].drillStateElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].elementWithHierarchy

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].externalKeyElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].nodeElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].parentNodeElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].preorderRankElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.hierarchy.recursiveHierarchy\[ \].siblingRankElement

Entity

ElementRef

\-

\-

\-

\-

\-

OData.property.name

Element

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.property.valueControl

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.publish

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

OData.schema.name

Service Definition

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

OData.v2.amount.noDecimalShift

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

OData.v2.autoAggregation

View

Boolean

\-

true

\-

\-

\-

Search-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Search.defaultSearchElement

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.fulltextIndex.required

Element

Boolean

\-

true

\-

X

NOT\_RELEASED

Search.fuzzinessThreshold

Element

Decimal(3,2)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.mode

Element

String(20)

#IDENTIFIER

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.ranking

Element

String(6)

#HIGH
#LOW
#MEDIUM

#MEDIUM

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.searchable

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.termMappingDictionary

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.termMappingListId\[ \]

Element

String(32)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Semantics.address.city

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.country

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.label

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.number

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.postBox

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.region

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.street

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.streetNoNumber

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.subRegion

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.type\[ \]

Element
Parameter

String(10)

#HOME
#OTHER
#PREF
#WORK

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.address.zipCode

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.booleanIndicator

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.businessDate.at

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.businessDate.from

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.businessDate.to

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.dayOfMonth

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.dayOfYear

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.halfyear

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.month

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.quarter

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.week

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.year

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.yearHalfyear

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.yearMonth

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.yearQuarter

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendar.yearWeek

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.calendarItem.categories

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.class

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.completed

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.contact

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.description

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.dtEnd

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.dtStart

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.due

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.duration

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.fbType

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.location

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.percentComplete

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.priority

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.status

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.summary

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.transparent

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.calendarItem.wholeDay

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.contact.birthDate

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.contact.note

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.contact.photo

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

Semantics.contact.type

Element
Parameter

String(12)

#ORGANIZATION
#PERSON

\-

\-

\-

\-

Semantics.dateTime

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.durationInDays

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.durationInHours

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.durationInMinutes

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.durationInSeconds

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.address

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.bcc

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.body

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.cc

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.from

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.keywords

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.received

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.sender

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.subject

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.to

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.eMail.type\[ \]

Element
Parameter

String(10)

#HOME
#OTHER
#PREF
#WORK

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.dayOfYear

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.period

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.quarter

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.week

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.year

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.yearPeriod

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.yearQuarter

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.yearVariant

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.fiscal.yearWeek

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.geoLocation.cartoId

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.geoLocation.latitude

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.geoLocation.longitude

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.geoLocation.normalizedName

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.imageUrl

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.interval\[ \].boundaryCodeElement

Entity

ElementRef

\-

\-

\-

X

\-

Semantics.interval\[ \].lowerBoundaryElement

Entity

ElementRef

\-

\-

\-

X

\-

Semantics.interval\[ \].lowerBoundaryIncluded

Entity

Boolean

\-

true

\-

X

\-

Semantics.interval\[ \].lowerBoundaryParameter

Entity

ParameterRef

\-

\-

\-

X

\-

Semantics.interval\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

\-

Semantics.interval\[ \].upperBoundaryElement

Entity

ElementRef

\-

\-

\-

X

\-

Semantics.interval\[ \].upperBoundaryIncluded

Entity

Boolean

\-

true

\-

X

\-

Semantics.interval\[ \].upperBoundaryParameter

Entity

ParameterRef

\-

\-

\-

X

\-

Semantics.language

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.languageReference

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

Semantics.largeObject.contentDispositionPreference

Element

String(30)

#ATTACHMENT
#INLINE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.largeObject.fileName

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.largeObject.mimeType

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.mimeType

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.additionalName

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.familyName

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.fullName

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.givenName

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.jobTitle

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.nickName

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.prefix

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.name.suffix

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.organization.name

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.organization.role

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.organization.unit

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.personalData.dataSubjectRole

Entity

String(30)

\-

\-

\-

X

\-

Semantics.personalData.entitySemantics

Entity

String(30)

#DATA\_SUBJECT

\-

\-

X

\-

Semantics.personalData.fieldSemantics

Element

String(30)

#DATA\_SUBJECT\_ID
#LEGAL\_ENTITY\_ID
#SUBJECT\_ID\_TYPE

\-

\-

X

\-

Semantics.personalData.isPotentiallySensitive

Element

Boolean

\-

true

\-

X

\-

Semantics.signReversalIndicator

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.spatialData.srid.value

Element
Parameter

String(20)

\-

\-

\-

\-

\-

Semantics.spatialData.type\[ \]

Element
Parameter

String(30)

#ANY
#CIRCULAR\_STRING
#GEOMETRY\_COLLECTION
#LINE\_STRING
#MULTI\_LINE\_STRING
#MULTI\_POINT
#MULTI\_POLYGON
#POINT
#POLYGON

\-

\-

\-

\-

Semantics.systemDate.createdAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.systemDate.lastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.systemDate.localInstanceLastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.systemDateTime.createdAt

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.systemDateTime.lastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.systemDateTime.localInstanceLastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.systemTime.createdAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.systemTime.lastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.systemTime.localInstanceLastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.telephone.type\[ \]

Element
Parameter

String(10)

#CELL
#FAX
#HOME
#PAGER
#PREF
#TEXT
#TEXT\_PHONE
#VIDEO
#VOICE
#WORK

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.text

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.time

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.url.mimeType

Element
Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

Semantics.user.createdBy

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.user.id

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.user.lastChangedBy

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.user.localInstanceLastChangedBy

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.user.responsible

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.uuid

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.valueRange.exclusiveMaximum

Element

Boolean

\-

true

\-

X

\-

Semantics.valueRange.exclusiveMinimum

Element

Boolean

\-

true

\-

X

\-

Semantics.valueRange.maximum

Element

String(1298)

\-

\-

\-

X

\-

Semantics.valueRange.minimum

Element

String(1298)

\-

\-

\-

X

\-

UI-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

UI.badge.headLine.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.imageUrl

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.typeImageUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].dataAction

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].invocationGrouping

Entity

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].requiresContext

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].semanticObject

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].semanticObjectAction

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].type

Entity

String(40)

#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].chartType

Entity

String(40)

#AREA
#AREA\_STACKED
#AREA\_STACKED\_100
#BAR
#BAR\_DUAL
#BAR\_STACKED
#BAR\_STACKED\_100
#BAR\_STACKED\_DUAL
#BAR\_STACKED\_DUAL\_100
#BUBBLE
#BULLET
#COLUMN
#COLUMN\_DUAL
#COLUMN\_STACKED
#COLUMN\_STACKED\_100
#COLUMN\_STACKED\_DUAL
#COLUMN\_STACKED\_DUAL\_100
#COMBINATION
#COMBINATION\_DUAL
#COMBINATION\_STACKED
#COMBINATION\_STACKED\_DUAL
#DONUT
#DONUT\_100
#HEAT\_MAP
#HORIZONTAL\_AREA
#HORIZONTAL\_AREA\_STACKED
#HORIZONTAL\_AREA\_STACKED\_100
#HORIZONTAL\_COMBINATION\_DUAL
#HORIZONTAL\_COMBINATION\_STACKED
#HORIZONTAL\_COMBINATION\_STACKED\_DUAL
#HORIZONTAL\_WATERFALL
#LINE
#LINE\_DUAL
#PIE
#RADAR
#SCATTER
#TREE\_MAP
#VERTICAL\_BULLET
#WATERFALL

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].description

Entity

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].dimension

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].emphasizedValues\[ \]

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].role

Entity

String(10)

#CATEGORY
#CATEGORY2
#SERIES

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].valuesForSequentialColorLevels\[ \]

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensions\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].asDataPoint

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].measure

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].role

Entity

String(10)

#AXIS\_1
#AXIS\_2
#AXIS\_3

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].useSequentialColorLevels

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measures\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].title

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].cssDefault.width

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].groupLabel

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].name

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].requiresContext

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].template

Element

String(255)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONNECTED\_FIELDS
#AS\_CONTACT
#AS\_DATAPOINT
#AS\_FIELDGROUP
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.connectedFields\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.criticalityLabels\[ \].criticality

Element

Integer

#CRITICAL
#NEGATIVE
#POSITIVE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.criticalityLabels\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.criticalityLabels\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].criticality

Element
Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].type

Element

String(40)

#STANDARD
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataFieldDefault\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.improvementDirection

Element

String(8)

#MAXIMIZE
#MINIMIZE
#TARGET

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityValue

Element

Integer

#CRITICAL
#NEGATIVE
#POSITIVE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.forecastValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.longDescription

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.targetValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.title

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trend

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.downDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongDownDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongUpDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.upDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.visualization

Element

String(12)

#BULLET\_CHART
#DONUT
#NUMBER
#PROGRESS
#RATING

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].feature

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].id

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isMap

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isPartOfPreview

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isSummary

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].parentId

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].purpose

Element

String(40)

#FILTER
#HEADER
#QUICK\_CREATE
#QUICK\_VIEW
#STANDARD

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].targetQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].type

Element

String(40)

#ADDRESS\_REFERENCE
#BADGE\_REFERENCE
#CHART\_REFERENCE
#COLLECTION
#CONTACT\_REFERENCE
#DATAPOINT\_REFERENCE
#FIELDGROUP\_REFERENCE
#HEADERINFO\_REFERENCE
#IDENTIFICATION\_REFERENCE
#LINEITEM\_REFERENCE
#PRESENTATIONVARIANT\_REFERENCE
#SELECTIONPRESENTATIONVARIANT\_REFERENCE
#STATUSINFO\_REFERENCE
#URL\_REFERENCE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].cssDefault.width

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].groupLabel

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].requiresContext

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONNECTED\_FIELDS
#AS\_CONTACT
#AS\_DATAPOINT
#AS\_FIELDGROUP
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.type

Entity

String(40)

#AS\_CONNECTED\_FIELDS
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.valueQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.imageUrl

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.type

Entity

String(40)

#AS\_CONNECTED\_FIELDS
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.valueQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeImageUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeName

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeNamePlural

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.hidden

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].cssDefault.width

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].requiresContext

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONNECTED\_FIELDS
#AS\_CONTACT
#AS\_DATAPOINT
#AS\_FIELDGROUP
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.improvementDirection

Element

String(8)

#MAXIMIZE
#MINIMIZE
#TARGET

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityValue

Element

Integer

#CRITICAL
#NEGATIVE
#POSITIVE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.forecastValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.longDescription

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.title

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trend

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.visualization

Element

String(12)

#BULLET\_CHART
#DONUT
#NUMBER
#PROGRESS
#RATING

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.alternativePresentationVariantQualifiers\[ \]

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.defaultPresentationVariantQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].id

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].selectionVariantQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].shortDescription

Element

String(20)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].criticality

Element
Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].cssDefault.width

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].qualifier

Element
Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].requiresContext

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONNECTED\_FIELDS
#AS\_CONTACT
#AS\_DATAPOINT
#AS\_FIELDGROUP
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.masked

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.multiLineText

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].groupBy\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].includeGrandTotal

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].initialExpansionLevel

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].maxItems

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].requestAtLeast\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].selectionFieldsQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].sortOrder\[ \].by

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].sortOrder\[ \].direction

Entity

String(4)

#ASC
#DESC

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].total\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].totalBy\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].visualizations\[ \].element

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].visualizations\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].visualizations\[ \].type

Entity

String(40)

#AS\_CHART
#AS\_DATAPOINT
#AS\_LINEITEM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].element

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].presentationVariantQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].selectionVariantQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].filter

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].parameters\[ \].name

Entity

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].parameters\[ \].value

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].cssDefault.width

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].emphasized

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].requiresContext

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONNECTED\_FIELDS
#AS\_CONTACT
#AS\_DATAPOINT
#AS\_FIELDGROUP
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.textArrangement

Element
Entity

String(13)

#TEXT\_FIRST
#TEXT\_LAST
#TEXT\_ONLY
#TEXT\_SEPARATE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.valueCriticality\[ \].criticality

Element

Integer

#CRITICAL
#NEGATIVE
#POSITIVE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.valueCriticality\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.valueCriticality\[ \].value

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

VDM-Annotations

Annotation

Scope

Type

Enums

Default

Text

MDE

API

VDM.auxiliaryEntity.for.entity

Entity

EntityRef

\-

\-

\-

\-

\-

VDM.auxiliaryEntity.usage.type\[ \]

Entity

String(30)

#ENTERPRISE\_SEARCH

\-

\-

\-

\-

VDM.entity

Entity

Boolean

\-

true

\-

\-

\-

VDM.lifecycle.contract.type

Entity

String(30)

#NONE
#PUBLIC\_LOCAL\_API
#PUBLIC\_REMOTE\_API
#SAP\_INTERNAL\_API

\-

\-

\-

\-

VDM.lifecycle.status

Element
Entity

String(30)

#DEPRECATED

\-

\-

\-

\-

VDM.lifecycle.successor

Element
Entity

String(30)

\-

\-

\-

\-

\-

VDM.private

Entity

Boolean

\-

true

\-

\-

\-

VDM.usage.type\[ \]

Entity

String(40)

#ACTION\_PARAMETER\_STRUCTURE
#ACTION\_RESULT\_STRUCTURE
#EVENT\_SIGNATURE
#TRANSACTIONAL\_PROCESSING\_SERVICE

\-

\-

\-

\-

VDM.viewExtension

View Extension

Boolean

\-

true

\-

\-

\-

VDM.viewType

Entity

String(30)

#BASIC
#COMPOSITE
#CONSUMPTION
#DERIVATION\_FUNCTION
#EXTENSION
#TRANSACTIONAL

\-

\-

\-

\-

Continue
![Example](exa.gif "Example") [ABAP CDS, Annotation Array](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_array_abexa.htm)