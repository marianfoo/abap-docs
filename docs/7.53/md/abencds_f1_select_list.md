  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) → 

ABAP CDS - SELECT, select\_list

Syntax

... [element1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm), [element2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm), ...
  *|* \* ...

Effect

Defines an element of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"). The elements can be specified as follows:

-   In a comma-separated list, elements can be defined by specifying [element1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm), [element2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm) ...

-   \* can be used to define all fields of the data source of the CDS view as elements and expose associations of the current view. If another CDS view is used as a data source, the associations exposed in its SELECT list are, however, not exposed by the current CDS view. The asterisk \* cannot be specified if the current CDS view contains [joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_joined_data_source.htm) or [union sets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_union.htm) when the [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) is specified.

The names of the elements of a CDS view must be unique. These are either

-   The names of the elements taken from the data sources

-   Alternative element names specified using [AS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm)

-   The names specified in a [name list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_name_list.htm)

These names are also the names of the view fields of the [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") and the corresponding [rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_views.htm) that must be kept.

Note

The maximum number of elements and the limit on the total of field lengths is determined by the corresponding [limits](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_views.htm) for the associated [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry").

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
[ABAP CDS - SELECT, element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm)