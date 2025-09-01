  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shows the [CDS annotation definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in all [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_scopes.htm) defined after [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_1)

-   [AbapCatalog-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_3)

-   [ClientDependent-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientHandling-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_5)

-   [DataAging-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [EndUserText-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_7)

-   [Environment-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [LanguageDependency-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_9)

-   [MappingRole-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [Metadata-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_11)

-   [MetadataExtension-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Scope\[ \]-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_13)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

Note

See also [ABAP Annotation Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_tables.htm).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)\]
annotation AbapCatalog
{
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
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
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   sqlViewName : String(16);
   preserveKey : Boolean default true;
   compiler
   {
      compareFilter : Boolean default true;
   };
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      setChange : String(30);    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)\]
   sqlViewAppendName : String(16);
};

AccessControl-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)\]
annotation AccessControl
{
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   ...
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm)\]
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_role_annotations.htm)\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   heading : String(55);
};

Environment-Annotations

annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_role_annotations.htm)\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)\]
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)\]
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

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ANNOTATION;            
    ANNOTATE;              
    PARAMETER;            
    ELEMENT;              
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
   currencyCode        : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm)\]
   unitOfMeasure       : Boolean default true;  
  ...
};