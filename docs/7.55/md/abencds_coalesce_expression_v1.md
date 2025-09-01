  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-based View, Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-based View, sql\_functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_v1.htm) → 

CDS DDL - DDIC-based View, coalesce

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). Can be used to check whether arg1 contains a [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"). In ABAP CDS, the coalesce function has two mandatory [positional parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"), arg1 and arg2. It checks whether arg1 contains a null value. If yes, then it returns the value of arg2. If no, then it returns the value of arg1. If both arg1 and arg2 are null, then the null value is returned.

The following can be specified as the arguments arg:

-   [Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) of the current CDS view.

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) that identify a suitable field of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm).

-   [Input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v1.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm).

-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_v1.htm)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm)

-   Type modifications using [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v1.htm)

The valid argument types for arg1 and arg2 are all [dictionary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

Hint

A coalesce function is a short form of the following [complex case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v2.htm):

CASE WHEN arg1 IS NOT NULL THEN arg1
     ELSE arg2
END

Example

The following DDIC-based CDS view demonstrates the syntax of the coalesce function.

@AbapCatalog.sqlViewName: 'COALV1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_COALESCE\_DDIC  
as select from demo\_ddic\_types  
{
  key id,
  coalesce(int1, int2) as coalesced
}