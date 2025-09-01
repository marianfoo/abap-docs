  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_1)

-   [Aggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_3)

-   [AnalyticsDetails-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_5)

-   [DefaultAggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_7)

-   [Hierarchy-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_9)

-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_11)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_13)

Note

See also [Framework-Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_ddla.htm).

AccessControl-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

AccessControl.personalData.blocking

Table Function
View

String(30)

#BLOCKED\_DATA\_EXCLUDED
#NOT\_REQUIRED
#REQUIRED

\-

\-

\-

AccessControl.privilegedAssociations\[ \]

Table Function
View

AssociationRef

\-

\-

\-

\-

Aggregation-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

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

Aggregation.referenceElement\[ \]

Element

ElementRef

\-

\-

\-

\-

Analytics-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

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

Analytics.dataExtraction.delta.byElement.detectDeletedRecords

Table Function
View

Boolean

\-

true

\-

\-

Analytics.dataExtraction.delta.byElement.ignoreDeletionAfterDays

Table Function
View

Integer

\-

\-

\-

X

Analytics.dataExtraction.delta.byElement.maxDelayInSeconds

Table Function
View

Integer

\-

1800

\-

X

Analytics.dataExtraction.delta.byElement.name

Table Function
View

ElementRef

\-

\-

\-

\-

Analytics.dataExtraction.enabled

Table Function
View

Boolean

\-

true

\-

\-

Analytics.hidden

Table Function
View

Boolean

\-

true

\-

\-

Analytics.hints

Table Function
View

String(1298)

\-

\-

\-

\-

Analytics.planning.enabled

Table Function
View

Boolean

\-

true

\-

\-

Analytics.query

Table Function
View

Boolean

\-

true

\-

\-

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

Analytics.writeBack.className

Table Function
View

String(30)

\-

\-

\-

\-

AnalyticsDetails-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

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

AnalyticsDetails.exceptionAggregationSteps\[ \].exceptionAggregationElements\[ \]

Element

ElementRef

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

AnalyticsDetails.planning.distribution

Element

String(20)

#EQUAL
#PROPORTIONAL
#PROPORTIONAL\_REF

\-

\-

\-

AnalyticsDetails.planning.distributionReference

Element

ElementRef

\-

\-

\-

\-

AnalyticsDetails.planning.enabled

Element

Boolean

\-

true

\-

\-

AnalyticsDetails.query.axis

Element

String(20)

#COLUMNS
#FREE
#ROWS

\-

\-

\-

AnalyticsDetails.query.decimals

Element

Integer

\-

\-

\-

\-

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

AnalyticsDetails.query.displayHierarchy

Element

String(20)

#FILTER
#OFF
#ON

\-

\-

\-

AnalyticsDetails.query.elementHierarchy.initiallyCollapsed

Element

Boolean

\-

true

\-

\-

AnalyticsDetails.query.elementHierarchy.parent

Element

ElementRef

\-

\-

\-

\-

AnalyticsDetails.query.formula

Element

String(1298)

\-

\-

\-

\-

AnalyticsDetails.query.hidden

Element

Boolean

\-

true

\-

\-

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

AnalyticsDetails.query.hierarchyBinding\[ \].value

Element

String(512)

\-

\-

\-

\-

AnalyticsDetails.query.hierarchyBinding\[ \].variableSequence

Element

Integer

\-

\-

\-

\-

AnalyticsDetails.query.hierarchyInitialLevel

Element

Integer

\-

\-

\-

\-

AnalyticsDetails.query.hierarchySettings.hidePostedNodesValues

Element

Boolean

\-

true

\-

\-

AnalyticsDetails.query.resultValuesSource

Element

String(10)

#CUBE
#DIMENSION

\-

\-

\-

AnalyticsDetails.query.scaling

Element

Integer

\-

\-

\-

\-

AnalyticsDetails.query.sortDirection

Element

String(20)

#ASC
#DESC

\-

\-

\-

AnalyticsDetails.query.totals

Element

String(20)

#HIDE
#SHOW

\-

\-

\-

AnalyticsDetails.query.variableSequence

Element
Parameter

Integer

\-

\-

\-

\-

Consumption-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

Consumption.defaultValue

Parameter

String(1024)

\-

\-

\-

X

Consumption.derivation.binding\[ \].targetElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.derivation.binding\[ \].targetParameter

Element
Parameter

ParameterRef

\-

\-

\-

X

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

Consumption.derivation.binding\[ \].value

Element
Parameter

String(512)

\-

\-

\-

X

Consumption.derivation.lookupEntity

Element
Parameter

EntityRef

\-

\-

\-

X

Consumption.derivation.resultElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.derivation.resultElementHigh

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.derivation.resultHierarchyNode.mapping\[ \].hierarchyElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.derivation.resultHierarchyNode.mapping\[ \].lookupElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.derivation.resultHierarchyNode.nodeTypeElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.filter.defaultHierarchyNode.nodeType

Element

ElementRef

\-

\-

\-

X

Consumption.filter.defaultHierarchyNode.node\[ \].element

Element

ElementRef

\-

\-

\-

X

Consumption.filter.defaultHierarchyNode.node\[ \].value

Element

String(512)

\-

\-

\-

X

Consumption.filter.defaultValue

Element

String(1024)

\-

\-

\-

X

Consumption.filter.defaultValueHigh

Element

String(1024)

\-

\-

\-

X

Consumption.filter.hidden

Element

Boolean

\-

true

\-

X

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

Consumption.filter.hierarchyBinding\[ \].value

Element

String(512)

\-

\-

\-

X

Consumption.filter.hierarchyBinding\[ \].variableSequence

Element

Integer

\-

\-

\-

X

Consumption.filter.mandatory

Element

Boolean

\-

true

\-

X

Consumption.filter.multipleSelections

Element

Boolean

\-

true

\-

X

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

Consumption.groupWithElement

Element

ElementRef

\-

\-

\-

X

Consumption.hidden

Element
Parameter

Boolean

\-

true

\-

\-

Consumption.labelElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.quickInfoElement

Element
Parameter

ElementRef

\-

\-

\-

\-

Consumption.ranking.activeFunctions\[ \].id

View

String(120)

\-

\-

\-

X

Consumption.ranking.activeFunctions\[ \].weight

View

Decimal(3,2)

\-

1

\-

X

Consumption.ranking.functionParameterBinding\[ \].functionId

Element

String(120)

\-

\-

\-

X

Consumption.ranking.functionParameterBinding\[ \].parameterId

Element

String(120)

\-

\-

\-

X

Consumption.semanticObject

Element
Parameter
Table Function
View

String(120)

\-

\-

\-

X

Consumption.valueHelp

Element
Parameter

ElementRef

\-

\-

\-

\-

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].element

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localElement

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.valueHelpDefinition\[ \].association

Element
Parameter

AssociationRef

\-

\-

\-

X

Consumption.valueHelpDefinition\[ \].entity.element

Element
Parameter

ElementRef

\-

\-

\-

X

Consumption.valueHelpDefinition\[ \].entity.name

Element
Parameter

EntityRef

\-

\-

\-

X

Consumption.valueHelpDefinition\[ \].label

Element
Parameter

String(60)

\-

\-

X

X

Consumption.valueHelpDefinition\[ \].qualifier

Element
Parameter

String(120)

\-

\-

\-

X

DefaultAggregation-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

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

EnterpriseSearch-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

EnterpriseSearch.commonAttributes\[ \]

Element

String(100)

\-

\-

\-

X

EnterpriseSearch.defaultValueSuggestElement

Element

Boolean

\-

true

\-

X

EnterpriseSearch.enabled

Table Function
View

Boolean

\-

true

\-

X

EnterpriseSearch.expand

Element

Boolean

\-

true

\-

X

EnterpriseSearch.fieldGroupForSearchQuery\[ \].elements\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

EnterpriseSearch.fieldGroupForSearchQuery\[ \].name

Table Function
View

String(128)

\-

\-

\-

X

EnterpriseSearch.filteringAttribute.caseInsensitiveAggregation

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringAttribute.countNullValues

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringAttribute.default

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringAttribute.displayPosition

Element

Integer

\-

\-

\-

X

EnterpriseSearch.filteringFacet.caseInsensitiveAggregation

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringFacet.collapse

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringFacet.complexFilter

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringFacet.countNullValues

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringFacet.default

Element

Boolean

\-

true

\-

X

EnterpriseSearch.filteringFacet.displayPosition

Element

Integer

\-

\-

\-

X

EnterpriseSearch.filteringFacet.numberOfValues

Element

Integer

\-

\-

\-

X

EnterpriseSearch.filteringFacet.order.by

Element

String(20)

#FILTER\_ELEMENT\_LABEL
#FILTER\_ELEMENT\_VALUE
#NUMBER\_OF\_HITS

#NUMBER\_OF\_HITS

\-

X

EnterpriseSearch.filteringFacet.order.byReference

Element

ElementRef

\-

\-

\-

X

EnterpriseSearch.filteringFacet.order.direction

Element

String(4)

#ASC
#DESC

\-

\-

X

EnterpriseSearch.highlighted.beginTag

Element

String(128)

\-

\-

\-

X

EnterpriseSearch.highlighted.enabled

Element

Boolean

\-

true

\-

X

EnterpriseSearch.highlighted.endTag

Element

String(128)

\-

\-

\-

X

EnterpriseSearch.maximumLength

Element

Integer

\-

\-

\-

X

EnterpriseSearch.searchOptions

Element

String(500)

\-

\-

\-

X

EnterpriseSearch.snippets.beginTag

Element

String(128)

\-

\-

\-

X

EnterpriseSearch.snippets.enabled

Element

Boolean

\-

true

\-

X

EnterpriseSearch.snippets.endTag

Element

String(128)

\-

\-

\-

X

EnterpriseSearch.technicalDescription

Element

Boolean

\-

true

\-

X

Hierarchy-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

Hierarchy.parentChild\[ \].directory

View

AssociationRef

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

Hierarchy.parentChild\[ \].multipleParents

View

Boolean

\-

true

\-

\-

Hierarchy.parentChild\[ \].name

View

String(127)

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

Hierarchy.parentChild\[ \].orphanedNode.stepParentNodeId\[ \]

View

String(1298)

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

Hierarchy.parentChild\[ \].recurse.parent\[ \]

View

ElementRef

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

Hierarchy.parentChild\[ \].rootNode.visibility

View

String(25)

#ADD\_ROOT\_NODE
#ADD\_ROOT\_NODE\_IF\_DEFINED
#DO\_NOT\_ADD\_ROOT\_NODE

#ADD\_ROOT\_NODE\_IF\_DEFINED

\-

\-

Hierarchy.parentChild\[ \].siblingsOrder\[ \].by

View

ElementRef

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

OData-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

OData.publish

Table Function
View

Boolean

\-

true

\-

\-

ObjectModel-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

ObjectModel.alternativeKey\[ \].element\[ \]

Table Function
View

ElementRef

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

ObjectModel.alternativeKey\[ \].uniqueness

Table Function
View

String(30)

#UNIQUE
#UNIQUE\_IF\_NOT\_INITIAL

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

ObjectModel.association.draft.fieldNamePrefix

Element

String(16)

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

ObjectModel.compositionRoot

Table Function
View

Boolean

\-

true

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

ObjectModel.dataCategory

Table Function
View

String(30)

#HIERARCHY
#TEXT

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

ObjectModel.draftEnabled

Table Function
View

Boolean

\-

true

\-

\-

ObjectModel.enabled

Element

Boolean

\-

true

\-

\-

ObjectModel.entityChangeStateId

Table Function
View

ElementRef

\-

\-

\-

\-

ObjectModel.filter.transformedBy

Element

String(255)

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

ObjectModel.hierarchy.association

Element

AssociationRef

\-

\-

\-

\-

ObjectModel.lifecycle.enqueue.expiryBehavior

Table Function
View

String(30)

#RELATIVE\_TO\_ENQUEUE\_START
#RELATIVE\_TO\_LAST\_CHANGE

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

ObjectModel.lifecycle.enqueue.expiryInterval

Table Function
View

String(20)

\-

\-

\-

\-

ObjectModel.lifecycle.enqueue.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

\-

\-

\-

ObjectModel.lifecycle.processing.expiryBehavior

Table Function
View

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

ObjectModel.lifecycle.processing.expiryInterval

Table Function
View

String(20)

\-

\-

\-

\-

ObjectModel.lifecycle.processing.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

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

ObjectModel.modelCategory

Table Function
View

String(30)

#BUSINESS\_OBJECT

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

ObjectModel.representativeKey

Table Function
View

KeyElementRef

\-

\-

\-

\-

ObjectModel.resultSet.sizeCategory

View

String(3)

#XS

\-

\-

\-

ObjectModel.semanticKey\[ \]

Table Function
View

ElementRef

\-

\-

\-

\-

ObjectModel.sort.transformedBy

Element

String(255)

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

ObjectModel.text.element\[ \]

Element

ElementRef

\-

\-

\-

\-

ObjectModel.transactionalProcessingDelegated

Table Function
View

Boolean

\-

true

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

ObjectModel.transactionalProcessingUnitRoot

Table Function
View

Boolean

\-

true

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

ObjectModel.usageType.dataClass

Table Function
View

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

ObjectModel.usageType.serviceQuality

Table Function
View

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

ObjectModel.usageType.sizeCategory

Table Function
View

String(3)

#L
#M
#S
#XL
#XXL

#S

\-

\-

ObjectModel.virtualElement

Element

Boolean

\-

true

\-

\-

ObjectModel.virtualElementCalculatedBy

Element

String(255)

\-

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

ObjectModel.writeDraftPersistence

Table Function
View

String(16)

\-

\-

\-

\-

Search-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

Search.defaultSearchElement

Element

Boolean

\-

true

\-

X

Search.fuzzinessThreshold

Element

Decimal(3,2)

\-

\-

\-

X

Search.ranking

Element

String(6)

#HIGH
#LOW
#MEDIUM

#MEDIUM

\-

X

Search.searchable

Table Function
View

Boolean

\-

true

\-

X

Search.termMappingDictionary

Element

String(128)

\-

\-

\-

X

Search.termMappingListId\[ \]

Element

String(32)

\-

\-

\-

X

Semantics-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

Semantics.address.city

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.country

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.label

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.number

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.postBox

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.region

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.street

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.streetNoNumber

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.address.subRegion

Element
Parameter

Boolean

\-

true

\-

\-

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

Semantics.address.zipCode

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.booleanIndicator

Element

Boolean

\-

true

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

Semantics.businessDate.from

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.businessDate.to

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.dayOfMonth

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.dayOfYear

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.halfyear

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.month

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.quarter

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.week

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.year

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.yearHalfyear

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.yearMonth

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.yearQuarter

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendar.yearWeek

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.calendarItem.categories

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.completed

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.description

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.dtStart

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.duration

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.location

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.priority

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.summary

Element
Parameter

Boolean

\-

true

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

Semantics.calendarItem.wholeDay

Element
Parameter

Boolean

\-

true

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

Semantics.contact.note

Element
Parameter

Boolean

\-

true

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

Semantics.contact.type

Element
Parameter

String(12)

#ORGANIZATION
#PERSON

\-

\-

\-

Semantics.durationInSeconds

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.address

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.bcc

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.body

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.cc

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.from

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.keywords

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.received

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.sender

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.subject

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.eMail.to

Element
Parameter

Boolean

\-

true

\-

\-

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

Semantics.fiscal.period

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.fiscal.year

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.fiscal.yearPeriod

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.fiscal.yearVariant

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.geoLocation.cartoId

Element
Parameter

Boolean

\-

true

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

Semantics.geoLocation.longitude

Element
Parameter

Boolean

\-

true

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

Semantics.imageUrl

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.language

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.languageReference

Element
Parameter

ElementRef

\-

\-

\-

\-

Semantics.largeObject.mimeType

Element

String(1024)

\-

\-

\-

\-

Semantics.mimeType

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.additionalName

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.familyName

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.fullName

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.givenName

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.jobTitle

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.nickName

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.prefix

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.name.suffix

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.organization.name

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.organization.role

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.organization.unit

Element
Parameter

Boolean

\-

true

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

Semantics.systemDate.lastChangedAt

Element
Parameter

Boolean

\-

true

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

Semantics.systemDateTime.lastChangedAt

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.systemTime.createdAt

Element
Parameter

Boolean

\-

true

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

Semantics.text

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.time

Element
Parameter

Boolean

\-

true

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

Semantics.user.createdBy

Element
Parameter

Boolean

\-

true

\-

\-

Semantics.user.id

Element
Parameter

Boolean

\-

true

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

Semantics.user.responsible

Element
Parameter

Boolean

\-

true

\-

\-

UI-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

UI.badge.headLine.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.headLine.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.badge.headLine.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.badge.headLine.label

Table Function
View

String(60)

\-

\-

X

X

UI.badge.headLine.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.headLine.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.badge.headLine.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.headLine.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.imageUrl

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.mainInfo.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.mainInfo.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.badge.mainInfo.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.badge.mainInfo.label

Table Function
View

String(60)

\-

\-

X

X

UI.badge.mainInfo.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.mainInfo.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.badge.mainInfo.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.mainInfo.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.secondaryInfo.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.secondaryInfo.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.badge.secondaryInfo.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.badge.secondaryInfo.label

Table Function
View

String(60)

\-

\-

X

X

UI.badge.secondaryInfo.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.secondaryInfo.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.badge.secondaryInfo.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.secondaryInfo.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.title.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.title.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.badge.title.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.badge.title.label

Table Function
View

String(60)

\-

\-

X

X

UI.badge.title.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.title.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.badge.title.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.title.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.badge.typeImageUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.chart\[ \].actions\[ \].dataAction

Table Function
View

String(120)

\-

\-

\-

X

UI.chart\[ \].actions\[ \].invocationGrouping

Table Function
View

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

UI.chart\[ \].actions\[ \].label

Table Function
View

String(60)

\-

\-

X

X

UI.chart\[ \].actions\[ \].semanticObjectAction

Table Function
View

String(120)

\-

\-

\-

X

UI.chart\[ \].actions\[ \].type

Table Function
View

String(40)

#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION

\-

\-

X

UI.chart\[ \].chartType

Table Function
View

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
#COMBINATION\_STACKED
#COMBINATION\_STACKED\_DUAL
#DONUT
#HEAT\_MAP
#HORIZONTAL\_AREA
#HORIZONTAL\_AREA\_STACKED
#HORIZONTAL\_AREA\_STACKED\_100
#HORIZONTAL\_COMBINATION\_STACKED
#HORIZONTAL\_COMBINATION\_STACKED\_DUAL
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

UI.chart\[ \].description

Table Function
View

String(120)

\-

\-

X

X

UI.chart\[ \].dimensionAttributes\[ \].dimension

Table Function
View

ElementRef

\-

\-

\-

X

UI.chart\[ \].dimensionAttributes\[ \].role

Table Function
View

String(10)

#CATEGORY
#SERIES

\-

\-

X

UI.chart\[ \].dimensions\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.chart\[ \].measureAttributes\[ \].asDataPoint

Table Function
View

Boolean

\-

true

\-

X

UI.chart\[ \].measureAttributes\[ \].measure

Table Function
View

ElementRef

\-

\-

\-

X

UI.chart\[ \].measureAttributes\[ \].role

Table Function
View

String(10)

#AXIS\_1
#AXIS\_2
#AXIS\_3

\-

\-

X

UI.chart\[ \].measures\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.chart\[ \].qualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.chart\[ \].title

Table Function
View

String(60)

\-

\-

X

X

UI.dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.deviationRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.deviationRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.improvementDirection

Element

String(8)

#MAXIMIZE
#MINIMIZE
#TARGET

\-

\-

X

UI.dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.toleranceRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.criticalityCalculation.toleranceRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.dataPoint.description

Element

String(120)

\-

\-

X

X

UI.dataPoint.forecastValue

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.longDescription

Element

String(250)

\-

\-

X

X

UI.dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

UI.dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

UI.dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.targetValueElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.title

Element

String(60)

\-

\-

X

X

UI.dataPoint.trend

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.trendCalculation.downDifferenceElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

true

\-

X

UI.dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.trendCalculation.strongDownDifferenceElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.trendCalculation.strongUpDifferenceElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

UI.dataPoint.trendCalculation.upDifferenceElement

Element

ElementRef

\-

\-

\-

X

UI.dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

UI.dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

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

UI.facet\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.facet\[ \].id

Element

String(120)

\-

\-

\-

X

UI.facet\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

UI.facet\[ \].isMap

Element

Boolean

\-

true

\-

X

UI.facet\[ \].isPartOfPreview

Element

Boolean

\-

true

\-

X

UI.facet\[ \].isSummary

Element

Boolean

\-

true

\-

X

UI.facet\[ \].label

Element

String(60)

\-

\-

X

X

UI.facet\[ \].parentId

Element

String(120)

\-

\-

\-

X

UI.facet\[ \].position

Element

DecimalFloat

\-

\-

\-

X

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

UI.facet\[ \].qualifier

Element

String(120)

\-

\-

\-

X

UI.facet\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

UI.facet\[ \].targetQualifier

Element

String(120)

\-

\-

\-

X

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
#STATUSINFO\_REFERENCE
#URL\_REFERENCE

\-

\-

X

UI.facet\[ \].url

Element

ElementRef

\-

\-

\-

X

UI.fieldGroup\[ \].criticality

Element

ElementRef

\-

\-

\-

X

UI.fieldGroup\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.fieldGroup\[ \].dataAction

Element

String(120)

\-

\-

\-

X

UI.fieldGroup\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.fieldGroup\[ \].groupLabel

Element

String(60)

\-

\-

X

X

UI.fieldGroup\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

UI.fieldGroup\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

UI.fieldGroup\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

UI.fieldGroup\[ \].label

Element

String(60)

\-

\-

X

X

UI.fieldGroup\[ \].position

Element

DecimalFloat

\-

\-

\-

X

UI.fieldGroup\[ \].qualifier

Element

String(120)

\-

\-

\-

X

UI.fieldGroup\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

UI.fieldGroup\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

UI.fieldGroup\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONTACT
#AS\_DATAPOINT
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.fieldGroup\[ \].url

Element

ElementRef

\-

\-

\-

X

UI.fieldGroup\[ \].value

Element

ElementRef

\-

\-

\-

X

UI.fieldGroup\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

UI.headerInfo.description.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.description.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.headerInfo.description.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.headerInfo.description.label

Table Function
View

String(60)

\-

\-

X

X

UI.headerInfo.description.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.description.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.headerInfo.description.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.description.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.imageUrl

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.title.criticality

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.title.criticalityRepresentation

Table Function
View

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.headerInfo.title.iconUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.headerInfo.title.label

Table Function
View

String(60)

\-

\-

X

X

UI.headerInfo.title.targetElement

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.title.type

Table Function
View

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.headerInfo.title.url

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.title.value

Table Function
View

ElementRef

\-

\-

\-

X

UI.headerInfo.typeImageUrl

Table Function
View

String(1024)

\-

\-

\-

X

UI.headerInfo.typeName

Table Function
View

String(60)

\-

\-

X

X

UI.headerInfo.typeNamePlural

Table Function
View

String(60)

\-

\-

X

X

UI.hidden

Element

Boolean

\-

true

\-

X

UI.identification\[ \].criticality

Element

ElementRef

\-

\-

\-

X

UI.identification\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.identification\[ \].dataAction

Element

String(120)

\-

\-

\-

X

UI.identification\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.identification\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

UI.identification\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

UI.identification\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

UI.identification\[ \].label

Element

String(60)

\-

\-

X

X

UI.identification\[ \].position

Element

DecimalFloat

\-

\-

\-

X

UI.identification\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

UI.identification\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

UI.identification\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONTACT
#AS\_DATAPOINT
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.identification\[ \].url

Element

ElementRef

\-

\-

\-

X

UI.identification\[ \].value

Element

ElementRef

\-

\-

\-

X

UI.identification\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.improvementDirection

Element

String(8)

#MAXIMIZE
#MINIMIZE
#TARGET

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.kpi\[ \].dataPoint.description

Element

String(120)

\-

\-

X

X

UI.kpi\[ \].dataPoint.forecastValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.longDescription

Element

String(250)

\-

\-

X

X

UI.kpi\[ \].dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

UI.kpi\[ \].dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.title

Element

String(60)

\-

\-

X

X

UI.kpi\[ \].dataPoint.trend

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

UI.kpi\[ \].dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

UI.kpi\[ \].dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

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

UI.kpi\[ \].detail.alternativePresentationVariantQualifiers\[ \]

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].detail.defaultPresentationVariantQualifier

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].id

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].qualifier

Element

String(120)

\-

\-

\-

X

UI.kpi\[ \].selectionVariantQualifier

Element

String(120)

\-

\-

\-

X

UI.lineItem\[ \].criticality

Element

ElementRef

\-

\-

\-

X

UI.lineItem\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.lineItem\[ \].dataAction

Element

String(120)

\-

\-

\-

X

UI.lineItem\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.lineItem\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

UI.lineItem\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

UI.lineItem\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

UI.lineItem\[ \].label

Element

String(60)

\-

\-

X

X

UI.lineItem\[ \].position

Element

DecimalFloat

\-

\-

\-

X

UI.lineItem\[ \].qualifier

Element

String(120)

\-

\-

\-

X

UI.lineItem\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

UI.lineItem\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

UI.lineItem\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONTACT
#AS\_DATAPOINT
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.lineItem\[ \].url

Element

ElementRef

\-

\-

\-

X

UI.lineItem\[ \].value

Element

ElementRef

\-

\-

\-

X

UI.lineItem\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

UI.masked

Element

Boolean

\-

true

\-

X

UI.multiLineText

Element

Boolean

\-

true

\-

X

UI.presentationVariant\[ \].groupBy\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].id

Table Function
View

String(120)

\-

\-

\-

X

UI.presentationVariant\[ \].includeGrandTotal

Table Function
View

Boolean

\-

true

\-

X

UI.presentationVariant\[ \].initialExpansionLevel

Table Function
View

Integer

\-

\-

\-

X

UI.presentationVariant\[ \].maxItems

Table Function
View

Integer

\-

\-

\-

X

UI.presentationVariant\[ \].qualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.presentationVariant\[ \].requestAtLeast\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].selectionFieldsQualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.presentationVariant\[ \].sortOrder\[ \].by

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].sortOrder\[ \].direction

Table Function
View

String(4)

#ASC
#DESC

\-

\-

X

UI.presentationVariant\[ \].text

Table Function
View

String(60)

\-

\-

X

X

UI.presentationVariant\[ \].totalBy\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].total\[ \]

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].visualizations\[ \].element

Table Function
View

ElementRef

\-

\-

\-

X

UI.presentationVariant\[ \].visualizations\[ \].qualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.presentationVariant\[ \].visualizations\[ \].type

Table Function
View

String(40)

#AS\_CHART
#AS\_DATAPOINT
#AS\_LINEITEM

\-

\-

X

UI.selectionField\[ \].element

Element

ElementRef

\-

\-

\-

X

UI.selectionField\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.selectionField\[ \].position

Element

DecimalFloat

\-

\-

\-

X

UI.selectionField\[ \].qualifier

Element

String(120)

\-

\-

\-

X

UI.selectionPresentationVariant\[ \].id

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionPresentationVariant\[ \].presentationVariantQualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionPresentationVariant\[ \].qualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionPresentationVariant\[ \].selectionVariantQualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionPresentationVariant\[ \].text

Table Function
View

String(60)

\-

\-

X

X

UI.selectionVariant\[ \].filter

Table Function
View

String(1024)

\-

\-

\-

X

UI.selectionVariant\[ \].id

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionVariant\[ \].parameters\[ \].name

Table Function
View

ParameterRef

\-

\-

\-

X

UI.selectionVariant\[ \].parameters\[ \].value

Table Function
View

String(1024)

\-

\-

\-

X

UI.selectionVariant\[ \].qualifier

Table Function
View

String(120)

\-

\-

\-

X

UI.selectionVariant\[ \].text

Table Function
View

String(60)

\-

\-

X

X

UI.statusInfo\[ \].criticality

Element

ElementRef

\-

\-

\-

X

UI.statusInfo\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

UI.statusInfo\[ \].dataAction

Element

String(120)

\-

\-

\-

X

UI.statusInfo\[ \].exclude

Element

Boolean

\-

true

\-

X

UI.statusInfo\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

UI.statusInfo\[ \].importance

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

UI.statusInfo\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

UI.statusInfo\[ \].label

Element

String(60)

\-

\-

X

X

UI.statusInfo\[ \].position

Element

DecimalFloat

\-

\-

\-

X

UI.statusInfo\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

UI.statusInfo\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

UI.statusInfo\[ \].type

Element

String(40)

#AS\_ADDRESS
#AS\_CHART
#AS\_CONTACT
#AS\_DATAPOINT
#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION
#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

UI.statusInfo\[ \].url

Element

ElementRef

\-

\-

\-

X

UI.statusInfo\[ \].value

Element

ElementRef

\-

\-

\-

X

UI.statusInfo\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

UI.textArrangement

Element
View

String(13)

#TEXT\_FIRST
#TEXT\_LAST
#TEXT\_ONLY
#TEXT\_SEPARATE

\-

\-

X

Continue
![Example](exa.gif "Example") [ABAP CDS, Annotation Array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)