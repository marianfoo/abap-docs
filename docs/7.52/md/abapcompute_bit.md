  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_processing_expr_func.htm) → 

bit\_exp - Bit Expressions

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_exp_shortref.htm)

Syntax

... *\[*[BIT-NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)*\]* operand1
    *\[**{*[BIT-AND*|*BIT-OR*|*BIT-XOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)*}* *\[* [BIT-NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)*\]* operand2
    *\[**{*[BIT-AND*|*BIT-OR*|*BIT-XOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)*}* *\[* [BIT-NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)*\]* operand3
    ...  *\]**\]* ...

Effect

A bit expression formulates a binary calculation. The operands must be byte-like (type x or xstring). The result of a bit expression is a byte chain in the [calculation length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbitexp_length.htm) assigned to the bit expression. During assignment to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), the byte chain is handled as a byte string of data type xstring, and when passing a generic typed formal parameter it is handled as a byte field of data type x.

In a bit expression bit\_exp, an operand operand1 can be joined with one or more operands operand2, operand3, and so on using [bit operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm) BIT-AND, BIT-OR, or BIT-XOR; [Brackets](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_brackets.htm) are possible. Bit expressions can occur in the reading positions of [certain statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm), in particular on the right side of an [assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm) with the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm).

The operand positions operand are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means byte-like data objects, [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") with byte-like return codes, or bracketed bit expressions can be specified. The bit operators BIT-AND, BIT-OR, and BIT-XOR join two adjacent operands. When the expression is evaluated, a byte-like value is calculated and joined with the next adjacent operand. The priority of the join depends on the operators that are used; if use functional methods are used, the same applies as described for [arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

The [bit operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm) BIT-NOT can be specified one or more times before an operand to negate the value of the operand. If BIT-NOT is specified an even number of times, the operand remains unchanged. An odd number of uses negates the operand.

If [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands, they are specified from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered to be used in the corresponding operand positions.

Example

Bit sequences are an efficient way of mapping set operations. If a set contains n elements, the existence of an element i in n can be represented by a 1 at the position of i in a byte-like field. The statement [SET BIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_bit.htm). among others, can be used to add an element to the set. The operators BIT-AND, BIT-OR, and BIT-XOR can then be used to calculate the intersection, the union, and the symmetric difference of different sets.

In the following example, the attributes of person groups are mapped in the fields p1, p2, p3 of the type x. The bit operator BIT-AND is then used to determine which attributes are shared by all people. The result shows that only the eighth attribute is shared.

DATA:
  p1  TYPE x LENGTH 1 VALUE '5B',    "01011011
  p2  TYPE x LENGTH 1 VALUE '13',    "00010011
  p3  TYPE x LENGTH 1 VALUE 'A5'.     "10100101
DATA(res) = p1 BIT-AND p2 BIT-AND p3. "00000001

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: An operand or the result field is not of type x.
    Runtime error: BITS\_WRONG\_TYPE
    

Continue
[bit\_exp - Bit Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)
[bit\_exp - ( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_brackets.htm)
[bit\_exp - Calculation Length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbitexp_length.htm)
![Example](exa.gif "Example") [Set Operations with Bit Sequences](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_bit_abexa.htm)