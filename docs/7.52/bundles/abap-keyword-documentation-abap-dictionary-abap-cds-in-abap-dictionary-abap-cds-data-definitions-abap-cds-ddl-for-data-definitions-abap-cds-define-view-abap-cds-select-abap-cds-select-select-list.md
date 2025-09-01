# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, select_list

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_select_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)
- [abencds_f1_select_list_entry.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)
- [abencds_f1_element_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.365Z

---

### abencds_f1_select_list.htm

> **📖 Official SAP Documentation**: [abencds_f1_select_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) → 

ABAP CDS - SELECT, select\_list

Syntax

... [element1](javascript:call_link\('abencds_f1_select_list_entry.htm'\)), [element2](javascript:call_link\('abencds_f1_select_list_entry.htm'\)), ...
  *|* \* ...

Effect

Defines the elements of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") The elements can be specified as follows:

-   In a comma-separated list, elements can be defined by specifying [element1](javascript:call_link\('abencds_f1_select_list_entry.htm'\)), [element2](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) ...

-   \* can be used to define all fields of the data source of the CDS view as elements and expose associations of the current view. If another CDS view is used as a data source, the associations exposed in its SELECT list are, however, not exposed by the current CDS view. The asterisk \* cannot be specified if the current CDS view contains [joins](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) or [union sets](javascript:call_link\('abencds_f1_union.htm'\)) when the [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) is specified.

The names of the elements of a CDS view must be unique. These are either

-   The names of the elements taken from the data sources

-   Alternative element names specified using [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\))

-   The names specified in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\))

These names are also the names of the view fields of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") and the corresponding [rules](javascript:call_link\('abenddic_database_views.htm'\)) that must be kept.

Example

The following CDS view sales\_order is a view of the database table snwd\_so. Three elements (so\_id, currency\_code, and gross\_amount) are defined for this view.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    { key   so\_id,
          @Semantics.currencyCode
            currency\_code,
          @Semantics.amount.currencyCode: 'currency\_code'
            gross\_amount }

Example

The following CDS view sales\_order is a view of all the fields of the database snwd\_so. Accessing the CDS view has the same effect as when the database itself is accessed.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         { \* }

Continue
[ABAP CDS - SELECT, element](javascript:call_link\('abencds_f1_select_list_entry.htm'\))



**📖 Source**: [abencds_f1_select_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

### abencds_f1_select_list_entry.htm

> **📖 Official SAP Documentation**: [abencds_f1_select_list_entry.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) → 

ABAP CDS - SELECT, element

Syntax

... *{* *\[*[@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      ...
        *\[*KEY*\]* *{* *{* field
                *|* [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) *\[*AS alias*\]* *}*
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

[1\. ... field*|*path\_expr*|*literal*|*parameter*|*...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... $EXTENSION.\*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines an element of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The names of the elements of a SELECT list must be unique.

Alternative 1

... field*|*path\_expr*|*literal*|*parameter*|*...

Extras:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies individual elements.

-   When the name field is specified directly, an element of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (.). AS can be used to define an alternative element name alias.

-   When a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) is specified, two cases arise:

-   If the path expression identifies an element, the target of the path expression is defined as an element. The element is part of the results set of the CDS view, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"), and a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the element named by the path expression.

-   If a path expression is specified that ends with an [association](javascript:call_link\('abencds_f1_association.htm'\)), this association is published for use in other CDS views or in Open SQL. A different CDS view can evaluate the association in its [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)). In the same way, the association can be used in [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in Open SQL. Like every element, an association published in this way is part of the SELECT list and must also be specified in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)). It is not, however, part of the results set, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of the CDS view, or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the association named by the path expression.

AS can be used to define an alternative element name alias.

-   [literal](javascript:call_link\('abencds_f1_literal.htm'\)) can be used to declare a literal. AS must be used to define an alternative element name alias. The literal can be prefixed with the name of a domain.

-   [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be used to specify a parameter from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)). If AS is used, an alternative element name alias must be defined, which cannot be the name pname of the parameter.

-   [session\_variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be used to specify a session variable. AS must be used to define an alternative element name alias.

-   [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [arith\_expr](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [builtin\_func](javascript:call_link\('abencds_f1_builtin_functions.htm'\)), and [case\_exp](javascript:call_link\('abencds_f1_case_expression.htm'\)) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions in the database, and case distinctions. The expressions and functions are evaluated when the CDS view is accessed in the database system. If AS is used, an alternative element name alias has to be defined, unless there is a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)).

If an [association](javascript:call_link\('abencds_f1_association.htm'\)) is published in the SELECT list using a path expression path\_expr, all fields of the source data source that occur in the ON condition must also be specified as elements of the SELECT list. If a path expression contains more than one association, this type of element must be listed as a path expression closed by the field.

Notes

-   When publishing an [association](javascript:call_link\('abencds_f1_association.htm'\)) using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of the target data source to assign start values to the input parameters.

-   That the names of the elements of a SELECT list have to be unique applies in particular also for the publication of an [association](javascript:call_link\('abencds_f1_association.htm'\)) using the path expression path\_expr. There must be not other element with this name. If necessary, AS must be used to define an alternative element name alias for the association.

-   An association can be published multiple times with various alternative element names. This allows you to use different filter conditions [cond\_expr](javascript:call_link\('abencds_path_expression_attr.htm'\)).

-   Special rules apply to the publication of associations in SELECT statements joined with [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Example

The following CDS view opens its own association \_spfli and the association \_sflight published by its target data source demo\_cds\_assoc\_spfli. The fields of the source data source used in the ON conditions of the associations are specified in the SELECT list. In the case of the association published using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid must be used accordingly. The element scarr occurs twice, which means that an alternative element name must be defined using AS.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PUBASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_publish\_assoc
as select from
scarr
association to demo\_cds\_assoc\_spfli as \_spfli on
scarr.carrid = \_spfli.carrid
{
\_spfli,
scarr.carrid as scarr\_carrid,
\_spfli.\_sflight,
\_spfli.carrid,
\_spfli.connid
}    

Addition 1

... @element\_annot ... @<element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)) or after the element using [@<element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)).

Notes

-   An annotation can be used to assign further technical and semantic attributes to an element in ABAP Dictionary. [Framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   With respect to the element annotations, publications of an association using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) ending with an [association](javascript:call_link\('abencds_f1_association.htm'\)) are handled like any regular element. When an association defined in a different CDS view is published, the annotations of preceding publications are inherited when [annotations are evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Those elements of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in Open SQL:

-   By the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

-   In implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the results set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

By default, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS view is activated and when other accesses are performed in program executions.

The default setting can be overridden using the view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)):

-   If the value true is specified for this annotation, the key elements defined using KEY are also used as keys of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   If this annotation is not specified or specified with the value false, the key elements defined using KEY are ignored by the key of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Like in [classic views](javascript:call_link\('abenddic_classical_views.htm'\)), the key fields of the database view are derived implicitly from the key fields of the basis tables and the join conditions. If this is not possible, all fields of the database view are key fields.

Notes

-   In [table buffering](javascript:call_link\('abencds_sap_puffer.htm'\)), the key fields of the CDS database view are always the decisive key fields.

-   In the syntax check in Open SQL, the key elements used depend on whether the name of the CDS entity is specified or the CDS database view (with the latter being [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\))).
    

Addition 3

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). The view field is created under the alternative element name in the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Accordingly, the alternative element name must comply with the rules for names of view fields of [database views](javascript:call_link\('abenddic_database_views.htm'\)), as well as the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)): which means that it must also meet the

-   naming conventions for [component names](javascript:call_link\('abenddic_structures_tech.htm'\)) of [structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary and

-   cannot be a reserved component name. The reserved names that cannot be used are in the database table TRESE.

This is only checked, however, if there is no explicit [name list](javascript:call_link\('abencds_f1_name_list.htm'\)) that overrides the alternative element names.

Alternative element names can be used in the current CDS view to grant unique names for identically named elements from different entities of the data source. When the current CDS view is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the CDS view, with one exception: alternative element names can be specified directly or after $projection in the ON condition of an [association](javascript:call_link\('abencds_f1_association.htm'\)).

Alternative 2

... $EXTENSION.\*

Effect

Specifies all elements of an [enhancement](javascript:call_link\('abenddic_enhancements.htm'\)) of the enhancement concept for classic objects in ABAP Dictionary. If $EXTENSION.\* is specified as an element, all fields that occur in an enhancement of a database table or a [classic view](javascript:call_link\('abenddic_classical_views.htm'\)) in ABAP Dictionary in the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) become elements of the current CDS view automatically.

If $EXTENSION.\* is specified, it works only for the current CDS view. It is not applied to other CDS views in whose data source the current CDS view is used or to CDS views in the data source of the current CDS view.

$EXTENSION.\* cannot be specified if aggregate expressions [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) occur in the current SELECT list or if the current CDS view is a union set created using [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Notes

-   $EXTENSION.\* is specified independently of when an enhancement is made. It is also applied when a database table or a view is enhanced only after the activation of the CDS view.

-   The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) can be used to enhance the current CDS view.

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

Continue
[ABAP CDS - SELECT, element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\))



**📖 Source**: [abencds_f1_select_list_entry.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)

### abencds_f1_element_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_element_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) →  [ABAP CDS - SELECT, element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) → 

ABAP CDS - SELECT, element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as element annotation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.

-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Example

In the CDS view corporation\_sales\_order, a short text and a tooltip are assigned to the element role. The element currency\_code is flagged as a currency key and is assigned as a currency key to the element gross\_amount.

@AbapCatalog.sqlViewName: 'CORP\_SO\_VW'
define view corporation\_sales\_order as
  select from snwd\_bpa as business\_partner
           inner join snwd\_so as sales\_order
             on business\_partner.node\_key = sales\_order.buyer\_guid
         { key sales\_order.so\_id as sales\_order\_id,
               business\_partner.bp\_id as corporation\_id,
               business\_partner.company\_name,
              @EndUserText.label: 'Corporation Role'
              @EndUserText.quickInfo: 'Customer or supplier'
                 business\_partner.bp\_role as role,
              @Semantics.currencyCode
                 sales\_order.currency\_code,
              @Semantics.amount.currencyCode: 'currency\_code'
                 sales\_order.gross\_amount }
         where business\_partner.legal\_form = 'Inc.'; //Corporations only

Example

This example demonstrates [inheritance](javascript:call_link\('abencds_annotations_analysis.htm'\)) of the element annotations in publications of [associations](javascript:call_link\('abencds_f1_association.htm'\)) using path expressions [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)). The following CDS view defines and publishes an association \_some\_assoc:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno2
  as select from
    demo\_join2
    association \[\*\] to demo\_join3 as \_some\_assoc on
      \_some\_assoc.l = demo\_join2.d
    {
      @SomeAnno: 'Association to demo\_join3'
      \_some\_assoc,
      d
    }

A further CDS view accesses the view and also publishes the association. Here, the annotation @SomeAnno is inherited.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1I'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno1\_Inh
  as select from
    Demo\_Cds\_Assoc\_Anno2
    {
      \_some\_assoc,
      d
    }

In the following CDS view, on the other hand, the dedicated association \_some\_assoc is published and the annotation is not inherited.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1L'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno1\_Loc
  as select from
    Demo\_Cds\_Assoc\_Anno2
    association \[\*\] to demo\_join1 as \_some\_assoc on
      Demo\_Cds\_Assoc\_Anno2.d = \_some\_assoc.d
    {
      \_some\_assoc,
      d
    }

If the association \_some\_assoc were published from Demo\_Cds\_Assoc\_Anno2 instead of or in addition to \_some\_assoc by specifying the name Demo\_Cds\_Assoc\_Anno2.\_some\_assoc explicitly, the annotation would be inherited again. The program DEMO\_CDS\_ASSOC\_ANNO evaluates the annotations of both views. No local element annotations are defined for the locally defined association \_some\_assoc of the view Demo\_Cds\_Assoc\_Anno1\_Loc, which means that the result for this association is empty.



**📖 Source**: [abencds_f1_element_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotations.htm)

### abencds_f1_select_list_entry.htm

> **📖 Official SAP Documentation**: [abencds_f1_select_list_entry.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_select_list_entry.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) → 

ABAP CDS - SELECT, element

Syntax

... *{* *\[*[@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))*\]*
      ...
        *\[*KEY*\]* *{* *{* field
                *|* [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) *\[*AS alias*\]* *}*
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

[1\. ... field*|*path\_expr*|*literal*|*parameter*|*...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... $EXTENSION.\*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines an element of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The names of the elements of a SELECT list must be unique.

Alternative 1

... field*|*path\_expr*|*literal*|*parameter*|*...

Extras:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies individual elements.

-   When the name field is specified directly, an element of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (.). AS can be used to define an alternative element name alias.

-   When a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) is specified, two cases arise:

-   If the path expression identifies an element, the target of the path expression is defined as an element. The element is part of the results set of the CDS view, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"), and a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the element named by the path expression.

-   If a path expression is specified that ends with an [association](javascript:call_link\('abencds_f1_association.htm'\)), this association is published for use in other CDS views or in Open SQL. A different CDS view can evaluate the association in its [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)). In the same way, the association can be used in [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in Open SQL. Like every element, an association published in this way is part of the SELECT list and must also be specified in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)). It is not, however, part of the results set, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of the CDS view, or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the association named by the path expression.

AS can be used to define an alternative element name alias.

-   [literal](javascript:call_link\('abencds_f1_literal.htm'\)) can be used to declare a literal. AS must be used to define an alternative element name alias. The literal can be prefixed with the name of a domain.

-   [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be used to specify a parameter from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)). If AS is used, an alternative element name alias must be defined, which cannot be the name pname of the parameter.

-   [session\_variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be used to specify a session variable. AS must be used to define an alternative element name alias.

-   [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [arith\_expr](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [builtin\_func](javascript:call_link\('abencds_f1_builtin_functions.htm'\)), and [case\_exp](javascript:call_link\('abencds_f1_case_expression.htm'\)) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions in the database, and case distinctions. The expressions and functions are evaluated when the CDS view is accessed in the database system. If AS is used, an alternative element name alias has to be defined, unless there is a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)).

If an [association](javascript:call_link\('abencds_f1_association.htm'\)) is published in the SELECT list using a path expression path\_expr, all fields of the source data source that occur in the ON condition must also be specified as elements of the SELECT list. If a path expression contains more than one association, this type of element must be listed as a path expression closed by the field.

Notes

-   When publishing an [association](javascript:call_link\('abencds_f1_association.htm'\)) using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of the target data source to assign start values to the input parameters.

-   That the names of the elements of a SELECT list have to be unique applies in particular also for the publication of an [association](javascript:call_link\('abencds_f1_association.htm'\)) using the path expression path\_expr. There must be not other element with this name. If necessary, AS must be used to define an alternative element name alias for the association.

-   An association can be published multiple times with various alternative element names. This allows you to use different filter conditions [cond\_expr](javascript:call_link\('abencds_path_expression_attr.htm'\)).

-   Special rules apply to the publication of associations in SELECT statements joined with [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Example

The following CDS view opens its own association \_spfli and the association \_sflight published by its target data source demo\_cds\_assoc\_spfli. The fields of the source data source used in the ON conditions of the associations are specified in the SELECT list. In the case of the association published using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid must be used accordingly. The element scarr occurs twice, which means that an alternative element name must be defined using AS.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PUBASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_publish\_assoc
as select from
scarr
association to demo\_cds\_assoc\_spfli as \_spfli on
scarr.carrid = \_spfli.carrid
{
\_spfli,
scarr.carrid as scarr\_carrid,
\_spfli.\_sflight,
\_spfli.carrid,
\_spfli.connid
}    

Addition 1

... @element\_annot ... @<element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)) or after the element using [@<element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)).

Notes

-   An annotation can be used to assign further technical and semantic attributes to an element in ABAP Dictionary. [Framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   With respect to the element annotations, publications of an association using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) ending with an [association](javascript:call_link\('abencds_f1_association.htm'\)) are handled like any regular element. When an association defined in a different CDS view is published, the annotations of preceding publications are inherited when [annotations are evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Those elements of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in Open SQL:

-   By the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

-   In implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the results set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

By default, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS view is activated and when other accesses are performed in program executions.

The default setting can be overridden using the view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)):

-   If the value true is specified for this annotation, the key elements defined using KEY are also used as keys of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   If this annotation is not specified or specified with the value false, the key elements defined using KEY are ignored by the key of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Like in [classic views](javascript:call_link\('abenddic_classical_views.htm'\)), the key fields of the database view are derived implicitly from the key fields of the basis tables and the join conditions. If this is not possible, all fields of the database view are key fields.

Notes

-   In [table buffering](javascript:call_link\('abencds_sap_puffer.htm'\)), the key fields of the CDS database view are always the decisive key fields.

-   In the syntax check in Open SQL, the key elements used depend on whether the name of the CDS entity is specified or the CDS database view (with the latter being [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\))).
    

Addition 3

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). The view field is created under the alternative element name in the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). Accordingly, the alternative element name must comply with the rules for names of view fields of [database views](javascript:call_link\('abenddic_database_views.htm'\)), as well as the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)): which means that it must also meet the

-   naming conventions for [component names](javascript:call_link\('abenddic_structures_tech.htm'\)) of [structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary and

-   cannot be a reserved component name. The reserved names that cannot be used are in the database table TRESE.

This is only checked, however, if there is no explicit [name list](javascript:call_link\('abencds_f1_name_list.htm'\)) that overrides the alternative element names.

Alternative element names can be used in the current CDS view to grant unique names for identically named elements from different entities of the data source. When the current CDS view is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the CDS view, with one exception: alternative element names can be specified directly or after $projection in the ON condition of an [association](javascript:call_link\('abencds_f1_association.htm'\)).

Alternative 2

... $EXTENSION.\*

Effect

Specifies all elements of an [enhancement](javascript:call_link\('abenddic_enhancements.htm'\)) of the enhancement concept for classic objects in ABAP Dictionary. If $EXTENSION.\* is specified as an element, all fields that occur in an enhancement of a database table or a [classic view](javascript:call_link\('abenddic_classical_views.htm'\)) in ABAP Dictionary in the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) become elements of the current CDS view automatically.

If $EXTENSION.\* is specified, it works only for the current CDS view. It is not applied to other CDS views in whose data source the current CDS view is used or to CDS views in the data source of the current CDS view.

$EXTENSION.\* cannot be specified if aggregate expressions [aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) occur in the current SELECT list or if the current CDS view is a union set created using [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Notes

-   $EXTENSION.\* is specified independently of when an enhancement is made. It is also applied when a database table or a view is enhanced only after the activation of the CDS view.

-   The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) can be used to enhance the current CDS view.

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

Continue
[ABAP CDS - SELECT, element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\))
