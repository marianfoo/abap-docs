  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, select\_list](javascript:call_link\('abencds_select_list_v2.htm'\)) → 

CDS DDL - CDS View Entity, SELECT, element

Syntax

... *{* *\[*[@element\_annot1](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
      *\[*[@element\_annot2](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
      ...
        *\[*KEY*\]*   *{* element           *\[*AS alias*\]* *}*
              *|* *{* [expose\_assoc](javascript:call_link\('abencds_select_list_association_v2.htm'\))      *\[*AS alias*\]* *}*
              *|* *{* [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element *\[*AS alias*\]* *}*
              *|* *{* [literal](javascript:call_link\('abencds_literal_v2.htm'\))            AS alias  *}*
              *|* *{* [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))          AS alias  *}*
              *|* *{* [session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\))   AS alias  *}*
              *|* *{* [aggr\_expr](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))          AS alias  *}*
              *|* *{* [arith\_expr](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))         AS alias  *}*
              *|* *{* [builtin\_func](javascript:call_link\('abencds_builtin_functions_v2.htm'\))       AS alias  *}*
              *|* *{* [case\_expr](javascript:call_link\('abencds_case_expression_v2.htm'\))          AS alias  *}*
              *|* *{* [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\))          AS alias  *}*
                  ...
    *}*

Effect

Defines an element of a [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The names of the elements in a SELECT list must be unique and they are in the same namespace as the [parameters](javascript:call_link\('abencds_parameter_list_v2.htm'\)) of the view.

Additions:

[1\. ... @element\_annot ...](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies individual elements in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

-   When the name element is specified, an element of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (.). AS can be used to define an alternative element name alias.
    If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v2.htm'\)) by using one or multiple join expressions, then all elements in the SELECT list must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

-   [expose\_assoc](javascript:call_link\('abencds_select_list_association_v2.htm'\)) exposes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") using a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)). If a CDS association with a [filter condition](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) cds\_cond is exposed, an alternative element name alias with AS must be defined. Otherwise, an alternative element name can be defined.

-   [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element specifies an element element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association of the path expression [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)). The element defined in this way is part of the result set of the CDS view entity and a component of a type defined in ABAP with respect to the CDS view entity. If no alternative element name alias is defined, the element name is defined by the name of the element named by the path expression.

-   [literal](javascript:call_link\('abencds_literal_v2.htm'\)) can be used to declare a literal. AS must be used to define an alternative element name alias.

-   [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)) can be used to specify a parameter from the [parameter list](javascript:call_link\('abencds_parameter_list_v2.htm'\)). An alternative element name using the keyword AS must be defined, and it cannot be the name pname of the parameter.

-   [session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\)) can be used to specify a session variable. AS must be used to define an alternative element name alias.

-   [aggr\_expr](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [arith\_expr](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [builtin\_func](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), [case\_exp](javascript:call_link\('abencds_case_expression_v2.htm'\)), and [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\)) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions, case distinctions, and cast expressions. The expressions and functions are evaluated by the database system when the CDS view entity is accessed. An alternative element name alias must be defined with the keyword AS.

Elements with the type CHAR can have a maximum of 1333 characters. Elements with the type LRAW or LCHR must be at the end of the view. Only one such element is allowed per view. Furthermore, a field of type INT2 or INT4 must stand directly in front of such an element, representing the maximum length of the element.

Example

SELECT list with all possible elements.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SALES\_ORDER\_VE
  with parameters
    p\_delay : abap.int4
  as select from
    spfli
    association \[0..1\] to scarr as \_scarr
      on \_scarr.carrid = spfli.carrid
    {
      key carrid,
          \_scarr.carrname,
          'abc'                                     as literal,
          $parameters.p\_delay                       as parameterExample,
          $session.user\_date                        as currentDate,
          count(\*)                                  as cnt,
          fltime + $parameters.p\_delay              as fltime\_delayed,
          concat(concat('"', \_scarr.carrname), '"') as carrname\_quoted,
          case when fltime < 60 then 'short'
          when fltime > 60 then 'long'
          else 'medium'
          end                                       as duration,
          cast(connid as int4)                      as connid\_number
    }
    group by
      carrid,
      \_scarr.carrname,
      fltime,
      connid

Addition 1

... @element\_annot ...

Effect

Specifies annotations for the element. The annotations must be specified before the element using @element\_annot. All possible element annotations are listed in topic [element annotations](javascript:call_link\('abencds_element_annotations_v2.htm'\)).

Hints

-   An annotation can be used to assign further technical and semantic attributes to an element for evaluation by the ABAP runtime environment. [Framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes that are evaluated by other SAP frameworks.

-   With respect to the element annotations, publications of a CDS association [association](javascript:call_link\('abencds_select_list_association_v2.htm'\)) are handled like any regular element. When a CDS association defined in a different CDS view is exposed, the annotations of preceding publications are inherited when [annotations are evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). All key elements must be placed without gaps at the start of the SELECT list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

-   In implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

Apart from that, the key elements of the CDS entity are mainly used to document the semantics of the data model. The addition KEY doesn't have any effect when the CDS view entity is activated and when other accesses are performed during program executions.

A CDS view entity without any composition or to-parent association can be defined without any key fields.

If the CDS view entity defines any composition or to-parent association, then it must contain at least one key field at the start of the SELECT list.

Addition 3

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)). The alternative element name must comply with the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)): This means that it must also meet the following requirements:

-   The naming conventions for [component names](javascript:call_link\('abenddic_structures_tech.htm'\)) of [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary

-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table TRESE.

Alternative element names can be used in the current CDS view entity to grant unique names for identically named elements from different entities of the data source. When the current CDS view entity is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the view entity, with one exception: alternative element names can be specified after $projection in the ON condition of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

Hint

In particular, an alternative element name cannot be used as the operand of an [expression](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)).

Continue
[CDS DDL - CDS View Entity, SELECT, element\_annot](javascript:call_link\('abencds_element_annotations_v2.htm'\))
[CDS DDL - CDS View Entity, SELECT, expose\_assoc](javascript:call_link\('abencds_select_list_association_v2.htm'\))