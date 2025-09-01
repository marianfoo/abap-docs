---
title: "Example"
description: |
  The following CDS view entity demonstrates the creation of a series of dates using the CDS system entity SERIES_GENERATE_DATE. @EndUserText.label: 'CDS view entity, generate date' @AccessControl.authorizationCheck: #NOT_REQUIRED define view entity DEMO_CDS_SERIES_GENERATOR_DATE as select from
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_series_generators.htm"
abapFile: "abencds_series_generators.htm"
keywords: ["select", "do", "if", "try", "catch", "class", "data", "types", "abencds", "series", "generators"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - System Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_system_entities.htm) →  [ABAP CDS - System Table Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_system_table_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SERIES_GENERATE_%2C%20Series%20Generators%2C%20ABENCDS_SERIES_GENERATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SERIES\_GENERATE\_, Series Generators

Series generators are a set of [CDS system table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_system_tabfunc_glosry.htm "Glossary Entry") that create a series table. This table contains a series of numbers, dates, times, or time stamps.

-   [Common Parameters and Result](#abencds-series-generators-1-------series--generate--date---@ITOC@@ABENCDS_SERIES_GENERATORS_2)
-   [SERIES\_GENERATE\_INTEGER](#abencds-series-generators-3-------series--generate--time---@ITOC@@ABENCDS_SERIES_GENERATORS_4)
-   [SERIES\_GENERATE\_TIMESTAMP](#abencds-series-generators-5---hint--in-abap-sql--usage-of-an-series-generator-enforces--strict-mode-from-abap-release-7-56--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenabap-sql-strictmode-756-htm----common-parameters-and-result-----all-series-generators-have-the-following-mandatory-parameters---parameter--details--step--number-that-defines-the-increment-value-for-the-series-to-be-generated--for-example--numbers--seconds-or-days-depending-on-the-table-function-used--step-is-of-type--int4--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm---it-must-be-greater-than-0--if-step-is-greater-than-the-difference-of-the-parameters-to--value-and-from--value--the-result-is-an-initial-table---from--value--start-value-of-the-series--the-type-depends-on-the-series-generator-used---to--value--final-value-of-the-series--the-value-is-not-included-as-value-in-the-generated--period--end-field-in-the-generated-table-since-the-series-ends-with-the-step-before-the-to--value-is-reached--the-data-type-of-to--value-depends-on-the-table-function-used---the-generated-result-tables-have-the-following-fields---field--details--generated--period--start--start-value-of-a-generated-period-of-the-series--the-value-of-generated--period--end-becomes-the-new-value-for-generated--period--start-of-the-next-period---generated--period--end--final-value-of-a-generated-period-of-the-series--the-defined-parameter-to--value-is-not-included-in-the-table---element--number--number-of-the-period--it-is-consecutively-numbered--starting-with-1--in-integer-steps---fraction--of--min--max--range--the-calculated-value-of---generated--period--end---generated--period--start-------to--value---from--value-----series--generate--date-----the-cds-table-function-series--generate--date-creates-a-table-with-a-series-of-dates--the-following-types-are-used-------parameters----------step---int4--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm----------from--value---datn--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm----------to--value---datn--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm------the-table-is-of-type-series--generate--date-and-has-the-following-fields----------generated--period--start---datn--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm----------generated--period--end---datn--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm----------element--number---int8--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm----------fraction--of--min--max--range---fltp--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-builtin-types-htm---example--the-following-source-code-demonstrates-the-creation-of-a-series-of-dates-using-the-cds-system-entity-series--generate--date---final-current--date----cl--demo--date--time--get--user--date-----final-one--year--later----current--date---365--select----from-series--generate--date--step---------30--------------------------------------from--value---current\_date,
                                    to\_value   = @one\_year\_later )
  ORDER BY element\_number
  INTO TABLE @FINAL(date\_series\_gen).
cl\_demo\_output=>display( date\_series\_gen ).

Example

The following CDS view entity demonstrates the creation of a series of dates using the CDS system entity SERIES\_GENERATE\_DATE.

@EndUserText.label: 'CDS view entity, generate date'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SERIES\_GENERATOR\_DATE  
  as select from series\_generate\_date(
    step: 30,  
    from\_value: abap.datn'20200101',  
    to\_value: abap.datn'20220102')
  {
generated\_period\_start,
generated\_period\_end,
element\_number,
fraction\_of\_min\_max\_range  
}

The class CL\_DEMO\_CDS\_SERIES\_GNRTR\_DATE accesses the CDS view entity with a simple SELECT \* statement and generates a screen output of the result.

SERIES\_GENERATE\_INTEGER   

The CDS system entity SERIES\_GENERATE\_INTEGER creates a table with a series of numbers. The following types are used:

-   Parameters:
    -   step: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   from\_value: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   to\_value: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
-   The table is of type SERIES\_GENERATE\_INTEGER and has the following fields:
    -   generated\_period\_start:[INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   generated\_period\_end: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   element\_number: [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   fraction\_of\_min\_max\_range: [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Example

The following source code demonstrates the creation of a series of numbers using the CDS system entity SERIES\_GENERATE\_INTEGER.

SELECT \* FROM series\_generate\_integer( step       = 14,
                                       from\_value = 1,
                                       to\_value   = 100 )
  ORDER BY element\_number
  INTO TABLE @FINAL(integer\_series\_gen).
cl\_demo\_output=>display( integer\_series\_gen ).

Example

The following CDS view entity demonstrates the creation of a series of numbers using the CDS system entity SERIES\_GENERATE\_INTEGER.

@EndUserText.label: 'CDS view entity, generate integer'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SERIES\_GENERATOR  
  as select from series\_generate\_integer(  
    step : 14, from\_value : 1, to\_value: 100)  
  {
generated\_period\_start,
generated\_period\_end,
element\_number,
fraction\_of\_min\_max\_range  
}

The class CL\_DEMO\_CDS\_SERIES\_GENERATOR accesses the CDS view entity with a simple SELECT \* statement and generates a screen output of the result.

SERIES\_GENERATE\_TIME   

The CDS system entity SERIES\_GENERATE\_TIME creates a table with a series of times. The following types are used:

-   Parameters:
    -   step: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   from\_value: [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   to\_value: [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
-   The table is of type SERIES\_GENERATE\_TIME and has the following fields:
    -   generated\_period\_start: [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   generated\_period\_end: [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   element\_number: [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   fraction\_of\_min\_max\_range: [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Example

The following source code demonstrates the creation of a series of times using the CDS system entity SERIES\_GENERATE\_TIME.

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
FINAL(seconds\_added) = time + 20.
SELECT \* FROM series\_generate\_time( step       = 2,
                                    from\_value = @time,
                                    to\_value   = @seconds\_added )
  ORDER BY element\_number
  INTO TABLE @FINAL(time\_series\_gen).
cl\_demo\_output=>display( time\_series\_gen ).

Example

The following CDS view entity demonstrates the creation of a series of times using the CDS system entity SERIES\_GENERATE\_TIME.

@EndUserText.label: 'CDS view entity, generate time'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SERIES\_GENERATOR\_TIME  
  as select from series\_generate\_time(
    step: 2,  
    from\_value: abap.timn'131002',  
    to\_value: abap.timn'230102' )
  {
generated\_period\_start,
generated\_period\_end,
element\_number,
fraction\_of\_min\_max\_range  
}

The class CL\_DEMO\_CDS\_SERIES\_GNRTR\_TIME accesses the CDS view entity with a simple SELECT \* statement and generates a screen output of the result.

SERIES\_GENERATE\_TIMESTAMP   

The CDS table function SERIES\_GENERATE\_TIMESTAMP creates a table with a series of time stamps. The following types are used:

-   Parameters:
    -   step: [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   from\_value: [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   to\_value: [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
-   The table is of type SERIES\_GENERATE\_TIMESTAMP and has the following fields:
    -   generated\_period\_start: [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   generated\_period\_end: [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   element\_number: [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   fraction\_of\_min\_max\_range: [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Example

The following source code demonstrates the creation of a series of time stamps using the CDS system entity SERIES\_GENERATE\_TIMESTAMP.

FINAL(ts\_from) = utclong\_current( ).
FINAL(ts\_to) = utclong\_add( val  = ts\_from seconds = 10 ).
SELECT \* FROM series\_generate\_timestamp( step       = 2,
                                         from\_value = @ts\_from,
                                         to\_value   = @ts\_to )
  ORDER BY element\_number
  INTO TABLE @FINAL(timestamp\_series\_gen).
cl\_demo\_output=>display( timestamp\_series\_gen ).

Example

The following CDS view entity demonstrates the creation of a series of time stamps using the CDS system entity SERIES\_GENERATE\_TIMESTAMP.

@EndUserText.label: 'CDS view entity, generate time stamp'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SERIES\_GENERATOR\_TS
  as select from series\_generate\_timestamp(
    step : 2,
    from\_value : abap.utcl'2020-07-20 12:23:01.1234567',
    to\_value:    abap.utcl'2020-07-20 12:23:11.1234567' )
  {
generated\_period\_start,
generated\_period\_end,
element\_number,
fraction\_of\_min\_max\_range
}

The class CL\_DEMO\_CDS\_SERIES\_GNRTR\_TS accesses the CDS view entity with a simple SELECT \* statement and generates a screen output of the result.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_OPEN\_SQL\_DB

-   Cause: Increment value must be a positive value.
    Runtime error: DBSQL\_SQL\_ERROR