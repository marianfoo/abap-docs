# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cond_expr

Included pages: 16


### abencds_f1_conditional_expression.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - cond\_expr

Syntax

... rel\_expr
  | *\[*NOT*\]* cond\_expr *\[*AND*|*OR cond\_expr*\]* ...

Effect

Formulates a condition in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") whose result is true or false. A condition is either a single relational expression, rel\_expr, or an expression constructed from the Boolean operators NOT, AND, and OR in which parenthesized full conditions cond\_expr using parentheses ( ... ) are possible.

The relational expressions rel\_expr from which a condition cond\_expr can be constructed are as follows:

-   Comparisons with [relational operators](javascript:call_link\('abencds_cond_expr_comp.htm'\))

-   Interval comparisons using [BETWEEN](javascript:call_link\('abencds_cond_expr_between.htm'\))

-   Pattern comparisons using [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))

-   Checks on the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") using [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\))

-   Checks on the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") using [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial.htm'\))

The Boolean operators work as follows:

-   NOT negates the result of the following condition.

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a strong binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

Continue
[ABAP CDS - cond\_expr, Relational Operators](javascript:call_link\('abencds_cond_expr_comp.htm'\))
[ABAP CDS - cond\_expr, BETWEEN](javascript:call_link\('abencds_cond_expr_between.htm'\))
[ABAP CDS - cond\_expr, LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))
[ABAP CDS - cond\_expr, NULL](javascript:call_link\('abencds_cond_expr_null.htm'\))
[ABAP CDS - cond\_expr, INITIAL](javascript:call_link\('abencds_cond_expr_initial.htm'\))
[ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\))


### abencds_cond_expr_comp.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Relational Operators

Syntax

... lhs operator rhs ...

Effect

Compares in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The following table shows the possible operators operator of the relational expressions rel\_exp:

rel\_expr

True if

lhs = rhs

Value of lhs is equal to the value of rhs

lhs <> rhs

Value of lhs is not equal to the value of rhs

lhs < rhs

Value of lhs is less than the value of rhs

lhs > rhs

Value of lhs is greater than the value of rhs

lhs <= rhs

Value of lhs is less than or equal to the value of rhs

lhs >= rhs

Value of lhs is greater than or equal to the value of rhs

-   Context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply when specifying the operands lhs and rhs.

-   The tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, Comparable Types](javascript:call_link\('abencds_cond_expr_types.htm'\))


### abencds_cond_expr_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Relational Operators](javascript:call_link\('abencds_cond_expr_comp.htm'\)) → 

ABAP CDS - cond\_expr, Comparable Types

The following tables show which [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary can be compared with each other in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_1)

-   [Comparisons with Parameters](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_2)

-   [Comparisons with literals](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_3)

Comparisons with Fields of Data Sources

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) on the left side (lhs) with data source fields on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)).

lhs/rhs

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

CHAR

NUMC

CLNT

LANG

DATS

TIMS

ACCP

UNIT

CUKY

SSTRING

RAW

INT1

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

x

x

l

x

x

x

x

x

x

x

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

x

l

l

\-

l

l

\-

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

l

l

x

\-

\-

\-

\-

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

x

\-

\-

\-

\-

\-

x

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

x

l

\-

\-

x

\-

\-

\-

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

x

l

\-

\-

\-

x

\-

\-

\-

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

x

\-

\-

x

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

x

\-

x

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

x

x

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

x

\-

\-

x

x

x

x

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

l

-   There are no restrictions for combinations using "x".

-   In combinations using "l", the lengths of the compared columns must match exactly.

Comparisons with Parameters

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) on the left side (lhs) with [parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)).

lhs/rhs

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

CHAR

NUMC

CLNT

LANG

DATS

TIMS

ACCP

UNIT

CUKY

SSTRING

RAW

INT1

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

x

x

x

x

x

x

x

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

x

x

l

x

x

x

\-

x

x

x

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

x

l

l

\-

l

l

\-

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

l

l

x

\-

\-

\-

\-

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

x

\-

\-

\-

\-

\-

x

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

x

l

\-

\-

x

\-

\-

\-

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

x

l

\-

\-

\-

x

\-

\-

\-

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

x

\-

x

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

x

x

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

x

\-

\-

\-

x

x

x

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

l

-   There are no restrictions for combinations using "x".

-   In combinations using "l", the lengths of the compared operands must match exactly.

Comparisons with literals

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) on the left side (lhs) with [literals](javascript:call_link\('abencds_f1_literal.htm'\)) on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)) function. The data types of literals are determined by the content of literals (as described [here](javascript:call_link\('abencds_f1_literal.htm'\))) and only the data types displayed in the table are possible.

lhs/rhs

INT1

INT2

INT4

FLTP

CHAR

NUMC

INT1

x

y

\-

\-

\-

\-

INT2

x

x

z

\-

\-

\-

INT4

x

x

x

\-

\-

\-

INT8

x

x

x

\-

\-

\-

DEC

x

x

x

d

\-

\-

CURR

l

l

l

d

\-

\-

QUAN

l

l

l

d

\-

\-

FLTP

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

m

m

NUMC

\-

\-

\-

\-

\-

l

CLNT

\-

\-

\-

\-

\-

l

LANG

\-

\-

\-

\-

l

l

DATS

\-

\-

\-

\-

\-

l

TIMS

\-

\-

\-

\-

\-

l

ACCP

\-

\-

\-

\-

\-

l

UNIT

\-

\-

\-

\-

m

\-

CUKY

\-

\-

\-

\-

m

\-

SSTRING

\-

\-

\-

\-

m

\-

RAW

\-

\-

\-

\-

\-

\-

-   There are no restrictions for combinations using "x".

-   For the combination using "y", the literal value must be between 0 and 999. For the combination using "z", the literal value must be between -99999 and +99999.

-   For combinations using "m", the length of the literal cannot be larger than the column.

-   For combinations using "d", the length of the literal and the number of decimal places cannot be larger than the length and number for the column.

-   For combinations using "l", the length of the literal must be equal to the length of the column.


### abencds_cond_expr_comp.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Relational Operators

Syntax

... lhs operator rhs ...

Effect

Compares in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The following table shows the possible operators operator of the relational expressions rel\_exp:

rel\_expr

True if

lhs = rhs

Value of lhs is equal to the value of rhs

lhs <> rhs

Value of lhs is not equal to the value of rhs

lhs < rhs

Value of lhs is less than the value of rhs

lhs > rhs

Value of lhs is greater than the value of rhs

lhs <= rhs

Value of lhs is less than or equal to the value of rhs

lhs >= rhs

Value of lhs is greater than or equal to the value of rhs

-   Context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply when specifying the operands lhs and rhs.

-   The tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, Comparable Types](javascript:call_link\('abencds_cond_expr_types.htm'\))


### abencds_cond_expr_between.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, BETWEEN

Syntax

... lhs BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2 The expression has the same meaning as the following join of two [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)):

... lhs >= rhs1 AND lhs <= rhs2 ...

The corresponding context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to the operands lhs, rhs1, and rhs2. The same [conditions](javascript:call_link\('abencds_cond_expr_types.htm'\)) for the data types also apply.


### abencds_cond_expr_like.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, LIKE

Syntax

... lhs LIKE rhs *\[*ESCAPE esc*\]*...

Effect

Compares in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the string in lhs matches the pattern in rhs. The same [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to lhs as to [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)). Only character-like data types can be used. Only character-like [literals](javascript:call_link\('abencds_f1_literal.htm'\)) without domain prefix are allowed for rhs.

The wildcard characters % for any strings and \_ for any character can be used in the pattern in rhs. The optional addition ESCAPE can be used to define an [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry"). esc expects a single-character character-like [literal](javascript:call_link\('abencds_f1_literal.htm'\)) without domain prefix. In the pattern in rhs, an escape character may only be placed before a wildcard character or before the escape character itself. In this case, these lose their special meaning.

Notes

-   The # character is recommended for the escape character esc.

-   Patterns in rhs closed by the wildcard characters % or \_ should not be used to find trailing blanks, since the result is determined by the database platform in question and may be unexpected.

-   Unlike the [LIKE condition](javascript:call_link\('abenwhere_logexp_like.htm'\)) in ABAP SQL, lhs LIKE '%' is not true if lhs contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").


### abencds_cond_expr_null.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, NULL

Syntax

.... lhs IS *\[*NOT*\]* NULL ...

Effect

Identifies the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is (not) the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The same context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to the operand lhs as to [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)).


### abencds_cond_expr_initial.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, INITIAL

Syntax

.... lhs IS *\[*NOT*\]* INITIAL ...

Effect

Determines the initial value. This expression is true if the value of lhs is (is not) the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of its [built-in dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)). The same context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to the operand lhs as to [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), but with the additional restriction that the operand cannot have the type RAW.

Notes

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value (regardless of its actual data type), instead of comparing it with a type-friendly operand that contains the initial value.
    
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)).
    

Example

The following CDS view reads all rows from the database table DEMO\_DDIC\_TYPES in which the column INT8 does not contain its initial value 0.

@AbapCatalog.sqlViewName: 'DEMOCDSISINI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Is\_Initial
  as select from
    demo\_ddic\_types
    {
      \*
    }
    where
      int8 is not initial


### abencds_cond_expr_operands.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_f1_literal.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) that represent a value outside the value range of [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   [Rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\)) for use in an ON condition of an association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) for use in a complex case distinction.

Note

For [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](javascript:call_link\('abencds_cond_expr_where.htm'\))
[ABAP CDS - cond\_expr, HAVING](javascript:call_link\('abencds_cond_expr_having.htm'\))
[ABAP CDS - cond\_expr, ON, Join](javascript:call_link\('abencds_cond_expr_on_join.htm'\))
[ABAP CDS - cond\_expr, ON, Association](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\))
[ABAP CDS - cond\_expr, Filter](javascript:call_link\('abencds_cond_expr_filter.htm'\))
[ABAP CDS - cond\_expr, CASE](javascript:call_link\('abencds_cond_expr_case.htm'\))


### abencds_cond_expr_where.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, WHERE

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last association of the path.

-   Other expressions and function calls are not allowed.


### abencds_cond_expr_having.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, HAVING

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_f1_having_clause.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   The relational operator BETWEEN is not allowed.

-   The Boolean operator NOT is not allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) or an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) for this kind of field can be specified for lhs.

-   An [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)), an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with an optional domain prefix, or a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))). If lhs is an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) must be specified.

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last association of the path.

-   Other expressions and function calls are not allowed.


### abencds_cond_expr_on_join.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, ON, Join

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an [ON condition](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) of a join of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) that represents the left side of the join.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the join, a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   At least one comparison for equality between a field of the left data source and a field of the right data source of the join must be performed.

-   No path expressions or other expressions or function calls can be specified.


### abencds_cond_expr_on_assoc.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, ON, Association

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an [ON condition](javascript:call_link\('abencds_f1_association.htm'\)) of an [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of one of the two data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the association can be specified for lhs.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the association, a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), or a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of the source data source can also be specified by an alternative element name (defined using [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\))) of the current CDS view.

-   At least one comparison for equality between a field of the initial data source and a field of the target data source of the association must be performed.

-   No path expressions or other expressions or function calls can be specified.


### abencds_cond_expr_filter.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, Filter

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [filter condition](javascript:call_link\('abencds_path_expression_attr.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of the target data source of the current [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of the target data source of the current [association](javascript:call_link\('abencds_f1_association.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   No path expressions or other expressions or function calls can be specified.


### abencds_cond_expr_case.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, CASE

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)) of a [CDS](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") view:

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last association of the path.

-   Other expressions and function calls are not allowed.


### abencds_cond_expr_operands.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_f1_literal.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) that represent a value outside the value range of [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   [Rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\)) for use in an ON condition of an association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) for use in a complex case distinction.

Note

For [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](javascript:call_link\('abencds_cond_expr_where.htm'\))
[ABAP CDS - cond\_expr, HAVING](javascript:call_link\('abencds_cond_expr_having.htm'\))
[ABAP CDS - cond\_expr, ON, Join](javascript:call_link\('abencds_cond_expr_on_join.htm'\))
[ABAP CDS - cond\_expr, ON, Association](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\))
[ABAP CDS - cond\_expr, Filter](javascript:call_link\('abencds_cond_expr_filter.htm'\))
[ABAP CDS - cond\_expr, CASE](javascript:call_link\('abencds_cond_expr_case.htm'\))
