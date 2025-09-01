---
title: "Syntax"
description: |
  ... element1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm), element2(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm), ...   ... Effect Defines an element of a CDS DDIC-based view (obsolete)(https:/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm"
abapFile: "abencds_select_list_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20select_list%2C%20ABENCDS_SELECT_LIST_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - DDIC-Based View, SELECT, select\_list

Syntax

... [element1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm), [element2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm), ...
  *|* \* ...

Effect

Defines an element of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The elements can be specified as follows:

-   In a comma-separated list, elements can be defined by specifying [element1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm), [element2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm) ...
-   \* can be used to define all fields of the data source of the CDS view as elements and expose all CDS associations, to-child and to-parent associations of the current view. If another CDS view is used as a data source, the CDS associations, to-child and to-parent associations exposed in its SELECT list are not exposed by the current CDS view. The asterisk \* cannot be specified if the current CDS view contains [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm) or [union sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v1.htm) when the [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm) is specified.

The names of the elements of a CDS view must be unique. These are either

-   The names of the elements taken from the data sources
-   Alternative element names specified using [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm)
-   The names specified in a [name list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_name_list_v1.htm)

These names are also the names of the view fields of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the corresponding [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_views.htm) that must be kept.

Hint

The maximum number of elements and the limit on the total of field lengths is determined by the corresponding [limits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) for the associated [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry").

Example

The following CDS view demo\_sales\_order\_old2 is a view of the DDIC database table snwd\_so. Three elements (so\_id, currency\_code, and gross\_amount) are defined for this view.

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW2'
define view DEMO\_SALES\_ORDER\_OLD2
  as select from snwd\_so
{
  key   so\_id,
        @Semantics.currencyCode
        currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
        gross\_amount
}

Example

The following CDS view demo\_sales\_order\_old3 is a view of all the fields of the DDIC database table snwd\_so. Accessing the CDS view has the same effect as when the database itself is accessed.

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW3'
define view DEMO\_SALES\_ORDER\_OLD3 as
  select from snwd\_so
         { \* }

Continue
[CDS DDL - DDIC-Based View, SELECT, element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm)