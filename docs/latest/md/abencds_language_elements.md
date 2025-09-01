  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Feature%20Tables%2C%20ABENCDS_LANGUAGE_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Feature Tables

The following sections shows all available language elements of the [CDS TDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl_glosry.htm "Glossary Entry"), [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"), and [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") and their release dates. For further information on the release dates, see [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm).

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

In addition to the language elements shown here, CDS source code can also contain [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) with metadata.

TDL   

CDS Type Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm)

Defines a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") in [CDS TDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl_glosry.htm "Glossary Entry").

7.91, 7.58

[DEFINE TYPE ... ENUM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_enum_type.htm)

Defines a [CDS enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_type_glosry.htm "Glossary Entry") in [CDS TDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl_glosry.htm "Glossary Entry").

7.93, 7.58

FDL   

CDS Function Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE SCALAR FUNCTION ... WITH PARAMETERS ... RETURNS ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm)

Defines a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry")

7.93, 7.58

[TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm)

Typing by reference to another parameter in a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry").

7.93, 7.58

[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)

CDS amount and quantity handling in CDS scalar functions.

7.93, 7.58

[WITH REFERENCE TYPE CASEH WHEN ... *\[*AND ... *\]* THEN ... *\[*ELSE ... *\]* END](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)

Dynamic specification of a reference type in CDS scalar functions.

7.93, 7.58

DDL   

CDS Annotation Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[define annotation ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation.htm)

Defines a [CDS annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry")

7.69, 7.52

[enum](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_type.htm)

Defines enumeration symbols of a [CDS annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry")

7.69, 7.52

[default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_type.htm)

Defines default values of a [CDS annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry")

7.69, 7.52

[array of](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_arr.htm)

Defines an [annotation arras](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry").

7.69, 7.52

CDS View Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY...AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm)

Defines a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

7.80, 7.55

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_root_view_v2.htm)

Defines a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") as a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry")

7.75, 7.54

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v2.htm)

Defines input parameters of a CDS view entity.

7.80, 7.55

[SELECT ... FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm)

SELECT statement of a CDS view entity.

7.80, 7.55

[SELECT DISTINCT ... FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm)

Duplicates are removed from the result set.

7.83, 7.56

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm)

7.80, 7.55

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm)

7.80, 7.55

[CROSS JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm)

Cross join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm)

7.80, 7.55

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v2.htm)

Defines a CDS association in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[OF *{*{EXACT ONE} | MANY | ONE*}* TO *{*{EXACT ONE} | MANY | ONE*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cardinality_v2.htm)

Cardinality specification written in words.

7.91, 7.58

[\[min...max\]](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cardinality_v2.htm)

Numeric cardinality specification.

7.80, 7.55

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v2.htm)

Specifies a default filter condition of a CDS association.

7.80, 7.55

[1:](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_card_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm)

7.80, 7.55

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm)

7.80, 7.55

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm)

7.80, 7.55

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_v2.htm)

Defines a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry").

7.75, 7.54

[ASSOCIATION TO PARENT ... AS ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_to_parent_assoc_v2.htm)

Defines a CDS to-parent association.

7.75, 7.54

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm)

Defines an element of a [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v2.htm) as key field.

7.80, 7.55

[AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm)

Defines an alias name for an element of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v2.htm) list.

7.80, 7.55

[$PROJECTION.\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm)

Reuses expressions from the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
in an operand position of the SELECT list of the same CDS view entity.

7.84, 7.56

[WHERE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v2.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[GROUP BY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v2.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[HAVING ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_having_clause_v2.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[EXCEPT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_except_v2.htm)

EXCEPT clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[INTERSECT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_intersect_v2.htm)

INTERSECT clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[UNION *\[*ALL*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v2.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

Elementary Operands

Operators

Meaning

ABAP Release

[Untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_untyped_literal_v2.htm)

Defines an [untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuntyped_literal_glosry.htm "Glossary Entry").

7.80, 7.55

[Typed literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typed_literal_v2.htm)

Defines a [typed literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyped_literal_glosry.htm "Glossary Entry").

7.83, 7.56

[$parameters.\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v2.htm)

Specifies an input parameter.

7.80, 7.55

[$session.user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.80, 7.55

[$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.80, 7.55

[$session.system\_language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.80, 7.55

[$session.system\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.80, 7.55

[$session.user\_timezone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.81, 7.55

[$session.user\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_builtin_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.81, 7.55

[$session.bs\_instance\_id](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_application_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.86, 7.57

[$session.bs\_zone\_id](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_var_application_v2.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.86, 7.57

Expressions

Operators

Meaning

ABAP Release

[MAX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm), [MIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm), [SUM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm), [COUNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[+](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm), [\-](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm), [\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm), [/](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[CASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm), [WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm), [THEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm), [ELSE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm), [END](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[ELSE NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm)

Optional addition for a case distinction.

7.89, 7.57

[CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

[\=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [<>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [<](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [\>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [<=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [\>=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v2.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_betw_v2.htm), [LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_like_v2.htm), [IS NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_null_v2.htm), [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm), [AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm), [OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.85, 7.56

Built-In Functions

Function

Meaning

ABAP Release

[ABS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [CEIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [DIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [DIVISION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [FLOOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [MOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [ROUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[CONCAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [INSTR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [LEFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [LENGTH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [LPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [LOWER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [LTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [RIGHT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [RPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [RTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [UPPER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.81, 7.55

[BINTOHEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v2.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v2.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[COALESCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v2.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v2.htm)

Type conversion function in a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) statement.

7.80, 7.55

[UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80,7.55

[GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm), [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.83, 7.56

[DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v2.htm)

Date function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_time_functions_v2.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v2.htm)

Time stamp function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v2.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v2.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80, 7.55

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm), [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v2.htm)

Date/time conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm).

7.80,7.55

CDS Projection Views of Type Transactional Query   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY... AS PROJECTION ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_projection.htm)

Defines a [CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry").

7.76, 7.54

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_projection.htm)

Defines a [CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") as root entity.

7.76, 7.54

[PROVIDER CONTRACT TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm)

Sets the provider contract.

7.83, 7.56

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_association.htm)

Defines a CDS association in a CDS transactional query.

7.80, 7.55

[OF *{*{EXACT ONE} | MANY | ONE*}* TO *{*{EXACT ONE} | MANY | ONE*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cardinality_v2.htm)

Cardinality specification written in words.

7.91, 7.58

[\[min...max\]](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cardinality_v2.htm)

Numeric cardinality specification.

7.80, 7.55

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v2.htm)

Specifies a default filter condition of a CDS association.

7.80, 7.55

[REDEFINE ASSOCIATION ... AS ... REDIRECTED TO PARENT | COMPOSITION CHILD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_redefined_assoc.htm)

Redefines an exposed association from the projected entity and redirects it to a new projection target.

7.82, 7.56

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Defines an element of a SELECT list as key field.

7.76, 7.54

[VIRTUAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Defines a [CDS virtual element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in a transactional query.

7.76, 7.54

[LOCALIZED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Displays text elements in the current system language.

7.76, 7.54

[REDIRECTED TO PARENT | COMPOSITION CHILD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") in a CDS projection view to a projection of the association target.

7.76, 7.54

[CAST PRESERVING TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Cast expression.

7.76, 7.54

[WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_cond_expr.htm)

WHERE clause of a SELECT statement.

7.76, 7.54

CDS Projection Views of Type Transactional Interface   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY... AS PROJECTION ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_projection.htm)

Defines a [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry").

7.86, 7.57

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_projection.htm)

Defines a CDS transactional interface as root entity.

7.86, 7.57

[PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm)

Sets the provider contract.

7.86, 7.57

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_list_interface.htm)

Defines an element of a SELECT list as key field.

7.86, 7.57

[REDIRECTED TO PARENT | COMPOSITION CHILD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_list_interface.htm)

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") in a CDS projection view to a projection of the association target.

7.86, 7.57

[CAST PRESERVING TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Cast expression.

7.86, 7.57

[WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_cond_expr.htm)

WHERE clause of a SELECT statement.

7.93, 7.58

CDS Projection Views of Type Analytical Query   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TRANSIENT VIEW ENTITY... AS PROJECTION ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_analytical.htm)

Defines a [CDS analytical projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry").

7.86, 7.57

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_apv.htm)

Defines input parameters for an analytical query.

7.86, 7.57

[PROVIDER CONTRACT ANALYTICAL\_QUERY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm)

Sets the provider contract.

7.86, 7.57

[VIRTUAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm)

Defines virtual element in an analytical query.

7.86, 7.57

[LOCALIZED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm)

Displays text elements in the current system language.

7.86, 7.57

[+](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm), [\-](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm), [\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm), [/](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm)

Arithmetic expression in a SELECT  statement.

7.85, 7.56

[CAST PRESERVING TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm)

Cast expression.

7.86, 7.57

CDS DDIC-based views (obsolete)   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW...AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm)

Defines a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

7.41

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_root_view_v1.htm)

Defines a CDS DDIC-based view (obsolete) as a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry")

7.75

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm)

Defines input parameters of a CDS DDIC-based view (obsolete).

7.42

[SELECT ... FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

SELECT statement of a CDS DDIC-based view (obsolete).

7.41

[SELECT DISTINCT ... FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

Duplicates are removed from the result set.

7.41

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v1.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

7.41

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v1.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

7.41

[CROSS JOIN ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v1.htm)

Cross join in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

7.51

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v1.htm)

Defines a CDS association in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v1.htm)

Specifies a default filter condition of a CDS association.

7.50

[1:](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_card_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm)

7.41

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm)

7.41

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm)

7.41

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_v1.htm)

Defines a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry").

7.75, 7.54

[ASSOCIATION TO PARENT ... AS ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_to_parent_assoc_v1.htm)

Defines a CDS to-parent association.

7.75, 7.54

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm)

Defines an element of a [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) as key field.

7.41

[AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm)

Defines an alias name for an element of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) list.

7.41

[$PROJECTION.\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm)

Reuses expressions from the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of a CDS DDIC-based view (obsolete) in an operand position of the SELECT list of the same CDS DDIC-based view (obsolete).

7.84, 7.56

[WHERE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v1.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[GROUP BY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v1.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[HAVING ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_having_clause_v1.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[UNION *\[*ALL*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

Elementary Operands

Operators

Meaning

ABAP Release

[Untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

Defines an [untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuntyped_literal_glosry.htm "Glossary Entry").

7.41

[#domain.\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

Defines a literal with a domain prefix.

7.42

[: | $parameters.\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

Specifies an input parameter.

7.42

[$session.user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.50

[$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.50

[$session.system\_language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.50

[$session.system\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.51

[$session.user\_timezone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.81, 7.55

[$session.user\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)

Defines a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry").

7.81, 7.55

Expressions

Operators

Meaning

ABAP Release

[MAX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm), [MIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm), [SUM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm), [COUNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[+](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm), [\-](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm), [\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[/](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm)

Division in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.42

[CASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm), [WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm), [THEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm), [ELSE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm), [END](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[\=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [<>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [<](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [\>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [<=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [\>=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_betw_v1.htm), [LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_like_v1.htm), [IS NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_null_v1.htm), [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm), [AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm), [OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

Built-In Functions

Function

Meaning

ABAP Release

[ABS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm), [DIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm), [DIVISION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm), [FLOOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm), [ROUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.42

[CEIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm), [MOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[CONCAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.42

[CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [INSTR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LEFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LENGTH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [RIGHT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [RPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [RTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.50

[LPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.41

[LOWER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [UPPER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.51

[BINTOHEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.50

[COALESCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v1.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.42

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm)

Type conversion function in a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) statement.

7.51

[UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v1.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v1.htm), [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v1.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.42

[DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm)

Date functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm)

7.77, 7.54

[DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm)

Date functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.50

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_time_functions_v1.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.50

[UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm)

Time functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.77, 7.54

[TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm)

Time stamp functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.50

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.51

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm)

Date/time conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.51

[TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm)

Date/time conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

7.77, 7.54

CDS Entity Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[EXTEND VIEW ENTITY...WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view_entity.htm)

Extends a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") using a [CDS view entity extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry")

7.78, 7.55

[EXTEND CUSTOM ENTITY...WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_custom_entity.htm)

Extends a [CDS custom entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") using a [CDS custom entity extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cus_entity_extend_glosry.htm "Glossary Entry")

7.89, 7.57

[EXTEND ABSTRACT ENTITY...WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_abstract_entity.htm)

Extends a [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") using a [CDS abstract entity extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abs_entity_extend_glosry.htm "Glossary Entry")

7.84, 7.56

[EXTEND VIEW ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm) [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm)

Extends a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") using a [CDS DDIC-based view extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

7.42

CDS Table Functions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_table_function.htm)

Defines a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry")

7.61, 7.50

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_func_parameter_list.htm)

Defines input parameters for a CDS table function

7.61, 7.50

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_element.htm)

Defines an element as key element.

7.61, 7.50

CDS Hierarchies   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE HIERARCHY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

7.73, 7.53

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_parameter_list.htm)

Defines input parameters of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[AS PARENT CHILD HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") using parent-child relationships.

7.73, 7.53

[SOURCE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies the data source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[CHILD TO PARENT ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[PERIOD FROM ... TO ... VALID FROM ... TO ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines a [temporal hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry").

7.75, 7.54

[DIRECTORY ... FILTER BY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies a condition for the source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.85, 7.56

[START WHERE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies the start condition of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[SIBLINGS ORDER BY ... ASCENDING *|* DESCENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies the sort order of [sibling nodes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensibling_node_glosry.htm "Glossary Entry") in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[DEPTH ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Delimits the [hierarchy levels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[NODETYPE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines an element as a node type for a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[LOAD BULK *|* INCREMENTAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Specifies a load policy for a CDS hierarchy.

7.74, 7.54

[MULTIPLE PARENTS ... NOT ALLOWED *|* LEAVES *|* ALLOWED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if multiple [parent nodes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparent_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[ORPHANS ... IGNORE *|* ERROR *|* ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [orphan nodes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenorphan_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[CYCLES ... IGNORE *|* BREAKUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [node cycles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennode_cycle_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

7.73, 7.53

[GENERATE SPANTREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Reduces a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") to a tree.

7.77, 7.54

[CACHE ON *|* OFF *|* FORCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm)

Defines the caching policy for a CDS hierarchy.

7.82, 7.56

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm)

Defines an element as a key element.

7.73, 7.53

CDS Custom Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE CUSTOM ENTITY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity.

7.75, 7.54

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity as a root entity.

7.75, 7.54

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_parameter_list.htm)

Defines input parameters of a CDS custom entity.

7.75, 7.54

[ASSOCIATION ... TO ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_association.htm) [ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_element.htm) of a CDS custom entity.

7.75, 7.54

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_association.htm)

Specifies a default filter condition of a CDS association.

7.75, 7.54

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_composition.htm)

Defines a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") in the element list of a CDS custom entity.

7.75, 7.54

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_tp_association.htm)

Defines a CDS to-parent association in the element list of a CDS custom entity.

7.75, 7.54

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_element.htm)

Defines an element as key element.

7.75, 7.54

CDS Abstract Entities   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ABSTRACT ENTITY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm)

Defines an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

7.70, 7.53

[ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm)

Defines a CDS abstract entity as a root entity.

7.75, 7.54

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_parameter_list.htm)

Defines input parameters of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

7.70, 7.53

[ASSOCIATION ... TO ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

7.70, 7.53

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm)

Specifies a default filter condition of a CDS association.

7.70, 7.53

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_composition.htm)

Defines a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") in the element list of a CDS abstract entity.

7.75, 7.54

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_to_parent_assoc.htm)

Defines a CDS to-parent association in the element list of a CDS abstract entity.

7.75, 7.54

[KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm)

Defines an element as a key element.

7.70, 7.53

CDS Metadata Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[ANNOTATE VIEW ... WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

7.65, 7.51

[ANNOTATE ENTITY ... WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

7.70, 7.53

[PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_annotate_view_para_list.htm)

Extends the annotations of the input parameters of a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

7.65, 7.51

CDS Tuning Objects   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE VIEW ENTITY BUFFER ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity_buffer.htm)

Defines a [CDS entity buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") for a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

7.87, 7.57

[LAYER *{*CORE *|* LOCALIZATION *|* INDUSTRY *|* PARTNER *|* CUSTOMER*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity_buffer.htm)

Defines the layer for which the entity buffer is valid.

7.87, 7.57

[TYPE *{*SINGLE *|* GENERIC NUMBER OF KEY ELEMENTS *|* FULL *|* NONE*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity_buffer.htm)

Defines the buffering type of a CDS entity buffer.

7.87, 7.57

SDL   

CDS Service Definitions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)

Defines a [CDS service definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definition_glosry.htm "Glossary Entry") in [CDS SDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sdl_glosry.htm "Glossary Entry").

7.75, 7.54

[PROVIDER CONTRACTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)

Defines a provider contract for a [CDS service definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definition_glosry.htm "Glossary Entry"). Provider contracts specify the scenario for which the service definition is intended. The effect is that stricter syntax checks are applied.

7.89, 7.57

[EXPOSE...AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)

Exposes [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") for a [business service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry").

7.75, 7.54

CDS Service Definition Extensions   

Keywords and Additions

Language Element

Meaning

ABAP Release

[EXTEND SERVICE...WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_extend_service.htm)

Defines a [CDS service definition extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_def_ext_glosry.htm "Glossary Entry").

7.89, 7.57

[EXPOSE...AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_extend_service.htm)

Exposes [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") for a [business service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry") as part of a [CDS service definition extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_def_ext_glosry.htm "Glossary Entry").

7.89, 7.57

DCL   

CDS Roles   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm)

Defines a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[SWITCHABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm)

Addition to the DEFINE ROLE statement that makes the role conform to the switch state of the [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry").

7.89, 7.57

[GRANT SELECT ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm)

Defines an access rule in a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[GRANT SELECT ON ... AS PROJECTION ON ... FALLBACK ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_proj_rule.htm)

Defines a special access rule for [CDS transactional queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry").

7.91, 7.58

[WITH OPTIONAL ELEMENTS ... *\[*DEFAULT TRUE *|* FALSE*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm)

Marks elements of an access condition as optional.

7.85, 7.56

[ALL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

With the addition ALL, access conditions can express that access is granted only if all values of a set-valued association satisfy the condition.

7.81, 7.55

[EXISTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Defines that different access conditions that use the same set-valued association should not be joined in their fields by means of a common join expression.

7.81, 7.55

[COMBINATION MODE OR*|*AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm)

Defines how the access conditions of multiple CDS access rules are combined.

7.77, 7.54

[REDEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm)

Makes the current access rules the only existing access rule to the effect that all other access rules are ignored.

7.77, 7.54

[WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm)

WHERE clause in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[TRUE (GRANT SELECT ON ... WHERE)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm)

The Boolean predicate TRUE defines that the access condition in question is always met.

7.73, 7.53

[FALSE (GRANT SELECT ON ... WHERE)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm)

The Boolean predicate FALSE defines that the access condition in question is always false.

7.73, 7.53

[VOID (GRANT SELECT ON ... WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm)

Defines that the access condition in question is ignored.

7.77, 7.54

[AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.69, 7.52

[INHERIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_inherited_rule.htm)

Defines an inherited access rule of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry"). Obsolete as of 7.72, 7.53

7.65, 7.51

[ASPECT pfcg\_auth](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm)

PFCG condition as part of an access condition in a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.42

[ASPECT user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_user.htm)

User condition for a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry")

7.65, 7.51

[FILTER BY (ASPECT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_aspect.htm)

Uses an aspect condition to filter the rows of the protected entity.

7.85, 7.56

[ASPECT aspect](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_aspect.htm)

User-defined [aspect condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_aspect.htm).

7.77, 7.54

[DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)

Specifies a [PFCG mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in a [PFCG condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry").

7.72, 7.53

[\=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.42

[<>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.42

[< *|* >](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.42

[<=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.42

[\>=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.42

[?=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm)

Operator of a comparison expression in a literal condition.

7.65, 7.51

[BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Operator of a literal condition.

7.69, 7.52

[LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Operator of a literal condition.

7.62, 7.50

[IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Operator of a literal condition.

7.78, 7.55

[IS NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Operator of a literal condition.

7.69, 7.52

[BYPASS WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm)

Defines a condition for bypassing an authorization.

7.78, 7.55

[IN SCENARIO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm)

Specifies a switchable authorization check for an authorization object.

7.77, 7.54

[INHERITING CONDITIONS FROM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role.

7.72, 7.53

[INHERITING CONDITIONS FROM SUPER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role.

7.77, 7.54

[REPLACING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit_replacing.htm)

Can be used to modify inherited access conditions.

7.77, 7.54

[IF ... THEN ... ELSE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_ifthenelse.htm)

Defines a control structure as part of an access condition in a CDS role.

7.88, 7.57

[SACF\_CHECK\_IN\_USE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

DCL function.

7.85, 7.56

[OPTIONAL\_ELEMENT\_EXISTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

DCL function.

7.85, 7.56

[SWITCH\_RUNTIME\_STATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

DCL function.

7.91, 7.58

[TOGGLE\_RUNTIME\_STATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

DCL function.

7.91, 7.58

CDS Access Policy   

Keywords and Additions

Language Element

Meaning

ABAP Release

[DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_accesspolicy.htm)

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_policy_glosry.htm "Glossary Entry").

7.73, 7.53

[DEFINE PFCG\_MAPPING ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in an access policy.

7.73, 7.53

[CONSTRAINT ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm)

Defines further restrictions for authorization fields of authorization objects in a CDS access policy.

7.77, 7.54

[DEFINE ASPECT ... AS SELECT FROM ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)

Defines a user-defined aspect as part of a CDS access policy.

7.77, 7.54

[WITH USER ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)

Defines an element of an aspect entity as input field for the user name in the CDS access policy.

7.77, 7.54

[WITH FILTER ELEMENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)

Defines the filter element of an aspect entity in a CDS access policy.

7.85, 7.56

[BYPASS WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm)

Defines a condition for bypassing an aspect in a CDS access policy.

7.77, 7.54