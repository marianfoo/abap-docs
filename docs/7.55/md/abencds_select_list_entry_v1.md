---
title: "CDS DDL - DDIC-based View, SELECT, element"
description: |
  Syntax ...  @element_annot1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm) @element_annot2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm) ... KEY    expose_assoc(htt
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm"
abapFile: "abencds_select_list_entry_v1.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "abencds", "list", "entry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, element

Syntax

... *{* *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm)*\]*
      *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm)*\]*
      ...
        *\[*KEY*\]*   *{* [expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v1.htm)      *\[*AS alias*\]* *}*
              *|* *{* element           *\[*AS alias*\]* *}*
              *|* *{* [path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm).element *\[*AS alias*\]* *}*
              *|* *{* [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm)            AS alias  *}*
              *|* *{* [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v1.htm)          AS alias  *}*
              *|* *{* [session\_variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm)   AS alias  *}*
              *|* *{* [aggr\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm)          AS alias  *}*
              *|* *{* [arith\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm)         AS alias  *}*
              *|* *{* [builtin\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v1.htm)       AS alias  *}*
              *|* *{* [case\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm)          AS alias  *}*
              *|* *{* [cast\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v1.htm)          AS alias  *}*
      *\[*[@<element\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm)*\]*
      *\[*[@<element\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm)*\]*
      ... *}*
  *|* *{* $EXTENSION.\* *}* ...

Effect

Defines an element of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The names of the elements in a SELECT list must be unique and they are in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm) of the view.

Alternative 1

... expose\_assoc*|*element*|*path\_expr*|*literal*|*parameter*|*...

Additions:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies individual elements in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

-   [expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v1.htm) exposes a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"), a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry"), or a [CDS to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") using a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm). If a CDS association with a [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v1.htm) cds\_cond is exposed, an alternative element name alias with AS must be defined. Otherwise, an alternative element name can be defined.

-   When the name element is specified directly, an element of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) of the current CDS view is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (.). AS can be used to define an alternative element name alias.

-   [path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm).element specifies an element element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path expression [path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm). The element defined in this way is part of the result set of the CDS view, a field of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"), and a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm), the element name is defined by the name of the element named by the path expression.

-   [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) can be used to declare a literal. AS must be used to define an alternative element name alias. The literal can be prefixed with the name of a domain.

-   [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v1.htm) can be used to specify a parameter from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm). If AS is used, an alternative element name alias must be defined, which cannot be the name pname of the parameter.

-   [session\_variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm) can be used to specify a session variable. AS must be used to define an alternative element name alias.

-   [aggr\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), [arith\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm), [builtin\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v1.htm), and [case\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions, and case distinctions. The expressions and functions are evaluated by the database system when the CDS view is accessed. An alternative element name alias must be defined with the keyword AS, unless there is a [name list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm).

Elements with the type CHAR can have a maximum of 1333 characters. Elements with the type LRAW or LCHR must be at the end of the view. Only one such element is allowed per view. Furthermore, a field of type INT2 or INT4 must stand directly in front of such an element, representing the maximum length of the element.

Example

SELECT list with all possible elements.

@AbapCatalog.sqlViewName: '...'
define view ...
  with parameters
    p\_delay :abap.int4
  as select from
    spfli
    association to scarr as \_scarr on
      \_scarr.carrid = spfli.carrid
    {
      carrid,
      \_scarr.carrname,
      '...'                                   as text,
      :p\_delay                                as delay,
      $session.user                           as usr,
      count( \* )                              as cnt,
      fltime + :p\_delay                       as fltime\_delayed,
      concat(concat('"',\_scarr.carrname),'"') as carrname\_quoted,
      case when fltime < 60  then 'short'
           when fltime > 300 then 'long'
           else 'medium'
      end                                     as duration,
      cast(connid as int4)                    as connid\_number
    }
    group by
      carrid,
      connid,
      \_scarr.carrname,
      fltime

Addition 1

... @element\_annot ... @<element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm) or after the element using [@<element\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm).

Hints

-   An annotation can be used to assign further technical and semantic attributes to an element for evaluation by the ABAP runtime environment. [Framework-specific annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") can be used to give the element specific semantic attributes that are evaluated by other SAP frameworks.

-   With respect to the element annotations, publications of a CDS association [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v1.htm) are handled like any regular element. When a CDS association defined in a different CDS view is exposed, the annotations of preceding publications are inherited when [annotations are evaluated](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"). Those elements of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm).

-   In implicit [access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

By default, the key elements of the CDS entity are only used to document the semantics of the data model. The addition KEY doesn't have any effect when the CDS view is activated and when other accesses are performed during program executions.

The default setting can be overridden using the view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm):

-   If the value true is specified for this annotation, the key elements defined using KEY are also used as keys of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry").

-   If this annotation is not specified or specified with the value false, the key elements defined using KEY don't affect the key of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). Like in [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_view_glosry.htm "Glossary Entry") in ABAP Dictionary, the key fields of the CDS-managed DDIC view are derived implicitly from the key fields of the basis tables and the join conditions. If this is not possible, all fields of the DDIC database view are key fields.

Hints

-   For [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_buffering.htm), the key fields of the CDS-managed DDIC view are always the decisive key fields.

-   In the syntax check in ABAP SQL, the key elements used depend on whether the name of the CDS entity or the name of the CDS-managed DDIC view is specified (with the latter being [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_cds_obsolete.htm)).
    

Addition 3

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm). The view field is created under the alternative element name in the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). Accordingly, the alternative element name must comply with the rules for names of view fields of [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm), as well as the general naming rules for [names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm): This means that it must also meet the following requirements:

-   The naming conventions for [component names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_tech.htm) of [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) in ABAP Dictionary

-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table TRESE.

This is only checked, however, if there is no explicit [name list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm) that overrides the alternative element names.

Alternative element names can be used in the current CDS view to grant unique names for identically named elements from different entities of the data source. When the current CDS view is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the CDS view, with one exception: alternative element names can be specified directly or after $projection in the ON condition of a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry").

Hint

In particular, an alternative element name cannot be used as the operand of an [expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm).

Alternative 2

... $EXTENSION.\*

Effect

Specifies all elements of an [enhancement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm) in the enhancement concept for dictionary objects. If specified, $EXTENSION.\* inserts (in this place) all fields of all [customizing includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_customizing_includes.htm), [append structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm), and [DDIC append views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_views.htm) that exist in the current system for the DDIC database tables or [DDIC views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm) and which occur as a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) in the current CDS view. $EXTENSION.\* is ignored for CDS views used as a data source and extended using [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm).

If specified, $EXTENSION.\* is applied to the current CDS view only. It is not applied to other CDS views in whose data source the current CDS view is used or to CDS views in the data source of the current CDS view.

$EXTENSION.\* cannot be specified if aggregate expressions [aggr\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm) occur in the current SELECT list or if the current CDS view is a union set created using [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_union_v1.htm).

Hints

-   $EXTENSION.\* is specified independently of when an enhancement is made. It is also applied when a DDIC database table or a DDIC view is enhanced only after the activation of the CDS view.

-   The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm) can be used to extend the current CDS view.

-   If the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a CDS view extended using [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm) is specified as a data source, $EXTENSION.\* (id specified) includes the fields of the generated [append view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_view_glosry.htm "Glossary Entry").

Example

The data source of the CDS view sales\_order is an inner join of the DDIC database tables snwd\_bpa and snwd\_so and contains three directly defined elements sales\_order\_id, business\_partner\_id, and company\_name and (because $EXTENSION.\* is specified) all fields that exist due to enhancements in the DDIC database tables snwd\_bpa and snwd\_so. The alternative name partner is defined for the database snwd\_bpa and is used in the ON condition. The names of the elements sales\_order\_id and business\_partner\_id are alternative element names. The element sales\_order\_id is defined as a key element.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_bpa as partner
    inner join
      snwd\_so on partner.node\_key = snwd\_so.buyer\_guid
  { key so\_id as sales\_order\_id,
        bp\_id as business\_partner\_id,
        company\_name, //from snwd\_bpa
        $extension.\* }

Example

The following view accesses the CDS view DEMO\_CDS\_ORIGINAL\_VIEW, which is extended in the example for [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm). $EXTENSION.\* is ignored, if specified.

@AbapCatalog.sqlViewName: 'DEMOCDSEXT1'
define view demo\_cds\_extension1
   as select from
    demo\_cds\_original\_view
    
    {
      carrier,
      $extension.\*
    }

The following view, on the other hand, accesses the CDS-managed DDIC view DEMO\_CDS\_ORIG of DEMO\_CDS\_ORIGINAL\_VIEW. If specified, $EXTENSION.\* includes both fields of the DDIC append view that extends the DDIC database view.

@AbapCatalog.sqlViewName: 'DEMOCDSEXT2'
define view demo\_cds\_extension2
   as select from
    demo\_cds\_orig  
    
    {
      carrier,
      $extension.\*
    }

Continue
[CDS DDL - DDIC-based View, SELECT, element\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_annotations_v1.htm)
[CDS DDL - DDIC-based View, SELECT, expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v1.htm)