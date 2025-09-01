  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm) → 

ABAP CDS - cond\_expr, LIKE

Syntax

... lhs LIKE rhs *\[*ESCAPE esc*\]*...

Effect

Pattern comparison in a [condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm) in a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"). The relational expression is true if the string in lhs matches the pattern in rhs. The same [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm) apply to lhs as to [comparisons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_comp.htm) and only operands of the [comparable types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm) can be specified. Of these, only character-like data types can be used. Only character-like [literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm) without domain prefix are allowed for rhs.

The wildcard characters % for any strings and \_ for any character can be used in the pattern in rhs. The optional addition ESCAPE can be used to define an [escape character](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_character_glosry.htm "Glossary Entry"). esc expects a single-character character-like [literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm) without domain prefix. In the pattern in rhs, an escape character may only be placed before a wildcard character or before the escape character itself. In this case, these lose their special meaning.

Notes

-   The # character is recommended for the escape character esc.

-   Patterns in rhs closed by the wildcard characters % or \_ should not be used to find trailing blanks, since the result is determined by the database platform in question and may be unexpected.

-   Unlike the [LIKE condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_like.htm) in ABAP SQL, lhs LIKE '%' is not true if lhs contains the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry").