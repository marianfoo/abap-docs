  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Null%20Values%2C%20ABENCDS_NULL_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Null Values

A [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry") is a special value returned by a [database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_glosry.htm "Glossary Entry") in order to indicate an undefined value or result.

In ABAP CDS, null values can be handled using one of the following:

-   The condition [IS NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_null_v2.htm).
-   The addition [ELSE NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm) in a case distinction in a CDS view entity.
-   The function [COALESCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v2.htm).
-   The parameter on\_null in [date and time conversion functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm).

In the SELECT statement of a CDS view entity, null values can be produced by

-   [aggregate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaggregate_function_glosry.htm "Glossary Entry"),
-   in outer [joins](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_glosry.htm "Glossary Entry"),
-   in [CDS expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expression_glosry.htm "Glossary Entry").

The topic [ABAP SQL - Null Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_null_values.htm) explains the handling of null values in ABAP SQL.

Example

In the following example, the field NullResult contains a null value because the CASE expression on the left side does not find a true WHEN condition. It evaluates the ELSE branch, and sets the result to null accordingly.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity that return a null value'
define view entity DEMO\_CDS\_NULL
  as select from demo\_expressions
{
  'A'             as id,
  case
    when id = 'Y'
    then 'Z'
    else null  
    end as NullResult
}

The following SELECT statement evaluates the CDS view entity using the [ABAP SQL coalesce function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm). Since the case expression returns a null value, the coalesce function returns 'Null' as result.

SELECT
  FROM demo\_cds\_null
  FIELDS coalesce( NullResult, 'Null' ) AS coalesced
  INTO TABLE @FINAL(result).