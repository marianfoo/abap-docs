  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Bit%20Expressions%20%28bit_exp%29%2C%20ABAPCOMPUTE_BIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Bit Expressions (bit\_exp)

[Short Reference](javascript:call_link\('abenbit_exp_shortref.htm'\))

Syntax

... *\[*[BIT-NOT](javascript:call_link\('abenbit_operators.htm'\))*\]* operand1
    *\[**{*[BIT-AND*|*BIT-OR*|*BIT-XOR](javascript:call_link\('abenbit_operators.htm'\))*}* *\[* [BIT-NOT](javascript:call_link\('abenbit_operators.htm'\))*\]* operand2
    *\[**{*[BIT-AND*|*BIT-OR*|*BIT-XOR](javascript:call_link\('abenbit_operators.htm'\))*}* *\[* [BIT-NOT](javascript:call_link\('abenbit_operators.htm'\))*\]* operand3
    ...  *\]**\]* ...

Effect

A bit expression formulates a binary calculation. The operands must be byte-like, that is, of type x or xstring. The result of a bit expression is a byte chain in the [calculation length](javascript:call_link\('abenbitexp_length.htm'\)) assigned to the bit expression. During assignment to an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), the byte chain is handled as a byte string of data type xstring, and when passing a generic typed formal parameter, it is handled as a byte field of data type x.

In a bit expression bit\_exp, an operand operand1 can be combined with one or more operands operand2, operand3, ... using [bit operators](javascript:call_link\('abenbit_operators.htm'\)) BIT-AND, BIT-OR, or BIT-XOR. [Brackets](javascript:call_link\('abenbit_brackets.htm'\)) are possible. Bit expressions can occur in read positions of [certain statements](javascript:call_link\('abenexpression_positions.htm'\)), in particular on the right side of an [assignment](javascript:call_link\('abenequals_bit_expr.htm'\)) with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)).

The operand positions operand are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), which means byte-like data objects, [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") with byte-like return values, or parenthesized bit expressions can be specified. The bit operators BIT-AND, BIT-OR, and BIT-XOR combine two adjacent operands. When the expression is evaluated, a byte-like value is calculated and combined with the next adjacent operand. The priority of the combination depends on the operators that are used. If functional methods are used, the same applies as described for [arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\)).

The [bit operator](javascript:call_link\('abenbit_operators.htm'\)) BIT-NOT can be specified one or more times in front of an operand to negate the value of the operand. If BIT-NOT is specified an even number of times, the operand remains unchanged. An odd number negates the operand.

If [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are specified as operands, they are executed from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered to be used in the corresponding operand positions.

If [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)) are specified as operands of bit expressions, their data type is not determined by the bit expression. The # character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Example

Bit sequences are an efficient way of mapping bit sequences. If a set contains n elements, the existence of an element i in n can be represented by a 1 at the position of i in a byte-like field. The statement [SET BIT](javascript:call_link\('abapset_bit.htm'\)), for example, can be used to add an element to the set. The operators BIT-AND, BIT-OR, and BIT-XOR can then be used to calculate the intersection, the union, and the symmetric difference of different sets.

In the following example, the attributes of person groups are represented in the fields p1, p2, p3 of the type x. The bit operator BIT-AND is then used to determine which attributes are shared by all people. The result shows that only the eighth attribute is shared.

DATA:
  p1  TYPE x LENGTH 1 VALUE '5B',     "01011011
  p2  TYPE x LENGTH 1 VALUE '13',     "00010011
  p3  TYPE x LENGTH 1 VALUE 'A5'.     "10100101
FINAL(res) = p1 BIT-AND p2 BIT-AND p3. "00000001

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: An operand or the result field is not of type x.
    Runtime error: BITS\_WRONG\_TYPE

Continue
[bit\_exp - Bit Operators](javascript:call_link\('abenbit_operators.htm'\))
[bit\_exp - ( )](javascript:call_link\('abenbit_brackets.htm'\))
[bit\_exp - Calculation Length](javascript:call_link\('abenbitexp_length.htm'\))
![Example](exa.gif "Example") [bit\_exp - Bit Operations](javascript:call_link\('abendata_bit_abexa.htm'\))