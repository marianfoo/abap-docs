  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Feature%20Tables%2C%20ABENCDS_LANGUAGE_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Feature Tables

The following sections shows all available language elements of the [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry"), [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and their release dates. For further information on the release dates, see [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)).

-   [TDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_1)
    -   [CDS Type Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)
-   [FDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_3)
    -   [CDS Function Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)
-   [DDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_5)
    -   [CDS Annotation Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)
    -   [CDS View Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_7)
    -   [CDS Projection Views of Type Transactional Query](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)
    -   [CDS Projection Views of Type Transactional Interface](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_9)
    -   [CDS Projection Views of Type Analytical Query](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)
    -   [CDS DDIC-based views (obsolete)](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_11)
    -   [CDS Entity Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_12)
    -   [CDS Table Functions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_13)
    -   [CDS Hierarchies](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_14)
    -   [CDS Custom Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_15)
    -   [CDS Abstract Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_16)
    -   [CDS Metadata Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_17)
    -   [CDS Tuning Objects](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_18)
-   [SDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_19)
    -   [CDS Service Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_20)
    -   [CDS Service Definition Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_21)
-   [DCL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_22)
    -   [CDS Roles](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_23)
    -   [CDS Access Policy](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_24)

In addition to the language elements shown here, CDS source code can also contain [annotations](javascript:call_link\('abencds_annotations.htm'\)) with metadata.

TDL   

CDS Type Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TYPE](javascript:call_link\('abencds_define_simple_type.htm'\))

Defines a [CDS simple type](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry") in [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry").

7.91, 7.58

[DEFINE TYPE ... ENUM](javascript:call_link\('abencds_define_enum_type.htm'\))

Defines a [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") in [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry").

7.93, 7.58

FDL   

CDS Function Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE SCALAR FUNCTION ... WITH PARAMETERS ... RETURNS ...](javascript:call_link\('abencds_define_scalar_function.htm'\))

Defines a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry")

7.93, 7.58

[TYPE OF](javascript:call_link\('abencds_scalar_typing.htm'\))

Typing by reference to another parameter in a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry").

7.93, 7.58

[WITH REFERENCE TYPE](javascript:call_link\('abencds_with_reference_type.htm'\))

CDS amount and quantity handling in CDS scalar functions.

7.93, 7.58

[WITH REFERENCE TYPE CASEH WHEN ... *\[*AND ... *\]* THEN ... *\[*ELSE ... *\]* END](javascript:call_link\('abencds_with_reference_type.htm'\))

Dynamic specification of a reference type in CDS scalar functions.

7.93, 7.58

DDL   

CDS Annotation Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[define annotation ...](javascript:call_link\('abencds_f1_define_annotation.htm'\))

Defines a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

7.69, 7.52

[enum](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))

Defines enumeration symbols of a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

7.69, 7.52

[default](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))

Defines default values of a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

7.69, 7.52

[array of](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))

Defines an [annotation arras](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

7.69, 7.52

CDS View Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY...AS](javascript:call_link\('abencds_define_view_entity.htm'\))

Defines a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[ROOT](javascript:call_link\('abencds_define_root_view_v2.htm'\))

Defines a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")

7.75, 7.54

[WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v2.htm'\))

Defines input parameters of a CDS view entity.

7.80, 7.55

[SELECT ... FROM](javascript:call_link\('abencds_select_statement_v2.htm'\))

SELECT statement of a CDS view entity.

7.80, 7.55

[SELECT DISTINCT ... FROM](javascript:call_link\('abencds_select_statement_v2.htm'\))

Duplicates are removed from the result set.

7.83, 7.56

[INNER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v2.htm'\))

Inner join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

7.80, 7.55

[LEFT*|*RIGHT OUTER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v2.htm'\))

Outer join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

7.80, 7.55

[CROSS JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v2.htm'\))

Cross join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

7.80, 7.55

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_association_v2.htm'\))

Defines a CDS association in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[OF *{*{EXACT ONE} | MANY | ONE*}* TO *{*{EXACT ONE} | MANY | ONE*}*](javascript:call_link\('abencds_cardinality_v2.htm'\))

Cardinality specification written in words.

7.91, 7.58

[\[min...max\]](javascript:call_link\('abencds_cardinality_v2.htm'\))

Numeric cardinality specification.

7.80, 7.55

[WITH DEFAULT FILTER](javascript:call_link\('abencds_association_v2.htm'\))

Specifies a default filter condition of a CDS association.

7.80, 7.55

[1:](javascript:call_link\('abencds_path_expr_card_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

7.80, 7.55

[INNER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

7.80, 7.55

[LEFT OUTER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

7.80, 7.55

[COMPOSITION ... OF](javascript:call_link\('abencds_composition_v2.htm'\))

Defines a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry").

7.75, 7.54

[ASSOCIATION TO PARENT ... AS ... ON](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\))

Defines a CDS to-parent association.

7.75, 7.54

[KEY](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Defines an element of a [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) as key field.

7.80, 7.55

[AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Defines an alias name for an element of a [SELECT](javascript:call_link\('abencds_select_list_v2.htm'\)) list.

7.80, 7.55

[$PROJECTION.\*](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Reuses expressions from the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
in an operand position of the SELECT list of the same CDS view entity.

7.84, 7.56

[WHERE ...](javascript:call_link\('abencds_where_clause_v2.htm'\))

WHERE clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[GROUP BY ...](javascript:call_link\('abencds_group_by_v2.htm'\))

GROUP-BY clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[HAVING ...](javascript:call_link\('abencds_having_clause_v2.htm'\))

HAVING clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[EXCEPT ...](javascript:call_link\('abencds_except_v2.htm'\))

EXCEPT clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[INTERSECT ...](javascript:call_link\('abencds_intersect_v2.htm'\))

INTERSECT clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[UNION *\[*ALL*\]*](javascript:call_link\('abencds_union_v2.htm'\))

UNION clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

Elementary Operands

Operators

Meaning

ABAP Release

[Untyped literal](javascript:call_link\('abencds_untyped_literal_v2.htm'\))

Defines an [untyped literal](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[Typed literal](javascript:call_link\('abencds_typed_literal_v2.htm'\))

Defines a [typed literal](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry").

7.83, 7.56

[$parameters.\*](javascript:call_link\('abencds_parameter_v2.htm'\))

Specifies an input parameter.

7.80, 7.55

[$session.user](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[$session.client](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[$session.system\_language](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[$session.system\_date](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.80, 7.55

[$session.user\_timezone](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[$session.user\_date](javascript:call_link\('abencds_session_var_builtin_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[$session.bs\_instance\_id](javascript:call_link\('abencds_session_var_application_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.86, 7.57

[$session.bs\_zone\_id](javascript:call_link\('abencds_session_var_application_v2.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.86, 7.57

Expressions

Operators

Meaning

ABAP Release

[MAX](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [MIN](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [AVG *\[*AS dtype*\]*](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [SUM](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [COUNT](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[+](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [\-](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [\*](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [/](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))

Arithmetic expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[CASE](javascript:call_link\('abencds_case_expression_v2.htm'\)), [WHEN](javascript:call_link\('abencds_case_expression_v2.htm'\)), [THEN](javascript:call_link\('abencds_case_expression_v2.htm'\)), [ELSE](javascript:call_link\('abencds_case_expression_v2.htm'\)), [END](javascript:call_link\('abencds_case_expression_v2.htm'\))

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[ELSE NULL](javascript:call_link\('abencds_case_expression_v2.htm'\))

Optional addition for a case distinction.

7.89, 7.57

[CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\))

Cast expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

[\=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<>](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [\>](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [\>=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), [NOT](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [AND](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [OR](javascript:call_link\('abencds_conditional_expression_v2.htm'\))

Relational expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.85, 7.56

Built-In Functions

Function

Meaning

ABAP Release

[ABS](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [CEIL](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [DIV](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [DIVISION](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [FLOOR](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [MOD](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [ROUND](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[CONCAT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [INSTR](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LEFT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LENGTH](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LPAD](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LOWER](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LTRIM](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [REPLACE](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RIGHT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RPAD](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RTRIM](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [SUBSTRING](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [UPPER](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[REPLACE\_REGEXPR](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.81, 7.55

[BINTOHEX](javascript:call_link\('abencds_conv_func_types_v2.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

Byte string function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[COALESCE](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

Type conversion function in a [SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) statement.

7.80, 7.55

[UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80,7.55

[GET\_NUMERIC\_VALUE](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [CURR\_TO\_DECFLOAT\_AMOUNT](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.83, 7.56

[DATN\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATN\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATN\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_IS\_VALID](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v2.htm'\))

Date function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[TIMS\_IS\_VALID](javascript:call_link\('abencds_time_functions_v2.htm'\))

Time function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[UTCL\_CURRENT](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [UTCL\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [UTCL\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_IS\_VALID](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

Time stamp function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v2.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v2.htm'\))

Time zone functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80, 7.55

[TSTMP\_TO\_DATS](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMPL\_TO\_UTCL](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMPL\_FROM\_UTCL](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [DATS\_TO\_DATN](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [DATS\_FROM\_DATN](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TIMS\_TO\_TIMN](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TIMS\_FROM\_TIMN](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

Date/time conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)).

7.80,7.55

CDS Projection Views of Type Transactional Query   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry").

7.76, 7.54

[ROOT](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") as root entity.

7.76, 7.54

[PROVIDER CONTRACT TRANSACTIONAL\_QUERY](javascript:call_link\('abencds_pv_provider_contract.htm'\))

Sets the provider contract.

7.83, 7.56

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_proj_view_association.htm'\))

Defines a CDS association in a CDS transactional query.

7.80, 7.55

[OF *{*{EXACT ONE} | MANY | ONE*}* TO *{*{EXACT ONE} | MANY | ONE*}*](javascript:call_link\('abencds_cardinality_v2.htm'\))

Cardinality specification written in words.

7.91, 7.58

[\[min...max\]](javascript:call_link\('abencds_cardinality_v2.htm'\))

Numeric cardinality specification.

7.80, 7.55

[WITH DEFAULT FILTER](javascript:call_link\('abencds_simple_association_v2.htm'\))

Specifies a default filter condition of a CDS association.

7.80, 7.55

[REDEFINE ASSOCIATION ... AS ... REDIRECTED TO PARENT | COMPOSITION CHILD](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\))

Redefines an exposed association from the projected entity and redirects it to a new projection target.

7.82, 7.56

[KEY](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines an element of a SELECT list as key field.

7.76, 7.54

[VIRTUAL](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in a transactional query.

7.76, 7.54

[LOCALIZED](javascript:call_link\('abencds_proj_view_element.htm'\))

Displays text elements in the current system language.

7.76, 7.54

[REDIRECTED TO PARENT | COMPOSITION CHILD](javascript:call_link\('abencds_proj_view_element.htm'\))

Redirects a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in a CDS projection view to a projection of the association target.

7.76, 7.54

[CAST PRESERVING TYPE](javascript:call_link\('abencds_proj_view_element.htm'\))

Cast expression.

7.76, 7.54

[WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\))

WHERE clause of a SELECT statement.

7.76, 7.54

CDS Projection Views of Type Transactional Interface   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry").

7.86, 7.57

[ROOT](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a CDS transactional interface as root entity.

7.86, 7.57

[PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](javascript:call_link\('abencds_pv_provider_contract.htm'\))

Sets the provider contract.

7.86, 7.57

[KEY](javascript:call_link\('abencds_element_list_interface.htm'\))

Defines an element of a SELECT list as key field.

7.86, 7.57

[REDIRECTED TO PARENT | COMPOSITION CHILD](javascript:call_link\('abencds_element_list_interface.htm'\))

Redirects a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in a CDS projection view to a projection of the association target.

7.86, 7.57

[CAST PRESERVING TYPE](javascript:call_link\('abencds_proj_view_element.htm'\))

Cast expression.

7.86, 7.57

[WHERE](javascript:call_link\('abencds_interface_cond_expr.htm'\))

WHERE clause of a SELECT statement.

7.93, 7.58

CDS Projection Views of Type Analytical Query   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TRANSIENT VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_analytical.htm'\))

Defines a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry").

7.86, 7.57

[WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_apv.htm'\))

Defines input parameters for an analytical query.

7.86, 7.57

[PROVIDER CONTRACT ANALYTICAL\_QUERY](javascript:call_link\('abencds_pv_provider_contract.htm'\))

Sets the provider contract.

7.86, 7.57

[VIRTUAL](javascript:call_link\('abencds_element_apv.htm'\))

Defines virtual element in an analytical query.

7.86, 7.57

[LOCALIZED](javascript:call_link\('abencds_element_apv.htm'\))

Displays text elements in the current system language.

7.86, 7.57

[+](javascript:call_link\('abencds_element_apv.htm'\)), [\-](javascript:call_link\('abencds_element_apv.htm'\)), [\*](javascript:call_link\('abencds_element_apv.htm'\)), [/](javascript:call_link\('abencds_element_apv.htm'\))

Arithmetic expression in a SELECT  statement.

7.85, 7.56

[CAST PRESERVING TYPE](javascript:call_link\('abencds_proj_view_element.htm'\))

Cast expression.

7.86, 7.57

CDS DDIC-based views (obsolete)   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW...AS](javascript:call_link\('abencds_define_view_v1.htm'\))

Defines a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

7.41

[ROOT](javascript:call_link\('abencds_define_root_view_v1.htm'\))

Defines a CDS DDIC-based view (obsolete) as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")

7.75

[WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v1.htm'\))

Defines input parameters of a CDS DDIC-based view (obsolete).

7.42

[SELECT ... FROM](javascript:call_link\('abencds_select_statement_v1.htm'\))

SELECT statement of a CDS DDIC-based view (obsolete).

7.41

[SELECT DISTINCT ... FROM](javascript:call_link\('abencds_select_statement_v1.htm'\))

Duplicates are removed from the result set.

7.41

[INNER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v1.htm'\))

Inner join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

7.41

[LEFT*|*RIGHT OUTER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v1.htm'\))

Outer join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

7.41

[CROSS JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v1.htm'\))

Cross join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

7.51

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_simple_association_v1.htm'\))

Defines a CDS association in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[WITH DEFAULT FILTER](javascript:call_link\('abencds_simple_association_v1.htm'\))

Specifies a default filter condition of a CDS association.

7.50

[1:](javascript:call_link\('abencds_path_expr_card_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

7.41

[INNER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

7.41

[LEFT OUTER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

7.41

[COMPOSITION ... OF](javascript:call_link\('abencds_composition_v1.htm'\))

Defines a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry").

7.75, 7.54

[ASSOCIATION TO PARENT ... AS ... ON](javascript:call_link\('abencds_to_parent_assoc_v1.htm'\))

Defines a CDS to-parent association.

7.75, 7.54

[KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Defines an element of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) as key field.

7.41

[AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Defines an alias name for an element of a [SELECT](javascript:call_link\('abencds_select_list_v1.htm'\)) list.

7.41

[$PROJECTION.\*](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Reuses expressions from the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a CDS DDIC-based view (obsolete) in an operand position of the SELECT list of the same CDS DDIC-based view (obsolete).

7.84, 7.56

[WHERE ...](javascript:call_link\('abencds_where_clause_v1.htm'\))

WHERE clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[GROUP BY ...](javascript:call_link\('abencds_group_by_v1.htm'\))

GROUP-BY clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[HAVING ...](javascript:call_link\('abencds_having_clause_v1.htm'\))

HAVING clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[UNION *\[*ALL*\]*](javascript:call_link\('abencds_union_v1.htm'\))

UNION clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

Elementary Operands

Operators

Meaning

ABAP Release

[Untyped literal](javascript:call_link\('abencds_literal_v1.htm'\))

Defines an [untyped literal](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry").

7.41

[#domain.\*](javascript:call_link\('abencds_literal_v1.htm'\))

Defines a literal with a domain prefix.

7.42

[: | $parameters.\*](javascript:call_link\('abencds_parameter_v1.htm'\))

Specifies an input parameter.

7.42

[$session.user](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.50

[$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.50

[$session.system\_language](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.50

[$session.system\_date](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.51

[$session.user\_timezone](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[$session.user\_date](javascript:call_link\('abencds_session_variable_v1.htm'\))

Defines a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry").

7.81, 7.55

Expressions

Operators

Meaning

ABAP Release

[MAX](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [MIN](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [AVG *\[*AS dtype*\]*](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [SUM](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [COUNT](javascript:call_link\('abencds_aggregate_functions_v1.htm'\))

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[+](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)), [\-](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)), [\*](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

Arithmetic expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[/](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

Division in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.42

[CASE](javascript:call_link\('abencds_case_expression_v1.htm'\)), [WHEN](javascript:call_link\('abencds_case_expression_v1.htm'\)), [THEN](javascript:call_link\('abencds_case_expression_v1.htm'\)), [ELSE](javascript:call_link\('abencds_case_expression_v1.htm'\)), [END](javascript:call_link\('abencds_case_expression_v1.htm'\))

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\))

Cast expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[\=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<>](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [\>](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [\>=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v1.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v1.htm'\)), [NOT](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [AND](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [OR](javascript:call_link\('abencds_conditional_expression_v1.htm'\))

Relational expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

Built-In Functions

Function

Meaning

ABAP Release

[ABS](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [DIV](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [DIVISION](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [FLOOR](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [ROUND](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.42

[CEIL](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [MOD](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[CONCAT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [REPLACE](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.42

[CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [INSTR](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LEFT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LENGTH](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RIGHT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RPAD](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.50

[LPAD](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [SUBSTRING](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.41

[LOWER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [UPPER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.51

[BINTOHEX](javascript:call_link\('abencds_conv_func_types_v1.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

Byte string function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.50

[COALESCE](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.42

[FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

Type conversion function in a [SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) statement.

7.51

[UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\)), [DECIMAL\_SHIFT](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.42

[DATN\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATN\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATN\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v1.htm'\))

Date functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

7.77, 7.54

[DATS\_IS\_VALID](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v1.htm'\))

Date functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.50

[TIMS\_IS\_VALID](javascript:call_link\('abencds_time_functions_v1.htm'\))

Time function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.50

[UTCL\_CURRENT](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [UTCL\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [UTCL\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

Time functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.77, 7.54

[TSTMP\_IS\_VALID](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

Time stamp functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.50

[ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\))

Time zone functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.51

[TSTMP\_TO\_DATS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

Date/time conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.51

[TSTMPL\_TO\_UTCL](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMPL\_FROM\_UTCL](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [DATS\_TO\_DATN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [DATS\_FROM\_DATN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TIMS\_TO\_TIMN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TIMS\_FROM\_TIMN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

Date/time conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

7.77, 7.54

CDS Entity Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[EXTEND VIEW ENTITY...WITH](javascript:call_link\('abencds_extend_view_entity.htm'\))

Extends a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") using a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry")

7.78, 7.55

[EXTEND CUSTOM ENTITY...WITH](javascript:call_link\('abencds_extend_custom_entity.htm'\))

Extends a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") using a [CDS custom entity extension](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry")

7.89, 7.57

[EXTEND ABSTRACT ENTITY...WITH](javascript:call_link\('abencds_extend_abstract_entity.htm'\))

Extends a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") using a [CDS abstract entity extension](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry")

7.84, 7.56

[EXTEND VIEW ...](javascript:call_link\('abencds_extend_view.htm'\)) [WITH](javascript:call_link\('abencds_extend_view.htm'\))

Extends a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") using a [CDS DDIC-based view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")

7.42

CDS Table Functions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](javascript:call_link\('abencds_f1_define_table_function.htm'\))

Defines a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

7.61, 7.50

[WITH PARAMETERS](javascript:call_link\('abencds_f1_func_parameter_list.htm'\))

Defines input parameters for a CDS table function

7.61, 7.50

[KEY](javascript:call_link\('abencds_f1_return_list_element.htm'\))

Defines an element as key element.

7.61, 7.50

CDS Hierarchies   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE HIERARCHY ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

7.73, 7.53

[WITH PARAMETERS](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\))

Defines input parameters of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[AS PARENT CHILD HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") using parent-child relationships.

7.73, 7.53

[SOURCE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the data source of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[CHILD TO PARENT ASSOCIATION](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[PERIOD FROM ... TO ... VALID FROM ... TO ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [temporal hierarchy](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry").

7.75, 7.54

[DIRECTORY ... FILTER BY ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies a condition for the source of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.85, 7.56

[START WHERE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the start condition of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[SIBLINGS ORDER BY ... ASCENDING *|* DESCENDING](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the sort order of [sibling nodes](javascript:call_link\('abensibling_node_glosry.htm'\) "Glossary Entry") in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[DEPTH ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Delimits the [hierarchy levels](javascript:call_link\('abenhierarchy_level_glosry.htm'\) "Glossary Entry") of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[NODETYPE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines an element as a node type for a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[LOAD BULK *|* INCREMENTAL](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies a load policy for a CDS hierarchy.

7.74, 7.54

[MULTIPLE PARENTS ... NOT ALLOWED *|* LEAVES *|* ALLOWED](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if multiple [parent nodes](javascript:call_link\('abenparent_node_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[ORPHANS ... IGNORE *|* ERROR *|* ROOT](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if [orphan nodes](javascript:call_link\('abenorphan_node_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[CYCLES ... IGNORE *|* BREAKUP](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if [node cycles](javascript:call_link\('abennode_cycle_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[GENERATE SPANTREE](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Reduces a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") to a tree.

7.77, 7.54

[CACHE ON *|* OFF *|* FORCE](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the caching policy for a CDS hierarchy.

7.82, 7.56

[KEY](javascript:call_link\('abencds_f1_hiera_element.htm'\))

Defines an element as a key element.

7.73, 7.53

CDS Custom Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE CUSTOM ENTITY ...](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))

Defines a CDS custom entity.

7.75, 7.54

[ROOT](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))

Defines a CDS custom entity as a root entity.

7.75, 7.54

[WITH PARAMETERS](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))

Defines input parameters of a CDS custom entity.

7.75, 7.54

[ASSOCIATION ... TO ...](javascript:call_link\('abencds_f1_custom_association.htm'\)) [ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Defines a CDS association in the [element list](javascript:call_link\('abencds_f1_custom_element.htm'\)) of a CDS custom entity.

7.75, 7.54

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_custom_association.htm'\))

Specifies a default filter condition of a CDS association.

7.75, 7.54

[COMPOSITION ... OF](javascript:call_link\('abencds_f1_custom_composition.htm'\))

Defines a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") in the element list of a CDS custom entity.

7.75, 7.54

[ASSOCIATION TO PARENT ... ON](javascript:call_link\('abencds_f1_custom_tp_association.htm'\))

Defines a CDS to-parent association in the element list of a CDS custom entity.

7.75, 7.54

[KEY](javascript:call_link\('abencds_f1_custom_element.htm'\))

Defines an element as key element.

7.75, 7.54

CDS Abstract Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ABSTRACT ENTITY ...](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

7.70, 7.53

[ROOT](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines a CDS abstract entity as a root entity.

7.75, 7.54

[WITH PARAMETERS](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\))

Defines input parameters of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

7.70, 7.53

[ASSOCIATION ... TO ... ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Defines a CDS association in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

7.70, 7.53

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_absent_association.htm'\))

Specifies a default filter condition of a CDS association.

7.70, 7.53

[COMPOSITION ... OF](javascript:call_link\('abencds_absent_composition.htm'\))

Defines a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") in the element list of a CDS abstract entity.

7.75, 7.54

[ASSOCIATION TO PARENT ... ON](javascript:call_link\('abencds_absent_to_parent_assoc.htm'\))

Defines a CDS to-parent association in the element list of a CDS abstract entity.

7.75, 7.54

[KEY](javascript:call_link\('abencds_f1_absent_list_element.htm'\))

Defines an element as a key element.

7.70, 7.53

CDS Metadata Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[ANNOTATE VIEW ... WITH](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") for a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

7.65, 7.51

[ANNOTATE ENTITY ... WITH](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") for a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

7.70, 7.53

[PARAMETERS](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))

Extends the annotations of the input parameters of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

7.65, 7.51

CDS Tuning Objects   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY BUFFER ON](javascript:call_link\('abencds_define_view_entity_buffer.htm'\))

Defines a [CDS entity buffer](javascript:call_link\('abencds_entity_buffer_glosry.htm'\) "Glossary Entry") for a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

7.87, 7.57

[LAYER *{*CORE *|* LOCALIZATION *|* INDUSTRY *|* PARTNER *|* CUSTOMER*}*](javascript:call_link\('abencds_define_view_entity_buffer.htm'\))

Defines the layer for which the entity buffer is valid.

7.87, 7.57

[TYPE *{*SINGLE *|* GENERIC NUMBER OF KEY ELEMENTS *|* FULL *|* NONE*}*](javascript:call_link\('abencds_define_view_entity_buffer.htm'\))

Defines the buffering type of a CDS entity buffer.

7.87, 7.57

SDL   

CDS Service Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))

Defines a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry").

7.75, 7.54

[PROVIDER CONTRACTS](javascript:call_link\('abensrvd_provider_contract.htm'\))

Defines a provider contract for a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry"). Provider contracts specify the scenario for which the service definition is intended. The effect is that stricter syntax checks are applied.

7.89, 7.57

[EXPOSE...AS](javascript:call_link\('abensrvd_define_service.htm'\))

Exposes [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry").

7.75, 7.54

CDS Service Definition Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[EXTEND SERVICE...WITH](javascript:call_link\('abensrvd_extend_service.htm'\))

Defines a [CDS service definition extension](javascript:call_link\('abencds_service_def_ext_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[EXPOSE...AS](javascript:call_link\('abensrvd_extend_service.htm'\))

Exposes [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") as part of a [CDS service definition extension](javascript:call_link\('abencds_service_def_ext_glosry.htm'\) "Glossary Entry").

7.89, 7.57

DCL   

CDS Roles   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\))

Defines a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[SWITCHABLE](javascript:call_link\('abencds_f1_define_role.htm'\))

Addition to the DEFINE ROLE statement that makes the role conform to the switch state of the [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[GRANT SELECT ON](javascript:call_link\('abencds_dcl_role_rules.htm'\))

Defines an access rule in a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[GRANT SELECT ON ... AS PROJECTION ON ... FALLBACK ASSOCIATION](javascript:call_link\('abencds_dcl_role_proj_rule.htm'\))

Defines a special access rule for [CDS transactional queries](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry").

7.91, 7.58

[WITH OPTIONAL ELEMENTS ... *\[*DEFAULT TRUE *|* FALSE*\]*](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

Marks elements of an access condition as optional.

7.85, 7.56

[ALL](javascript:call_link\('abencds_f1_cond_literal.htm'\))

With the addition ALL, access conditions can express that access is granted only if all values of a set-valued association satisfy the condition.

7.81, 7.55

[EXISTS](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Defines that different access conditions that use the same set-valued association should not be joined in their fields by means of a common join expression.

7.81, 7.55

[COMBINATION MODE OR*|*AND](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

Defines how the access conditions of multiple CDS access rules are combined.

7.77, 7.54

[REDEFINITION](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

Makes the current access rules the only existing access rule to the effect that all other access rules are ignored.

7.77, 7.54

[WHERE](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

WHERE clause in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[TRUE (GRANT SELECT ON ... WHERE)](javascript:call_link\('abencds_dcl_role_conditions.htm'\))

The Boolean predicate TRUE defines that the access condition in question is always met.

7.73, 7.53

[FALSE (GRANT SELECT ON ... WHERE)](javascript:call_link\('abencds_dcl_role_conditions.htm'\))

The Boolean predicate FALSE defines that the access condition in question is always false.

7.73, 7.53

[VOID (GRANT SELECT ON ... WHERE](javascript:call_link\('abencds_dcl_role_conditions.htm'\))

Defines that the access condition in question is ignored.

7.77, 7.54

[AND](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))

Boolean operator in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[OR](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))

Boolean operator in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))

Boolean operator in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.69, 7.52

[INHERIT](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\))

Defines an inherited access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"). Obsolete as of 7.72, 7.53

7.65, 7.51

[ASPECT pfcg\_auth](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))

PFCG condition as part of an access condition in a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.42

[ASPECT user](javascript:call_link\('abencds_f1_cond_user.htm'\))

User condition for a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

7.65, 7.51

[FILTER BY (ASPECT)](javascript:call_link\('abencds_f1_cond_aspect.htm'\))

Uses an aspect condition to filter the rows of the protected entity.

7.85, 7.56

[ASPECT aspect](javascript:call_link\('abencds_f1_cond_aspect.htm'\))

User-defined [aspect condition](javascript:call_link\('abencds_f1_cond_aspect.htm'\)).

7.77, 7.54

[DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Specifies a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in a [PFCG condition](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

7.72, 7.53

[\=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.42

[<>](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.42

[< *|* >](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.42

[<=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.42

[\>=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.42

[?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))

Operator of a comparison expression in a literal condition.

7.65, 7.51

[BETWEEN](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Operator of a literal condition.

7.69, 7.52

[LIKE](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Operator of a literal condition.

7.62, 7.50

[IS INITIAL](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Operator of a literal condition.

7.78, 7.55

[IS NULL](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Operator of a literal condition.

7.69, 7.52

[BYPASS WHEN](javascript:call_link\('abencds_f1_cond_literal.htm'\))

Defines a condition for bypassing an authorization.

7.78, 7.55

[IN SCENARIO](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))

Specifies a switchable authorization check for an authorization object.

7.77, 7.54

[INHERITING CONDITIONS FROM ENTITY](javascript:call_link\('abencds_f1_cond_inherit.htm'\))

Defines an inheritance condition of a CDS role.

7.72, 7.53

[INHERITING CONDITIONS FROM SUPER](javascript:call_link\('abencds_f1_cond_inherit.htm'\))

Defines an inheritance condition of a CDS role.

7.77, 7.54

[REPLACING](javascript:call_link\('abencds_f1_cond_inherit_replacing.htm'\))

Can be used to modify inherited access conditions.

7.77, 7.54

[IF ... THEN ... ELSE ...](javascript:call_link\('abencds_f1_dcl_ifthenelse.htm'\))

Defines a control structure as part of an access condition in a CDS role.

7.88, 7.57

[SACF\_CHECK\_IN\_USE](javascript:call_link\('abencds_f1_dcl_function.htm'\))

DCL function.

7.85, 7.56

[OPTIONAL\_ELEMENT\_EXISTS](javascript:call_link\('abencds_f1_dcl_function.htm'\))

DCL function.

7.85, 7.56

[SWITCH\_RUNTIME\_STATE](javascript:call_link\('abencds_f1_dcl_function.htm'\))

DCL function.

7.91, 7.58

[TOGGLE\_RUNTIME\_STATE](javascript:call_link\('abencds_f1_dcl_function.htm'\))

DCL function.

7.91, 7.58

CDS Access Policy   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[DEFINE PFCG\_MAPPING ...](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in an access policy.

7.73, 7.53

[CONSTRAINT ID](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Defines further restrictions for authorization fields of authorization objects in a CDS access policy.

7.77, 7.54

[DEFINE ASPECT ... AS SELECT FROM ...](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines a user-defined aspect as part of a CDS access policy.

7.77, 7.54

[WITH USER ELEMENT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines an element of an aspect entity as input field for the user name in the CDS access policy.

7.77, 7.54

[WITH FILTER ELEMENTS](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines the filter element of an aspect entity in a CDS access policy.

7.85, 7.56

[BYPASS WHEN](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines a condition for bypassing an aspect in a CDS access policy.

7.77, 7.54