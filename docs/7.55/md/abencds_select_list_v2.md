  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, select\_list

Syntax

... [element1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm), [element2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm), ...

Effect

Defines an element of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The elements can be specified in a comma-separated list: [element1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm), [element2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) ...

The names of the elements of a CDS view entity must be unique. These are either

-   the names of the elements taken from the data sources, or

-   alternative element names specified using [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm).

Currently, all data types are supported for elements of a CDS view entity except of the following: DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, DF16\_SCL, DF34\_SCL, PREC, and VARC.

It is not allowed to define a client field in the SELECT list, since [client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_client_handling.htm) takes place implicitly in CDS view entities.

Hint

-   It is not possible to use an asterisk \* to include all fields of the data source in the CDS view entity as elements and expose all CDS associations, CDS compositions, and CDS-to-parent associations of the current view. This syntax can be used in ABAP SQL and in [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), but not in [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

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
[CDS DDL - CDS View Entity, SELECT, element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm)