  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Data Aging in SAP HANA](javascript:call_link\('abenhana_data_aging.htm'\)) → 

Dependency Rules for Optimization of Access to Old Data

[Dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) are SAP HANA database objects that can represent dependencies between semantic columns and technical columns in a database table. The optimizer can then use these dependencies to create extended selection conditions when the table is read.

In database tables with a [temperature column](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), and hence where [data aging](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") is enabled, dependency rules can be used to optimize access to old data. In this case, a dependency rule joins the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") of a database table with regular date columns in the table.

-   [Basics of Optimization](#abenhana-data-aging-druls-1--------filter-dependency-rules-for-data-aging---@ITOC@@ABENHANA_DATA_AGING_DRULS_2)

-   [Join Dependency Rules for Data Aging](#abenhana-data-aging-druls-3---basics-of-optimization--in-tables-with-a-temperature-column--only-the-current-data-is-located-in-the-main-memory-of-the-sap-hana-database-and-old-data-is-moved-to-other-partitions--by-default--the--as-abap--javascript-call-link---abensap-nw-abap-glosry-htm-----glossary-entry----database-interface--javascript-call-link---abendatabase-interface-glosry-htm-----glossary-entry---accesses-current-data-only--the-relationship-between-the-actual-data-and-the-partition-limits-is-defined-in-data-aging-runs-and-is-made-transparent-for-application-programming--this-means-that--when-old-data-is-accessed--the-data-in-all-partitions-must-first-be-loaded-to-the-main-memory-of-the-sap-hana-database--which-can-have-a-negative-effect-on-performance--old-data-can-be-accessed-as-follows-------disabling-data-aging-in-the-database-interface-using-the-profile-parameter-abap-data--aging-------bypassing-data-aging-in-abap-sql-access-to--cds-views--javascript-call-link---abencds-view-glosry-htm-----glossary-entry---and--cds-table-functions--javascript-call-link---abencds-table-function-glosry-htm-----glossary-entry---using-the-annotation--DataAging.noAgingRestriction:true](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

-   Configuring a different temperature using the classes CL\_ABAP\_SESSION\_TEMPERATURE and CL\_ABAP\_STACK\_TEMPERATURE.

-   Access using [Non-ABAP-Managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

A dependency rule can be used to add a selection condition for the temperature column to an access of this type. This restricts the temperatures to those that are in the same rows as the data that is actually requested. This means that the SAP HANA database only has to load those partitions to its main memory that contain the required data.

It cannot be guaranteed, however, that the SAP HANA database optimizer actually creates the additional selection condition for the temperature column. This is why this condition must not modify the results set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer responds differently depending how a query is formulated.

The following sections demonstrate how dependency rules for optimizing access to old data can be defined.

Filter Dependency Rules for Data Aging

The [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") has the following important properties for [filter dependencies](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)):

-   The temperature column has the data type DATS.

-   For current data, the temperature column has the initial value 00000000.

-   In the case of old data, the temperature column is given a date value created in the data aging run.

This means that filter dependency rules can be defined as follows:

-   For access to old data, filter dependency rules can derive additional selection conditions. These conditions contain comparisons for the temperature column, restricting it to the same rows as the selection conditions for the associated date values.

-   If current data is required alongside old data, filter dependency rules must be defined in such a way that the selection condition restricts the temperature column to the required date values without excluding the current data. In this case, the additional selection condition must contain a relational expression dbtab.\_dataaging = '00000000' joined using OR.

Note

The actual design of filter dependency rules for optimizing access to old data is determined by the layout of the database tables and the rules applied in the data aging run.

Example

In the following CDS view, data aging is disabled for the database table DAAG\_SFLIGHT using the annotation [@DataAging.noAgingRestriction:true](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

@AbapCatalog.sqlViewName: 'DEMOCDSDAAGSFL'
@DataAging.noAgingRestriction:true
DEFINE VIEW demo\_cds\_daag\_sflight AS
  SELECT FROM daag\_sflight
         { carrid,
           connid,
           fldate,
           planetype,
           seatsocc };

When this view is accessed using ABAP SQL, both old and current data is read:

SELECT \*
       FROM demo\_cds\_daag\_sflight
       WHERE fldate >= '20160101'
       INTO TABLE @DATA(result).

To avoid loading all partitions, a filter dependency rule can be defined as follows. Here, the assumption is made that the temperature column \_DATAAGING for old data has the same value as the column FLDATE.

DEFINE FILTER DEPENDENCY RULE demo\_daag\_sflight\_rule
  ON daag\_sflight
    IF { daag\_sflight.fldate >= $1 }
      THEN { daag\_sflight.\_dataaging >= $1 OR
             daag\_sflight.\_dataaging =  '00000000' }

The SAP HANA database then adds the following additional selection condition to the WHERE condition of the shown SELECT statement implicitly:

AND daag\_sflight~\_dataaging >= '20160101'
    OR  daag\_sflight~\_dataaging =  '00000000'

This does not modify the results set of the query.

Join Dependency Rules for Data Aging

If multiple database tables are joined together in a relational model, data aging must be respected for all these tables. Rows in different database tables that have the same date are usually joined using join expressions. These joins can be in ABAP SQL, Native SQL, or in views.

[Join dependency](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) rules can be defined to optimize access to old data for database tables joined like this. As in filter dependency rules, the actual design of the data aging must be known as well as how the tables are dependent on each other.

Example

In the following CDS view, data aging is disabled for the database tables DAAG\_SFLIGHT and DAAG\_SBOOK using the annotation [@DataAging.noAgingRestriction:true](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

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

When this view is accessed using ABAP SQL, both old and current data is read:

SELECT \*
       FROM demo\_cds\_daag\_sflight\_sbook
       WHERE fldate >= '20160101'
       INTO TABLE @DATA(result).

To avoid loading all partitions, a join dependency rule can be defined as follows, in addition to the filter dependency rules in the previous example. Here, the assumption is made that the temperature column \_DATAAGING for old data in both tables has the same value as the column FLDATE.

DEFINE JOIN DEPENDENCY RULE demo\_daag\_sflight\_sbook\_rule
  ON daag\_sflight, daag\_sbook
    IF { daag\_sflight.mandt  = daag\_sbook.mandt  AND
         daag\_sflight.carrid = daag\_sbook.carrid AND
         daag\_sflight.connid = daag\_sbook.connid AND
         daag\_sflight.fldate = daag\_sbook.fldate }
      THEN { daag\_sflight.\_dataaging = daag\_sbook.\_dataaging }

The SAP HANA database then adds the following additional selection condition to the ON condition of the join expression of the CDS view implicitly:

AND daag\_sflight.\_dataaging = daag\_sbook.\_dataaging

The following additional selection conditions from the filter condition are also added to the WHERE condition of the shown SELECT statement:

AND daag\_sflight~\_dataaging >= '20160101'
AND daag\_sbook~\_dataaging >= '20160101'
OR  daag\_sflight~\_dataaging = '00000000'
OR  daag\_sbook~\_dataaging =  '00000000'

This does not modify the results set of the query.