  

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