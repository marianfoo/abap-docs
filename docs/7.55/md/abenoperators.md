  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Operators

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:

-   [Declaration Operators](javascript:call_link\('abeninline_declarations.htm'\))
    The declaration operators DATA and FIELD-SYMBOL declare variables or field symbols in operand positions.

-   [Constructor Operators](javascript:call_link\('abenconstructor_expressions.htm'\))
    The constructor operators NEW, VALUE, CONV, CORRESPONDING, CAST, REF, EXACT, REDUCE, FILTER, COND, and SWITCH construct values for data objects of specific data types in constructor expressions.

-   Operators that link multiple operands to a single expression:

-   [Assignment Operators](javascript:call_link\('abenequals_operator.htm'\))
    The assignment operator \= links the source field and target field of an assignment. The special [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") ?= performs a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") during the assignment. The [addition assignment operator](javascript:call_link\('abenadd_assignment_op_glosry.htm'\) "Glossary Entry") ([+=](javascript:call_link\('abencalculation_assignments.htm'\))), [subtraction assignment operator](javascript:call_link\('abensub_assignment_op_glosry.htm'\) "Glossary Entry") ([\-=](javascript:call_link\('abencalculation_assignments.htm'\))), [multiplication assignment operator](javascript:call_link\('abenmult_assignment_op_glosry.htm'\) "Glossary Entry") ([\*=](javascript:call_link\('abencalculation_assignments.htm'\))), [division assignment operator](javascript:call_link\('abendiv_assignment_op_glosry.htm'\) "Glossary Entry") ([/=](javascript:call_link\('abencalculation_assignments.htm'\))), or [concatenation assignment operator](javascript:call_link\('abenconcat_assignment_op_glosry.htm'\) "Glossary Entry") ([\*\*=](javascript:call_link\('abencalculation_assignment_string.htm'\))) performs a [calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry"). Furthermore, the operator \= binds actual parameters to formal parameters, for example in procedure calls or when working with [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

-   [Arithmetic Operators](javascript:call_link\('abapcompute_arith.htm'\))
    The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* link two or more numeric operands to an arithmetic expression. In addition, the characters + and \- act as algebraic signs in arithmetic expressions.

-   [Bit Operators](javascript:call_link\('abapcompute_bit.htm'\))
    The bit operators BIT-AND, BIT-OR, and BIT-XOR link two or more byte-like operands to a bit expression. The bit operator BIT-NOT negates a byte-like operand.

-   [String Operators](javascript:call_link\('abapcompute_string.htm'\))
    The string operator && concatenates two character-like operands to a string expression.

-   [Relational Operators](javascript:call_link\('abenlogexp.htm'\))
    Relational operators occur in relational expressions, which in turn are components of logical expressions. The [comparison operators](javascript:call_link\('abencomp_operator_glosry.htm'\) "Glossary Entry") \=, <>, <, \>, <=,\>=, BETWEEN, and so on link two or more operands of any data type to a comparison expression. There are additional relational operators for specific data types. The [predicate operator](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") IS makes a statement about an operand.

-   [Boolean Operators](javascript:call_link\('abenlogexp_boole.htm'\))
    The Boolean operators AND, OR, and EQUIV link the results of individual logical expressions to one logical expression. The result of a logical expression is either true or false. The Boolean operator NOT negates the result of a logical expression.

-   Operator that links two operands in compilations:

-   [Literal Operator](javascript:call_link\('abenliteral_operator.htm'\))
    The literal operator & links two literals or two string templates to form one literal or string template.