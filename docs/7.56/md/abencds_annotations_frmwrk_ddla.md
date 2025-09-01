  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - Framework-Specific Annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) → 

ABAP CDS - Framework-Specific Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).
-   The semantics of the annotations can be found in the links in the DDLA source code.

The documentation CDS Annotations summarizes the descriptions of the framework-specific annotations.

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_1)
-   [Aggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_2)
-   [Analytics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_3)
-   [AnalyticsDetails-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_4)
-   [Consumption-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_5)
-   [DefaultAggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_6)
-   [EnterpriseSearch-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_7)
-   [Event-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_8)
-   [Feature-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_9)
-   [GenericPersistency-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_10)
-   [Hierarchy-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_11)
-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_12)
-   [OData-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_13)
-   [Search-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_14)
-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_15)
-   [UI-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_16)
-   [VDM-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_17)

Hint

See also [Framework-Specific Annotation Syntax](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)).

AccessControl-Annotations

@Scope:\[#VIEW, #TABLE\_FUNCTION, #HIERARCHY\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },  
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS, #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },  
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   privilegedAssociations: array of AssociationRef;
@Scope: \[ #VIEW \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },  
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]    
   auditing  
{
  type
   : String(20) enum { CUSTOM;};
  specification
   : String(1000);
}
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },  
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_INCLUDED; BLOCKED\_DATA\_EXCLUDED; };    
      blockingIndicator : array of ElementRef;
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },  
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[#VIEW,#ELEMENT,#PARAMETER, #HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of  
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[#VIEW\]
          output: Boolean;
       }
    };
};

Aggregation-Annotations

@Scope:\[#ELEMENT\]  
@CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },  
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
annotation Aggregation
{
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS\]
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
   @CompatibilityContract.c2.usageAllowed: false    
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   exception : String( 30) enum
      {  
         SUM;
         MIN;
         MAX;
         AVG;
         COUNT;
         COUNT\_DISTINCT;
         FIRST;
         LAST;
         STANDARD\_DEVIATION;
         VARIANCE;
         MEDIAN;
         NHA;  
      };
   @CompatibilityContract.c2.usageAllowed: false  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]  
   referenceElement : array of ElementRef;
   @Scope:\[#ENTITY\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   allowPrecisionLoss : Boolean default true;
};

Analytics-Annotations

@Scope:\[#VIEW, #TABLE\_FUNCTION\]
@CompatibilityContract: { c2.usageAllowed: false,
                          c1.usageAllowed: true }
annotation Analytics
{
  @CompatibilityContract: {
    c1: { allowedChanges.annotation: \[ #ADD \],
          allowedChanges.value: \[ #NONE \] } }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
   dataCategory : String(20) enum { DIMENSION; FACT; CUBE; AGGREGATIONLEVEL; };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
   query : Boolean default true;
   @Scope:\[#VIEW, #ELEMENT\]
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value: \[ #TRUE\_TO\_FALSE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
   hidden : Boolean default true;
   @API.state: \[#NOT\_RELEASED\]
   planning
   {
      @CompatibilityContract: {
        c1: { allowedChanges.annotation: \[ #ADD \],
              allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
      enabled : Boolean default true;
   };
   @API.state: \[#NOT\_RELEASED\]
   @CompatibilityContract: {
    c1: { allowedChanges.annotation: \[ #ADD \],
          allowedChanges.value: \[ #NONE \] } }
   dataExtraction
   {
      @CompatibilityContract: {
        c1: { allowedChanges.annotation: \[ #ADD \],
              allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
      enabled : Boolean default true;
      delta
      {
         byElement
         {
            name : ElementRef;
            @CompatibilityContract: {
              c1: { allowedChanges.annotation: \[ #ANY \],
                    allowedChanges.value: \[ #ANY \] } }
            @MetadataExtension.usageAllowed : true
            maxDelayInSeconds : Integer default 1800;
            @CompatibilityContract: {
              c1: { allowedChanges.annotation: \[ #ANY \],
                    allowedChanges.value: \[ #ANY \] } }
            detectDeletedRecords : Boolean default true;
            @CompatibilityContract: {
              c1: { allowedChanges.annotation: \[ #ANY \],
                    allowedChanges.value: \[ #ANY \] } }
            @MetadataExtension.usageAllowed : true
            ignoreDeletionAfterDays : Integer;
         };
         changeDataCapture
         {
            automatic : Boolean default true;
            mapping: array of
            {
               role : String(30) enum {MAIN; LEFT\_OUTER\_TO\_ONE\_JOIN;};
               table : String(30);
               viewElement : array of ElementRef;
               tableElement : array of String(30);
               filter : array of
               {
                  tableElement : String(30);
                  operator : String(11) enum {EQ;NOT\_EQ;GT;GE;LT;LE;BETWEEN;NOT\_BETWEEN;} default #EQ;
                  value : String(45);
                  highValue : String(45);
               };
            };
         };
      };
      filter : array of
      {
         viewElement : ElementRef;
         operator : String(11) enum {EQ;NOT\_EQ;GT;GE;LT;LE;BETWEEN;NOT\_BETWEEN;} default #EQ;
         value : String(45);
         highValue : String(45);
      };
      alternativeKey : array of ElementRef;
      @CompatibilityContract: {
        c1: { allowedChanges.annotation: \[ #ANY \],
              allowedChanges.value: \[ #ANY \] } }
      partitionBy  : array of ElementRef;
   };
  @Scope:\[#VIEW\]
  @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
   @API.state: \[#NOT\_RELEASED\]
  viewModelReplication
  {
    enabled : Boolean default true;
  };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   hints : String(1298);
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #ANY \] } }
   @API.state: \[#NOT\_RELEASED\]
   writeBack
   {
      className : String(30);  
   };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   settings
   {
      maxProcessingEffort : String(20) enum { LOW; MEDIUM; HIGH; UNLIMITED; } default #HIGH;
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
      zeroValues: {
         handling: String(20) enum { SHOW; HIDE; HIDE\_IF\_ALL; } default #SHOW;
         hideOnAxis: String(20) enum { ROWS; COLUMNS; ROWS\_COLUMNS; } default #ROWS\_COLUMNS;
      };
      rows: {
        hierarchicalDisplay : {
            active : Boolean;
            expandTo: ElementRef;
        };
        totalsLocation: String(10) enum { BOTTOM; TOP; };
      };
      columns {
        hierarchicalDisplay : {
            active : Boolean;
            expandTo: ElementRef;
        };
        totalsLocation: String(10) enum { RIGHT; LEFT; };
      };
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]  
      @Scope:\[#VIEW\]  
      @MetadataExtension.usageAllowed: true
      runtimeExtensibility : {
        allowed : Boolean default true;
      }      
   };
   @Scope:\[#VIEW, #ELEMENT\]
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #CUSTOM \],
           allowedChanges.value: \[ #CUSTOM\] } }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
   internalName : String(30) enum { DEFAULT; LOCAL; GLOBAL; };
   @CompatibilityContract: {
       c1: { allowedChanges.annotation: \[#NONE\],
             allowedChanges.value: \[#NONE\] } }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   technicalName : String( 16 ) ;
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   variableCheck: {
     implementedBy : String(255);  
   }
   @Scope: \[ #ELEMENT \]
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value: \[ #REMOVE\] } }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   constraints: {
     filter : String(20) enum { UNIQUE\_PER\_CELL; UNIQUE\_PER\_QUERY; };
   }
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value: \[ #NONE \] } }
   @API.state: \[#NOT\_RELEASED\]
   processingEngine : String(5) enum { AE; MDS; };  
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }
   @API.state: \[#NOT\_RELEASED\]
   onlyRestrictedAttributeTextAccess : Boolean default true;
   @CompatibilityContract: {
   c1: { allowedChanges.annotation: \[#NONE\],
         allowedChanges.value: \[#NONE\] } }
   @API.state: \[#NOT\_RELEASED\]
   readClassName : String(30);  
   @CompatibilityContract: {
   c1: { allowedChanges.annotation: \[#ANY\],
         allowedChanges.value: \[#ANY\] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]
   @Scope:\[#ELEMENT\]
   @MetadataExtension.usageAllowed: true
   excludeFromRuntimeExtensibilty : Boolean default true;
};

AnalyticsDetails-Annotations

@Scope:\[#ELEMENT\]  
@CompatibilityContract: {
  c1: { usageAllowed: true,
        allowedChanges.annotation: \[ #ANY \],
        allowedChanges.value: \[ #ANY \] },
  c2: {usageAllowed: false} }  
annotation AnalyticsDetails
{
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM , #RELEASED\_FOR\_KEY\_USER\_APPS \]  
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
      displayHierarchy : String(20) enum { OFF; ON; FILTER; FILTER\_ONLY; };
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
         hideNodeWithOneChild : Boolean default true;
         childNodePosition : String(10) enum { BELOW ; ABOVE; };          
      };            
      elementHierarchy
      {
         parent : ElementRef;
         initiallyCollapsed : Boolean default true;
      };          
      @Scope:\[#ELEMENT, #PARAMETER\]  
      variableSequence : Integer;
      resultValuesSource : String(10) enum { CUBE; DIMENSION; };
      reverseSign: Boolean default true;
      onCharacteristicStructure: Boolean default true;
      collisionHandling:  
      { formula        : String( 20) enum { DEFAULT; THIS; CONCURRENT; };
        decimals       : String( 20) enum { DEFAULT; THIS; CONCURRENT; };
        scaling        : String( 20) enum { DEFAULT; THIS; CONCURRENT; };
        semanticObject : String( 20) enum { DEFAULT; THIS; CONCURRENT; };
      };
      ignoreFurtherFilter:
      {  forElement : array of ElementRef;
         forAllElements : Boolean; }
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
      exceptionAggregationElements : array of String(30);
   };
   @API.state: \[#NOT\_RELEASED\]    
   planning
   {
      enabled : Boolean default true;
      disaggregation : String(20) enum { NONE; TOTAL; DIFFERENCE; };
      distribution : String(20) enum { EQUAL; PROPORTIONAL; PROPORTIONAL\_REF; };
      distributionReference : ElementRef;
   };
};

Consumption-Annotations

define annotation Consumption
{
   @Scope:\[#ENTITY, #PARAMETER, #ELEMENT\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   semanticObject   : String(120);
   @Scope:\[#ELEMENT, #PARAMETER\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   semanticObjectMapping: {
      element : String(40);
      additionalBinding : array of
      {
          localElement   : ElementRef;
          element        : String(40);
      };
   };
   @MetadataExtension.usageAllowed : true
   @Scope:\[#ELEMENT, #PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   labelElement     : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   quickInfoElement : ElementRef;
   @MetadataExtension.usageAllowed : true
   @Scope:\[#ELEMENT, #PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value: \[ #TRUE\_TO\_FALSE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   hidden : Boolean default true;
   @MetadataExtension.usageAllowed : true
   @Scope:\[#ELEMENT, #PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   derivation
   {
       lookupEntity      : EntityRef;
       pfcgMapping       : String(30);
       resultElement     : String(30);
       resultElementHigh : String(30);
       resultHierarchyNode
       {
           nodeTypeElement : String(30);
           mapping : array of
           {
               hierarchyElement : String(30);
               lookupElement    : String(30);
           };
       };
       binding : array of
       {
           targetParameter : String(30);
           targetElement   : String(30);
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   filter
   {
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #TRUE\_TO\_FALSE \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #TRUE\_TO\_FALSE \] } }
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
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #NONE \] },
      c2: { usageAllowed: false } }
      selectionType      : String(20) enum
      {
          SINGLE;
          INTERVAL;
          RANGE;
          HIERARCHY\_NODE;
      };
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #FALSE\_TO\_TRUE \] },
      c2: { usageAllowed: false } }
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
      @Scope: \[#ENTITY, #ELEMENT\]
      @MetadataExtension.usageAllowed : false
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #CUSTOM \],
            allowedChanges.value:      \[ #CUSTOM \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #CUSTOM \],
            allowedChanges.value:      \[ #CUSTOM \] } }
      businessDate :
      {
        at : Boolean default true;
      };
   };
   @Scope:\[#ELEMENT\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   groupWithElement: ElementRef;
   @MetadataExtension.usageAllowed : true
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \]  } }
   ranking
   {
      functionParameterBinding : array of
      {
         functionId  : String(120);
         parameterId : String(120);
      };
      @Scope:\[#VIEW, #ENTITY\]
      activeFunctions : array of
      {
         id     : String(120);
         weight : Decimal(3,2) default 1;
      };
   };
   @Scope:\[#VIEW\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
        allowedChanges.annotation: \[ #ANY \],
        allowedChanges.value:      \[ #ANY \] },  
   c2: { usageAllowed: true,
        allowedChanges.annotation: \[ #NONE \],
        allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   ranked : Boolean default true;
   @Scope:\[#PARAMETER,#ELEMENT\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   defaultValue : String(1024);
   @Scope:\[#ELEMENT, #PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   valueHelp    : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   valueHelpDefinition: array of
   {
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      qualifier: String(120);
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      entity
      {
          @Scope:\[#ENTITY, #ELEMENT, #PARAMETER\]
          name    : EntityRef;
          element : String(40);
      };
      association        : AssociationRef;
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      distinctValues     : Boolean default true;
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      useForValidation   : Boolean default true;
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      enabled            : ElementRef;
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      additionalBinding  : array of
      {
          localParameter : ParameterRef;
          localElement   : ElementRef;
          localConstant  : String(255);
          parameter      : String(40);
          element        : String(40);
          usage          : String(30) enum
          {
              FILTER;
              RESULT;
              FILTER\_AND\_RESULT;
          };
      };
      @LanguageDependency.maxLength : 40
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      label : String(60);
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      presentationVariantQualifier : String(120);
      selectionVariantQualifier : String(120);
   };
   @MetadataExtension.usageAllowed : true
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   valueHelpDefault
   {
      @Scope:\[#ENTITY\]
      fetchValues: String(30) enum
      {
        AUTOMATICALLY\_WHEN\_DISPLAYED;
        ON\_EXPLICIT\_REQUEST;
      };
      @Scope:\[#ELEMENT\]
      binding
      {
         usage: String(30) enum
         {
           FILTER;
           RESULT;
           FILTER\_AND\_RESULT;
         };
      };
      @Scope:\[#ELEMENT\]
      display : Boolean default true;
      @Scope:\[#ELEMENT\]
      initialValueIsSignificant : Boolean default true;
   };
   @CompatibilityContract:{
   c1: { usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value:      \[#ANY\] },
   c2: { usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value:      \[#ANY\] } }
   @Scope: \[#VIEW\]
   @MetadataExtension.usageAllowed : true
   dbHints : array of String(1298);
   @CompatibilityContract:{
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[#ANY\],
         allowedChanges.value:      \[#ANY\] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[#ANY\],
         allowedChanges.value:      \[#ANY\] } }
   @Scope: \[#VIEW\]
   dbHintsCalculatedBy : String(255);
   @MetadataExtension.usageAllowed : true
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   dynamicLabel
   {
     @LanguageDependency.maxLength : 40
     @Scope: \[ #ELEMENT \]
       label : String(60);
       binding : array of
       {
          index     : Integer;
          parameter : ParameterRef;
       }
   }
   @Scope:\[#PARAMETER\]
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   hierarchyNodeSelection
   {
     hierarchyElement : ElementRef;
     hierarchyBinding : array of
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
     defaultHierarchyNode
     {
        nodeType : ElementRef;
        node     : array of
        {
           element : ElementRef;
           value   : String(512);
        };
     };
     multipleSelections : Boolean default true;
   };
};

DefaultAggregation-Annotations

@Scope:\[#ELEMENT\]  
annotation DefaultAggregation : String(30) enum { NONE; SUM; MIN; MAX; AVG; COUNT; COUNT\_DISTINCT; FORMULA; };

EnterpriseSearch-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value: \[#ANY\]
        } ,
    c2: {
        usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value: \[#ANY\]
        }
}
@Scope:\[#ELEMENT\]  
@MetadataExtension.usageAllowed : true  
annotation EnterpriseSearch
{
   @Scope:\[#ENTITY\]  
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   enabled : Boolean default true;
   @Scope:\[#ENTITY\]  
   hidden : Boolean default true;
   @Scope:\[#ENTITY\]
   assignedCategories : array of String(100);
   @Scope:\[#ENTITY\]  
   fieldGroupForSearchQuery : array of
   {
      name : String(128);
      elements : array of ElementRef;
   };
   @Scope:\[#ENTITY\]    
   dclInterpretationMode : String(20) enum
   {
      FLAT\_ELEMENT\_LIST;
      RESPECT\_CARDINALITY;
   };    
   @Scope:\[#ENTITY\]
   nlp
   {
     semanticDomain : String(50) enum
     {
       ANALYTICS;
     };
   };  
   @Scope:\[#ENTITY\]
   hierarchy
   {
     parentChild
     {
       definition: EntityRef;        
     }
   }
   @Scope:\[#ELEMENT\]  
   expand : Boolean default true;
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   defaultValueSuggestElement : Boolean default true;
   searchOptions : String(500);
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   filteringFacet
   {
      default : Boolean default true;
      displayPosition : Integer;
      collapse : Boolean default true;
      complexFilter : Boolean default true;
      numberOfValues : Integer;
      iconUrl : ElementRef;
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
      noIntervals: Boolean default true;  
      considerNullValues : Boolean default true;
   };
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   filteringAttribute
   {
      default : Boolean default true;
      displayPosition : Integer;
      caseInsensitiveAggregation : Boolean default true;
      considerNullValues : Boolean default true;
   };    
   commonAttributes : array of String(100);
   technicalDescription : Boolean default true;
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   snippets
   {
      enabled : Boolean default true;
      beginTag : String(128);
      endTag : String(128);
      maximumLength: Integer;
   };
   highlighted
   {
      enabled : Boolean default true;
      beginTag : String(128);
      endTag : String(128);
   };
   maximumLength : Integer;
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   configurationSet : String(50);
};

Event-Annotations

@CompatibilityContract: {
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #NONE \],
          allowedChanges.value:      \[ #NONE \]  
        }  
}
define annotation Event
{  
    @Scope: \[#ENTITY\]
    @LanguageDependency.maxLength : 197
    @CompatibilityContract: {
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value:      \[ #ANY \]  
        }  
    }
    description : String(255);
    @Scope: \[#ENTITY\]
    type : String(60);
    @Scope: \[#ENTITY\]
    implementedBy : array of String(255);
    @Scope: \[#ENTITY\]  
    sapObjectType : String(30);  
    @Scope: \[#ENTITY\]  
    sapObjectNodeType : String(30);
    @Scope: \[#ELEMENT\]
    @CompatibilityContract: {
    c2: { usageAllowed: true,
       allowedChanges.annotation: \[ #ADD \],
        allowedChanges.value:      \[ #NONE \]
      }
      }
    qualifiesEventType: Boolean default true;
    @Scope: \[#ELEMENT\]
    element: {
       internalName : String(30);
    };
    @Scope: \[#ELEMENT\]
    @CompatibilityContract: {
     c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #NONE \]
           }
          }
     context : {
         attribute : String(20);
     };      
};

Feature-Annotations

@CompatibilityContract: {
    c1: { usageAllowed: false },
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #REMOVE \],
          allowedChanges.value: \[ #NONE \]}
}
@Scope:\[#ENTITY, #ELEMENT \]
define annotation Feature : String(1024);

GenericPersistency-Annotations

@Scope:\[#ELEMENT\]
@CompatibilityContract: {  
c1: { usageAllowed: true,
      allowedChanges.annotation: \[ #ADD \],
      allowedChanges.value: \[ #NONE \] },
c2: { usageAllowed: false } }
define annotation GenericPersistency  
{
  property      : Boolean default true;
  propertyValue : array of ElementRef;
  format  
  {
    length          : ElementRef;
    decimals        : ElementRef;
    displayTemplate : ElementRef;
    exponentialDisplay  
    {
      exponentValue : ElementRef;
      displayFormat : ElementRef;
    };
  };
}

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

ObjectModel-Annotations

define annotation ObjectModel
{
   @Scope:\[#VIEW, #TABLE\_FUNCTION, #ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: false},
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   createEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   updateEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false},
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   deleteEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   draftEnabled : Boolean default true;
   @Scope:\[#ENTITY, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   lifecycle
   {
      processor :
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_PROCESSING\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20) default 'PT15M';
         notificationBeforeExpiryInterval : String(20) default 'PT5M';
      };
      enqueue :
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_ENQUEUE\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20) default 'PT15M';
         notificationBeforeExpiryInterval : String(20) default 'PT5M';
      };
      processing :
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_PROCESSING\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20) default 'PT15M';
         notificationBeforeExpiryInterval : String(20) default 'PT10M';
      };
      draft:
      {
         expiryBehavior : String(30) enum { RELATIVE\_TO\_PROCESSING\_START; RELATIVE\_TO\_LAST\_CHANGE; } default #RELATIVE\_TO\_LAST\_CHANGE;
         expiryInterval : String(20) default 'PT28D';
         notificationBeforeExpiryInterval : String(20) default 'PT10D';
      };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   modelCategory : String(30) enum { BUSINESS\_OBJECT; };
   @Scope:\[#ENTITY, #TABLE\_FUNCTION\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   dataCategory : String(30) enum { TEXT; HIERARCHY; VALUE\_HELP; };
   @Scope:\[#ENTITY, #TABLE\_FUNCTION\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   representativeKey : KeyElementRef;
   @Scope:\[#ENTITY, #TABLE\_FUNCTION\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   semanticKey : array of ElementRef;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false } ,
   c2: { usageAllowed: false } }
   alternativeKey : array of
   {
      id         : String(30);
      element    : array of ElementRef;
      uniqueness : String(30) enum { UNIQUE; UNIQUE\_IF\_NOT\_INITIAL; };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   compositionRoot : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   transactionalProcessingEnabled : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   transactionalProcessingUnitRoot : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #FALSE\_TO\_TRUE \] } }
   transactionalProcessingDelegated : Boolean default true;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   writeDraftPersistence : String(16);
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   writeActivePersistence : String(16);
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ANY \] } }
   entityChangeStateId : String(30);
   @Scope:\[#ENTITY, #TABLE\_FUNCTION, #CUSTOM\_ENTITY\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   resultSet
   {
      sizeCategory : String(3) enum { XS; };
   };
   @Scope:\[#ENTITY, #TABLE\_FUNCTION\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] } }
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   association
   {
      type : array of String(30) enum { TO\_COMPOSITION\_CHILD; TO\_COMPOSITION\_PARENT; TO\_COMPOSITION\_ROOT; };
      reverseAssociation: String(30);
      @CompatibilityContract: {
      c1: { usageAllowed: false },
      c2: { usageAllowed: false } }
      draft : { enabled : Boolean default true;
                fieldNamePrefix : String(16); };
      boundFields:
      {
         @CompatibilityContract: {
         c1: { usageAllowed: true,
               allowedChanges.annotation: \[ #ADD \],
               allowedChanges.value:      \[ #FALSE\_TO\_TRUE \] },
         c2: { usageAllowed: true,
               allowedChanges.annotation: \[ #ADD \],
               allowedChanges.value:      \[ #FALSE\_TO\_TRUE \] } }
         dataMatchesSourceAndTargetTypes : Boolean default true;
      };
   };
   @Scope:\[#ELEMENT\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   text
   {
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #ANY \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #ANY \] } }
      element : array of ElementRef;
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #CUSTOM \],
            allowedChanges.value:      \[ #CUSTOM \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #NONE \] } }
      association : AssociationRef;
      @Scope: \[#ENTITY,#ELEMENT\]
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ANY \],
            allowedChanges.value:      \[ #ANY \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ANY \],
            allowedChanges.value:      \[ #ANY \] } }
      control : String(60) enum { NONE; ASSOCIATED\_TEXT\_UI\_HIDDEN; };
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #ANY \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #ANY \] } }
      reference
      {
        association : AssociationRef;
      };
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   hierarchy
   {
      association : AssociationRef;
   };
   @Scope:\[#ELEMENT\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #CUSTOM \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   foreignKey
   {
      association : AssociationRef;
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #CUSTOM \] } }
   readOnly : Boolean default true;
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #CUSTOM \] } }
   mandatory : Boolean default true;
   @Scope:\[#ELEMENT\]
   filter
   {
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
      @CompatibilityContract: {
      c1: { usageAllowed: false },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #CUSTOM \] } }
      enabled : Boolean default true;
      @CompatibilityContract: {
      c1: { usageAllowed: false },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #REMOVE \],
            allowedChanges.value:      \[ #ANY \] } }
      transformedBy : String(255);
   };
   @Scope:\[#ELEMENT\]
   sort
   {
      @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #CUSTOM \] },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value:      \[ #CUSTOM \] } }
      enabled : Boolean default true;
      @CompatibilityContract: {
      c1: { usageAllowed: false },
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #CUSTOM \],
            allowedChanges.value:      \[ #ANY \] } }
      transformedBy : String(255);
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value:      \[ #ANY \] } }
   virtualElement : Boolean default true;
   @Scope:\[#ELEMENT\]
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value:      \[ #ANY \] } }
   virtualElementCalculatedBy : String(255);
   @Scope:\[#ENTITY, #CUSTOM\_ENTITY\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   query
   {
      @CompatibilityContract: {
      c1: { usageAllowed: false},
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ANY \],
            allowedChanges.value:      \[ #ANY \] } }
      implementedBy : String(255);
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #CUSTOM \] } }
   enabled : Boolean default true;
   @Scope: \[#VIEW\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   action : array of
   {
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     name     : String(30);
     @CompatibilityContract: {
     c1: { usageAllowed: false },
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value:      \[ #NONE \] } }
     feature : String( 40);
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     readOnly : Boolean default true;
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     instance :
     {
       bound : Boolean default true;
     };
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     enabled : Boolean default true;
     @LanguageDependency.maxLength: 40
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value:      \[ #NONE \] } }
     label : String(60);
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     parameter :
     {
       dataType : EntityRef;
     };
     @CompatibilityContract: {
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #NONE \],
           allowedChanges.value:      \[ #NONE \] } }
     result :
     {
       dataType : EntityRef;
       cardinality : String(30) enum { ZERO\_TO\_ONE; ONE; ZERO\_TO\_MANY; ONE\_TO\_MANY; };
     };
   };
   @Scope: \[#VIEW\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   delegatedAction : array of
   {
     @CompatibilityContract: {
     c1: { usageAllowed: false },
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value:      \[ #ANY \] } }
     name : String(30);
     exposureName: String(60);
     enabled : Boolean default true;
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   draft
   {
     sharing : String(30) enum { NONE; RESTRICTED; PUBLIC; };
     concurrentEditing : Boolean default true;
   };
   @Scope:\[#ELEMENT\]  
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   editableFieldFor : ElementRef;
   @Scope: \[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: false } }
   uniqueIdField : ElementRef;
   @Scope:\[#ELEMENT\]
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: false } }
   value:
   {
     derivedFrom : array of ElementRef;
   };
   @Scope:\[#ENTITY, #ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: false } }
   derivationFunction:
   {
       applicableFor
       {
          element        : array of String( 30);
          dimensionView  : array of String( 30);
          dataType       : String( 4) enum
          {
            DATS;
            TIMS;
          };
       }
       inputElement      : array of ElementRef;
       result
       {
          type : String ( 14) enum
          {
            SINGLE;
            INTERVAL;
            HIERARCHY\_NODE;
          };
          multipleRecords : Boolean default true;
          element         : ElementRef;
          elementHigh     : ElementRef;
          nodeTypeElement : ElementRef;
       }
   }
   @Scope:\[#PARAMETER\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: false } }
   interval:
   {
       upperBoundary: ElementRef;
   }
   @Scope: \[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed:   true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ADD \] },
   c2: { usageAllowed:   true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ADD \] } }
   supportedCapabilities: array of String(60) enum
   {
     SQL\_DATA\_SOURCE;
     CDS\_MODELING\_DATA\_SOURCE;
     CDS\_MODELING\_ASSOCIATION\_TARGET;
     DATA\_STRUCTURE;
     LANGUAGE\_DEPENDENT\_TEXT;
     VALUE\_HELP\_PROVIDER;
     COLLECTIVE\_VALUE\_HELP;
     EXTRACTION\_DATA\_SOURCE;
     DERIVATION\_FUNCTION;
     PARENT\_CHILD\_HIERARCHY\_NODE\_PROVIDER;
     SEARCHABLE\_ENTITY;
     ENTERPRISE\_SEARCH\_PROVIDER;
     TRANSACTIONAL\_PROVIDER;
     ANALYTICAL\_QUERY;
     ANALYTICAL\_DIMENSION;
     ANALYTICAL\_PROVIDER;
     ANALYTICAL\_PARENT\_CHILD\_HIERARCHY\_NODE;
     ANALYTICAL\_KPI;
     OUTPUT\_FORM\_DATA\_PROVIDER;
     OUTPUT\_EMAIL\_DATA\_PROVIDER;
     OUTPUT\_PARAMETER\_DETERMINATION\_DATA\_SOURCE;
     SITUATION\_ANCHOR;
     SITUATION\_TRIGGER;
     SITUATION\_DATACONTEXT;
   };
   @Scope: \[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed:   true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ADD \] },
   c2: { usageAllowed:   true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #ADD \] } }
   modelingPattern: String(60) enum
   {
     DATA\_STRUCTURE;
     LANGUAGE\_DEPENDENT\_TEXT;
     VALUE\_HELP\_PROVIDER;
     COLLECTIVE\_VALUE\_HELP;
     DERIVATION\_FUNCTION;
     PARENT\_CHILD\_HIERARCHY\_NODE\_PROVIDER;
     ENTERPRISE\_SEARCH\_PROVIDER;
     TRANSACTIONAL\_ENTITY;
     TRANSACTIONAL\_PROJECTED\_ENTITY;
     TRANSACTIONAL\_QUERY;
     ANALYTICAL\_QUERY;
     ANALYTICAL\_CUBE;
     ANALYTICAL\_DIMENSION;
     ANALYTICAL\_PARENT\_CHILD\_HIERARCHY\_NODE;
     ANALYTICAL\_KPI;
     OUTPUT\_FORM\_DATA\_PROVIDER;
     OUTPUT\_EMAIL\_DATA\_PROVIDER;
     OUTPUT\_PARAMETER\_DETERMINATION\_DATA\_SOURCE;
     SITUATION\_ANCHOR;
     SITUATION\_TRIGGER;
     SITUATION\_DATACONTEXT;
     NONE;
   };
   @Scope: \[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] }
   }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   collectiveValueHelp {
       for {
           element : ElementRef;
       };
   };
};

OData-Annotations

@MetadataExtension.usageAllowed : false
define annotation OData
{
   @Scope:\[#VIEW\]  
   @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #FALSE\_TO\_TRUE \] },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   publish : Boolean default true;
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   etag :  Boolean default true;  
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \] },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   entitySet
   {
       name : String(30);
   };
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   entityType
   {
      name : String(128);
   };
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]    
   action: array of {
      name      : String(128);
      localName : String(30);
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   property
   {
      name         : String(128);
      valueControl : ElementRef;
   };
   @Scope:\[#SERVICE\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
   schema
   {
      name : String(128);
   };
   v2  
   {
      @Scope:\[#VIEW\]  
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \] },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \] } }
      autoAggregation : Boolean default true;
      @Scope: \[#ELEMENT\]
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #NONE \] },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #NONE \] } }
      @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]      
      amount
      {  
        noDecimalShift: Boolean default true;  
      }    
   };
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
     c1: { usageAllowed: true,
           allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value:      \[ #NONE \] },  
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value:      \[ #NONE \] } }
   hierarchy
   {
      recursiveHierarchy : array of
      {
         elementWithHierarchy     : ElementRef;
         nodeElement              : ElementRef;
         externalKeyElement       : ElementRef;
         parentNodeElement        : ElementRef;
         distanceFromRootElement  : ElementRef;
         drillStateElement        : ElementRef;
         descendantCountElement   : ElementRef;
         preorderRankElement      : ElementRef;
         siblingRankElement       : ElementRef;
      }
   };  
};

Search-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value: \[#ANY\]
        } ,
    c2: {
        usageAllowed: true,
        allowedChanges.annotation: \[#ANY\],
        allowedChanges.value: \[#ANY\]
        }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
@Scope:\[#ELEMENT\]  
@MetadataExtension.usageAllowed : true  
annotation Search
{
   @Scope:\[#ENTITY\]  
   searchable : Boolean default true;    
   @Scope:\[#ELEMENT\]  
   defaultSearchElement : Boolean default true;
   ranking : String(6) enum { HIGH; MEDIUM; LOW; } default #MEDIUM;
   fuzzinessThreshold : Decimal(3,2);
   termMappingDictionary : String(128);
   termMappingListId : array of String(32);
   @API.state: \[#NOT\_RELEASED\]
   fulltextIndex
   {
     required : Boolean default true;
   };
   @Scope:\[#ELEMENT\]
   mode : String(20) enum { IDENTIFIER; };
};

Semantics-Annotations

@Scope: \[#ELEMENT, #PARAMETER\]
define annotation Semantics
{
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   eMail
   {
       type : array of String(10) enum
       {
           HOME;
           WORK;
           PREF;
           OTHER;
       };
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] } }
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   organization  
   {
       name            : Boolean default true;
       unit            : Boolean default true;
       role            : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   businessDate
   {
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value:      \[ #CUSTOM \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value:      \[ #CUSTOM \] } }
       at              : Boolean default true;
       from            : Boolean default true;
       to              : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   systemDateTime
   {
       createdAt                  : Boolean default true;
       lastChangedAt              : Boolean default true;
       localInstanceLastChangedAt : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   systemDate
   {
       createdAt                  : Boolean default true;
       lastChangedAt              : Boolean default true;
       localInstanceLastChangedAt : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   systemTime
   {
       createdAt                  : Boolean default true;
       lastChangedAt              : Boolean default true;
       localInstanceLastChangedAt : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   time                : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   dateTime            : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   durationInSeconds   : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   durationInMinutes   : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   durationInHours   : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   durationInDays   : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   calendar
   {
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: false } }
       dayOfMonth      : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: false } }
       dayOfYear       : Boolean default true;
       week            : Boolean default true;
       month           : Boolean default true;
       quarter         : Boolean default true;
       halfyear        : Boolean default true;
       year            : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] } }
       yearWeek        : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] } }
       yearMonth       : Boolean default true;
       yearQuarter     : Boolean default true;
       yearHalfyear    : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   fiscal
   {
       yearVariant     : Boolean default true;
       period          : Boolean default true;
       year            : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] } }
       yearPeriod      : Boolean default true;
       quarter         : Boolean default true;
       yearQuarter     : Boolean default true;
       week            : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] } }
       yearWeek        : Boolean default true;
       dayOfYear       : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   geoLocation
   {
       longitude       : Boolean default true;
       latitude        : Boolean default true;
       cartoId         : Boolean default true;
       normalizedName  : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },
   c2: { usageAllowed: false }}
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   url
   {
       mimeType        : String(1024);
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   imageUrl : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   contact
   {
       type : String(12) enum
       {
           PERSON;
           ORGANIZATION;
       };
       note            : Boolean default true;
       @API.state: \[ #RELEASED\_FOR\_KEY\_USER\_APPS \]
       photo           : Boolean default true;
       birthDate       : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },
   c2: { usageAllowed: false } }
   user
   {
       @CompatibilityContract: {
       c1: { usageAllowed: false },
       c2: { usageAllowed: false } }
       id                         : Boolean default true;
       @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
       createdBy                  : Boolean default true;
       @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
       lastChangedBy              : Boolean default true;
       @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
       localInstanceLastChangedBy : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: false },
       c2: { usageAllowed: false } }
       responsible                : Boolean default true;
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   mimeType            : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #CUSTOM \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   text                : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   language            : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: false },
   c2: { usageAllowed: false } }
   languageReference   : ElementRef;
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   amount
   {
       currencyCode    : ElementRef;
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   quantity
   {
       unitOfMeasure   : ElementRef;
       @CompatibilityContract: {
       c1: { usageAllowed: false },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ADD \],
             allowedChanges.value:      \[ #NONE \] } }
       unitOfMeasureSapCode   : ElementRef;
       @CompatibilityContract: {
       c1: { usageAllowed: false },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ADD \],
             allowedChanges.value:      \[ #NONE \] } }
       unitOfMeasureIsoCode   : ElementRef;
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   currencyCode        : Boolean default true;
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   unitOfMeasure       : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   booleanIndicator    : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   uuid            : Boolean default true;
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   largeObject
   {
       mimeType : ElementRef;
       fileName : ElementRef;
       contentDispositionPreference: String(30) enum { ATTACHMENT;
                                                       INLINE; };
   };
   @Scope:\[#ENTITY\]
   @MetadataExtension.usageAllowed : true
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }
   interval : array of
   {
      qualifier: String(120);
      lowerBoundaryParameter : ParameterRef;
      lowerBoundaryElement   : ElementRef;
      lowerBoundaryIncluded  : Boolean default true;
      upperBoundaryParameter : ParameterRef;
      upperBoundaryElement   : ElementRef;
      upperBoundaryIncluded  : Boolean default true;
      boundaryCodeElement    : ElementRef;  
   }
    @Scope:\[#ELEMENT\]
    @MetadataExtension.usageAllowed : true
    @CompatibilityContract: {
    c1: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value: \[ #ANY \] },
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value: \[ #ANY \] } }
    personalData
    {
       @Scope:\[#ELEMENT\]
       isPotentiallySensitive : Boolean default true;
       @Scope:\[#ELEMENT\]
       fieldSemantics : String(30) enum { DATA\_SUBJECT\_ID;
                                          LEGAL\_ENTITY\_ID;
                                          SUBJECT\_ID\_TYPE; };
       @Scope:\[#ENTITY\]
       entitySemantics : String(30) enum { DATA\_SUBJECT; };
       @Scope:\[#ENTITY\]
       dataSubjectRole:  String(30);
    }
    @Scope: \[#ELEMENT\]
    @CompatibilityContract: {
    c1: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value: \[ #FALSE\_TO\_TRUE \] },
    c2: { usageAllowed: false} }
    @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
    signReversalIndicator : Boolean default true;
    @CompatibilityContract: {
    c1: { usageAllowed: true,
          allowedChanges.annotation: \[#NONE\],
          allowedChanges.value: \[#NONE\] },
    c2: { usageAllowed: false } }
    spatialData
    {
       type : array of String(30) enum
       {
          ANY;
          POINT;
          LINE\_STRING;
          POLYGON;
          MULTI\_POINT;
          MULTI\_LINE\_STRING;
          MULTI\_POLYGON;
          GEOMETRY\_COLLECTION;
          CIRCULAR\_STRING;
       };
       srid
       {
          value : String(20);
       }
    }
    @Scope: \[#ELEMENT\]
    @MetadataExtension.usageAllowed : true
    @CompatibilityContract: {
    c1: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value: \[ #ANY \] },
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #ANY \],
          allowedChanges.value: \[ #ANY \] } }
    valueRange
    {
        minimum          : String(1298);
        exclusiveMinimum : Boolean default true;  
        maximum          : String(1298);
        exclusiveMaximum : Boolean default true;  
    }
};

UI-Annotations

@MetadataExtension.usageAllowed : true  
@CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \]
       },    
   c2: { usageAllowed: false
       }
}
@API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM,  
              #RELEASED\_FOR\_KEY\_USER\_APPS \]
define annotation UI
{
   @Scope:\[#ENTITY\]  
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
               AS\_CONNECTED\_FIELDS;
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
           value          : ElementRef;
           valueQualifier : String(120);
           targetElement  : ElementRef;
           url            : ElementRef;
       };
       description
       {
           type : String(40) enum
           {
               STANDARD;
               AS\_CONNECTED\_FIELDS;
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
           value          : ElementRef;
           valueQualifier : String(120);
           targetElement  : ElementRef;
           url            : ElementRef;
       };
   };
   @Scope:\[#ENTITY\]  
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
   @Scope:\[#ENTITY\]  
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
           COMBINATION\_DUAL;
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
           HORIZONTAL\_WATERFALL;
           HORIZONTAL\_COMBINATION\_DUAL;
           DONUT\_100;
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
               CATEGORY2;
           };
           valuesForSequentialColorLevels: array of String(1024);
           emphasizedValues: array of String(1024);      
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
           useSequentialColorLevels: Boolean default true;
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
           requiresContext    : Boolean default true;
           invocationGrouping : String(12) enum
           {
               ISOLATED;
               CHANGE\_SET;
           } default #ISOLATED;
           semanticObject       : String(120);
           semanticObjectAction : String(120);
       };
   };
   @Scope:\[#ENTITY\]  
   selectionPresentationVariant : array of
   {
       qualifier : String(120);
       id : String(120);
       @LanguageDependency.maxLength : 40
       text : String(60);
       selectionVariantQualifier : String(120);
       presentationVariantQualifier : String(120);
   };
   @Scope:\[#ENTITY\]  
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
   @Scope:\[#ENTITY\]  
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
   @Scope:\[#ELEMENT, #PARAMETER\]
   hidden : Boolean default true;
   @Scope:\[#ELEMENT\]  
   masked : Boolean default true;
   @Scope:\[#ELEMENT\]  
   multiLineText : Boolean default true;
   @Scope:\[#ELEMENT\]  
   lineItem : array of
   {
       @Scope: \[#ELEMENT, #ENTITY\]
       qualifier  : String(120);
       position   : DecimalFloat;
       exclude    : Boolean default true;
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       cssDefault
       {
           width : String(20);    
       }
       type : String(40) enum
       {
           AS\_ADDRESS;
           AS\_CHART;
           AS\_CONNECTED\_FIELDS;
           AS\_CONTACT;
           AS\_DATAPOINT;
           AS\_FIELDGROUP;
           FOR\_ACTION;
           FOR\_INTENT\_BASED\_NAVIGATION;
           STANDARD;
           WITH\_INTENT\_BASED\_NAVIGATION;
           WITH\_NAVIGATION\_PATH;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       @Scope: \[#ELEMENT, #ENTITY\]
       criticality : ElementRef;
       criticalityRepresentation : String(12) enum
       {
           WITHOUT\_ICON;
           WITH\_ICON;          
       } default #WITHOUT\_ICON;
       dataAction           : String(120);
       requiresContext      : Boolean default true;
       invocationGrouping   : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObject       : String(120);
       semanticObjectAction : String(120);
       value                : ElementRef;
       valueQualifier       : String(120);
       targetElement        : ElementRef;
       url                  : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   identification : array of
   {
       qualifier  : String(120);
       position   : DecimalFloat;
       exclude    : Boolean default true;
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       cssDefault
       {
           width : String(20);    
       }        
       type : String(40) enum
       {
           AS\_ADDRESS;
           AS\_CHART;
           AS\_CONNECTED\_FIELDS;
           AS\_CONTACT;
           AS\_DATAPOINT;
           AS\_FIELDGROUP;
           FOR\_ACTION;
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
       dataAction           : String(120);
       requiresContext      : Boolean default true;
       invocationGrouping   : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObject       : String(120);
       semanticObjectAction : String(120);
       value                : ElementRef;
       valueQualifier       : String(120);
       targetElement        : ElementRef;
       url : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   statusInfo : array of
   {
       qualifier  : String(120);
       position   : DecimalFloat;
       exclude    : Boolean default true;
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       cssDefault
       {
           width : String(20);    
       }        
       type : String(40) enum
       {
           AS\_ADDRESS;
           AS\_CHART;
           AS\_CONNECTED\_FIELDS;
           AS\_CONTACT;
           AS\_DATAPOINT;
           AS\_FIELDGROUP;
           FOR\_ACTION;
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
       dataAction           : String(120);
       requiresContext      : Boolean default true;
       invocationGrouping   : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObject       : String(120);
       semanticObjectAction : String(120);
       value                : ElementRef;
       valueQualifier       : String(120);
       targetElement        : ElementRef;
       url                  : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   fieldGroup : array of
   {
       qualifier  : String(120);
       @LanguageDependency.maxLength : 40  
       groupLabel : String(60);
       position   : DecimalFloat;
       exclude    : Boolean default true;
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       cssDefault
       {
           width : String(20);    
       }        
       type : String(40) enum
       {
           AS\_ADDRESS;
           AS\_CHART;
           AS\_CONNECTED\_FIELDS;
           AS\_CONTACT;
           AS\_DATAPOINT;
           AS\_FIELDGROUP;
           FOR\_ACTION;
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
       requiresContext      : Boolean default true;
       invocationGrouping   : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObject       : String(120);
       semanticObjectAction : String(120);
       value                : ElementRef;
       valueQualifier       : String(120);
       targetElement        : ElementRef;
       url                  : ElementRef;
   };
   @Scope: \[#ELEMENT\]
   dataFieldDefault : array of
   {
       qualifier  : String(120);
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       type : String(40) enum
       {
           STANDARD;
           WITH\_URL;
       } default #STANDARD;
       @LanguageDependency.maxLength : 40  
       label : String(60);
       iconUrl : String(1024);
       @Scope: \[#ELEMENT, #ENTITY\]
       criticality : ElementRef;
       criticalityRepresentation : String(12) enum
       {
           WITHOUT\_ICON;
           WITH\_ICON;          
       } default #WITHOUT\_ICON;
       value                : ElementRef;
       url                  : ElementRef;
   };
   @Scope:\[#ELEMENT\]  
   dataPoint
   {
       qualifier : String(120);
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
       criticalityValue : Integer enum  
       {  
          NEGATIVE;  
          CRITICAL;  
          POSITIVE;  
       };
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
           constantThresholds: array of  
           {
                aggregationLevel: array of ElementRef;
                acceptanceRangeLowValue: DecimalFloat;  
                acceptanceRangeHighValue: DecimalFloat;  
                toleranceRangeLowValue: DecimalFloat;  
                toleranceRangeHighValue: DecimalFloat;  
                deviationRangeLowValue: DecimalFloat;  
                deviationRangeHighValue: DecimalFloat;  
           };
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
       @CompatibilityContract: {
       c1: { usageAllowed: false },
       c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value: \[ #NONE \]} }
       feature   : String(40);
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
       hidden : Boolean default true;
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
           SELECTIONPRESENTATIONVARIANT\_REFERENCE;
           PRESENTATIONVARIANT\_REFERENCE;
           LINEITEM\_REFERENCE;
           STATUSINFO\_REFERENCE;
           URL\_REFERENCE;
       };
       targetElement : ElementRef;
       targetQualifier : String(120);
       url : ElementRef;
   };
   @Scope:\[#ENTITY, #ELEMENT\]  
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
       qualifier                 : String(120);
       id                        : String(120);
       @LanguageDependency.maxLength: 10
       shortDescription          : String(20);
       selectionVariantQualifier : String(120);
       detail  
       {
          defaultPresentationVariantQualifier      : String(120);
          alternativePresentationVariantQualifiers : array of String(120);
          semanticObject       : String(120);
          semanticObjectAction : String(120);
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
           criticalityValue          : Integer enum  
           {  
               NEGATIVE;  
               CRITICAL;  
               POSITIVE;  
           };
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
            isRelativeDifference : Boolean default true;
            upDifference         : DecimalFloat;  
            strongUpDifference   : DecimalFloat;
            downDifference       : DecimalFloat;  
            strongDownDifference : DecimalFloat;  
         };
         responsible    : ElementRef;  
         responsibleName: String(120);  
       };
   };
   @Scope: \[#ELEMENT\]
   valueCriticality: array of  
   {
      qualifier   : String(120);
      value       : String(120);
      criticality : Integer enum  
      {  
         NEGATIVE;  
         CRITICAL;  
         POSITIVE;  
      };
   };
   @Scope: \[#ELEMENT\]
   criticalityLabels : array of {
   qualifier: String(120);
   criticality: Integer enum  
   {  
     NEGATIVE;  
     CRITICAL;  
     POSITIVE;  
   };
   @LanguageDependency.maxLength: 40
   label: String(60);
   };
   @Scope: \[#ELEMENT\]
   connectedFields : array of
   {
       qualifier  : String(120);
       @LanguageDependency.maxLength : 40
       groupLabel : String(60);
       @LanguageDependency.maxLength : 197
       template   : String(255);
       name       : String(120);
       exclude    : Boolean default true;
       hidden     : Boolean default true;
       importance : String(6) enum { HIGH; MEDIUM; LOW; };
       emphasized : Boolean default true;
       cssDefault
       {
           width : String(20);    
       }
       type : String(40) enum
       {
           AS\_ADDRESS;
           AS\_CHART;
           AS\_CONNECTED\_FIELDS;
           AS\_CONTACT;
           AS\_DATAPOINT;
           AS\_FIELDGROUP;
           FOR\_ACTION;
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
       dataAction           : String(120);
       requiresContext      : Boolean default true;
       invocationGrouping   : String(12) enum { ISOLATED; CHANGE\_SET; } default #ISOLATED;
       semanticObject       : String(120);
       semanticObjectAction : String(120);
       value                : ElementRef;
       valueQualifier       : String(120);
       targetElement        : ElementRef;
       url                  : ElementRef;
   };
};

VDM-Annotations

@CompatibilityContract:{ c1.usageAllowed: false,
                         c2.usageAllowed: false }
annotation VDM
    {
    @Scope:\[#ENTITY\]
    @CompatibilityContract:{ c1: { usageAllowed: false },
                             c2: { usageAllowed: false }
                           }
    auxiliaryEntity: { for: { entity: EntityRef; };
                       usage: { type: array of String(30) enum {ENTERPRISE\_SEARCH;}; };
                      };
    @CompatibilityContract:{ c1: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                      value: \[#ANY\] }
                                  },
                             c2: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                      value: \[#ANY\] }
                                 }
                           }
    @Scope:\[#ENTITY\]  
    viewType : String(30) enum { BASIC; COMPOSITE; CONSUMPTION; EXTENSION; DERIVATION\_FUNCTION; TRANSACTIONAL; };  
    @Scope:\[#ENTITY\]  
    private : Boolean default true;
    @Scope:\[#EXTEND\_VIEW\]  
    viewExtension : Boolean default true;
    @CompatibilityContract:{ c1: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                     value: \[#ANY\] }
                                 },
                             c2: { usageAllowed: false,
                                   allowedChanges: { annotation: \[#ANY\],
                                                     value: \[#ANY\] }
                                 }
                           }
    lifecycle : {
                @CompatibilityContract:{ c2: { usageAllowed: true,
                                               allowedChanges: { annotation: \[#ANY\],
                                                                 value: \[#ANY\] }
                                             }
                                       }
                @Scope:\[#ENTITY\]
                contract : { type : String(30) enum { PUBLIC\_REMOTE\_API;
                                                      PUBLIC\_LOCAL\_API;
                                                      SAP\_INTERNAL\_API;
                                                      NONE; };
                            };                    
                 @Scope:\[#ENTITY, #ELEMENT\]  
                 status : String(30) enum { DEPRECATED; };
                 @Scope:\[#ENTITY, #ELEMENT\]  
                 successor : String(30);
                };
   @CompatibilityContract:{  c1: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                     value: \[#ANY\] }
                                 },
                             c2: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                     value: \[#ANY\] }
                                 }
                           }
    @Scope:\[#ENTITY\]
    usage : {
              type: array of String(40) enum { ACTION\_PARAMETER\_STRUCTURE;
                                               ACTION\_RESULT\_STRUCTURE;
                                               EVENT\_SIGNATURE;
                                               TRANSACTIONAL\_PROCESSING\_SERVICE;};
            };      
    @CompatibilityContract:{ c1: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                      value: \[#ANY\] }
                                  },
                             c2: { usageAllowed: true,
                                   allowedChanges: { annotation: \[#ANY\],
                                                      value: \[#ANY\] }
                                 }
                           }
    @Scope:\[#ENTITY\]
    entity : Boolean default true;
};