# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm)
- [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_ddla.htm)
- [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_tables.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.354Z

---

### abencds_annotations_abap.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))



**📖 Source**: [abencds_annotations_abap.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm)

### abencds_annotations_abap_ddla.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_ddla.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------clientdependent-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientHandling-Annotations](#abencds-annotations-abap-ddla-5--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-7--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-9--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-11--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-13--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   sqlViewAppendName : String(16);
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
annotation AccessControl
{
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   ...
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   heading : String(55);
};

Environment-Annotations

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
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
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

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   currencyCode        : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   unitOfMeasure       : Boolean default true;  
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap_tables.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------clientdependent-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientHandling-Annotations](#abencds-annotations-abap-tables-5--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-7--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-9--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-11--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-13--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

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

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

AbapCatalog.viewEnhancementCategory\[ \]

CDS view (specifies how the view can be extended using CDS view extensions)

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

AccessControl.authorizationCheck

CDS access control (specifies implicit access control)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

EndUserText.label

Texts, short text connected to translation

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(60)

\-

\-

X

X

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Environment.sql.passValue

currently only evaluated by SADL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Metadata.allowExtensions

Metadata, controls extensibility via metadata extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata (specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE)

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

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

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ANNOTATE
#ANNOTATION
#ELEMENT
#EXTEND\_VIEW
#PARAMETER
#ROLE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-
