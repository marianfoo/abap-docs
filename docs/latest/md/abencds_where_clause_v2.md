---
title: "CDS DDL - CDS View Entity, SELECT, WHERE"
description: |
  Syntax ... WHERE cds_cond(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) ... Effect Defines a WHERE condition for the result set of a CDS view entity(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.ht
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v2.htm"
abapFile: "abencds_where_clause_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "where", "clause"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_clauses_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20WHERE%2C%20ABENCDS_WHERE_CLAUSE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - CDS View Entity, SELECT, WHERE

Syntax

... WHERE [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) ...

Effect

Defines a WHERE condition for the result set of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). When the CDS view entity is accessed, the result set contains only the data from the data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm) that meets the condition [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view entity in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v2.htm).

If the view entity makes use of multiple data sources by using join expressions, then all fields specified in the WHERE condition must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply to the operands and syntax of the WHERE condition of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"):

-   All relational operators are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.
-   The Boolean operators NOT, AND, and OR are supported.
-   lhs expects a [field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm), a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm), an [SQL-based scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm), a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm), or a [CDS enumerated constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_field_v2.htm).
    
    If a comparison operator is used as relational operator, then lhs can also be a [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm), a [case expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm).
    
    If IS NULL is used as relational operator, then lhs can also be a [case expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm).
    
-   rhs can be a [field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm), a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm), a [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v2.htm), a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm), a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm), a [SQL-based scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm), or a [CDS enumerated constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_field_v2.htm).
    
    If a comparison operator is used as relational operator, then rhs can also be a [case expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm) or an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm).
    
    -   Exception: when using the operator LIKE, rhs must be a character literal.
-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") as [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") and the cardinality of all traversed associations is to-one:
    
    -   The [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry") of the contained [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") is to-one.
    -   The path expression contains the [cardinality specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_card_v2.htm) attribute to-one.
    
    element can be used to specify an element of the association target of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.

Special rules apply when the operands of a WHERE condition are [CDS enumerated elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_use_enum_type.htm).

Limitation

The condition in the WHERE clause must not start with parentheses. This is not valid:

... WHERE (field1 + field2) \* 5 < 1000

The following workarounds are possible:

-   You may change the order of the operands so that the expression written in parentheses does not appear as first operand.
    
    Example: ... WHERE 5 \* (field1 + field2) < 1000
    
-   You may add 1\* at the start to avoid starting with a parenthesis.
    
    Example: ... WHERE 1 \* (field1 + field2) \* 5 < 1000
    

Hint

Unlike in the [HAVING condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_having_clause_v2.htm), [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm) cannot be specified in the WHERE condition.

Example

The CDS view entity demo\_sales\_order\_where has a WHERE condition that contains the relational operators LIKE and BETWEEN, a string function, and a cast expression.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_ORDER\_WHERE
  as select from
    demo\_sales\_order
    association to demo\_sales\_bupa as \_partner
      on $projection.id = \_partner.id
    {
      key so\_key,
          id,
          company\_code,
          \_partner.family\_name
    }
    where
          \_partner.family\_name like    'S%'
      and length( \_partner.family\_name ) = abap.int1'4'
      and created\_on between abap.dats'20200101' and abap.dats'20200401'
      and cast( \_partner.birth\_name as DEMO\_BT\_BIRTH\_NAME
                preserving type )  =       abap.char'Meier'