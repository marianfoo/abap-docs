---
title: "ABAP CDS - ABAP Annotation Definitions"
description: |
  The following DDLA source code(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddla_source_code_glosry.htm 'Glossary Entry') shows the CDS annotation definitions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm 'Glossary Entry
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_ddla.htm"
abapFile: "abencds_annotations_abap_ddla.htm"
keywords: ["update", "do", "if", "case", "try", "data", "types", "abencds", "annotations", "abap", "ddla"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20ABAP%20Annotation%20Definitions%2C%20ABENCDS_ANNOTATIONS_ABAP_DDLA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shows the [CDS annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in all [ABAP annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation.htm).
-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_scopes.htm) defined after [@Scope](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1-------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)
-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3-------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)
-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5-------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)
-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7-------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)
-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9-------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)
-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11-------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)
-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13-------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)
-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15-------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)
-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---hint--see-also--abap-annotation-syntax--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-annotations-abap-tables-htm----abapannotation-annotations-----Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
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
   @Scope: \[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm), [#SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)\]
   extensibility : {  
      extensible : Boolean default true;
      @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
      elementSuffix: String(3);
      @CompatibilityContract: {
        c0: {
            allowedChanges: {
                annotation: \[#NONE\],
                value: \[#CUSTOM\]  
            }
        }
      }
      @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
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
      @Scope: \[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
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
            annotation: \[#REMOVE\],
            value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c1: {
          usageAllowed: true,
          allowedChanges: {
            annotation: \[#REMOVE\],
            value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
            annotation: \[#REMOVE\],
            value: \[#FALSE\_TO\_TRUE\]
          }
      }
   }
   @API.state:\[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]
   @Metadata.lifecycle.status: #DEPRECATED
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
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
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
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
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
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope:\[#VIEW, [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)\]
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
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
   @Scope:\[#VIEW, [#HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hierarchy_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_function_annotations.htm)\]
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
   @MetadataExtension.usageAllowed: false
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]  
   entityBuffer {
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
         definitionAllowed : Boolean default true;  
         @CompatibilityContract: {
         c0: { usageAllowed: true,
              allowedChanges: {
                  annotation: \[#ADD\],
                  value : \[#FALSE\_TO\_TRUE\]
                              }
             },
        c1: { usageAllowed: true,
              allowedChanges: {
                   annotation: \[#ANY\],
                   value : \[#ANY\]
                              }
            },
        c2: { usageAllowed: true,
              allowedChanges: {
                  annotation: \[#ANY\],
                  value : \[#ANY\]
                              }
            }
        }
        propagationAllowed : Boolean default true;
   }
   @CompatibilityContract.c0.usageAllowed: true
   @CompatibilityContract.c1.usageAllowed: true
   @CompatibilityContract.c2.usageAllowed: true
   @Scope:\[[#SIMPLE\_TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)\]
   @MetadataExtension.usageAllowed: false
   typeSpec {
        @CompatibilityContract: {
        c0: { allowedChanges: {
                 annotation: \[#ANY\],
                 value: \[#ANY\]
                            }
          },
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
        c0: { allowedChanges: {
                 annotation: \[#ANY\],
                 value: \[#ANY\]
                            }
          },
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

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations   

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c0.usageAllowed: true
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  @API.state:\[#RELEASED\_FOR\_KEY\_USER\_APPS\]
  element {    
    @CompatibilityContract.c0.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;DECOMMISSIONED;};
    @CompatibilityContract.c0.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations   

Obsolete annotations for scopes #VIEW, #TABLE\_FUNCTION.

ClientHandling-Annotations   

@Scope:\[#VIEW, [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_function_annotations.htm)\]
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

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
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

@Scope:\[#VIEW, [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_function_annotations.htm)\]
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
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_role_annotations.htm), [#ASPECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_as_annotations.htm), [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_accesspolicy.htm),
      [#SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm), [#SIMPLE\_TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm), #ENUM\_VALUE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_metadata_ext_annos.htm), [#SIMPLE\_TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm), #ENUM\_VALUE\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[[#SIMPLE\_TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)\]
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
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; USER\_DATE; USER\_TIMEZONE; };
   sql
   {
      @Scope: \[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm),[#PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm)\]
      passValue : Boolean default true;
      @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
      @CompatibilityContract:{
        c0: {   usageAllowed:   true,
                allowedChanges: {   annotation: \[#ANY\],
                                    value:      \[#ANY\]
                                 }        
            },
        c1: {   usageAllowed:   true,
                allowedChanges: {   annotation: \[#ANY\],
                                    value:      \[#ANY\]
                                }        
            },
        c2: {   usageAllowed:   true,
                allowedChanges: {   annotation: \[#ANY\],
                                    value:      \[#ANY\]
                                }  
            }
      }    
      @API.state: \[#NOT\_RELEASED\]
      passValueForClient : Boolean default true;      
   };
};

LanguageDependency-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations   

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_role_annotations.htm)\]
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
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)\]
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
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_metadata_ext_annos.htm)\]
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
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
  lifecycle : {
    status : String(30) enum { DEPRECATED; };
    successor : String(240);
  };    
};

MetadataExtension-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations   

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations   

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm)\]
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
@CompatibilityContract:{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   amount
   {
       currencyCode    : ElementRef;
   };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
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
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   unitOfMeasure       : Boolean default true;
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm), [#SIMPLE\_TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
   booleanIndicator    : Boolean default true;
  ...
};