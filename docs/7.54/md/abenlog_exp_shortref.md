  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  L

log\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm)

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE
                *|*CO*|*CN*|*CA*|*NA*|*CS*|*NS*|*CP*|*NP
                *|*BYTE-CO*|*BYTE-CN*|*BYTE-CA*|*BYTE-NA*|*BYTE-CS*|*BYTE-NS
                *|*O*|*Z*|*M*}* operand2 *}*
    *|* *{*operand  *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand *\[*NOT*\]* IN range\_tab*}*
    *|* *{*operand IS *\[*NOT*\]* INITIAL*}*
    *|* *{*ref     IS *\[*NOT*\]* BOUND*}*
    *|* *{*oref    IS *\[*NOT*\]* INSTANCE OF class*|*intf*}*
    *|* *{*<fs>    IS *\[*NOT*\]* ASSIGNED*}*
    *|* *{*para    IS *\[*NOT*\]* SUPPLIED*}*
    *|* *{*para    IS *\[*NOT*\]* REQUESTED*}*
    *|* *{*contains( ... )*|*contains\_any\_of( ... )*|*contains\_any\_not\_of( ... )*}*
    *|* *{*matches( ... )*}*
    *|* *{*line\_exists( ... )*}* *}*
  *|* *{* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* *}* ...

Effect

Logical expression for formulating a condition for operands. A logical expression is a [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry") or multiple joined relational expressions, where [( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bracket.htm) can be used as parentheses. The result is a [truth value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_value_glosry.htm "Glossary Entry").

Additions

-   [\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_any_operand.htm)
    Comparison expression with relational operators for all data types.
    
-   [CO*|*CN*|*CA*|*NA*|*CS*|*NS*|*CP*|*NP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_strings.htm)
    Comparison expression with relational operators for character-like data types.
    
-   [BYTE-CO*|*BYTE-CN*|*BYTE-CA*|*BYTE-NA*|*BYTE-CS*|*BYTE-NS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bytes.htm)
    Comparison expression with relational operators for byte-like data types.
    
-   [O*|*Z*|*M](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bitmasks.htm)
    Comparison expression with relational operators for bit patterns
    
-   [*\[*NOT*\]* BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_between.htm)
    Comparison expression used to check what belongs to an interval.
    
-   [operand *\[*NOT*\]* IN range\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_select_option.htm)
    Comparison expression used to check whether an operand meets the conditions of a [ranges table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranges_table_glosry.htm "Glossary Entry") range\_tab.
    
-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_initial.htm)
    Predicate expression used to check whether the operand operand is initial.
    
-   [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bound.htm)
    Predicate expression used to check whether a reference variable ref is valid
    
-   [IS *\[*NOT*\]* INSTANCE OF class*|*intf](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm)
    Predicate expression for a check to verify whether an object reference variable oref points to an object whose dynamic type is more specific or equal to the object type class or intf.
    
-   [IS *\[*NOT*\]* ASSIGNED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_assigned.htm)
    Predicate expression used to check whether a memory area is assigned to a field symbol <fs>.
    
-   [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_supplied.htm)
    Predicate expression used to check whether a formal parameter para of a procedure is filled or requested.
    
-   [IS *\[*NOT*\]* REQUESTED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_requested.htm)
    Obsolete: Predicate expression used to check whether an output parameter para of a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") is requested
    
-   [contains , contains\_...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontains_functions.htm)
    Predicate function used to scan a string.
    
-   [matches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmatches_functions.htm)
    Predicate function used to match a string with a regular expression.
    
-   [line\_exists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_exists_function.htm)
    Predicate function used to check the existence of a row in an internal table.
    
-   [NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm)
    Boolean operator used to negate a logical expression.
    
-   [AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm)
    Boolean operator used as an AND join between two logical expressions.
    
-   [OR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_or.htm)
    Boolean operator used as an OR join between two logical expressions.
    
-   [EQUIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm)
    Boolean operator used as an equivalence join between two logical expressions.