  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - Framework-Specific Annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") (see [Executable Example](javascript:call_link\('abencds_annotation_array_abexa.htm'\))). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The meanings of the framework-specific annotations are documented under CDS Annotations.

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_1)

-   [Aggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_3)

-   [AnalyticsDetails-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_5)

-   [DefaultAggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_7)

-   [Feature-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [Hierarchy-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_9)

-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [OData-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_11)

-   [Search-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_13)

-   [UI-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_14)

Note

See also [Framework-Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

AccessControl-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.aspect.fullAuthorization.operator

 

String(20)

#EQUALS
#IS\_NOT\_NULL
#IS\_NULL

#EQUALS

\-

\-

\-

AccessControl.aspect.fullAuthorization.value

 

String(60)

\-

\-

\-

\-

\-

AccessControl.personalData.blocking

Hierarchy
Table Function
View

String(30)

#BLOCKED\_DATA\_EXCLUDED
#NOT\_REQUIRED
#REQUIRED

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

\-

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

Typ

Enums

Default

Text

MDE

API

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

\-

Aggregation.referenceElement\[ \]

Element

ElementRef

\-

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

API

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

\-

Analytics.dataExtraction.delta.byElement.detectDeletedRecords

Table Function
View

Boolean

\-

true

\-

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

\-

Analytics.dataExtraction.delta.byElement.maxDelayInSeconds

Table Function
View

Integer

\-

1800

\-

X

\-

Analytics.dataExtraction.delta.byElement.name

Table Function
View

ElementRef

\-

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

\-

Analytics.hidden

Element
View

Boolean

\-

true

\-

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

\-

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

\-

Analytics.planning.enabled

Table Function
View

Boolean

\-

true

\-

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

\-

Analytics.viewModelReplication.enabled

View

Boolean

\-

true

\-

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

\-

AnalyticsDetails-Annotations

Annotation

Scope

Typ

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

ElementRef

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

\-

AnalyticsDetails.planning.distributionReference

Element

ElementRef

\-

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

\-

AnalyticsDetails.query.decimals

Element

Integer

\-

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

\-

AnalyticsDetails.query.elementHierarchy.initiallyCollapsed

Element

Boolean

\-

true

\-

\-

\-

AnalyticsDetails.query.elementHierarchy.parent

Element

ElementRef

\-

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

\-

AnalyticsDetails.query.hidden

Element

Boolean

\-

true

\-

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

\-

AnalyticsDetails.query.hierarchyBinding\[ \].value

Element

String(512)

\-

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

\-

AnalyticsDetails.query.hierarchyInitialLevel

Element

Integer

\-

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

\-

AnalyticsDetails.query.resultValuesSource

Element

String(10)

#CUBE
#DIMENSION

\-

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

\-

AnalyticsDetails.query.sortDirection

Element

String(20)

#ASC
#DESC

\-

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

\-

AnalyticsDetails.query.variableSequence

Element
Parameter

Integer

\-

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

API

Consumption.defaultValue

Element
Parameter

String(1024)

\-

\-

\-

X

\-

Consumption.derivation.binding\[ \].targetElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.derivation.binding\[ \].targetParameter

Element
Parameter

ParameterRef

\-

\-

\-

X

\-

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

\-

Consumption.derivation.binding\[ \].value

Element
Parameter

String(512)

\-

\-

\-

X

\-

Consumption.derivation.lookupEntity

Element
Parameter

EntityRef

\-

\-

\-

X

\-

Consumption.derivation.pfcgMapping

Element
Parameter

String(30)

\-

\-

\-

X

\-

Consumption.derivation.resultElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.derivation.resultElementHigh

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.derivation.resultHierarchyNode.mapping\[ \].hierarchyElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.derivation.resultHierarchyNode.mapping\[ \].lookupElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.derivation.resultHierarchyNode.nodeTypeElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.filter.businessDate.at

Element
View

Boolean

\-

true

\-

\-

\-

Consumption.filter.defaultHierarchyNode.node\[ \].element

Element

ElementRef

\-

\-

\-

X

\-

Consumption.filter.defaultHierarchyNode.node\[ \].value

Element

String(512)

\-

\-

\-

X

\-

Consumption.filter.defaultHierarchyNode.nodeType

Element

ElementRef

\-

\-

\-

X

\-

Consumption.filter.defaultValue

Element

String(1024)

\-

\-

\-

X

\-

Consumption.filter.defaultValueHigh

Element

String(1024)

\-

\-

\-

X

\-

Consumption.filter.hidden

Element

Boolean

\-

true

\-

X

\-

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

\-

Consumption.filter.hierarchyBinding\[ \].value

Element

String(512)

\-

\-

\-

X

\-

Consumption.filter.hierarchyBinding\[ \].variableSequence

Element

Integer

\-

\-

\-

X

\-

Consumption.filter.mandatory

Element

Boolean

\-

true

\-

X

\-

Consumption.filter.multipleSelections

Element

Boolean

\-

true

\-

X

\-

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

\-

Consumption.groupWithElement

Element

ElementRef

\-

\-

\-

X

\-

Consumption.hidden

Element
Parameter

Boolean

\-

true

\-

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

\-

Consumption.quickInfoElement

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

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

\-

Consumption.valueHelp

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].element

Element
Parameter

String(40)

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localElement

Element
Parameter

ElementRef

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localParameter

Element
Parameter

ParameterRef

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].parameter

Element
Parameter

String(40)

\-

\-

\-

X

\-

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

\-

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

\-

Consumption.valueHelpDefinition\[ \].entity.element

Element
Parameter

String(40)

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].entity.name

Element
Parameter
View

String(40)

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].label

Element
Parameter

String(60)

\-

\-

X

X

\-

Consumption.valueHelpDefinition\[ \].presentationVariantQualifier

Element
Parameter

String(120)

\-

\-

\-

X

\-

Consumption.valueHelpDefinition\[ \].qualifier

Element
Parameter

String(120)

\-

\-

\-

X

\-

DefaultAggregation-Annotations

Annotation

Scope

Typ

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

Typ

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

EnterpriseSearch.defaultValueSuggestElement

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.enabled

Entity

Boolean

\-

true

\-

X

\-

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

\-

EnterpriseSearch.filteringAttribute.countNullValues

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringAttribute.default

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringAttribute.displayPosition

Element

Integer

\-

\-

\-

X

\-

EnterpriseSearch.filteringFacet.caseInsensitiveAggregation

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.collapse

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.complexFilter

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.countNullValues

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.default

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.displayPosition

Element

Integer

\-

\-

\-

X

\-

EnterpriseSearch.filteringFacet.noIntervals

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.filteringFacet.numberOfValues

Element

Integer

\-

\-

\-

X

\-

EnterpriseSearch.filteringFacet.order.by

Element

String(20)

#FILTER\_ELEMENT\_LABEL
#FILTER\_ELEMENT\_VALUE
#NUMBER\_OF\_HITS

#NUMBER\_OF\_HITS

\-

X

\-

EnterpriseSearch.filteringFacet.order.byReference

Element

ElementRef

\-

\-

\-

X

\-

EnterpriseSearch.filteringFacet.order.direction

Element

String(4)

#ASC
#DESC

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

\-

EnterpriseSearch.snippets.enabled

Element

Boolean

\-

true

\-

X

\-

EnterpriseSearch.snippets.endTag

Element

String(128)

\-

\-

\-

X

\-

EnterpriseSearch.snippets.maximumLength

Element

Integer

\-

\-

\-

X

\-

EnterpriseSearch.technicalDescription

Element

Boolean

\-

true

\-

X

\-

Feature-Annotations

Annotation

Scope

Typ

Enums

Default

Text

MDE

API

Feature

Element
Entity

String(40)

\-

\-

\-

\-

\-

Hierarchy-Annotations

Annotation

Scope

Typ

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

Typ

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

#TO\_AGGREGATION\_CHILD
#TO\_AGGREGATION\_PARENT
#TO\_COMPOSITION\_CHILD
#TO\_COMPOSITION\_PARENT
#TO\_COMPOSITION\_ROOT

\-

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

Table Function
View

String(30)

#HIERARCHY
#TEXT
#VALUE\_HELP

\-

\-

\-

\-

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

ElementRef

\-

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

\-

ObjectModel.foreignKey.association

Element

AssociationRef

\-

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

\-

ObjectModel.lifecycle.draft.expiryBehavior

Table Function
View

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.draft.expiryInterval

Table Function
View

String(20)

\-

P28D

\-

\-

\-

ObjectModel.lifecycle.draft.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

PT10D

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

\-

ObjectModel.lifecycle.enqueue.expiryInterval

Table Function
View

String(20)

\-

PT15M

\-

\-

\-

ObjectModel.lifecycle.enqueue.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

PT5M

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

\-

ObjectModel.lifecycle.processing.expiryInterval

Table Function
View

String(20)

\-

PT15M

\-

\-

\-

ObjectModel.lifecycle.processing.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

PT10M

\-

\-

\-

ObjectModel.lifecycle.processor.expiryBehavior

Table Function
View

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

ObjectModel.lifecycle.processor.expiryInterval

Table Function
View

String(20)

\-

PT15M

\-

\-

\-

ObjectModel.lifecycle.processor.notificationBeforeExpiryInterval

Table Function
View

String(20)

\-

PT5M

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

ObjectModel.readOnly

Element

Boolean

\-

true

\-

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

\-

ObjectModel.resultSet.sizeCategory

View

String(3)

#XS

\-

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

\-

ObjectModel.sort.transformedBy

Element

String(255)

\-

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

\-

ObjectModel.text.element\[ \]

Element

ElementRef

\-

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

View

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

\-

ObjectModel.virtualElement

Element

Boolean

\-

true

\-

\-

\-

ObjectModel.virtualElementCalculatedBy

Element

String(255)

\-

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

Typ

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

\-

OData.action\[ \].name

Entity

String(128)

\-

\-

\-

\-

\-

OData.entitySet.name

Entity

String(30)

\-

\-

\-

\-

\-

OData.entityType.name

Entity

String(128)

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

\-

OData.publish

View

Boolean

\-

true

\-

\-

\-

OData.schema.name

 

String(128)

\-

\-

\-

\-

\-

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

Typ

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.fuzzinessThreshold

Element

Decimal(3,2)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.searchable

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.termMappingDictionary

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Search.termMappingListId\[ \]

Element

String(32)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics-Annotations

Annotation

Scope

Typ

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

\-

Semantics.address.country

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.address.number

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.address.region

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.address.streetNoNumber

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.address.zipCode

Element
Parameter

Boolean

\-

true

\-

\-

\-

Semantics.booleanIndicator

Element

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

\-

Semantics.businessDate.from

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.dayOfMonth

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.halfyear

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.quarter

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.year

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.yearMonth

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.calendar.yearWeek

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.durationInSeconds

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.eMail.bcc

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.eMail.cc

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.eMail.keywords

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.eMail.sender

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.eMail.to

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.fiscal.period

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.fiscal.yearPeriod

Element
Parameter

Boolean

\-

true

\-

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

\-

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

\-

Semantics.language

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.largeObject.mimeType

Element

String(1024)

\-

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

\-

Semantics.name.additionalName

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.name.fullName

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.name.jobTitle

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.name.prefix

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.organization.name

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.organization.unit

Element
Parameter

Boolean

\-

true

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

Semantics.systemDateTime.createdAt

Element
Parameter

Boolean

\-

true

\-

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

\-

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

\-

Semantics.text

Element
Parameter

Boolean

\-

true

\-

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

\-

Semantics.url.mimeType

Element
Parameter

String(1024)

\-

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

\-

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

\-

Semantics.user.responsible

Element
Parameter

Boolean

\-

true

\-

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

API

UI.badge.headLine.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.targetElement

Entity

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.headLine.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.imageUrl

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.targetElement

Entity

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.mainInfo.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.targetElement

Entity

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.secondaryInfo.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.targetElement

Entity

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.title.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.badge.typeImageUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].dataAction

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].invocationGrouping

Entity

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].semanticObjectAction

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].actions\[ \].type

Entity

String(40)

#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].description

Entity

String(120)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].dimension

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].emphasizedValues\[ \]

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].role

Entity

String(10)

#CATEGORY
#SERIES

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensionAttributes\[ \].valuesForSequentialColorLevels\[ \]

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].dimensions\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].asDataPoint

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].measure

Entity

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measureAttributes\[ \].useSequentialColorLevels

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].measures\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.chart\[ \].title

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.deviationRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeHighValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityCalculation.toleranceRangeLowValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.forecastValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.longDescription

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.targetValueElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.title

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trend

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.downDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongDownDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.strongUpDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.trendCalculation.upDifferenceElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].feature

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].id

Element

String(120)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isMap

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isPartOfPreview

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].isSummary

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].parentId

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].position

Element

DecimalFloat

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].targetQualifier

Element

String(120)

\-

\-

\-

X

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
#STATUSINFO\_REFERENCE
#URL\_REFERENCE

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.facet\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].groupLabel

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.fieldGroup\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.description.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.imageUrl

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.criticality

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.criticalityRepresentation

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.iconUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.label

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.targetElement

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.type

Entity

String(40)

#STANDARD
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.url

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.title.value

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeImageUrl

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeName

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.headerInfo.typeNamePlural

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.hidden

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.identification\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeHighValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeLowValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.forecastValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.longDescription

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.maximumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.minimumValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.description

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.end

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.referencePeriod.start

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.responsible

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.responsibleName

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.targetValue

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.title

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trend

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.downDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.isRelativeDifference

Element

Boolean

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.referenceValue

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.strongDownDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.strongUpDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.trendCalculation.upDifference

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.valueFormat.numberOfFractionalDigits

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].dataPoint.valueFormat.scaleFactor

Element

DecimalFloat

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.alternativePresentationVariantQualifiers\[ \]

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.defaultPresentationVariantQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.semanticObject

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].detail.semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].id

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].selectionVariantQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].shortDescription

Element

String(20)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].valueCriticality\[ \].criticality

Element

Integer

#CRITICAL
#NEGATIVE
#POSITIVE

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].valueCriticality\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.kpi\[ \].valueCriticality\[ \].value

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].criticality

Element
Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].hidden

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].qualifier

Element
Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.lineItem\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.masked

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.multiLineText

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].groupBy\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].includeGrandTotal

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].initialExpansionLevel

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].maxItems

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].requestAtLeast\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].selectionFieldsQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].sortOrder\[ \].by

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].sortOrder\[ \].direction

Entity

String(4)

#ASC
#DESC

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].total\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].totalBy\[ \]

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].visualizations\[ \].element

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.presentationVariant\[ \].visualizations\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].element

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionField\[ \].qualifier

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].presentationVariantQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].selectionVariantQualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionPresentationVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].filter

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].id

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].parameters\[ \].name

Entity

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].parameters\[ \].value

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].qualifier

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.selectionVariant\[ \].text

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].criticality

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].criticalityRepresentation

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].dataAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].exclude

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].iconUrl

Element

String(1024)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].invocationGrouping

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].label

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].position

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].semanticObjectAction

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].targetElement

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].url

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].value

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

UI.statusInfo\[ \].valueQualifier

Element

String(120)

\-

\-

\-

X

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Continue
![Example](exa.gif "Example") [ABAP CDS, Annotation Array](javascript:call_link\('abencds_annotation_array_abexa.htm'\))