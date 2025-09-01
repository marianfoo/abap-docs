  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Definitions

The following [DDLA source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shows the [CDS annotation definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in all [framework-specific annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_annotation.htm).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The documentation CDS Annotations summarizes the descriptions of the framework-specific annotations.

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_1)

-   [Aggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_2)

-   [Analytics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_3)

-   [AnalyticsDetails-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_4)

-   [Consumption-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_5)

-   [DefaultAggregation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_6)

-   [EnterpriseSearch-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_7)

-   [Feature-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_8)

-   [Hierarchy-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_9)

-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_10)

-   [OData-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_11)

-   [Search-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_12)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_13)

-   [UI-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_DDLA_14)

Note

See also [Framework-Specific Annotation Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_frmwrk_tables.htm).

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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
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
   privilegedAssociations: array of AssociationRef;
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
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
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
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
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
@CompatibilityContract: { c2.usageAllowed: false,
                          c1.usageAllowed: true }
annotation Analytics
{
  @CompatibilityContract: {
    c1: { allowedChanges.annotation: \[ #ADD \],
          allowedChanges.value: \[ #NONE \] } }
   dataCategory : String(20) enum { DIMENSION; FACT; CUBE; AGGREGATIONLEVEL; };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }    
   query : Boolean default true;
   @Scope:\[#VIEW, #ELEMENT\]  
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value: \[ #TRUE\_TO\_FALSE \] } }    
   hidden : Boolean default true;
   planning
   {
      @CompatibilityContract: {
        c1: { allowedChanges.annotation: \[ #ADD \],
              allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }    
      enabled : Boolean default true;
   };
    @CompatibilityContract: {
      c1: { allowedChanges.annotation: \[ #ANY \],
            allowedChanges.value: \[ #ANY \] } }    
   dataExtraction
   {
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
            detectDeletedRecords : Boolean default true;
            @CompatibilityContract: {
              c1: { allowedChanges.annotation: \[ #ANY \],
                    allowedChanges.value: \[ #ANY \] } }              
            @MetadataExtension.usageAllowed : true  
            ignoreDeletionAfterDays : Integer;
         };
      };
   };
  @Scope:\[#VIEW\]
  @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #FALSE\_TO\_TRUE \] } }
  viewModelReplication
  {
    enabled : Boolean default true;
  };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }      
   hints : String(1298);
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ADD \],
           allowedChanges.value: \[ #ANY \] } }      
   writeBack
   {
      className : String(30);
   };
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #ANY \],
           allowedChanges.value: \[ #ANY \] } }    
   settings
   {
      maxProcessingEffort : String(20) enum { LOW; MEDIUM; HIGH; UNLIMITED; } default #HIGH;
      zeroValues: {  
         handling: String(20) enum { SHOW; HIDE; HIDE\_IF\_ALL; } default #SHOW;
         hideOnAxis: String(20) enum { ROWS; COLUMNS; ROWS\_COLUMNS; } default #ROWS\_COLUMNS;
      };
   };
   @Scope:\[#VIEW, #ELEMENT\]  
   @CompatibilityContract: {
     c1: { allowedChanges.annotation: \[ #CUSTOM \],
           allowedChanges.value: \[ #CUSTOM\] } }    
   internalName : String(30) enum { DEFAULT; LOCAL; GLOBAL; };  
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

define annotation Consumption
{
   @Scope:\[#ENTITY, #PARAMETER, #ELEMENT\]  
   @MetadataExtension.usageAllowed : true  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   semanticObject   : String(120);
   @MetadataExtension.usageAllowed : true  
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   labelElement     : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   quickInfoElement : ElementRef;
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value: \[ #TRUE\_TO\_FALSE \] },    
   c2: { usageAllowed: true,  
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }
   hidden : Boolean default true;
   @MetadataExtension.usageAllowed : true  
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   derivation
   {
       lookupEntity      : EntityRef;
       pfcgMapping       : String(30);
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   filter
   {
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #TRUE\_TO\_FALSE \] },    
      c2: { usageAllowed: false } }
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
      @Scope: \[#VIEW, #ELEMENT\]  
      @MetadataExtension.usageAllowed : false
      @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \] },    
      c2: { usageAllowed: false } }
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
   @Scope:\[#PARAMETER,#ELEMENT\]  
   @MetadataExtension.usageAllowed : true  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   defaultValue : String(1024);
   @Scope:\[#ELEMENT, #PARAMETER\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
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
      qualifier: String(120);  
      entity  
      {  
          @Scope:\[#VIEW, #ELEMENT, #PARAMETER\]
          name    : String(40);
          element : String(40);
      };
      association        : AssociationRef;
      distinctValues     : Boolean default true;
      additionalBinding : array of  
     {
          localParameter : ParameterRef;
          localElement   : ElementRef;
          parameter      : String(40);
          element        : String(40);                                                                                    
          usage          : String(30) enum  
          {
              FILTER;  
              RESULT;  
              FILTER\_AND\_RESULT;
          };                                                                                    
      };
      @LanguageDependency.maxLength : 40
      label : String(60);
      presentationVariantQualifier : String(120);
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
   enabled : Boolean default true;
   @Scope:\[#ENTITY\]
   assignedCategories : array of String(100);
   @Scope:\[#ENTITY\]  
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
      noIntervals: Boolean default true;  
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
      maximumLength: Integer;
   };
   highlighted
   {
      enabled : Boolean default true;
      beginTag : String(128);
      endTag : String(128);
   };
   maximumLength : Integer;
};

Feature-Annotations

@CompatibilityContract: {
    c1: { usageAllowed: false },
    c2: { usageAllowed: true,
          allowedChanges.annotation: \[ #REMOVE \],
          allowedChanges.value: \[ #NONE \]}
}
@Scope:\[#ENTITY, #ELEMENT \]
define annotation Feature : String(40);

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

annotation ObjectModel
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
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
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
         expiryInterval : String(20) default 'P28D';
         notificationBeforeExpiryInterval : String(20) default 'PT10D';
      };    
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }
   modelCategory : String(30) enum { BUSINESS\_OBJECT; };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] } }
   dataCategory : String(30) enum { TEXT; HIERARCHY; VALUE\_HELP; };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }  
   representativeKey : KeyElementRef;
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]  
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
   entityChangeStateId : ElementRef;
   @Scope:\[#VIEW\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,  
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value:      \[ #ANY \] },
   c2: { usageAllowed: false } }  
   resultSet
   {
      sizeCategory : String(3) enum { XS; };
   };
   @Scope:\[#VIEW, #TABLE\_FUNCTION\]
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
      type : array of String(30) enum { TO\_COMPOSITION\_CHILD; TO\_COMPOSITION\_PARENT; TO\_COMPOSITION\_ROOT;        
                                        TO\_AGGREGATION\_CHILD; TO\_AGGREGATION\_PARENT;};  
      reverseAssociation: String(30);
      @CompatibilityContract: {
      c1: { usageAllowed: false },    
      c2: { usageAllowed: false } }
      draft : { enabled : Boolean default true;
                fieldNamePrefix : String(16); };      
   };
   @Scope:\[#ELEMENT\]  
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
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value:      \[ #ANY \] } }  
   filter
   {
      transformedBy : String(255);
   };
   @Scope:\[#ELEMENT\]  
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #ANY \] } }  
   sort
   {
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
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #REMOVE \],
         allowedChanges.value:      \[ #ANY \] } }  
   virtualElementCalculatedBy : String(255);
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
     name     : String(30);
     @CompatibilityContract: {
     c1: { usageAllowed: false },
     c2: { usageAllowed: true,
           allowedChanges.annotation: \[ #REMOVE \],
           allowedChanges.value:      \[ #NONE \] } }
     feature : String( 40);
     readOnly : Boolean default true;
     instance :  
     {  
       bound : Boolean default true;  
     };
     enabled : Boolean default true;
     @LanguageDependency.maxLength: 40
     label : String(60);
     parameter :  
     {  
       dataType : EntityRef;  
     };  
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
   @Scope: \[#VIEW\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value:      \[ #NONE \] },    
   c2: { usageAllowed: false } }  
   uniqueIdField : ElementRef;
};

OData-Annotations

@MetadataExtension.usageAllowed : false
define annotation OData
{
   @Scope:\[#VIEW\]  
   @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #FALSE\_TO\_TRUE \]
          },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #ADD \],
            allowedChanges.value: \[ #FALSE\_TO\_TRUE \]
          }
   }
   publish : Boolean default true;
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \]  
          },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \]
          }
   }
   entitySet
   {
       name : String(30);
   };
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]  
       },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]
       }
   }
   entityType
   {
      name : String(128);
   };
   @Scope:\[#ENTITY\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]  
       },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]
       }
   }    
   action: array of {
      name      : String(128);
      localName : String(30);
   };
   @Scope:\[#ELEMENT\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]  
       },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]
       }
   }
   property
   {
      name : String(128);
   };
   @Scope:\[#SERVICE\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]  
       },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \]
       }
   }
   schema
   {
      name : String(128);
   };
   @Scope:\[#VIEW\]  
   @CompatibilityContract: {
      c1: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \]  
          },    
      c2: { usageAllowed: true,
            allowedChanges.annotation: \[ #NONE \],
            allowedChanges.value: \[ #NONE \]
          }
   }  
   v2  
   {
       autoAggregation : Boolean default true;    
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
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
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
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }  
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
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: false } }    
   businessDate  
   {  
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #CUSTOM \],
             allowedChanges.value: \[ #CUSTOM \] },    
       c2: { usageAllowed: false } }
       at              : Boolean default true;  
       from            : Boolean default true;  
       to              : Boolean default true;  
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }              
   systemDateTime      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };      
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }    
   systemDate      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };  
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }      
   systemTime      
   {      
       createdAt       : Boolean default true;  
       lastChangedAt   : Boolean default true;  
   };    
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }    
   time                : Boolean default true;  
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   durationInSeconds   : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },    
   c2: { usageAllowed: false } }  
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
       yearWeek        : Boolean default true;  
       yearMonth       : Boolean default true;  
       yearQuarter     : Boolean default true;  
       yearHalfyear    : Boolean default true;  
   };
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },    
   c2: { usageAllowed: false } }    
   fiscal    
   {    
       yearVariant     : Boolean default true;  
       period          : Boolean default true;  
       year            : Boolean default true;  
       yearPeriod      : Boolean default true;  
   };  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }    
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
   url  
   {  
       mimeType        : String(1024);  
   };  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ADD \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }
   imageUrl : Boolean default true;
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
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
       id              : Boolean default true;  
       createdBy       : Boolean default true;  
       lastChangedBy   : Boolean default true;
       @CompatibilityContract: {
       c1: { usageAllowed: false },    
       c2: { usageAllowed: false } }    
       responsible     : Boolean default true;  
   };  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #ANY \],
         allowedChanges.value: \[ #ANY \] },    
   c2: { usageAllowed: false } }    
   mimeType            : Boolean default true;  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   text                : Boolean default true;  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #CUSTOM \] } }  
   language            : Boolean default true;  
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
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[#ELEMENT\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[#ELEMENT\]    
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[#ELEMENT\]    
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
   @Scope:\[#ELEMENT\]  
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: false }}        
   largeObject  
   {
       mimeType        : String(1024);
   };
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
@API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]
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
           invocationGrouping : String(12) enum
           {
               ISOLATED;
               CHANGE\_SET;
           } default #ISOLATED;
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
       qualifier : String(120);
       position : DecimalFloat;
       exclude  : Boolean default true;
       hidden   : Boolean default true;
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
       @Scope: \[#ELEMENT, #ENTITY\]
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
            isRelativeDifference : Boolean ;
            upDifference         : DecimalFloat;  
            strongUpDifference   : DecimalFloat;
            downDifference       : DecimalFloat;  
            strongDownDifference : DecimalFloat;  
         };
         responsible    : ElementRef;  
         responsibleName: String(120);  
       };
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
   };
};