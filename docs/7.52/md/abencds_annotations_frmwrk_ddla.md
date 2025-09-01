---
title: "ABAP CDS - Framework-Specific Annotation Definitions"
description: |
  The following DDLA source code(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm 'Glossary Entry') shows the CDS annotation definitions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm 'Glossary Entry') in all
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_ddla.htm"
abapFile: "abencds_annotations_frmwrk_ddla.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "class", "data", "abencds", "annotations", "frmwrk", "ddla"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Definitions

The following [DDLA source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shows the [CDS annotation definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The documentation CDS Annotations summarizes the descriptions of the framework-specific annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-ddla-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-ddla-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-ddla-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-ddla-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-ddla-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-ddla-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-ddla-13---note--see-also--framework-specific-annotation-syntax--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-annotations-frmwrk-tables-htm----accesscontrol-annotations--Scope:\[#VIEW, #TABLE\_FUNCTION\]  
annotation AccessControl
{
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   privilegedAssociations: array of AssociationRef;
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
};

Aggregation-Annotations

@Scope:\[#ELEMENT\]  
annotation Aggregation
{
   default: String(30) enum
      {
         NONE;
         SUM;
         MIN;
         MAX;
         AVG;
         COUNT\_DISTINCT;
         NOP;
         FORMULA;
      };
   referenceElement : array of ElementRef;
};

Analytics-Annotations

@Scope:\[#VIEW, #TABLE\_FUNCTION\]  
annotation Analytics
{
   dataCategory : String(20) enum { DIMENSION; FACT; CUBE; AGGREGATIONLEVEL; };
   query : Boolean default true;
   hidden : Boolean default true;
   planning
   {
      enabled : Boolean default true;
   };
   dataExtraction
   {
      enabled : Boolean default true;
      delta
      {
         byElement
         {
            name : ElementRef;
            @MetadataExtension.usageAllowed : true  
            maxDelayInSeconds : Integer default 1800;
            detectDeletedRecords : Boolean default true;
            @MetadataExtension.usageAllowed : true  
            ignoreDeletionAfterDays : Integer;
         };
      };
   };
   hints : String(1298);
   writeBack
   {
      className : String(30);
   };
   settings
   {
      maxProcessingEffort : String(20) enum { LOW; MEDIUM; HIGH; UNLIMITED; } default #HIGH;
      zeroValues: {  
         handling: String(20) enum { SHOW; HIDE; HIDE\_IF\_ALL; } default #SHOW;
         hideOnAxis: String(20) enum { ROWS; COLUMNS; ROWS\_COLUMNS; } default #ROWS\_COLUMNS;
      };
   };
};

AnalyticsDetails-Annotations

@Scope:\[#ELEMENT\]  
annotation AnalyticsDetails
{
   query
   {
      formula : String(1298);
      axis : String(20) enum { FREE; ROWS; COLUMNS; };
      totals: String(20) enum { HIDE; SHOW; };
      scaling : Integer;
      decimals : Integer;
      display : String(20) enum { KEY; TEXT; TEXT\_KEY; KEY\_TEXT; };
      sortDirection : String(20) enum { ASC; DESC; };
      hidden : Boolean default true;
      displayHierarchy : String(20) enum { OFF; ON; FILTER; };
      hierarchyInitialLevel : Integer;
      hierarchyBinding : array of
      {
         type : String(12) enum { ELEMENT; PARAMETER; CONSTANT; USER\_INPUT; SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
      hierarchySettings
      {
         hidePostedNodesValues : Boolean default true;
      };            
      elementHierarchy
      {
         parent : ElementRef;
         initiallyCollapsed : Boolean default true;
      };          
      @Scope:\[#ELEMENT, #PARAMETER\]  
      variableSequence : Integer;
      resultValuesSource : String(10) enum { CUBE; DIMENSION; };
   };
   exceptionAggregationSteps : array of
   {
      exceptionAggregationBehavior : String(14) enum
      {
         SUM;
         MIN;
         MAX;
         COUNT;
         COUNT\_DISTINCT;
         AVG;
         STD;
         FIRST;
         LAST;
         NHA;
      };
      exceptionAggregationElements : array of ElementRef;
   };
   planning
   {
      enabled : Boolean default true;
      disaggregation : String(20) enum { NONE; TOTAL; DIFFERENCE; };
      distribution : String(20) enum { EQUAL; PROPORTIONAL; PROPORTIONAL\_REF; };
      distributionReference : ElementRef;
   };
};

Consumption-Annotations

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation Consumption
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION, #PARAMETER, #ELEMENT\]  
   @MetadataExtension.usageAllowed : true  
   semanticObject   : String(120);
   @MetadataExtension.usageAllowed : true  
   @Scope:\[#ELEMENT, #PARAMETER\]  
   labelElement     : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]  
   quickInfoElement : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]  
   hidden : Boolean default true;
   @MetadataExtension.usageAllowed : true  
   @Scope:\[#ELEMENT, #PARAMETER\]  
   derivation
   {
       lookupEntity      : EntityRef;
       resultElement     : ElementRef;
       resultElementHigh : ElementRef;
       resultHierarchyNode
       {
           nodeTypeElement : ElementRef;
           mapping : array of
           {
               hierarchyElement : ElementRef;
               lookupElement    : ElementRef;
           };
       };
       binding : array of
       {
           targetParameter : ParameterRef;
           targetElement   : ElementRef;
           type            : String(12) enum  
           {  
               ELEMENT;  
               PARAMETER;  
               CONSTANT;  
               SYSTEM\_FIELD;  
           };
           value           : String(512);
       };
   };
   @Scope:\[#ELEMENT\]  
   @MetadataExtension.usageAllowed : true  
   filter
   {
      mandatory        : Boolean default true;
      defaultValue     : String(1024);
      defaultValueHigh : String(1024);
      defaultHierarchyNode
      {
         nodeType : ElementRef;
         node     : array of
         {
            element : ElementRef;
            value   : String(512);
         };
      };
      hidden             : Boolean default true;
      selectionType      : String(20) enum  
      {  
          SINGLE;  
          INTERVAL;  
          RANGE;  
          HIERARCHY\_NODE;  
      };
      multipleSelections : Boolean default true;
      hierarchyBinding   : array of
      {
         type             : String(12) enum  
         {  
             ELEMENT;  
             PARAMETER;  
             CONSTANT;  
             USER\_INPUT;  
             SYSTEM\_FIELD;  
         };
         value            : String(512);
         variableSequence : Integer;
      };
   };
   @Scope:\[#ELEMENT\]  
   @MetadataExtension.usageAllowed : true  
   groupWithElement: ElementRef;
   ranking
   {
      @Scope:\[#ELEMENT\]  
      @MetadataExtension.usageAllowed : true  
      functionParameterBinding : array of
      {
         functionId  : String(120);
         parameterId : String(120);
      };
      @Scope:\[#VIEW\]  
      @MetadataExtension.usageAllowed : true  
      activeFunctions : array of
      {
         id     : String(120);
         weight : Decimal(3,2) default 1;
      };
   };
   @Scope:\[#PARAMETER\]  
   @MetadataExtension.usageAllowed : true  
   defaultValue : String(1024);
   @Scope:\[#ELEMENT, #PARAMETER\]  
   valueHelp    : ElementRef;    
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @MetadataExtension.usageAllowed : true
   valueHelpDefinition: array of  
   {  
      qualifier: String(120);  
      entity  
      {  
          name    : EntityRef;
          element : ElementRef;
      };
      association        : AssociationRef;
      additionalBinding : array of  
     {
          localElement   : ElementRef;
          element        : ElementRef;                                                                                    
      };
      @LanguageDependency.maxLength : 40
      label : String(60);
   };
};

DefaultAggregation-Annotations

@Scope:\[#ELEMENT\]  
annotation DefaultAggregation : String(30) enum { NONE; SUM; MIN; MAX; AVG; COUNT; COUNT\_DISTINCT; FORMULA; };

EnterpriseSearch-Annotations

@Scope:\[#ELEMENT\]  
@MetadataExtension.usageAllowed : true  
annotation EnterpriseSearch
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   enabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   fieldGroupForSearchQuery : array of
   {
      name : String(128);
      elements : array of ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   expand : Boolean default true;
   defaultValueSuggestElement : Boolean default true;
   searchOptions : String(500);
   filteringFacet
   {
      default : Boolean default true;
      displayPosition : Integer;
      collapse : Boolean default true;
      complexFilter : Boolean default true;
      numberOfValues : Integer;
      order
      {
         by : String(20) enum
         {
            NUMBER\_OF\_HITS;
            FILTER\_ELEMENT\_VALUE;
            FILTER\_ELEMENT\_LABEL;
         } default #NUMBER\_OF\_HITS;
         byReference : ElementRef;
         direction : String(4) enum
         {
            ASC;
            DESC;
         };
      };
      caseInsensitiveAggregation : Boolean default true;
      countNullValues : Boolean default true;
   };
   filteringAttribute
   {
      default : Boolean default true;
      displayPosition : Integer;
      caseInsensitiveAggregation : Boolean default true;
      countNullValues : Boolean default true;
   };    
   commonAttributes : array of String(100);
   technicalDescription : Boolean default true;
   snippets
   {
      enabled : Boolean default true;
      beginTag : String(128);
      endTag : String(128);
   };
   highlighted
   {
      enabled : Boolean default true;
      beginTag : String(128);
      endTag : String(128);
   };
   maximumLength : Integer;
};

Hierarchy-Annotations

@Scope:\[#VIEW\]  
annotation Hierarchy
{
   parentChild : array of
   {
      name : String(127);
      label : String(1298);
      multipleParents : Boolean default true;
      recurseBy : ElementRef;
      recurse
      {
         parent : array of ElementRef;
         child : array of ElementRef;
      };
      siblingsOrder : array of
      {
         by : ElementRef;
         direction : String(4) enum { ASC; DESC; } default #ASC;
      };
      rootNode
      {
         visibility : String(25) enum { ADD\_ROOT\_NODE\_IF\_DEFINED; ADD\_ROOT\_NODE; DO\_NOT\_ADD\_ROOT\_NODE; } default #ADD\_ROOT\_NODE\_IF\_DEFINED;
      };
      orphanedNode
      {
         handling : String(20) enum { ROOT\_NODES; ERROR; IGNORE; STEPPARENT\_NODE; } default #ROOT\_NODES;
         stepParentNodeId : array of String(1298);
      };
      directory : AssociationRef;
   };
};

OData-Annotations

@Scope:\[#VIEW, #TABLE\_FUNCTION\]  
define annotation OData
{
   publish : Boolean default true;
};

ObjectModel-Annotations

annotation ObjectModel
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION, #ELEMENT\]  
   createEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   draftEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   lifecycle
   {
      enqueue
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_ENQUEUE\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20);
         notificationBeforeExpiryInterval : String(20);
      };
      processing
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_PROCESSING\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20);
         notificationBeforeExpiryInterval : String(20);
      };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   modelCategory : String(30) enum { BUSINESS\_OBJECT; };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   dataCategory : String(30) enum { TEXT; HIERARCHY; };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   representativeKey : KeyElementRef;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   semanticKey : array of ElementRef;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   alternativeKey : array of
   {
      id : String(30);
      uniqueness : String(30) enum { UNIQUE; UNIQUE\_IF\_NOT\_INITIAL; };
      element : array of ElementRef;
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   compositionRoot : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   transactionalProcessingEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   transactionalProcessingUnitRoot : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   transactionalProcessingDelegated : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   updateEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   deleteEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   writeDraftPersistence : String(16);
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   writeActivePersistence : String(16);
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   entityChangeStateId : ElementRef;
   @Scope:\[#VIEW\]  
   resultSet
   {
      sizeCategory : String(3) enum { XS; };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   usageType
   {
      serviceQuality : String(30) enum { A; B; C; D; X; P; } default #X;
      sizeCategory : String(3) enum { S; M; L; XL; XXL; } default #S;
      dataClass : String(30) enum
      {
        TRANSACTIONAL;
        MASTER;
        ORGANIZATIONAL;
        CUSTOMIZING;
        META;
        MIXED;
      } default #MIXED;
   };
   @Scope:\[#ELEMENT\]  
   association
   {
      type : array of String(30) enum { TO\_COMPOSITION\_CHILD; TO\_COMPOSITION\_PARENT; TO\_COMPOSITION\_ROOT; };
      draft : { enabled : Boolean default true;
                fieldNamePrefix : String(16); };
   };
   @Scope:\[#ELEMENT\]  
   text
   {
      element : array of ElementRef;
      association : AssociationRef;
   };
   @Scope:\[#ELEMENT\]  
   hierarchy
   {
      association : AssociationRef;
   };
   @Scope:\[#ELEMENT\]  
   foreignKey
   {
      association : AssociationRef;
   };
   @Scope:\[#ELEMENT\]  
   readOnly : Boolean default true;
   @Scope:\[#ELEMENT\]  
   mandatory : Boolean default true;
   @Scope:\[#ELEMENT\]  
   filter
   {
      transformedBy : String(255);
   };
   @Scope:\[#ELEMENT\]  
   sort
   {
      transformedBy : String(255);
   };
   @Scope:\[#ELEMENT\]  
   virtualElement : Boolean default true;
   @Scope:\[#ELEMENT\]  
   virtualElementCalculatedBy : String(255);
   @Scope:\[#ELEMENT\]  
   enabled : Boolean default true;
};

Search-Annotations

@Scope:\[#ELEMENT\]  
@MetadataExtension.usageAllowed : true  
annotation Search
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   searchable : Boolean default true;
   @Scope:\[#ELEMENT\]  
   defaultSearchElement : Boolean default true;
   ranking : String(6) enum { HIGH; MEDIUM; LOW; } default #MEDIUM;
   fuzzinessThreshold : Decimal(3,2);
   termMappingDictionary : String(128);
   termMappingListId : array of String(32);
};

Semantics-Annotations

@Scope: \[#ELEMENT, #PARAMETER\]  
define annotation Semantics
{
   telephone
   {
      type : array of String(10) enum  
      {  
          HOME;  
          CELL;  
          WORK;  
          FAX;  
          PREF;  
          TEXT;  
          VOICE;  
          VIDEO;  
          PAGER;  
          TEXT\_PHONE;  
      };
   };
   eMail
   {
       type : array of String(10) enum  
       {  
           HOME;  
           WORK;  
           PREF;  
           OTHER;  
       };
       address         : Boolean default true;
       from            : Boolean default true;
       sender          : Boolean default true;
       to              : Boolean default true;
       cc              : Boolean default true;
       bcc             : Boolean default true;
       subject         : Boolean default true;
       body            : Boolean default true;
       keywords        : Boolean default true;
       received        : Boolean default true;
   };  
   name  
   {  
       fullName        : Boolean default true;
       givenName       : Boolean default true;
       additionalName  : Boolean default true;
       familyName      : Boolean default true;
       nickName        : Boolean default true;
       suffix          : Boolean default true;
       prefix          : Boolean default true;
       jobTitle        : Boolean default true;
   };
   address
   {
       type : array of String(10) enum  
       {  
           HOME;  
           WORK;  
           PREF;  
           OTHER;  
       };  
       city            : Boolean default true;
       street          : Boolean default true;
       streetNoNumber  : Boolean default true;
       number          : Boolean default true;
       country         : Boolean default true;
       region          : Boolean default true;
       subRegion       : Boolean default true;
       zipCode         : Boolean default true;
       postBox         : Boolean default true;
       label           : Boolean default true;
   };  
   organization
   {
       name            : Boolean default true;
       unit            : Boolean default true;
       role            : Boolean default true;
   };
   calendarItem
   {
       summary         : Boolean default true;
       description     : Boolean default true;
       categories      : Boolean default true;
       dtStart         : Boolean default true;
       dtEnd           : Boolean default true;
       duration        : Boolean default true;
       due             : Boolean default true;
       completed       : Boolean default true;
       priority        : Boolean default true;
       class           : Boolean default true;
       status          : Boolean default true;
       percentComplete : Boolean default true;
       contact         : Boolean default true;
       location        : Boolean default true;
       transparent     : Boolean default true;
       fbType          : Boolean default true;  
       wholeDay        : Boolean default true;  
   };  
   businessDate  
   {  
       at              : Boolean default true;  
       from            : Boolean default true;  
       to              : Boolean default true;  
   };      
   systemDateTime      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };      
   systemDate      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };      
   systemTime      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };      
   time                : Boolean default true;  
   durationInSeconds   : Boolean default true;  
   calendar      
   {    
       dayOfMonth      : Boolean default true;  
       dayOfYear       : Boolean default true;  
       week            : Boolean default true;  
       month           : Boolean default true;  
       quarter         : Boolean default true;  
       halfyear        : Boolean default true;  
       year            : Boolean default true;  
       yearWeek        : Boolean default true;  
       yearMonth       : Boolean default true;  
       yearQuarter     : Boolean default true;  
       yearHalfyear    : Boolean default true;  
   };    
   fiscal    
   {    
       yearVariant     : Boolean default true;  
       period          : Boolean default true;  
       year            : Boolean default true;  
       yearPeriod      : Boolean default true;  
   };    
   geoLocation    
   {    
       longitude       : Boolean default true;  
       latitude        : Boolean default true;  
       cartoId         : Boolean default true;  
       normalizedName  : Boolean default true;  
   };    
   url  
   {  
       mimeType        : String(1024);  
   };  
   imageUrl : Boolean default true;  
   contact  
   {  
       type : String(12) enum  
       {
           PERSON;  
           ORGANIZATION;  
       };  
       note            : Boolean default true;  
       photo           : Boolean default true;  
       birthDate       : Boolean default true;  
   };      
   user      
   {      
       id              : Boolean default true;  
       createdBy       : Boolean default true;  
       lastChangedBy   : Boolean default true;  
       responsible     : Boolean default true;  
   };      
   mimeType            : Boolean default true;  
   text                : Boolean default true;  
   language            : Boolean default true;  
   languageReference   : ElementRef;        
   @Scope:\[#ELEMENT\]    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[#ELEMENT\]    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[#ELEMENT\]    
   currencyCode        : Boolean default true;  
   @Scope:\[#ELEMENT\]    
   unitOfMeasure       : Boolean default true;  
   @Scope:\[#ELEMENT\]    
   booleanIndicator    : Boolean default true;  
   @Scope:\[#ELEMENT\]        
   largeObject  
   {
       mimeType        : String(1024);
   };
};

UI-Annotations

@MetadataExtension.usageAllowed : true  
define annotation UI
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   headerInfo
   {
       @LanguageDependency.maxLength : 40  
       typeName : String(60);
       @LanguageDependency.maxLength : 40  
       typeNamePlural : String(60);
       typeImageUrl : String(1024);
       imageUrl : ElementRef;
       title
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
       description
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   badge
   {
       headLine
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
       title
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
       typeImageUrl : String(1024);
       imageUrl : ElementRef;
       mainInfo
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
       secondaryInfo
       {
           type : String(40) enum
           {
               STANDARD;
               WITH\_INTENT\_BASED\_NAVIGATION;
               WITH\_NAVIGATION\_PATH;
               WITH\_URL;
           } default #STANDARD;
           @LanguageDependency.maxLength : 40  
           label : String(60);
           iconUrl : String(1024);
           criticality : ElementRef;
            criticalityRepresentation : String(12) enum
            {
                WITHOUT\_ICON;
                WITH\_ICON;          
            } default #WITHOUT\_ICON;
           value : ElementRef;
           targetElement : ElementRef;
           url : ElementRef;
       };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   chart : array of
   {
       qualifier : String(120);
       @LanguageDependency.maxLength : 40  
       title : String(60);
       @LanguageDependency.maxLength : 80  
       description : String(120);
       chartType : String(40) enum
       {
           COLUMN;
           COLUMN\_STACKED;
           COLUMN\_STACKED\_100;
           COLUMN\_DUAL;
           COLUMN\_STACKED\_DUAL;
           COLUMN\_STACKED\_DUAL\_100;
           BAR;
           BAR\_STACKED;
           BAR\_STACKED\_100;
           BAR\_DUAL;
           BAR\_STACKED\_DUAL;
           BAR\_STACKED\_DUAL\_100;
           AREA;
           AREA\_STACKED;
           AREA\_STACKED\_100;
           HORIZONTAL\_AREA;
           HORIZONTAL\_AREA\_STACKED;
           HORIZONTAL\_AREA\_STACKED\_100;
           LINE;
           LINE\_DUAL;
           COMBINATION;
           COMBINATION\_STACKED;
           COMBINATION\_STACKED\_DUAL;
           HORIZONTAL\_COMBINATION\_STACKED;
           HORIZONTAL\_COMBINATION\_STACKED\_DUAL;
           PIE;
           DONUT;
           SCATTER;
           BUBBLE;
           RADAR;
           HEAT\_MAP;
           TREE\_MAP;
           WATERFALL;
           BULLET;
           VERTICAL\_BULLET;
       };
       dimensions : array of ElementRef;
       measures : array of ElementRef;
       dimensionAttributes : array of
       {
           dimension : ElementRef;
           role : String(10) enum
           {
               CATEGORY;
               SERIES;
           };
       };
       measureAttributes : array of
       {
           measure : ElementRef;
           role : String(10) enum
           {
               AXIS\_1;
               AXIS\_2;
               AXIS\_3;
           };
           asDataPoint : Boolean default true;
       };
       actions : array of
       {
           type : String(40) enum
           {
               FOR\_ACTION;
               FOR\_INTENT\_BASED\_NAVIGATION;
           };
           @LanguageDependency.maxLength : 40
           label : String(60);
           dataAction : String(120);
           invocationGrouping : String(12) enum
           {
               ISOLATED;
               CHANGE\_SET;
           } default #ISOLATED;
           semanticObjectAction : String(120);
       };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   selectionPresentationVariant : array of
   {
       qualifier : String(120);
       id : String(120);
       @LanguageDependency.maxLength : 40
       text : String(60);
       selectionVariantQualifier : String(120);
       presentationVariantQualifier : String(120);
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   selectionVariant : array of
   {
       qualifier : String(120);
       id : String(120);
       @LanguageDependency.maxLength : 40
       text : String(60);
       parameters : array of
       {
           name : ParameterRef;
           value : String(1024);
       };
       filter : String(1024);
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   presentationVariant : array of
   {
       qualifier : String(120);
       id : String(120);
       @LanguageDependency.maxLength : 40
       text : String(60);
       maxItems : Integer;
       sortOrder : array of
       {
           by : ElementRef;
           direction : String(4) enum
           {
               ASC;
               DESC;
           };
       };
       groupBy : array of ElementRef;
       totalBy : array of ElementRef;
       total : array of ElementRef;
       includeGrandTotal : Boolean default true;
       initialExpansionLevel : Integer;
       requestAtLeast : array of ElementRef;
       visualizations : array of
       {
           type : String(40) enum
           {
               AS\_LINEITEM;
               AS\_CHART;
               AS\_DATAPOINT;
           };
           qualifier : String(120);
           element : ElementRef;
       };
        selectionFieldsQualifier : String(120);
   };
   @Scope:\[#ELEMENT\]  
   hidden : Boolean default true;
   @Scope:\[#ELEMENT\]  
   masked : Boolean default true;
   @Scope:\[#ELEMENT\]  
   multiLineText : Boolean default true;
   @Scope:\[#ELEMENT\]  
   lineItem : array of
   {
       qualifier : String(120);
       position : DecimalFloat;
       exclude : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       type : String(40) enum
       {
           FOR\_ACTION;
           AS\_ADDRESS;
           AS\_DATAPOINT;
           AS\_CONTACT;
           AS\_CHART;
           FOR\_INTENT\_BASED\_NAVIGATION;
           STANDARD;
           WITH\_INTENT\_BASED\_NAVIGATION;
           WITH\_NAVIGATION\_PATH;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       criticality : ElementRef;
       criticalityRepresentation : String(12) enum
       {
           WITHOUT\_ICON;
           WITH\_ICON;          
       } default #WITHOUT\_ICON;
       dataAction : String(120);
       invocationGrouping : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObjectAction : String(120);
       value : ElementRef;
       valueQualifier : String(120);
       targetElement : ElementRef;
       url : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   identification : array of
   {
       position : DecimalFloat;
       exclude : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       type : String(40) enum
       {
           FOR\_ACTION;
           AS\_ADDRESS;
           AS\_DATAPOINT;
           AS\_CONTACT;
           AS\_CHART;
           FOR\_INTENT\_BASED\_NAVIGATION;
           STANDARD;
           WITH\_INTENT\_BASED\_NAVIGATION;
           WITH\_NAVIGATION\_PATH;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       criticality : ElementRef;
        criticalityRepresentation : String(12) enum
        {
            WITHOUT\_ICON;
            WITH\_ICON;          
        } default #WITHOUT\_ICON;
       dataAction : String(120);
       invocationGrouping : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObjectAction : String(120);
       value : ElementRef;
       valueQualifier : String(120);
       targetElement : ElementRef;
       url : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   statusInfo : array of
   {
       position : DecimalFloat;
       exclude : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       type : String(40) enum
       {
           FOR\_ACTION;
           AS\_ADDRESS;
           AS\_DATAPOINT;
           AS\_CONTACT;
           AS\_CHART;
           FOR\_INTENT\_BASED\_NAVIGATION;
           STANDARD;
           WITH\_INTENT\_BASED\_NAVIGATION;
           WITH\_NAVIGATION\_PATH;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       criticality : ElementRef;
        criticalityRepresentation : String(12) enum
        {
            WITHOUT\_ICON;
            WITH\_ICON;          
        } default #WITHOUT\_ICON;
       dataAction : String(120);
       invocationGrouping : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObjectAction : String(120);
       value : ElementRef;
       valueQualifier : String(120);
       targetElement : ElementRef;
       url : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   fieldGroup : array of
   {
       qualifier : String(120);
       @LanguageDependency.maxLength : 40  
       groupLabel : String(60);
       position : DecimalFloat;
       exclude : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       type : String(40) enum
       {
           FOR\_ACTION;
           AS\_ADDRESS;
           AS\_DATAPOINT;
           AS\_CONTACT;
           AS\_CHART;
           FOR\_INTENT\_BASED\_NAVIGATION;
           STANDARD;
           WITH\_INTENT\_BASED\_NAVIGATION;
           WITH\_NAVIGATION\_PATH;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       criticality : ElementRef;
        criticalityRepresentation : String(12) enum
        {
            WITHOUT\_ICON;
            WITH\_ICON;          
        } default #WITHOUT\_ICON;
       dataAction : String(120);
       invocationGrouping : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObjectAction : String(120);
       value : ElementRef;
       valueQualifier : String(120);
       targetElement : ElementRef;
       url : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   dataPoint
   {
       @LanguageDependency.maxLength : 40  
       title : String(60);
       @LanguageDependency.maxLength : 80  
       description : String(120);
       @LanguageDependency.maxLength : 193  
       longDescription : String(250);
       targetValue : DecimalFloat;
       targetValueElement : ElementRef;
       forecastValue : ElementRef;
       minimumValue : DecimalFloat;
       maximumValue : DecimalFloat;
       visualization : String(12) enum
       {
           NUMBER;
           BULLET\_CHART;
           DONUT;
           PROGRESS;
           RATING;
       };
       valueFormat
       {
           scaleFactor : DecimalFloat;
           numberOfFractionalDigits : Integer;
       };
       referencePeriod
       {
           @LanguageDependency.maxLength : 80  
           description : String(120);
           start : ElementRef;
           end : ElementRef;
       };
       criticality : ElementRef;
        criticalityRepresentation : String(12) enum
        {
            WITHOUT\_ICON;
            WITH\_ICON;          
        } default #WITHOUT\_ICON;
       criticalityCalculation
       {
           improvementDirection : String(8) enum { MINIMIZE; TARGET; MAXIMIZE; };
           acceptanceRangeLowValue : DecimalFloat;  
           acceptanceRangeHighValue : DecimalFloat;  
           toleranceRangeLowValue : DecimalFloat;
           toleranceRangeLowValueElement : ElementRef;
           toleranceRangeHighValue : DecimalFloat;
           toleranceRangeHighValueElement : ElementRef;
           deviationRangeLowValue : DecimalFloat;
           deviationRangeLowValueElement : ElementRef;
           deviationRangeHighValue : DecimalFloat;
           deviationRangeHighValueElement : ElementRef;
       };
       trend : ElementRef;
       trendCalculation
       {
           referenceValue : ElementRef;
           isRelativeDifference : Boolean default true;
           upDifference : DecimalFloat;
           upDifferenceElement : ElementRef;
           strongUpDifference : DecimalFloat;
           strongUpDifferenceElement : ElementRef;
           downDifference : DecimalFloat;
           downDifferenceElement : ElementRef;
           strongDownDifference : DecimalFloat;
           strongDownDifferenceElement : ElementRef;
       };
       responsible : ElementRef;
       responsibleName : String(120);
   };
   @Scope:\[#ELEMENT\]  
   selectionField : array of
   {
       qualifier : String(120);
       position : DecimalFloat;
       exclude : Boolean default true;
       element : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   facet : array of
   {
       qualifier : String(120);
       id : String(120);
       purpose : String(40) enum
       {
           STANDARD;
           HEADER;
           QUICK\_VIEW;
           QUICK\_CREATE;
           FILTER;  
       } default #STANDARD;
       parentId : String(120);
       position : DecimalFloat;
       exclude : Boolean default true;
       isPartOfPreview : Boolean default true;
       isSummary : Boolean default true;
       isMap : Boolean default true;
       importance : String(6) enum
       {
           HIGH;
           MEDIUM;
           LOW;
       };
       @LanguageDependency.maxLength : 40  
       label : String(60);
       type  : String(40) enum
       {
           COLLECTION;
           ADDRESS\_REFERENCE;
           BADGE\_REFERENCE;
           CHART\_REFERENCE;
           CONTACT\_REFERENCE;
           DATAPOINT\_REFERENCE;
           FIELDGROUP\_REFERENCE;
           HEADERINFO\_REFERENCE;
           IDENTIFICATION\_REFERENCE;
           LINEITEM\_REFERENCE;
           STATUSINFO\_REFERENCE;
           URL\_REFERENCE;
       };
       targetElement : ElementRef;
       targetQualifier : String(120);
       url : ElementRef;
   };
   @Scope:\[#VIEW, #ELEMENT\]  
   textArrangement : String(13) enum
   {
       TEXT\_FIRST;
       TEXT\_LAST;
       TEXT\_ONLY;
       TEXT\_SEPARATE;
   };  
   @Scope: \[#ELEMENT\]
   kpi : array of  
   {
       qualifier                 : String(120);
       id                        : String(120);
       selectionVariantQualifier : String(120);
       detail  
       {
          defaultPresentationVariantQualifier      : String(120);
          alternativePresentationVariantQualifiers : array of String(120);
       };
       dataPoint  
       {
           @LanguageDependency.maxLength : 40
           title           : String(60);  
           @LanguageDependency.maxLength : 80
           description     : String(120);  
           @LanguageDependency.maxLength : 193
           longDescription : String(250);  
           targetValue     : DecimalFloat;  
           forecastValue   : DecimalFloat;    
           minimumValue    : DecimalFloat;
           maximumValue    : DecimalFloat;
           valueFormat  
           {
               scaleFactor              : DecimalFloat;
               numberOfFractionalDigits : Integer;
           };
           visualization : String(12) enum  
           {  
               NUMBER;  
               BULLET\_CHART;  
               DONUT;  
               PROGRESS;  
               RATING;  
           };
           referencePeriod {
               @LanguageDependency.maxLength: 80
               description : String(120);
               start       : ElementRef;  
               end         : ElementRef;  
           };
           criticality               : ElementRef;
           criticalityRepresentation : String(12) enum  
           {  
               WITHOUT\_ICON;  
               WITH\_ICON;  
           } default #WITHOUT\_ICON;
           criticalityCalculation  
           {
               improvementDirection : String(8) enum  
               {  
                   MINIMIZE;  
                   TARGET;  
                   MAXIMIZE;  
               };
               acceptanceRangeLowValue  : DecimalFloat;  
               acceptanceRangeHighValue : DecimalFloat;  
               toleranceRangeLowValue   : DecimalFloat;  
               toleranceRangeHighValue  : DecimalFloat;  
               deviationRangeLowValue   : DecimalFloat;  
               deviationRangeHighValue  : DecimalFloat;  
               constantThresholds       : array of  
               {
                   aggregationLevel         : array of ElementRef;
                   acceptanceRangeLowValue  : DecimalFloat;  
                   acceptanceRangeHighValue : DecimalFloat;  
                   toleranceRangeLowValue   : DecimalFloat;  
                   toleranceRangeHighValue  : DecimalFloat;  
                   deviationRangeLowValue   : DecimalFloat;  
                   deviationRangeHighValue  : DecimalFloat;  
               };
         };
         trend : ElementRef;  
         trendCalculation  
         {
            referenceValue       : ElementRef;
            isRelativeDifference : Boolean ;
            upDifference         : DecimalFloat;  
            strongUpDifference   : DecimalFloat;
            downDifference       : DecimalFloat;  
            strongDownDifference : DecimalFloat;  
         };
         responsible    : ElementRef;  
         responsibleName: String(120);  
       };
   };
};