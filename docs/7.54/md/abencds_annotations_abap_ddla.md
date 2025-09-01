  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_1)

-   [AbapCatalog-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_3)

-   [API-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_5)

-   [ClientHandling-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_7)

-   [DataAging-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_9)

-   [Environment-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_11)

-   [MappingRole-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_13)

-   [MetadataExtension-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_15)

-   [Scope\[ \]-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_17)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};