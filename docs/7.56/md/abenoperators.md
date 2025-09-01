  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_expressions.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperators_expressions.htm) → 

Operators

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:
    -   [Declaration Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninline_declarations.htm)
        
        The declaration operators DATA and FIELD-SYMBOL declare variables or field symbols in operand positions.
        
    -   [Constructor Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expressions.htm)
        
        The constructor operators NEW, VALUE, CONV, CORRESPONDING, CAST, REF, EXACT, REDUCE, FILTER, COND, and SWITCH construct values for data objects of specific data types in constructor expressions.
        
-   Operators that combine multiple operands to a single expression:
    -   [Assignment Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm)
        
        The assignment operator \= combines the source field and target field of an assignment. The special [casting operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= performs a [down cast](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendown_cast_glosry.htm "Glossary Entry") during the assignment. The [addition assignment operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadd_assignment_op_glosry.htm "Glossary Entry") ([+=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm)), [subtraction assignment operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensub_assignment_op_glosry.htm "Glossary Entry") ([\-=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm)), [multiplication assignment operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmult_assignment_op_glosry.htm "Glossary Entry") ([\*=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm)), [division assignment operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendiv_assignment_op_glosry.htm "Glossary Entry") ([/=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm)), or [concatenation assignment operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconcat_assignment_op_glosry.htm "Glossary Entry") ([\*\*=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignment_string.htm)) performs a [calculation assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignment_glosry.htm "Glossary Entry"). Furthermore, the operator \= binds actual parameters to formal parameters, for example in procedure calls or when working with [data clusters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry").
        
    -   [Arithmetic Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm)
        
        The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* combine two or more numeric operands to an arithmetic expression. In addition, the characters + and \- act as algebraic signs in arithmetic expressions.
        
    -   [Bit Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm)
        
        The bit operators BIT-AND, BIT-OR, and BIT-XOR combine two or more byte-like operands to a bit expression. The bit operator BIT-NOT negates a byte-like operand.
        
    -   [String Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm)
        
        The string operator && concatenates two character-like operands to a string expression.
        
    -   [Relational Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm)
        
        Relational operators occur in relational expressions, which in turn are components of logical expressions. The [comparison operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomp_operator_glosry.htm "Glossary Entry") \=, <>, <, \>, <=,\>=, BETWEEN, and so on combine two or more operands of any data type to a comparison expression. There are additional relational operators for specific data types. The [predicate operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS makes a statement about an operand.
        
    -   [Boolean Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_boole.htm)
        
        The Boolean operators AND, OR, and EQUIV combine the results of individual logical expressions to one logical expression. The result of a logical expression is either true or false. The Boolean operator NOT negates the result of a logical expression.
        
-   Operator that combine two operands during program compilation:
    -   [Literal Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenliteral_operator.htm)
        
        The literal operator & combines two literals or two string templates to form one literal or string template.