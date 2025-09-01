---
title: "CDS FDL - Parameter Passing in Scalar Functions"
description: |
  Syntax ... ( pname1 => act1, pname2 => act2, ... ) ... Effect Passes the actual parameters act1, act2, ... to the input parameters pname1, pname2, ... of an SQL-based scalar function(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm 'Glossary Entry'). Th
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_passing.htm"
abapFile: "abencds_parameter_passing.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "parameter", "passing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20Parameter%20Passing%20in%20Scalar%20Functions%2C%20ABENCDS_PARAMETER_PASSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS FDL - Parameter Passing in Scalar Functions

Syntax

... ( pname1 => act1, pname2 => act2, ... ) ...

Effect

Passes the actual parameters act1, act2, ... to the input parameters pname1, pname2, ... of an [SQL-based scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry").

The following can be specified as actual parameters:

-   [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm) (typed or untyped)
-   [Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v2.htm)
-   [Session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm)
-   [Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source
-   [Built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm) if they return a suitable data type
-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm)
-   [Aggregate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm)
-   [Cast expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm)
-   [Case distinctions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm)
-   Another SQL-based scalar function
-   A reuse expression using [$projection.fieldName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_reusable_expression_v2.htm)
    
    Note: Reuse expressions defined with $projection lose their reference information. $projection fields do not inherit annotations, so the references to [currency keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_key_glosry.htm "Glossary Entry") or [unit keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_glosry.htm "Glossary Entry") are lost.
    
-   A [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm)

The data types of the actual parameters must exactly match the [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of the input parameters. The reference type specification [WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm), if any, must be followed. Otherwise, a syntax check error occurs.

If an input parameter requires one of the reference types #CUKY, #UNIT, or #CALC, fewer operands are possible for the actual parameters because not all operands can provide the required reference information. The possible operands are:

-   Fields of a data source that are annotated with the required reference information.
-   Scalar functions that return a value of a suitable data type and that are annotated with the required reference information.
-   Path expressions that are annotated with the required reference information.
-   $projection fields that derive their reference information from the data source.
    
    Note: Reuse expressions defined with $projection use their reference information, if it is specified locally. However, if a reference type can be derived from the underlying data source, the reference information is preserved and a $projection field can be specified as an input parameter.
    

Example

The following CDS view entity passes a field of a data source, a typed literal and an input parameter as actual parameters to the input parameters of the CDS scalar function DEMO\_CDS\_SCALAR\_REF\_CASE.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, scalar func'
define view entity DEMO\_CDS\_SCALAR\_USE\_REF\_CASE
  with parameters
    p1 : abap.dec(4,2)
  as select from DEMO\_CDS\_SCALAR\_HELPER
{
  key Id,
      Unit2,
      @Semantics.quantity.unitOfMeasure: 'Unit2'
      DEMO\_CDS\_SCALAR\_REF\_CASE(
      p1 => Int4,
      p2 => abap.int4'22',
      p3 => $parameters.p1) as ScalarResult
}