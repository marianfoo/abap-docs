  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_abap.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - ABAP Annotation Definitions, ABENCDS_ANNOTATIONS_ABAP_DDLA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shows the [CDS annotation definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in all [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_annotation.htm).
-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm) defined after [@Scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

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

Hint

See also [ABAP Annotation Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_abap_tables.htm).

AbapAnnotation-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations   

@Scope:\[#VIEW\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#CUSTOM\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      @API.state:\[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c0: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
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
   @CompatibilityContract.c0: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#CUSTOM\],
           value: \[#CUSTOM\]
       }
   }
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   @API.state:\[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   @CompatibilityContract: {  
      c0: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
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
   @Scope: \[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm), [#SERVICE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_service_annos.htm)\]
   extensibility : {  
      extensible : Boolean default true;
      @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)\]
      elementSuffix: String(3);
      @CompatibilityContract: {
        c0: {
            allowedChanges: {
                annotation: \[#NONE\],
                value: \[#CUSTOM\]  
            }
        }
      }
      @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)\]
      quota: {  
        maximumFields:  Integer;
        maximumBytes:   Integer;
      }
      @CompatibilityContract: {
        c0: {
            allowedChanges: {
                annotation: \[#ADD\],
                value: \[#ADD\]
            }
        }
      }
      @Scope: \[#VIEW\]
      dataSources: array of LocalDefinitionRef;    
      @CompatibilityContract: {
        c0: {
            allowedChanges: {
                annotation: \[#ADD\],
                value: \[#FALSE\_TO\_TRUE\]
            }
        }
      }
      @Scope: \[#VIEW\]
      allowNewDatasources: Boolean default true;    
      @CompatibilityContract: {  
        c0 : {  
          allowedChanges: {  
            annotation: \[#ADD\],
            value : \[#FALSE\_TO\_TRUE\]
          }
        }
      }
      @Scope: \[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)\]
      allowNewCompositions: Boolean default true;
   }
   @CompatibilityContract: {
        c0: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#CUSTOM\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#CUSTOM\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract: {
      c0: {
          usageAllowed: true,
          allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
          }
      },
      c1: {
          usageAllowed: true,
          allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#FALSE\_TO\_TRUE\]
          }
      }
   }
   @API.state:\[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c0: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#ANY\],
               value: \[#ANY\]
           }
       },
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
        @CompatibilityContract: {
           c1: {
               usageAllowed: true,
               allowedChanges: {
                   annotation: \[#CUSTOM\],
                   value: \[#NONE\]
               }
           },
           c2: {
               usageAllowed: true,
               allowedChanges: {
                   annotation: \[#CUSTOM\],
                   value: \[#NONE\]
               }
           }
       }
      @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]  
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
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
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
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
      @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
      preferredAssociationOnElements: array of ElementRef;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope:\[#VIEW, [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_extend_view_annotations.htm)\]
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
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
   @Scope:\[#VIEW, [#HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hierarchy_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_function_annotations.htm)\]
   @CompatibilityContract: {
   c0: { usageAllowed: true,
         allowedChanges: {  
              annotation: \[#ANY\],  
              value: \[#ANY\]
                         }
        },
   c1: { usageAllowed: true,
         allowedChanges: {  
              annotation: \[#ANY\],  
              value: \[#ANY\]
                         }
        },
   c2: { usageAllowed: true,  
         allowedChanges: {  
              annotation: \[#ANY\],
              value: \[#ANY\]
                          }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]  
   dataMaintenance: String(20) enum { ALLOWED; NOT\_ALLOWED; RESTRICTED; DISPLAY\_ONLY; } default #RESTRICTED;    
   @CompatibilityContract: {
   c0: { usageAllowed: false },
   c1: { usageAllowed: true,
         allowedChanges: {
              annotation: \[#CUSTOM\],      
              value : \[#FALSE\_TO\_TRUE\]  
                         }
       },
   c2: { usageAllowed: true,
         allowedChanges: {
              annotation: \[#CUSTOM\],      
              value : \[#FALSE\_TO\_TRUE\]  
                         }
       }
   }
   @MetadataExtension.usageAllowed: false
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]  
   entityBuffer {
         definitionAllowed : Boolean default true;  
   }
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: true
   @CompatibilityContract.c2.usageAllowed: true
   @Scope:\[#SIMPLE\_TYPE\]
   @MetadataExtension.usageAllowed: false
   typeSpec {
        @CompatibilityContract: {
        c1: { allowedChanges: {
                 annotation: \[#CUSTOM\],
                 value: \[#NONE\]
                            }
          },
        c2: { allowedChanges: {
                 annotation: \[#CUSTOM\],
                  value: \[#NONE\]
                              }
            }
        }      
        conversionExit : String(5);
        @CompatibilityContract: {
        c1: { allowedChanges: {
                 annotation: \[#ANY\],
                 value: \[#ANY\]
                            }
          },
        c2: { allowedChanges: {
                 annotation: \[#ANY\],
                  value: \[#ANY\]
                              }
            }
        }              
        changeDocumentRelevant : Boolean default true;
   }  
};

AccessControl-Annotations   

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations   

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
  annotation {    
    releaseState: String(30) enum {DEPRECATED;};
    successor: String(240);    
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  @API.state:\[#RELEASED\_FOR\_KEY\_USER\_APPS\]
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations   

Obsolete annotations for scopes #VIEW, #TABLE\_FUNCTION.

ClientHandling-Annotations   

@Scope:\[#VIEW, [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c0: {  
        usageAllowed: false
    },
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations   

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
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

@Scope:\[#VIEW, [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c0: {  
        usageAllowed: true,
        allowedChanges: {  
           annotation: \[#ANY\],
           value: \[#ANY\]
        }
    },
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#CUSTOM\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}
@API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations   

@CompatibilityContract: {
    c0: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
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
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_role_annotations.htm), [#ASPECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_as_annotations.htm), [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_accesspolicy.htm),
      [#SERVICE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_service_annos.htm), #SIMPLE\_TYPE, #ENUM\_VALUE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm), #SIMPLE\_TYPE, #ENUM\_VALUE\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations   

@CompatibilityContract: {
    c0.usageAllowed: false,
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; USER\_DATE; USER\_TIMEZONE; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations   

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_role_annotations.htm)\]
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
@API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS, #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations   

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)\]
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
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
  allowExtensions : Boolean default true;
  @Scope:\[#VIEW\]
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
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
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

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations   

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm)\]
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
    ENUM\_VALUE;            
  };

Semantics-Annotations   

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   amount
   {
       currencyCode    : ElementRef;
   };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value: \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
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
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
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
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
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
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   largeObject
   {    
       mimeType : ElementRef;
       fileName : ElementRef;
       @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value:      \[ #ANY \] },  
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value:      \[ #ANY \] } }
       acceptableMimeTypes: array of String(255);
       contentDispositionPreference: String(30) enum { ATTACHMENT;
                                                       INLINE; };
       cacheControl:  
       {    
           maxAge: String( 30 ) enum { SHORT;  
                                       MEDIUM;
                                       LONG;  
                                       VERY\_LONG; };  
       };                                                        
   };
  ...
};