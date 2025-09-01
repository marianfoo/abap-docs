  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - Framework-Specific Annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Framework-Specific%20Annotation%20Syntax%2C%20ABENCDS_ANNOTATIONS_FRMWRK_TABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") (see [Executable Example](javascript:call_link\('abencds_annotation_array_abexa.htm'\))). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation is [released as an API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").

If documentation for an annotation is available in the SAP Help Portal, it is linked in the first column of the tables. Furthermore, documentation for an annotation can also be found in the respective KTD in ADT.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1-------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)
-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3-------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)
-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5-------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)
-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7-------event-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)
-   [Feature-Annotations](#abencds-annotations-frmwrk-tables-9-------genericpersistency-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)
-   [Hierarchy-Annotations](#abencds-annotations-frmwrk-tables-11-------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)
-   [OData-Annotations](#abencds-annotations-frmwrk-tables-13-------search-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_14)
-   [Semantics-Annotations](#abencds-annotations-frmwrk-tables-15-------ui-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_16)
-   [VDM-Annotations](#abencds-annotations-frmwrk-tables-17-------workflow-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_18)

Hint

See also [Framework-Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

AccessControl-Annotations   

Annotation

Scope

Type

Enums

Default

Text

MDE

API

[AccessControl.auditFilter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

Table Function
View

String(20)

#ENABLED
#IGNORED

\-

\-

\-

\-

[AccessControl.auditing.specification](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

View

String(1000)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[AccessControl.auditing.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

View

String(20)

#CUSTOM

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[AccessControl.personalData.blocking](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

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

RELEASED\_FOR\_KEY\_USER\_APPS

[AccessControl.personalData.blockingIndicator\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

Hierarchy
Table Function
View

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[AccessControl.privilegedAssociations\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

Hierarchy
Table Function
View

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[AccessControl.readAccess.logging.logdomain\[ \].area](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

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

[AccessControl.readAccess.logging.logdomain\[ \].domain](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

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

[AccessControl.readAccess.logging.output](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap)

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

[Aggregation.allowPrecisionLoss](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Aggregation.default](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap)

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

[Aggregation.exception](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap)

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Aggregation.referenceElement\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
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

[Analytics.constraints.filter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

String(20)

#UNIQUE\_PER\_CELL
#UNIQUE\_PER\_QUERY

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.dataCategory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(20)

#AGGREGATIONLEVEL
#CUBE
#DIMENSION
#DOCSTORE
#FACT

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.dataExtraction.alternativeKey\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.byElement.detectDeletedRecords](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.byElement.ignoreDeletionAfterDays](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Integer

\-

\-

\-

X

NOT\_RELEASED

[Analytics.dataExtraction.delta.byElement.maxDelayInSeconds](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Integer

\-

1800

\-

X

NOT\_RELEASED

[Analytics.dataExtraction.delta.byElement.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.automatic](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].highValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].operator](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].tableElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].filter\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].role](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

#LEFT\_OUTER\_TO\_ONE\_JOIN
#MAIN

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].table](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].tableElement\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.delta.changeDataCapture.mapping\[ \].viewElement\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Analytics.dataExtraction.filter\[ \].highValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.filter\[ \].operator](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

[Analytics.dataExtraction.filter\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(45)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.filter\[ \].viewElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.partitionBy\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.dataExtraction.relevant](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Analytics.document.reference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.document.semantics](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

String(30)

#DOCUMENT
#ID
#INFOPROV
#KYFNM
#OWNER
#PROPERTY
#QPROV
#SELECTIONS
#SESSION\_ID
#STATUS
#SVA\_INFOPROV
#TAG
#TIMESTAMP
#TYPE
#VERSION

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.document.serviceClassName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.document.storageForEntity\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

EntityRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.document.storagePersistence\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

EntityRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.document.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

String(4)

#DOC
#HIO
#HNM
#HNO
#SVA
#SVH
#TRA

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.excludeFromRuntimeExtensibility](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.hints](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.internalName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

[Analytics.onlyRestrictedAttributeTextAccess](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

[Analytics.planning.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

NOT\_RELEASED

[Analytics.processingEngine](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(5)

#AE
#MDS

\-

\-

\-

NOT\_RELEASED

[Analytics.query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.readClassName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

\-

\-

\-

\-

NOT\_RELEASED

[Analytics.settings.columns.hierarchicalDisplay.active](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.columns.hierarchicalDisplay.expandTo](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.columns.totalsLocation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(10)

#LEFT
#RIGHT

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.displayOriginalInitialValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Element
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.initialValueForMissingText](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.maxProcessingEffort](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.olapPushdown](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(30)

#MAX
#OFF

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.rows.hierarchicalDisplay.active](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.rows.hierarchicalDisplay.expandTo](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.rows.totalsLocation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(10)

#BOTTOM
#TOP

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.runtimeExtensibility.allowed](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.valueHelp.supressInitialValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.settings.zeroValues.handling](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

[Analytics.settings.zeroValues.hideOnAxis](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

[Analytics.technicalName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(28)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.variableCheck.implementedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

Table Function
View

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Analytics.viewModelReplication.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

NOT\_RELEASED

[Analytics.writeBack.className](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap)

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.exceptionAggregationSteps\[ \].exceptionAggregationElements\[ \]

Element

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

AnalyticsDetails.query.hierarchyAssociation

Element

AssociationRef

\-

\-

\-

\-

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

AnalyticsDetails.query.resultValueHelpSource

Element

String(10)

#DIMENSION
#QUERY

\-

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

AnalyticsDetails.variable.defaultHierarchyNode.node\[ \].element

Parameter

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultHierarchyNode.node\[ \].value

Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultHierarchyNode.nodeType

Parameter

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultRanges\[ \].high

Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultRanges\[ \].low

Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultRanges\[ \].option

Parameter

String(2)

#BT
#CP
#EQ
#GE
#GT
#LE
#LT
#NB
#NE
#NP

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultRanges\[ \].sign

Parameter

String(1)

#E
#I

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultValue

Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.defaultValueHigh

Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.hierarchyAssociation

Parameter

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.hierarchyBinding\[ \].type

Parameter

String(20)

#CONSTANT
#PARAMETER
#SYSTEM\_FIELD

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.hierarchyBinding\[ \].value

Parameter

String(512)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.hierarchyBinding\[ \].variableSequence

Parameter

Integer

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.mandatory

Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.multipleSelections

Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.referenceElement

Parameter

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.selectionType

Parameter

String(20)

#HIERARCHY\_NODE
#INTERVAL
#RANGE
#SINGLE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AnalyticsDetails.variable.usageType

Parameter

String(20)

#FILTER
#FORMULA
#PARAMETER

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

[Consumption.dbHints\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

View

String(1298)

\-

\-

\-

X

\-

[Consumption.dbHintsCalculatedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

View

String(255)

\-

\-

\-

\-

\-

[Consumption.defaultValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter
Simple Type

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.binding\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.binding\[ \].targetParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.binding\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.derivation.binding\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.lookupEntity](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

EntityRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.pfcgMapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultAggregation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

#AVG
#COUNT\_DISTINCT
#MAX
#MIN
#SUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultAggregationHigh](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

#AVG
#COUNT\_DISTINCT
#MAX
#MIN
#SUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultElementHigh](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultHierarchyNode.mapping\[ \].hierarchyElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultHierarchyNode.mapping\[ \].lookupElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.derivation.resultHierarchyNode.nodeTypeElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(30)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].format](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(20)

#KEY
#KEY\_CONCATENATED
#KEY\_INTERNAL
#TEXT

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].index](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].length](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].offset](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].parameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.binding\[ \].replaceWith](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(11)

#DIFFERENCE
#HIGH
#LOW

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.dynamicLabel.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.businessDate.at](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Entity

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.defaultHierarchyNode.node\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.defaultHierarchyNode.node\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.defaultHierarchyNode.nodeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.defaultValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.defaultValueHigh](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.hierarchyAssociation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

AssociationRef

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.hierarchyBinding\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.filter.hierarchyBinding\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.hierarchyBinding\[ \].variableSequence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.mandatory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.multipleSelections](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.filter.selectionType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.groupWithElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[Consumption.hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.defaultHierarchyNode.node\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.defaultHierarchyNode.node\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.defaultHierarchyNode.nodeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

String(512)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.hierarchyBinding\[ \].variableSequence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.hierarchyElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.hierarchyNodeSelection.multipleSelections](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.labelElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[Consumption.quickInfoElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

[Consumption.ranked](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.ranking.activeFunctions\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Entity
View

String(120)

\-

\-

\-

X

\-

[Consumption.ranking.activeFunctions\[ \].weight](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Entity
View

Decimal(3,2)

\-

1

\-

X

\-

[Consumption.ranking.functionParameterBinding\[ \].functionId](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

\-

[Consumption.ranking.functionParameterBinding\[ \].parameterId](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

\-

[Consumption.semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.semanticObjectMapping.additionalBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.semanticObjectMapping.additionalBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.semanticObjectMapping.element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelp](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Consumption.valueHelpDefault.binding.usage](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.valueHelpDefault.display](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefault.fetchValues](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Entity

String(30)

#AUTOMATICALLY\_WHEN\_DISPLAYED
#ON\_EXPLICIT\_REQUEST

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefault.initialValueIsSignificant](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localConstant](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(255)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].parameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].additionalBinding\[ \].usage](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.valueHelpDefinition\[ \].association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

AssociationRef

\-

\-

\-

X

\-

[Consumption.valueHelpDefinition\[ \].distinctValues](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].entity.element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].entity.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[Consumption.valueHelpDefinition\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].presentationVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Consumption.valueHelpDefinition\[ \].selectionVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

Element
Parameter

String(120)

\-

\-

\-

X

\-

[Consumption.valueHelpDefinition\[ \].useForValidation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap)

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

[DefaultAggregation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap)

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EnterpriseSearch-Annotations   

Annotation

Scope

Type

Enums

Default

Text

MDE

API

[EnterpriseSearch.assignedCategories\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(100)

\-

\-

\-

X

\-

[EnterpriseSearch.commonAttributes\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(100)

\-

\-

\-

X

\-

[EnterpriseSearch.configurationSet](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(50)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.dclInterpretationMode](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(20)

#FLAT\_ELEMENT\_LIST
#RESPECT\_CARDINALITY

\-

\-

X

\-

[EnterpriseSearch.defaultValueSuggestElement](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.enabled](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.expand](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

\-

[EnterpriseSearch.fieldGroupForSearchQuery\[ \].elements\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

ElementRef

\-

\-

\-

X

\-

[EnterpriseSearch.fieldGroupForSearchQuery\[ \].name](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(128)

\-

\-

\-

X

\-

[EnterpriseSearch.filteringAttribute.caseInsensitiveAggregation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringAttribute.considerNullValues](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringAttribute.default](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringAttribute.displayPosition](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.caseInsensitiveAggregation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.collapse](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.complexFilter](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.considerNullValues](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.dateIntervalDefinition](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(10)

#FIVE\_YEARS
#ONE\_YEAR

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.default](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.displayPosition](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.iconUrl](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.noIntervals](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.numberOfValues](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.order.by](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(20)

#FILTER\_ELEMENT\_LABEL
#FILTER\_ELEMENT\_VALUE
#NUMBER\_OF\_HITS

#NUMBER\_OF\_HITS

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.order.byReference](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.filteringFacet.order.direction](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(4)

#ASC
#DESC

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.freeStyleField.importance](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(6)

#HIGH
#LOW
#MEDIUM

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.freeStyleField.withAutoCompletion](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.hidden](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.hierarchy.parentChild.definition](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

EntityRef

\-

\-

\-

X

\-

[EnterpriseSearch.highlighted.beginTag](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(128)

\-

\-

\-

X

\-

[EnterpriseSearch.highlighted.enabled](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

\-

[EnterpriseSearch.highlighted.endTag](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(128)

\-

\-

\-

X

\-

[EnterpriseSearch.maximumLength](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Integer

\-

\-

\-

X

\-

[EnterpriseSearch.model](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.modelName](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.modelNamePlural](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.navigation.intentBased.semanticObject](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.navigation.mailApp](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.navigation.telephoneApp](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.navigation.urlBased.urlField](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.nlp.semanticDomain](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

String(50)

#ANALYTICS

\-

\-

X

\-

[EnterpriseSearch.responseField.contactPhoto](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.responseField.longText](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.responseField.standard.displayPosition](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.responseField.thumbNail](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.resultItemKey\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.searchOptions](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(500)

\-

\-

\-

X

\-

[EnterpriseSearch.snippets.beginTag](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.snippets.enabled](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.snippets.endTag](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.snippets.maximumLength](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.technicalDescription](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Element

Boolean

\-

true

\-

X

\-

[EnterpriseSearch.title.subTitleField](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

[EnterpriseSearch.title.titleField](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS

Event-Annotations   

Annotation

Scope

Type

Enums

Default

Text

MDE

API

[Event.context.attribute](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(255)

\-

\-

X

\-

\-

[Event.element.externalName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.element.internalName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

String(30)

\-

\-

\-

\-

\-

[Event.implementedBy\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(255)

\-

\-

\-

\-

\-

[Event.previousValue.element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.qualifiesEventType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.raisedAt.dateTime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.sapObjectNodeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

\-

[Event.sapObjectNodeTypeKey\[ \].aliases\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.sapObjectNodeTypeKey\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Event.sapObjectType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

\-

[Event.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap)

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

[Hierarchy.notAssignedNode.filter](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[Hierarchy.notAssignedNode.suppressIndicator](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[Hierarchy.parentChild\[ \].directory](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

AssociationRef

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].label](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

String(1298)

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].multipleParents](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

\-

[Hierarchy.parentChild\[ \].name](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

String(127)

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].orphanedNode.handling](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

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

[Hierarchy.parentChild\[ \].orphanedNode.stepParentNodeId\[ \]](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

String(1298)

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].recurse.child\[ \]](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

ElementRef

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].recurse.parent\[ \]](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

ElementRef

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].recurseBy](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

ElementRef

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].rootNode.visibility](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

String(25)

#ADD\_ROOT\_NODE
#ADD\_ROOT\_NODE\_IF\_DEFINED
#DO\_NOT\_ADD\_ROOT\_NODE

#ADD\_ROOT\_NODE\_IF\_DEFINED

\-

\-

\-

[Hierarchy.parentChild\[ \].siblingsOrder\[ \].by](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

View

ElementRef

\-

\-

\-

\-

\-

[Hierarchy.parentChild\[ \].siblingsOrder\[ \].direction](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f9074c3bd265479dbe763e7c389d7a30?version=sap_cross_product_abap)

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

[ObjectModel.action\[ \].enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

\-

[ObjectModel.action\[ \].feature](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

String(40)

\-

\-

\-

\-

\-

[ObjectModel.action\[ \].instance.bound](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

\-

[ObjectModel.action\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

String(60)

\-

\-

X

\-

\-

[ObjectModel.action\[ \].name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

String(30)

\-

\-

\-

\-

\-

[ObjectModel.action\[ \].parameter.dataType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

EntityRef

\-

\-

\-

\-

\-

[ObjectModel.action\[ \].readOnly](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

\-

[ObjectModel.action\[ \].result.cardinality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

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

[ObjectModel.action\[ \].result.dataType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

EntityRef

\-

\-

\-

\-

\-

[ObjectModel.alternativeKey\[ \].element\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.alternativeKey\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

\-

\-

\-

\-

\-

[ObjectModel.alternativeKey\[ \].uniqueness](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#UNIQUE
#UNIQUE\_IF\_NOT\_INITIAL

\-

\-

\-

\-

[ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.association.draft.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.association.draft.fieldNamePrefix](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

String(16)

\-

\-

\-

\-

\-

[ObjectModel.association.reverseAssociation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

String(30)

\-

\-

\-

\-

\-

[ObjectModel.association.toHierarchy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.association.type\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

String(30)

#TO\_COMPOSITION\_CHILD
#TO\_COMPOSITION\_PARENT
#TO\_COMPOSITION\_ROOT

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[ObjectModel.collectiveValueHelp.for.element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.compositionRoot](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.createEnabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element
Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.dataCategory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#HIERARCHY
#TEXT
#VALUE\_HELP

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.delegatedAction\[ \].enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

\-

[ObjectModel.delegatedAction\[ \].exposureName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

String(60)

\-

\-

\-

\-

\-

[ObjectModel.delegatedAction\[ \].name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

View

String(30)

\-

\-

\-

\-

\-

[ObjectModel.deleteEnabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.derivationFunction.applicableFor.dataType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(4)

#DATS
#TIMS

\-

\-

\-

\-

[ObjectModel.derivationFunction.applicableFor.dimensionView\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.applicableFor.element\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.inputElement\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.result.element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.result.elementHigh](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.result.multipleRecords](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

\-

\-

[ObjectModel.derivationFunction.result.nodeTypeElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.derivationFunction.result.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(14)

#HIERARCHY\_NODE
#INTERVAL
#SINGLE

\-

\-

\-

\-

[ObjectModel.draft.concurrentEditing](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.draft.sharing](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

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

[ObjectModel.draftEnabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.editableFieldFor](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.entityChangeStateId](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

String(30)

\-

\-

\-

\-

\-

[ObjectModel.filter.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.filter.transformedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

String(255)

\-

\-

\-

\-

\-

[ObjectModel.foreignKey.association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.hierarchy.association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

AssociationRef

\-

\-

\-

\-

\-

[ObjectModel.interval.upperBoundary](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Parameter

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.leadingEntity.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Service Definition

EntityRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.lifecycle.draft.expiryBehavior](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

[ObjectModel.lifecycle.draft.expiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT28D'

\-

\-

\-

[ObjectModel.lifecycle.draft.notificationBeforeExpiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT10D'

\-

\-

\-

[ObjectModel.lifecycle.enqueue.expiryBehavior](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#RELATIVE\_TO\_ENQUEUE\_START
#RELATIVE\_TO\_LAST\_CHANGE

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

[ObjectModel.lifecycle.enqueue.expiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

[ObjectModel.lifecycle.enqueue.notificationBeforeExpiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT5M'

\-

\-

\-

[ObjectModel.lifecycle.processing.expiryBehavior](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

[ObjectModel.lifecycle.processing.expiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

[ObjectModel.lifecycle.processing.notificationBeforeExpiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT10M'

\-

\-

\-

[ObjectModel.lifecycle.processor.expiryBehavior](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(30)

#RELATIVE\_TO\_LAST\_CHANGE
#RELATIVE\_TO\_PROCESSING\_START

#RELATIVE\_TO\_LAST\_CHANGE

\-

\-

\-

[ObjectModel.lifecycle.processor.expiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT15M'

\-

\-

\-

[ObjectModel.lifecycle.processor.notificationBeforeExpiryInterval](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

String(20)

\-

'PT5M'

\-

\-

\-

[ObjectModel.mandatory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.modelCategory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

String(30)

#BUSINESS\_OBJECT

\-

\-

\-

\-

[ObjectModel.modelingPattern](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(60)

#ANALYTICAL\_CUBE
#ANALYTICAL\_DIMENSION
#ANALYTICAL\_FACT
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
#TRANSACTIONAL\_INTERFACE
#TRANSACTIONAL\_PROJECTED\_ENTITY
#TRANSACTIONAL\_QUERY
#VALUE\_HELP\_PROVIDER

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.objectIdentifier.oidElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.readOnly](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.representativeKey](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

KeyElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.resultSet.sizeCategory](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Custom Entity
Entity
Table Function

String(3)

#XS

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.sapObjectNodeType.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.sapObjectNodeTypeReference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element
Simple Type

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.semanticKey\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity
Table Function

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.sort.enabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.sort.transformedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.supportedCapabilities\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

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
#KEY\_USER\_COPYING\_TEMPLATE
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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.text.association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.text.control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

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

[ObjectModel.text.element\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.text.reference.association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

AssociationRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.transactionalProcessingDelegated](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.transactionalProcessingEnabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.transactionalProcessingUnitRoot](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.uniqueIdField](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[ObjectModel.updateEnabled](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

Boolean

\-

true

\-

\-

\-

[ObjectModel.value.derivedFrom\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[ObjectModel.virtualElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

\-

[ObjectModel.writeActivePersistence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

Table Function
View

String(16)

\-

\-

\-

\-

\-

[ObjectModel.writeDraftPersistence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap)

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

[OData.action\[ \].localName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.action\[ \].name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.entitySet.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.entityType.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.etag](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.hierarchy.recursiveHierarchy\[ \].descendantCountElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].distanceFromRootElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].drillStateElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].elementWithHierarchy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].entity.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

EntityRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.hierarchy.recursiveHierarchy\[ \].externalKeyElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].nodeElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].parentNodeElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].preorderRankElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.hierarchy.recursiveHierarchy\[ \].siblingRankElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

\-

\-

[OData.property.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Element

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.property.valueControl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.publish](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[OData.schema.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Service Definition

String(128)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[OData.v2.amount.noDecimalShift](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[OData.v2.autoAggregation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap)

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

[Search.defaultSearchElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Search.fulltextIndex.required](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

NOT\_RELEASED

[Search.fuzzinessThreshold](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Element

Decimal(3,2)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Search.mode](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Element

String(20)

#IDENTIFIER

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Search.ranking](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

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

[Search.searchable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Search.termMappingDictionary](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

Element

String(128)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Search.termMappingListId\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap)

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

[Semantics.address.city](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.country](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.number](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.postBox](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.region](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.street](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.streetNoNumber](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.subRegion](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.address.type\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

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

[Semantics.address.zipCode](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.booleanIndicator](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.businessDate.at](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.businessDate.from](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.businessDate.to](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.dayOfMonth](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.dayOfYear](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.halfyear](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.month](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.quarter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.week](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.year](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.yearHalfyear](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.yearMonth](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.yearQuarter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendar.yearWeek](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.calendarItem.categories](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.class](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.completed](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.contact](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.dtEnd](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.dtStart](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.due](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.duration](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.fbType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.location](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.percentComplete](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.priority](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.status](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.summary](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.transparent](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.calendarItem.wholeDay](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.contact.birthDate](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.contact.note](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.contact.photo](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.contact.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

String(12)

#ORGANIZATION
#PERSON

\-

\-

\-

\-

[Semantics.dateTime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.durationInDays](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.durationInHours](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.durationInMinutes](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.durationInSeconds](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.address](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.bcc](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.body](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.cc](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.from](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.keywords](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.received](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.sender](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.subject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.to](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.eMail.type\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

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

[Semantics.fiscal.dayOfYear](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.period](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.quarter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.week](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.year](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.yearPeriod](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.yearQuarter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.yearVariant](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.fiscal.yearWeek](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.geoLocation.cartoId](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.geoLocation.latitude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.geoLocation.longitude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

\-

[Semantics.geoLocation.normalizedName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.imageUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.interval\[ \].boundaryCodeElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

\-

[Semantics.interval\[ \].lowerBoundaryElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

\-

[Semantics.interval\[ \].lowerBoundaryIncluded](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

\-

[Semantics.interval\[ \].lowerBoundaryParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

ParameterRef

\-

\-

\-

X

\-

[Semantics.interval\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

\-

[Semantics.interval\[ \].upperBoundaryElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

\-

[Semantics.interval\[ \].upperBoundaryIncluded](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

\-

[Semantics.interval\[ \].upperBoundaryParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

ParameterRef

\-

\-

\-

X

\-

[Semantics.language](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.languageReference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

\-

\-

[Semantics.largeObject.acceptableMimeTypes\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.largeObject.cacheControl.maxAge](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

String(30)

#LONG
#MEDIUM
#SHORT
#VERY\_LONG

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.largeObject.contentDispositionPreference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

String(30)

#ATTACHMENT
#INLINE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.largeObject.fileName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.largeObject.mimeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.mimeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.additionalName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.familyName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.fullName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.givenName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.jobTitle](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.nickName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.prefix](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.name.suffix](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.nullValueIndicatorFor](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.organization.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.organization.role](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.organization.unit](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.personalData.dataSubjectRole](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

String(30)

\-

\-

\-

X

\-

[Semantics.personalData.entitySemantics](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Entity

String(30)

#DATA\_SUBJECT

\-

\-

X

\-

[Semantics.personalData.fieldSemantics](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

String(30)

#DATA\_SUBJECT\_ID
#LEGAL\_ENTITY\_ID
#SUBJECT\_ID\_TYPE

\-

\-

X

\-

[Semantics.personalData.isPotentiallySensitive](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

\-

[Semantics.signReversalIndicator](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.spatialData.srid.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

String(20)

\-

\-

\-

\-

\-

[Semantics.spatialData.type\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

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

[Semantics.systemDate.createdAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.systemDate.lastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.systemDate.localInstanceLastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.systemDateTime.createdAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.systemDateTime.lastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.systemDateTime.localInstanceLastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.systemTime.createdAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.systemTime.lastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.systemTime.localInstanceLastChangedAt](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.telephone.type\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

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

[Semantics.text](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.time](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.timeZone](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.timeZoneReference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.url.mimeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter

String(1024)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[Semantics.user.createdBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.user.id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.user.lastChangedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.user.localInstanceLastChangedBy](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.user.responsible](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

\-

[Semantics.uuid](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element
Parameter
Simple Type

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[Semantics.valueRange.exclusiveMaximum](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

\-

[Semantics.valueRange.exclusiveMinimum](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

\-

[Semantics.valueRange.maximum](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

Element

String(1298)

\-

\-

\-

X

\-

[Semantics.valueRange.minimum](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap)

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

[UI.badge.headLine.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.badge.headLine.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.headLine.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.imageUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.badge.mainInfo.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.mainInfo.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.badge.secondaryInfo.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.secondaryInfo.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.badge.title.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.title.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.badge.typeImageUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].actions\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(40)

#FOR\_ACTION
#FOR\_INTENT\_BASED\_NAVIGATION

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].chartType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.chart\[ \].description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].dimensionAttributes\[ \].dimension](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].dimensionAttributes\[ \].emphasizedValues\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].dimensionAttributes\[ \].role](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.chart\[ \].dimensionAttributes\[ \].valuesForSequentialColorLevels\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].dimensions\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].measureAttributes\[ \].asDataPoint](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].measureAttributes\[ \].measure](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].measureAttributes\[ \].role](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.chart\[ \].measureAttributes\[ \].useSequentialColorLevels](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].measures\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.chart\[ \].title](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#ONLY\_ICON
#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].cssDefault.width](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].determining](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].groupLabel](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.connectedFields\[ \].inline](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].isCopyAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].navigationAvailable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].semanticObjectBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].semanticObjectBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].semanticObjectBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].template](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(255)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#WITH\_ACTION
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.connectedFields\[ \].valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.createHidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.criticalityLabels\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.criticalityLabels\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.criticalityLabels\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element
Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.dataFieldDefault\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

#STANDARD
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataFieldDefault\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.acceptanceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.acceptanceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.deviationRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.deviationRangeHighValueElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.deviationRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.deviationRangeLowValueElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.improvementDirection](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.dataPoint.criticalityCalculation.toleranceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.toleranceRangeHighValueElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.toleranceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityCalculation.toleranceRangeLowValueElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.criticalityValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.dataPoint.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.forecastValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.longDescription](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.maximumValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.minimumValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.referencePeriod.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.referencePeriod.end](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.referencePeriod.start](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.responsible](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.responsibleName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.targetValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.targetValueElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.title](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trend](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.downDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.downDifferenceElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.isRelativeDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.referenceValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.strongDownDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.strongDownDifferenceElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.strongUpDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.strongUpDifferenceElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.upDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.trendCalculation.upDifferenceElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.valueFormat.numberOfFractionalDigits](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.valueFormat.scaleFactor](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.dataPoint.visualization](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.dataPoint.withCriticalityLabels](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.defaultValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.deleteHidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.doNotCheckScaleOfMeasuredQuantity](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].feature](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.facet\[ \].isMap](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].isSummary](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].parentId](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].purpose](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.facet\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].targetQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#NOTE\_REFERENCE
#PRESENTATIONVARIANT\_REFERENCE
#SELECTIONPRESENTATIONVARIANT\_REFERENCE
#STATUSINFO\_REFERENCE
#URL\_REFERENCE

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.facet\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#ONLY\_ICON
#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].cssDefault.width](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].determining](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].groupLabel](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.fieldGroup\[ \].inline](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].isCopyAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].navigationAvailable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].semanticObjectBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].semanticObjectBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].semanticObjectBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#WITH\_ACTION
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.fieldGroup\[ \].valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.headerInfo.description.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.description.valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.imageUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.headerInfo.title.url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.title.valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.typeImageUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.typeName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.headerInfo.typeNamePlural](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element
Parameter

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#ONLY\_ICON
#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].cssDefault.width](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].determining](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.identification\[ \].inline](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].isCopyAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].navigationAvailable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].semanticObjectBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].semanticObjectBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].semanticObjectBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#WITH\_ACTION
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.identification\[ \].valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.acceptanceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].acceptanceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].aggregationLevel\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].deviationRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.constantThresholds\[ \].toleranceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.deviationRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.improvementDirection](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeHighValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityCalculation.toleranceRangeLowValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.criticalityValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.kpi\[ \].dataPoint.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.forecastValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.longDescription](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(250)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.maximumValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.minimumValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.referencePeriod.description](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.referencePeriod.end](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.referencePeriod.start](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.responsible](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.responsibleName](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.targetValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.title](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trend](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.downDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.isRelativeDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.referenceValue](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.strongDownDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.strongUpDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.trendCalculation.upDifference](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.valueFormat.numberOfFractionalDigits](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.valueFormat.scaleFactor](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].dataPoint.visualization](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.kpi\[ \].detail.alternativePresentationVariantQualifiers\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].detail.defaultPresentationVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].detail.semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].detail.semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].selectionVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.kpi\[ \].shortDescription](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element
Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#ONLY\_ICON
#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].cssDefault.width](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].determining](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.lineItem\[ \].inline](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].isCopyAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].navigationAvailable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element
Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].semanticObjectBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].semanticObjectBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].semanticObjectBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#WITH\_ACTION
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.lineItem\[ \].valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.masked](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.multiLineText](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.note.content.mimeType](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.content.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.title.hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.title.value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.type.languageDependent](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.type.maxLength](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.type.multipleNotes](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.note.type.name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

null

[UI.presentationVariant\[ \].groupBy\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].includeGrandTotal](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].initialExpansionLevel](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].maxItems](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Integer

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].requestAtLeast\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].selectionFieldsQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].sortOrder\[ \].by](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].sortOrder\[ \].direction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(4)

#ASC
#DESC

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].text](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].total\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].totalBy\[ \]](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].visualizations\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].visualizations\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.presentationVariant\[ \].visualizations\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.selectionField\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionField\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionField\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionField\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionPresentationVariant\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionPresentationVariant\[ \].presentationVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionPresentationVariant\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionPresentationVariant\[ \].selectionVariantQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionPresentationVariant\[ \].text](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].filter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].id](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].parameters\[ \].name](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].parameters\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.selectionVariant\[ \].text](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].criticalityRepresentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#ONLY\_ICON
#WITHOUT\_ICON
#WITH\_ICON

#WITHOUT\_ICON

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].cssDefault.width](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(20)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].dataAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].determining](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].emphasized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].exclude](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].hidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].iconUrl](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(1024)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].importance](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.statusInfo\[ \].inline](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].invocationGrouping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(12)

#CHANGE\_SET
#ISOLATED

#ISOLATED

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].isCopyAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].isPartOfPreview](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].label](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].navigationAvailable](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].position](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

DecimalFloat

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].requiresContext](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].semanticObject](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].semanticObjectAction](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].semanticObjectBinding\[ \].element](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(40)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].semanticObjectBinding\[ \].localElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].semanticObjectBinding\[ \].localParameter](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ParameterRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].targetElement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].type](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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
#WITH\_ACTION
#WITH\_INTENT\_BASED\_NAVIGATION
#WITH\_NAVIGATION\_PATH
#WITH\_URL

#STANDARD

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].url](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

ElementRef

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.statusInfo\[ \].valueQualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.textArrangement](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.updateHidden](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Entity

Boolean

\-

true

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.valueCriticality\[ \].criticality](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[UI.valueCriticality\[ \].qualifier](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

Element

String(120)

\-

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

[UI.valueCriticality\[ \].value](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap)

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

[VDM.auxiliaryEntity.for.entity](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Entity

EntityRef

\-

\-

\-

\-

\-

[VDM.auxiliaryEntity.usage.type\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Entity

String(30)

#ENTERPRISE\_SEARCH

\-

\-

\-

\-

[VDM.entity](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Entity

Boolean

\-

true

\-

\-

\-

[VDM.lifecycle.contract.type](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

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

[VDM.lifecycle.status](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Element
Entity

String(30)

#DEPRECATED

\-

\-

\-

\-

[VDM.lifecycle.successor](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Element
Entity

String(30)

\-

\-

\-

\-

\-

[VDM.private](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

Entity

Boolean

\-

true

\-

\-

\-

[VDM.usage.type\[ \]](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

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

[VDM.viewExtension](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

View Extension

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

[VDM.viewType](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17)

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

RELEASED\_FOR\_KEY\_USER\_APPS

Workflow-Annotations   

Annotation

Scope

Type

Enums

Default

Text

MDE

API

Workflow.enabledFor\[ \]

View

String(30)

#CUSTOM\_TASK\_ATTRIBUTES
#RESPONSIBILITY\_MANAGEMENT

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Continue
![Example](exa.gif "Example") [ABAP CDS, Annotation Array](javascript:call_link\('abencds_annotation_array_abexa.htm'\))