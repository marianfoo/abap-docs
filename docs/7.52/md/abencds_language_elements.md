  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") of the [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry"), arranged by topics.

In addition to the language elements shown here, CDS source code can also contain [annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) with metadata.

DDL

CDS Annotation Definitions

Keywords and Additions

Language Element

Meaning

[define annotation ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm)

Defines a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[enum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm)

Defines enumeration symbols of a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[default](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm)

Defines default values of a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[array of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_arr.htm)

Defines an [annotation arras](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry").

CDS Views

Keywords and Additions

Language Element

Meaning

[DEFINE VIEW ... AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm)

Defines a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm)

Defines input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

SELECT statement of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)

Defines an association for a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[1:](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[KEY ... AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)

Element of a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

[$EXTENSION.\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)

Elements of an enhancement in a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

[WHERE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[GROUP BY ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_group_by.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[HAVING ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[UNION ALL ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

Expressions

Operators

Meaning

[MAX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [MIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [SUM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [COUNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[+](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [\-](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [/](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [WHEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [THEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [ELSE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [END](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [\>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [\>=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_between.htm), [LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_like.htm), [IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_null.htm), [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), [AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), [OR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

Predefined Functions

Function

Meaning

[ABS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [CEIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [DIVISION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [FLOOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [ROUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CONCAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [INSTR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LEFT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LENGTH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LPAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LOWER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LTRIM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RIGHT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RPAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RTRIM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [UPPER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[BINTOHEX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[COALESCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_coalesce_expression.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm), [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm), [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm)

Date function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_time_functions.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm)

Time stamp function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timezone_functions.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timezone_functions.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm)

Date/time conversions functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

CDS View Enhancements

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ... WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view.htm)

Enhancement of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") with an [CDS view enhancement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

CDS Table Functions

Keywords and Additions

Language Element

Meaning

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm)

Defines a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry")

CDS Metadata Extensions

Keywords and Additions

Language Element

Meaning

[ANNOTATE VIEW ... WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[VARIANT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

Join of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") with a [CDS variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry")

[PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)

Extension of the annotations for the input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

DCL

CDS Roles

Keywords and Additions

Language Element

Meaning

[DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm)

Defines a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[GRANT SELECT ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm)

Defines an access rule in a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)

WHERE clause in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm), [OR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm), [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm)

INHERIT clause in an inherited access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[... ASPECT pfcg\_auth ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm),
[... ASPECT user ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)

Conditions for [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

...[\=*|*<>*|*<*|*\>*|*<=*|*\>=*|*?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)*|*[BETWEEN*|*LIKE*|*IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) ...

Operators for literal conditions