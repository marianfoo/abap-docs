  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, select\_list

Syntax

... [element1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm), [element2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm), ...
  *|* \* ...

Effect

Defines an element of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") . The elements can be specified as follows:

-   In a comma-separated list, elements can be defined by specifying [element1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm), [element2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) ...
-   \* can be used to define all fields of the data source of the CDS view as elements and expose all CDS associations, CDS compositions, and CDS-to-parent associations of the current view. If another CDS view is used as a data source, the CDS associations, CDS compositions, and CDS-to-parent associations exposed in its SELECT list are not exposed by the current CDS view. The asterisk \* cannot be specified if the current CDS view contains [joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v1.htm) or [union sets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v1.htm) when the [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm) is specified.

The names of the elements of a CDS view must be unique. These are either

-   The names of the elements taken from the data sources
-   Alternative element names specified using [AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm)
-   The names specified in a [name list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_name_list_v1.htm)

These names are also the names of the view fields of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the corresponding [rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_views.htm) that must be kept.

Hint

The maximum number of elements and the limit on the total of field lengths is determined by the corresponding [limits](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) for the associated [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry").

Example

The following CDS view sales\_order is a view of the DDIC database table snwd\_so. Three elements (so\_id, currency\_code, and gross\_amount) are defined for this view.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    { key   so\_id,
          @Semantics.currencyCode
            currency\_code,
          @Semantics.amount.currencyCode: 'currency\_code'
            gross\_amount }

Example

The following CDS view sales\_order is a view of all the fields of the DDIC database table snwd\_so. Accessing the CDS view has the same effect as when the database itself is accessed.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         { \* }

Continue
[CDS DDL - DDIC-based View, SELECT, element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm)