# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cond_expr

Included pages: 16



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_conditional_expression.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm)
- [abencds_cond_expr_comp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_comp.htm)
- [abencds_cond_expr_types.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm)
- [abencds_cond_expr_between.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_between.htm)
- [abencds_cond_expr_like.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_like.htm)
- [abencds_cond_expr_null.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm)
- [abencds_cond_expr_initial.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm)
- [abencds_cond_expr_operands.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm)
- [abencds_cond_expr_where.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_where.htm)
- [abencds_cond_expr_having.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_having.htm)
- [abencds_cond_expr_on_join.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_join.htm)
- [abencds_cond_expr_on_assoc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_assoc.htm)
- [abencds_cond_expr_filter.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_filter.htm)
- [abencds_cond_expr_case.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_case.htm)

**Bundle Contains**: 14 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.902Z

---

### abencds_f1_conditional_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_conditional_expression.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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



**📖 Source**: [abencds_f1_conditional_expression.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm)

### abencds_cond_expr_comp.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_comp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_comp.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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



**📖 Source**: [abencds_cond_expr_comp.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_comp.htm)

### abencds_cond_expr_types.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_types.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Relational Operators](javascript:call_link\('abencds_cond_expr_comp.htm'\)) → 

ABAP CDS - cond\_expr, Comparable Types

The following tables show which [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary can be compared with each other in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#abencds-cond-expr-types-1--------comparisons-with-parameters---@ITOC@@ABENCDS_COND_EXPR_TYPES_2)

-   [Comparisons with literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/#abencds-cond-expr-types-3---comparisons-with-fields-of-data-sources--the-following-table-shows-the-possible-combinations-of-data-source-fields--data--source--javascript-call-link---abencds-f1-data-source-htm-----on-the-left-side--lhs--with-data-source-fields-on-the-right-side--rhs--of--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-------lhs-rhs--int1--int2--int4--int8--dec--curr--quan--decfloat16--decfloat34--fltp--char--sstring--numc--clnt--lang--dats--tims--datn--timn--utclong--accp--unit--cuky--raw--int1--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int2--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int4--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int8--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------dec--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------curr--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------quan--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------decfloat16--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------decfloat34--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------fltp--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------char------------------------------------------x--x--x--l--x--x--x--------------x--x--x------sstring------------------------------------------x--x----------x----------------------x--x--x------numc------------------------------------------x------l--l------l--l------------------------------clnt------------------------------------------l------l--x------------------------------------------lang------------------------------------------x--x----------x--------------------------------------dats------------------------------------------x------l----------x----------------------------------tims------------------------------------------x------l--------------x------------------------------datn----------------------------------------------------------------------x--------------------------timn--------------------------------------------------------------------------x----------------------utclong------------------------------------------------------------------------------x------------------accp------------------------------------------x--x----------------------------------x--------------unit------------------------------------------x--x--------------------------------------x----------cuky------------------------------------------x--x------------------------------------------x------raw----------------------------------------------------------------------------------------------l------there-are-no-restrictions-for-combinations-using--x--------in-combinations-using--l---the-lengths-of-the-compared-columns-must-match-exactly---comparisons-with-parameters--the-following-table-shows-the-possible-combinations-of-data-source-fields--data--source--javascript-call-link---abencds-f1-data-source-htm-----on-the-left-side--lhs--with--parameters--javascript-call-link---abencds-f1-parameter-htm-----on-the-right-side--rhs--of--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-------lhs-rhs--int1--int2--int4--int8--dec--curr--quan--decfloat16--decfloat34--fltp--char--sstring--numc--clnt--lang--dats--tims--datn--timn--utclong--accp--unit--cuky--raw--int1--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int2--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int4--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------int8--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------dec--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------curr--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------quan--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------decfloat16--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------decfloat34--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------fltp--x--x--x--x--x--x--x--x--x--x----------------------------------------------------------char------------------------------------------x--x--x--l--x--x--x------------------x--x------sstring------------------------------------------x--x----------x--------------------------x--x------numc------------------------------------------x------l--l------l--l------------------------------clnt------------------------------------------l------l--x------------------------------------------lang------------------------------------------x--x----------x--------------------------------------dats------------------------------------------x------l----------x----------------------------------tims------------------------------------------x------l--------------x------------------------------datn----------------------------------------------------------------------x--------------------------timn--------------------------------------------------------------------------x----------------------utclong------------------------------------------------------------------------------x------------------accp------------------------------------------x--x--------------------------------------------------unit------------------------------------------x--x--------------------------------------x----------cuky------------------------------------------x--x------------------------------------------x------raw----------------------------------------------------------------------------------------------l------there-are-no-restrictions-for-combinations-using--x--------in-combinations-using--l---the-lengths-of-the-compared-operands-must-match-exactly---comparisons-with-literals--the-following-table-shows-the-possible-combinations-of-data-source-fields--data--source--javascript-call-link---abencds-f1-data-source-htm-----on-the-left-side--lhs--with--literals--javascript-call-link---abencds-f1-literal-htm-----on-the-right-side--rhs--of--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-----function--the-data-types-of-literals-are-determined-by-the-content-of-literals--as-described--here--javascript-call-link---abencds-f1-literal-htm------and-only-the-data-types-displayed-in-the-table-are-possible---lhs-rhs--int1--int2--int4--fltp--char--numc--int1--x--y------------------int2--x--x--z--------------int4--x--x--x--------------int8--x--x--x--------------dec--x--x--x--d----------curr--l--l--l--d----------quan--l--l--l--d----------decfloat16--x--x--x--------------decfloat34--x--x--x--------------fltp--------------------------char------------------m--m--sstring------------------m------numc----------------------l--clnt----------------------l--lang------------------l--l--dats----------------------l--tims----------------------l--accp----------------------l--unit------------------m------cuky------------------m------raw------------------------------there-are-no-restrictions-for-combinations-using--x--------for-the-combination-using--y---the-literal-value-must-be-between-0-and-999--for-the-combination-using--z---the-literal-value-must-be-between--99999-and--99999-------for-combinations-using--m---the-length-of-the-literal-cannot-be-larger-than-the-column-------for-combinations-using--d---the-length-of-the-literal-and-the-number-of-decimal-places-cannot-be-larger-than-the-length-and-number-for-the-column-------for-combinations-using--l---the-length-of-the-literal-must-be-equal-to-the-length-of-the-column----------source-----abencds-cond-expr-types-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-cond-expr-types-htm-------abencds-cond-expr-comp-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---define-view--javascript-call-link---abencds-f1-define-view-htm---------abap-cds---select--javascript-call-link---abencds-f1-select-statement-htm---------abap-cds---select--operands-and-expressions--javascript-call-link---abencds-operands-and-expressions-htm---------abap-cds---cond--expr--javascript-call-link---abencds-f1-conditional-expression-htm---------abap-cds---cond--expr--relational-operators--syntax------lhs-operator-rhs------effect--compares-in-a--condition--javascript-call-link---abencds-f1-conditional-expression-htm-----in-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry----the-following-table-shows-the-possible-operators-operator-of-the-relational-expressions-rel--exp---rel--expr--true-if--lhs---rhs--value-of-lhs-is-equal-to-the-value-of-rhs--lhs----rhs--value-of-lhs-is-not-equal-to-the-value-of-rhs--lhs---rhs--value-of-lhs-is-less-than-the-value-of-rhs--lhs---rhs--value-of-lhs-is-greater-than-the-value-of-rhs--lhs----rhs--value-of-lhs-is-less-than-or-equal-to-the-value-of-rhs--lhs----rhs--value-of-lhs-is-greater-than-or-equal-to-the-value-of-rhs------context-dependent--rules--javascript-call-link---abencds-cond-expr-operands-htm-----apply-when-specifying-the-operands-lhs-and-rhs-------the-tables-of--comparable-types--javascript-call-link---abencds-cond-expr-types-htm-----show-which-data-types-can-be-compared-with-each-other---continue--abap-cds---cond--expr--comparable-types--javascript-call-link---abencds-cond-expr-types-htm-------------source-----abencds-cond-expr-comp-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-cond-expr-comp-htm-------abencds-cond-expr-between-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---define-view--javascript-call-link---abencds-f1-define-view-htm---------abap-cds---select--javascript-call-link---abencds-f1-select-statement-htm---------abap-cds---select--operands-and-expressions--javascript-call-link---abencds-operands-and-expressions-htm---------abap-cds---cond--expr--javascript-call-link---abencds-f1-conditional-expression-htm---------abap-cds---cond--expr--between--syntax------lhs-between-rhs1-and-rhs2------effect--compares-an-interval-in-a--condition--javascript-call-link---abencds-f1-conditional-expression-htm-----in-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry----the-relational-expression-is-true-if-the-value-of-lhs-is-between-the-values-of-rhs1-and-rhs2-the-expression-has-the-same-meaning-as-the-following-join-of-two--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-----------lhs----rhs1-and-lhs----rhs2------the-corresponding-context-dependent--rules--javascript-call-link---abencds-cond-expr-operands-htm-----apply-to-the-operands-lhs--rhs1--and-rhs2--the-same--conditions--javascript-call-link---abencds-cond-expr-types-htm-----for-the-data-types-also-apply----------source-----abencds-cond-expr-between-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-cond-expr-between-htm-------abencds-cond-expr-like-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---define-view--javascript-call-link---abencds-f1-define-view-htm---------abap-cds---select--javascript-call-link---abencds-f1-select-statement-htm---------abap-cds---select--operands-and-expressions--javascript-call-link---abencds-operands-and-expressions-htm---------abap-cds---cond--expr--javascript-call-link---abencds-f1-conditional-expression-htm---------abap-cds---cond--expr--like--syntax------lhs-like-rhs-----escape-esc---------effect--pattern-comparison-in-a--condition--javascript-call-link---abencds-f1-conditional-expression-htm-----in-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry----the-relational-expression-is-true-if-the-string-in-lhs-matches-the-pattern-in-rhs--the-same--rules--javascript-call-link---abencds-cond-expr-operands-htm-----apply-to-lhs-as-to--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-----and-only-operands-of-the--comparable-types--javascript-call-link---abencds-cond-expr-types-htm-----can-be-specified--of-these--only-character-like-data-types-can-be-used--only-character-like--literals--javascript-call-link---abencds-f1-literal-htm-----without-domain-prefix-are-allowed-for-rhs---the-wildcard-characters---for-any-strings-and----for-any-character-can-be-used-in-the-pattern-in-rhs--the-optional-addition-escape-can-be-used-to-define-an--escape-character--javascript-call-link---abenescape-character-glosry-htm-----glossary-entry----esc-expects-a-single-character-character-like--literal--javascript-call-link---abencds-f1-literal-htm-----without-domain-prefix--in-the-pattern-in-rhs--an-escape-character-may-only-be-placed-before-a-wildcard-character-or-before-the-escape-character-itself--in-this-case--these-lose-their-special-meaning---notes------the---character-is-recommended-for-the-escape-character-esc-------patterns-in-rhs-closed-by-the-wildcard-characters---or----should-not-be-used-to-find-trailing-blanks--since-the-result-is-determined-by-the-database-platform-in-question-and-may-be-unexpected-------unlike-the--like-condition--javascript-call-link---abenwhere-logexp-like-htm-----in-abap-sql--lhs-like-----is-not-true-if-lhs-contains-the--null-value--javascript-call-link---abennull-value-glosry-htm-----glossary-entry------------source-----abencds-cond-expr-like-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-cond-expr-like-htm-------abencds-cond-expr-null-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---define-view--javascript-call-link---abencds-f1-define-view-htm---------abap-cds---select--javascript-call-link---abencds-f1-select-statement-htm---------abap-cds---select--operands-and-expressions--javascript-call-link---abencds-operands-and-expressions-htm---------abap-cds---cond--expr--javascript-call-link---abencds-f1-conditional-expression-htm---------abap-cds---cond--expr--null--syntax-------lhs-is-----not-----null------effect--identifies-the--null-value--javascript-call-link---abennull-value-glosry-htm-----glossary-entry---in-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry----the-relational-expression-is-true-if-the-value-of-lhs-is--not--the--null-value--javascript-call-link---abennull-value-glosry-htm-----glossary-entry----the-same-context-dependent--rules--javascript-call-link---abencds-cond-expr-operands-htm-----apply-to-the-operands-lhs-as-to--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-----and-only-operands-of-the--comparable-types--javascript-call-link---abencds-cond-expr-types-htm-----can-be-specified----------source-----abencds-cond-expr-null-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-cond-expr-null-htm-------abencds-cond-expr-initial-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---define-view--javascript-call-link---abencds-f1-define-view-htm---------abap-cds---select--javascript-call-link---abencds-f1-select-statement-htm---------abap-cds---select--operands-and-expressions--javascript-call-link---abencds-operands-and-expressions-htm---------abap-cds---cond--expr--javascript-call-link---abencds-f1-conditional-expression-htm---------abap-cds---cond--expr--initial--syntax-------lhs-is-----not-----initial------effect--determines-the-initial-value--this-expression-is-true-if-the-value-of-lhs-is--is-not--the--initial-value--javascript-call-link---abeninitial-value-glosry-htm-----glossary-entry---of-its--built-in-dictionary-type--javascript-call-link---abenddic-builtin-types-htm------the-same-context-dependent--rules--javascript-call-link---abencds-cond-expr-operands-htm-----apply-to-the-operands-lhs-as-to--comparisons--javascript-call-link---abencds-cond-expr-comp-htm-----and-only-operands-of-the--comparable-types--javascript-call-link---abencds-cond-expr-types-htm-----can-be-specified--the-operand-also-cannot-have-the-type-raw---notes------the-expression-is-----not-----initial-is-suitable-for-checking-the-type-dependent-initial-value--regardless-of-its-actual-data-type---instead-of-comparing-it-with-a-type-friendly-operand-that-contains-the-initial-value-----------the-expression-is-----not-----initial-must-not-be-confused-with-the-expression--is-----not-----null--javascript-call-link---abencds-cond-expr-null-htm------------example--the-following-cds-view-reads-all-rows-from-the-database-table-demo--ddic--types-in-which-the-column-int8-does-not-contain-its-initial-value-0---AbapCatalog.sqlViewName: 'DEMOCDSISINI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Is\_Initial
  as select from
    demo\_ddic\_types
    {
      \*
    }
    where
      int8 is not initial



**📖 Source**: [abencds_cond_expr_initial.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm)

### abencds_cond_expr_operands.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_operands.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_f1_literal.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) that represent a value outside the value range of [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   [Rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\)) for use in an ON condition of a CDS association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) for use in a complex case distinction.

Note

For [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](javascript:call_link\('abencds_cond_expr_where.htm'\))
[ABAP CDS - cond\_expr, HAVING](javascript:call_link\('abencds_cond_expr_having.htm'\))
[ABAP CDS - cond\_expr, ON, Join](javascript:call_link\('abencds_cond_expr_on_join.htm'\))
[ABAP CDS - cond\_expr, ON, CDS Association](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\))
[ABAP CDS - cond\_expr, Filter](javascript:call_link\('abencds_cond_expr_filter.htm'\))
[ABAP CDS - cond\_expr, CASE](javascript:call_link\('abencds_cond_expr_case.htm'\))



**📖 Source**: [abencds_cond_expr_operands.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm)

### abencds_cond_expr_where.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_where.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_where.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, WHERE

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the CDS associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last CDS association of the path.

-   Other expressions and function calls are not allowed.



**📖 Source**: [abencds_cond_expr_where.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_where.htm)

### abencds_cond_expr_having.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_having.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_having.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, HAVING

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_f1_having_clause.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   The relational operator BETWEEN is not allowed.

-   The Boolean operator NOT is not allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) or an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) for this kind of field can be specified for lhs.

-   An [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)), an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with an optional domain prefix, or a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))). If lhs is an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) must be specified.

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the CDS associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last CDS association of the path.

-   Other expressions and function calls are not allowed.



**📖 Source**: [abencds_cond_expr_having.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_having.htm)

### abencds_cond_expr_on_join.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_on_join.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_join.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, ON, Join

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an [ON condition](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) of a join of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) that represents the left side of the join.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the join, a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   At least one comparison for equality between a field of the left data source and a field of the right data source of the join must be performed.

-   No path expressions or other expressions or function calls can be specified.



**📖 Source**: [abencds_cond_expr_on_join.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_join.htm)

### abencds_cond_expr_on_assoc.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_on_assoc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_assoc.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, ON, CDS Association

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an [ON condition](javascript:call_link\('abencds_f1_association.htm'\)) of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of one of the two data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the CDS association can be specified for lhs.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the CDS association, a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), or a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of the source data source can also be specified by an alternative element name (defined using [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\))) of the current CDS view.

-   At least one comparison for equality between a field of the initial data source and a field of the target data source of the CDS association must be performed.

-   No path expressions or other expressions or function calls can be specified.



**📖 Source**: [abencds_cond_expr_on_assoc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_on_assoc.htm)

### abencds_cond_expr_filter.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_filter.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_filter.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, Filter

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [filter condition](javascript:call_link\('abencds_path_expression_attr.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of the target data source of the current [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of the target data source of the current [CDS association](javascript:call_link\('abencds_f1_association.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   No path expressions or other expressions or function calls can be specified.



**📖 Source**: [abencds_cond_expr_filter.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_filter.htm)

### abencds_cond_expr_case.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_case.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_case.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, CASE

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)) of a [CDS](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") view:

-   All relational operators are allowed.

-   lhs expects a [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)), or a [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the CDS associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last CDS association of the path.

-   Other expressions and function calls are not allowed.



**📖 Source**: [abencds_cond_expr_case.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_case.htm)

### abencds_cond_expr_operands.htm

> **📖 Official SAP Documentation**: [abencds_cond_expr_operands.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_cond_expr_operands.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_f1_literal.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) that represent a value outside the value range of [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   [Rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\)) for use in an ON condition of a CDS association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) for use in a complex case distinction.

Note

For [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](javascript:call_link\('abencds_cond_expr_where.htm'\))
[ABAP CDS - cond\_expr, HAVING](javascript:call_link\('abencds_cond_expr_having.htm'\))
[ABAP CDS - cond\_expr, ON, Join](javascript:call_link\('abencds_cond_expr_on_join.htm'\))
[ABAP CDS - cond\_expr, ON, CDS Association](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\))
[ABAP CDS - cond\_expr, Filter](javascript:call_link\('abencds_cond_expr_filter.htm'\))
[ABAP CDS - cond\_expr, CASE](javascript:call_link\('abencds_cond_expr_case.htm'\))
