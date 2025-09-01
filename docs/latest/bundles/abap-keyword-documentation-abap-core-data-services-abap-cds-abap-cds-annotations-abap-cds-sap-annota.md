# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm)
- [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_ddla.htm)
- [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_tables.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.870Z

---

### abencds_annotations_abap.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20ABAP%20Annotations%2C%20ABENCDS_ANNOTATIONS_ABAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime framework. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Hint

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))



**📖 Source**: [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm)

### abencds_annotations_abap_ddla.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_ddla.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20ABAP%20Annotation%20Definitions%2C%20ABENCDS_ANNOTATIONS_ABAP_DDLA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).
-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1-------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)
-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3-------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)
-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5-------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)
-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7-------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)
-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9-------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)
-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11-------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)
-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13-------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)
-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15-------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)
-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---hint--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations-----Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @Scope: \[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#SERVICE](javascript:call_link\('abencds_define_service_annos.htm'\))\]
   extensibility : {  
      extensible : Boolean default true;
      @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
      elementSuffix: String(3);
      @CompatibilityContract: {
        c0: {
            allowedChanges: {
                annotation: \[#NONE\],
                value: \[#CUSTOM\]  
            }
        }
      }
      @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
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
      @Scope: \[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
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
      @API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS\]
      preferredAssociationOnElements: array of ElementRef;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope:\[#VIEW, [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c0.usageAllowed: false
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
   @Scope:\[#VIEW, [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
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
   @Scope:\[[#SIMPLE\_TYPE](javascript:call_link\('abencds_simple_type_anno.htm'\))\]
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

@Scope:\[#VIEW, [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
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

@Scope:\[#VIEW, [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
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
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), [#ASPECT](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\)), [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)),
      [#SERVICE](javascript:call_link\('abencds_define_service_annos.htm'\)), [#SIMPLE\_TYPE](javascript:call_link\('abencds_simple_type_anno.htm'\)), #ENUM\_VALUE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)), [#SIMPLE\_TYPE](javascript:call_link\('abencds_simple_type_anno.htm'\)), #ENUM\_VALUE\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[[#SIMPLE\_TYPE](javascript:call_link\('abencds_simple_type_anno.htm'\))\]
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
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; USER\_DATE; USER\_TIMEZONE; };
   sql
   {
      @Scope: \[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
      passValue : Boolean default true;
      @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
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
@API.state: \[#RELEASED\_FOR\_KEY\_USER\_APPS, #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
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
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
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
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  lifecycle : {
    status : String(30) enum { DEPRECATED; };
    successor : String(240);
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
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
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
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] },
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #CUSTOM \],
         allowedChanges.value:      \[ #NONE \] } }
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS \]
   unitOfMeasure       : Boolean default true;
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#SIMPLE\_TYPE](javascript:call_link\('abencds_simple_type_anno.htm'\))\]
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



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_tables.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20ABAP%20Annotation%20Syntax%2C%20ABENCDS_ANNOTATIONS_ABAP_TABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation is [released as an API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1-------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)
-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3-------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)
-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5-------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)
-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7-------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)
-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9-------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)
-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11-------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)
-   [Metadata-Annotations](#abencds-annotations-abap-tables-13-------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)
-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15-------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)
-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

Hint

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas of DDIC based views

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering of DDIC based views

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type of DDIC based views

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dataMaintenance

CDS entity, specifies how the data contents of the entity can be maintained

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))
[View Entity](javascript:call_link\('abencds_view_entity_anno.htm'\))
[Projection View](javascript:call_link\('abencds_proj_view_annotations.htm'\))

String(20)

#ALLOWED
#DISPLAY\_ONLY
#NOT\_ALLOWED
#RESTRICTED

#RESTRICTED

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

Obsolete: Replaced by Consumption.dbHints\[ \]

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.entityBuffer.definitionAllowed

Table buffering, enables and disables buffering of view entities

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.entityBuffer.propagationAllowed

undocumented

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.allowNewCompositions

Can be used to explicitly allow node extensibility by means of CDS compositions.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.allowNewDatasources

Defines whether a CDS view entity extension is allowed to use new data sources, particularly newly defined associations.

View

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.dataSources\[ \]

Defines an allowlist for stable alias names of data sources and locally defined associations to be used in extensions.

View

LocalDefinitionRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.elementSuffix

Defines an element suffix which must be used for fields and associations when extending a released API.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

String(3)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.extensible

CDS entity, controls CDS entity extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[Service Definition](javascript:call_link\('abencds_define_service_annos.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.quota.maximumBytes

Defines the maximum number of bytes that can be added to a released API via extensions.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Integer

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.extensibility.quota.maximumFields

Defines the maximum number of fields that can be added to a released API via extensions.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Integer

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

Obsolete: CDS view, specifies the definition of the key fields in the associated database view

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.typeSpec.changeDocumentRelevant

Specifies whether a CDS type is relevant for writing change documents.

[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.typeSpec.conversionExit

If specified, connects the CDS type to a conversion exit.

[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

String(5)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))
[View Entity](javascript:call_link\('abencds_view_entity_anno.htm'\))
[Projection View](javascript:call_link\('abencds_proj_view_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))
[View Entity](javascript:call_link\('abencds_view_entity_anno.htm'\))
[Projection View](javascript:call_link\('abencds_proj_view_annotations.htm'\))

String(20)

#CHECK
#MANDATORY
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#NOT\_REQUIRED

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DECOMMISSIONED
#DEPRECATED

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

ClientDependent

Obsolete: Specifies client dependency and how clients are handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))
[View Entity](javascript:call_link\('abencds_view_entity_anno.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS

EndUserText-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

EndUserText.heading

Texts, implicit annotation for data element or type header

[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

String(55)

\-

\-

X

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Aspect](javascript:call_link\('abencds_f1_dcl_as_annotations.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
Enum Value
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))
[Service Definition](javascript:call_link\('abencds_define_service_annos.htm'\))
[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
Enum Value
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.sql.passValueForClient

Defines pass-by-value of host variables in comparisons in ABAP SQL for client fields.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

NOT\_RELEASED

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER
#USER\_DATE
#USER\_TIMEZONE

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[DDIC based View](javascript:call_link\('abencds_define_view_v1.htm'\))
[View Entity](javascript:call_link\('abencds_view_entity_anno.htm'\))
[Projection View](javascript:call_link\('abencds_proj_view_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.lifecycle.status

undocumented

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

Metadata.lifecycle.successor

undocumented

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(240)

\-

\-

\-

\-

\-

MetadataExtension-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the outsourcing of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

ObjectModel-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

ObjectModel.query.implementedBy

Specifies the ABAP class where a CDS custom entity is implemented

[Custom Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.upperCase

Specifies whether a CDS simple type supports uppercase letters only or also lowercase letters.

[Simple Type](javascript:call_link\('abencds_simple_type_anno.htm'\))

Boolean

\-

true

\-

\-

\-

ObjectModel.usageType.dataClass

Specifies the data type of the CDS view

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance expected by the consumer of the CDS view.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))

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

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.usageType.sizeCategory

Specifies the size of the data record that needs to be searched to return the result.

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ObjectModel.virtualElementCalculatedBy

Specifies where a virtual element is implemented

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(255)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Scope\[ \]-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition, defines the scope in which an annotation can be specified

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#ENUM\_VALUE
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations   

Annotation

Meaning

Scope

Type

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasureIsoCode

undocumented

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasureSapCode

undocumented

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_KEY\_USER\_APPS
RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM
