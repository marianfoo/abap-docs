---
title: "Dependency Rules for Optimization of Access to Outdated Data"
description: |
  Dependency rules(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dependency_rules.htm) are SAP HANA database objects that can represent dependencies between semantic columns and technical columns in a database table. The optimizer can then use these dependencies to create exten
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_data_aging_druls.htm"
abapFile: "abenhana_data_aging_druls.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abenhana", "aging", "druls"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_hana.htm) →  [Data Aging in SAP HANA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_data_aging.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Dependency Rules for Optimization of Access to Outdated Data, ABENHANA_DATA_AGING_DRU
LS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Dependency Rules for Optimization of Access to Outdated Data

[Dependency rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dependency_rules.htm) are SAP HANA database objects that can represent dependencies between semantic columns and technical columns in a database table. The optimizer can then use these dependencies to create extended selection conditions when the table is read.

In database tables with active [data aging](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemperature_column_glosry.htm "Glossary Entry") using a [temperature column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_aging_glosry.htm "Glossary Entry"), dependency rules can be used to optimize access to outdated data. In this case, a dependency rule joins the [temperature column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemperature_column_glosry.htm "Glossary Entry") of a database table with regular date columns in the table.

-   [Basics of Optimization](#abenhana-data-aging-druls-1-------filter-dependency-rules-for-data-aging---@ITOC@@ABENHANA_DATA_AGING_DRULS_2)
-   [Join Dependency Rules for Data Aging](#abenhana-data-aging-druls-3---basics-of-optimization-----in-tables-with-a-temperature-column--only-the-current-data-is-located-in-the-main-memory-of-the-sap-hana-database-and-outdated-data-is-moved-to-other-partitions--by-default--the--as-abap--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenas-abap-glosry-htm--glossary-entry----database-interface--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abendatabase-interface-glosry-htm--glossary-entry---accesses-current-data-only--the-relationship-between-the-actual-data-and-the-partition-limits-is-defined-in-data-aging-runs-and-is-made-transparent-for-application-programming--this-means-that--when-outdated-data-is-to-be-accessed--the-data-in-all-partitions-must-first-be-loaded-to-the-main-memory-of-the-sap-hana-database--which-can-have-a-negative-effect-on-performance--outdated-data-can-be-accessed-as-follows-------disabling-data-aging-in-the-database-interface-using-the-profile-parameter-abap-data--aging------bypassing-data-aging-in-abap-sql-access-to--cds-views--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abencds-view-glosry-htm--glossary-entry---and--cds-table-functions--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abencds-table-function-glosry-htm--glossary-entry---using-the-annotationDataAging.noAgingRestriction:true.
-   Setting a different temperature using the classes CL\_ABAP\_SESSION\_TEMPERATURE and CL\_ABAP\_STACK\_TEMPERATURE.
-   Access using [Non-ABAP-Managed Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_nsql.htm)

A dependency rule can be used to add a selection condition for the temperature column to an access of this type. This restricts the temperatures to those that are in the same rows as the data that is actually requested. This means that the SAP HANA database only has to load those partitions to its main memory that contain the required data.

It cannot be guaranteed, however, that the SAP HANA database optimizer actually creates the additional selection condition for the temperature column. This is why this condition must not modify the result set of the original query. This is technically possible, but it produces undefined behavior in cases where the SAP HANA database optimizer responds differently depending how a query is formulated.

The following sections demonstrate how dependency rules for optimizing access to outdated data can be defined.

Filter Dependency Rules for Data Aging   

The [temperature column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemperature_column_glosry.htm "Glossary Entry") has the following important properties for [filter dependency rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_filter_drul.htm):

-   The temperature column has the data type DATS.
-   For current data, the temperature column has the initial value 00000000.
-   In the case of outdated data, the temperature column contains a date value created in the data aging run.

This means that filter dependency rules can be defined as follows:

-   For access to outdated data, filter dependency rules can derive additional selection conditions. These conditions contain comparisons for the temperature column, restricting it to the same rows as the selection conditions for the associated date values.
-   If current data is required together with outdated data, filter dependency rules must be defined in such a way that the selection condition restricts the temperature column to the required date values without excluding the current data. In this case, the additional selection condition must contain a relational expression dbtab.\_dataaging = '00000000' joined using OR.

Hint

The actual design of filter dependency rules for optimizing access to outdated data depends on the layout of the database tables and the rules applied in the data aging run.

Example

In the following CDS view entity, data aging is disabled for the database table DAAG\_SFLIGHT using the annotation @DataAging.noAgingRestriction:true.

@DataAging.noAgingRestriction:true
@EndUserText.label: 'hallo'
define view entity DEMO\_CDS\_DAAG\_SFLIGHT
  as select from daag\_sflight
{
  key carrid,
  key connid,
  key fldate,
      planetype
}

When this view entity is accessed using ABAP SQL, both outdated and current data is read:

SELECT \*
       FROM demo\_cds\_daag\_sflight
       WHERE fldate >= '20160101'
       INTO TABLE @FINAL(result).

To avoid loading all partitions, a filter dependency rule can be defined as follows, assuming that the temperature column \_DATAAGING for outdated data has the same value as the column FLDATE.

@DataAging.noAgingRestriction:true
define view entity demo\_cds\_daag\_sflight\_sbook
  as select from daag\_sflight
    inner join   daag\_sbook  
      on  daag\_sflight.carrid = daag\_sbook.carrid and  
          daag\_sflight.connid = daag\_sbook.connid and  
          daag\_sflight.fldate = daag\_sbook.fldate
{
  daag\_sflight.carrid,
  daag\_sflight.connid,
  daag\_sflight.fldate,
  daag\_sbook.bookid,
  daag\_sbook.customid
}

The SAP HANA database optimizer then adds the following additional selection condition to the WHERE condition of the shown SELECT statement implicitly:

AND daag\_sflight~\_dataaging >= '20160101'
    OR  daag\_sflight~\_dataaging =  '00000000'

This does not affect the result set of the query.

Join Dependency Rules for Data Aging   

If multiple database tables are joined together in a relational model, data aging must be respected for all these tables. Rows in different database tables that have the same date are usually joined using join expressions. These joins can be in ABAP SQL, Native SQL, or in views.

[Join dependency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_join_drul.htm) rules can be defined to optimize access to outdated data for database tables joined like this. As in filter dependency rules, the actual design of the data aging must be known as well as how the tables depend on each other.

Example

In the following CDS view, data aging is disabled for the database tables DAAG\_SFLIGHT and DAAG\_SBOOK using the annotation@DataAging.noAgingRestriction:true.

@AbapCatalog.sqlViewName: 'DEMOCDSDAAGSFLBK'
@DataAging.noAgingRestriction:true
DEFINE VIEW demo\_cds\_daag\_sflight\_sbook AS
  SELECT FROM daag\_sflight
     INNER JOIN daag\_sbook
       ON daag\_sflight.carrid = daag\_sbook.carrid AND
          daag\_sflight.connid = daag\_sbook.connid AND
          daag\_sflight.fldate = daag\_sbook.fldate
           { daag\_sflight.carrid,
             daag\_sflight.connid,
             daag\_sflight.fldate,
             daag\_sbook.bookid,
             daag\_sbook.customid };

When this view is accessed using ABAP SQL, both outdated and current data is read:

SELECT \*
       FROM demo\_cds\_daag\_sflight\_sbook
       WHERE fldate >= '20160101'
       INTO TABLE @DATA(result).

To avoid loading all partitions, a join dependency rule can be defined as follows, in addition to the filter dependency rules in the previous example. Here, the assumption is made that the temperature column \_DATAAGING for outdated data in both tables has the same value as the column FLDATE.

DEFINE JOIN DEPENDENCY RULE demo\_daag\_sflight\_sbook\_rule
  ON daag\_sflight, daag\_sbook
    IF { daag\_sflight.mandt  = daag\_sbook.mandt  AND
         daag\_sflight.carrid = daag\_sbook.carrid AND
         daag\_sflight.connid = daag\_sbook.connid AND
         daag\_sflight.fldate = daag\_sbook.fldate }
      THEN { daag\_sflight.\_dataaging = daag\_sbook.\_dataaging }

The SAP HANA database optimizer then adds the following additional selection condition to the ON condition of the join expression of the CDS view implicitly:

AND daag\_sflight.\_dataaging = daag\_sbook.\_dataaging

The following additional selection conditions from the filter condition are also added to the WHERE condition of the shown SELECT statement:

AND daag\_sflight~\_dataaging >= '20160101'
AND daag\_sbook~\_dataaging >= '20160101'
OR  daag\_sflight~\_dataaging = '00000000'
OR  daag\_sbook~\_dataaging =  '00000000'

This does not modify the result set of the query.