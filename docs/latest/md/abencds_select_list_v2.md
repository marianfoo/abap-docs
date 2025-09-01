  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20select_list%2C%20ABENCDS_SELECT_LIST_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - CDS View Entity, SELECT, select\_list

Syntax

... [element1](javascript:call_link\('abencds_select_list_entry_v2.htm'\)), [element2](javascript:call_link\('abencds_select_list_entry_v2.htm'\)), ...

Effect

Defines an element of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The elements can be specified in a comma-separated list: [element1](javascript:call_link\('abencds_select_list_entry_v2.htm'\)), [element2](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) ...

The names of the elements of a CDS view entity must be unique. These are either

-   the names of the elements taken from the data sources, or
-   alternative element names specified using [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)).

Currently, all data types are supported for elements of a CDS view entity except for the following: DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, DF16\_SCL, DF34\_SCL, PREC, and VARC.

It is not allowed to define a client field in the SELECT list, since [client handling](javascript:call_link\('abencds_v2_view_client_handling.htm'\)) takes place implicitly in CDS view entities.

Hint

It is not possible to use an asterisk \* to include all fields of the data source in the CDS view entity as elements and expose all CDS associations, to-child and to-parent associations of the current view. This syntax can be used in ABAP SQL and in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), but not in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

Example

The following CDS view entity DEMO\_SALES\_CDS\_SO\_VE\_SIMPLE is a view of the DDIC database table demo\_sales\_order. Three elements (so\_key, BuyerID, and currencySum) are defined for this view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_VE\_SIMPLE
  as select from demo\_sales\_order as SalesOrder
  {
    key so\_key,
        buyer\_id     as BuyerID,
        currency\_sum as currencySum
  }

Continue
[CDS DDL - CDS View Entity, SELECT, element](javascript:call_link\('abencds_select_list_entry_v2.htm'\))