  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) → 

ABAP CDS - SELECT, element

Syntax

... *{* *\[*[@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      ...
        *\[*KEY*\]* *{* *{* [association](javascript:call_link\('abencds_f1_select_list_association.htm'\))
                *|* element
                *|* [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element *\[*AS alias*\]* *}*
              *|* *{* [literal](javascript:call_link\('abencds_f1_literal.htm'\))
                *|* [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))
                *|* [session\_variable](javascript:call_link\('abencds_f1_session_variable.htm'\))
                *|* [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\))
                *|* [arith\_expr](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))
                *|* [builtin\_func](javascript:call_link\('abencds_f1_builtin_functions.htm'\))
                *|* [case\_expr](javascript:call_link\('abencds_f1_case_expression.htm'\))
                *|* [cast\_expr](javascript:call_link\('abencds_f1_cast_expression.htm'\)) AS alias *}*
      *\[*[@<element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      *\[*[@<element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      ... *}*
  *|* *{* $EXTENSION.\* *}* *}*  ...

Alternatives:

[1\. ... association*|*element*|*path\_expr*|*literal*|*parameter*|*...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... $EXTENSION.\*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines an element of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The names of the elements in a SELECT list must be unique and must be in the same namespace as the [parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of the view.

Alternative 1

... association*|*element*|*path\_expr*|*literal*|*parameter*|*...

Extras:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies individual elements in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   [association](javascript:call_link\('abencds_f1_select_list_association.htm'\)) publishes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") using a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)). If a CDS association with a filter condition [cond\_expr](javascript:call_link\('abencds_path_expression_attr.htm'\)) is published, an alternative element name alias with AS must be defined. Otherwise, an alternative element name can be defined.

-   When the name element is specified directly, an element of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (.). AS can be used to define an alternative element name alias.

-   [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element specifies an element element of the target data source of the last CDS association of the path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)). The element defined in this way is part of the results set of the CDS view, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"), and a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the element named by the path expression.

-   [literal](javascript:call_link\('abencds_f1_literal.htm'\)) can be used to declare a literal. AS must be used to define an alternative element name alias. The literal can be prefixed with the name of a domain.

-   [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be used to specify a parameter from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)). If AS is used, an alternative element name alias must be defined, which cannot be the name pname of the parameter.

-   [session\_variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be used to specify a session variable. AS must be used to define an alternative element name alias.

-   [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [arith\_expr](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [builtin\_func](javascript:call_link\('abencds_f1_builtin_functions.htm'\)), and [case\_exp](javascript:call_link\('abencds_f1_case_expression.htm'\)) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions in the database, and case distinctions. The expressions and functions are evaluated when the CDS view is accessed in the database system. If AS is used, an alternative element name alias has to be defined, unless there is a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)).

Elements with the type CHAR can have a maximum of 1333 characters. Elements with the type LRAW or LCHR must be at the end of the view. Only one such element is allowed per view. Furthermore, an element of this type must be prefixed directly with a field of the type INT2 or INT4 (for the maximum length of the field).

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

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)) or after the element using [@<element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)).

Notes

-   An annotation can be used to assign further technical and semantic attributes to an element in ABAP Dictionary. [Framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   With respect to the element annotations, publications of a CDS association [association](javascript:call_link\('abencds_f1_select_list_association.htm'\)) are handled like any regular element. When an CDS association defined in a different CDS view is published, the annotations of preceding publications are inherited when [annotations are evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Those elements of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

-   In implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the results set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

By default, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS view is activated and when other accesses are performed in program executions.

The default setting can be overridden using the view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)):

-   If the value true is specified for this annotation, the key elements defined using KEY are also used as keys of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   If this annotation is not specified or specified with the value false, the key elements defined using KEY are ignored by the key of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Like in classic [database views](javascript:call_link\('abenddic_classical_views.htm'\)), the key fields of the CDS database view are derived implicitly from the key fields of the basis tables and the join conditions. If this is not possible, all fields of the database view are key fields.

Notes

-   In [table buffering](javascript:call_link\('abencds_sap_puffer.htm'\)), the key fields of the CDS database view are always the decisive key fields.

-   In the syntax check in ABAP SQL, the key elements used depend on whether the name of the CDS entity is specified or the CDS database view (with the latter being [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\))).
    

Addition 3

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). The view field is created under the alternative element name in the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Accordingly, the alternative element name must comply with the rules for names of view fields of [database views](javascript:call_link\('abenddic_database_views.htm'\)), as well as the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)): which means that it must also meet the

-   naming conventions for [component names](javascript:call_link\('abenddic_structures_tech.htm'\)) of [structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary and

-   cannot be a reserved component name. The reserved names that cannot be used are in the database table TRESE.

This is only checked, however, if there is no explicit [name list](javascript:call_link\('abencds_f1_name_list.htm'\)) that overrides the alternative element names.

Alternative element names can be used in the current CDS view to grant unique names for identically named elements from different entities of the data source. When the current CDS view is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the CDS view, with one exception: alternative element names can be specified directly or after $projection in the ON condition of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

Note

In particular, an alternative element name cannot be used as the operand of an [expression](javascript:call_link\('abencds_operands_and_expressions.htm'\)).

Alternative 2

... $EXTENSION.\*

Effect

Specifies all elements of an [enhancement](javascript:call_link\('abenddic_enhancements.htm'\)) of the enhancement concept for classic objects in ABAP Dictionary. If specified, $EXTENSION.\* inserts (in this place) all fields of all [customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)), [append structures](javascript:call_link\('abenddic_append_structures.htm'\)), and [append views](javascript:call_link\('abenddic_append_views.htm'\)) that exist in the current system for the database tables or [classic views](javascript:call_link\('abenddic_classical_views.htm'\)) and which occur as a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) in the current CDS view. $EXTENSION.\* is ignored for CDS views used as a data source and extended using [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)).

If specified, $EXTENSION.\* is applied to the current CDS view only. It is not applied to other CDS views in whose data source the current CDS view is used or to CDS views in the data source of the current CDS view.

$EXTENSION.\* cannot be specified if aggregate expressions [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) occur in the current SELECT list or if the current CDS view is a union set created using [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Notes

-   $EXTENSION.\* is specified independently of when an enhancement is made. It is also applied when a database table or a view is enhanced only after the activation of the CDS view.

-   The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) can be used to extend the current CDS view.

-   If the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a CDS view extended using [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) is specified as a data source, $EXTENSION.\* (id specified) includes the fields of the generated [append view](javascript:call_link\('abenappend_view_glosry.htm'\) "Glossary Entry").

Example

The data source of the CDS view sales\_order is an inner join of the database tables snwd\_bpa and snwd\_so and contains three directly defined elements sales\_order\_id, business\_partner\_id, and company\_name and (because $EXTENSION.\* is specified) all fields that exist due to enhancements in the database tables snwd\_bpa and snwd\_so. The alternative name partner is defined for the database snwd\_bpa and is used in the ON condition. The names of the elements sales\_order\_id and business\_partner\_id are alternative element names. The element sales\_order\_id is defined as a key element.

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

The following view accesses the CDS view DEMO\_CDS\_ORIGINAL\_VIEW, which is extended in the example for [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)). $EXTENSION.\* is ignored, if specified.

@AbapCatalog.sqlViewName: 'DEMOCDSEXT1'
define view demo\_cds\_extension1
   as select from
    demo\_cds\_original\_view
    
    {
      carrier,
      $extension.\*
    }

The following view, on the other hand, accesses the CDS database view DEMO\_CDS\_ORIG of DEMO\_CDS\_ORIGINAL\_VIEW. If specified, $EXTENSION.\* includes both fields of the append view that extends the database view.

@AbapCatalog.sqlViewName: 'DEMOCDSEXT2'
define view demo\_cds\_extension2
   as select from
    demo\_cds\_orig  
    
    {
      carrier,
      $extension.\*
    }

Continue
[ABAP CDS - SELECT, element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\))
[ABAP CDS - SELECT, association](javascript:call_link\('abencds_f1_select_list_association.htm'\))