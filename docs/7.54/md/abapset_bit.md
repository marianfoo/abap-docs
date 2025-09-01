  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) → 

SET BIT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_bit_shortref.htm)

Syntax

SET BIT bitpos OF byte\_string *\[*TO val*\]*.

Effect

This statement sets the bit in bit position bitpos of the variable byte\_string to 1 or, if specified, to the value of data object val. The other bits in byte\_string remain unchanged.

The data object byte\_string must be byte-like, whereas bitpos and val are [numeric expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. The value of bitpos must be greater than 0 and val must be either 0 or 1. Otherwise a non-handleable exception is raised. The bit positions in byte\_string are counted from the beginning of the data object. If the value of bitpos is greater than the number of bits in byte\_string, no bit is replaced and sy-subrc is set to 4.

System Fields

sy-subrc

Meaning

0

A bit in data object byte\_string was set at position bitpos.

4

The value of bitpos is greater than the number of bits in byte\_string, therefore no bit was set.

Notes

-   If byte\_string has the [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") type xstring, a bit is set in the referenced byte string, not in the reference.
    
-   Setting single bits is especially suited to preparing operators in [bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_bit.htm).
    
-   The built-in function [bit-set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_functions.htm) can also be used to set a single bit.
    

Example

In the data object hex with eight bits, the bit is set to the value 1 at the position determined by the loop counter sy-index, with all other bits set to 0. The output is "80 40 20 10 08 04 02 01".

DATA hex        TYPE x LENGTH 1.
DATA output TYPE string.
DO 8 TIMES.
  CLEAR hex.
  SET BIT sy-index OF hex.
  output &&= |{ hex } |.
ENDDO.
cl\_demo\_output=>display( output ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The bit position is greater than or equal to 0.
    Runtime error: BIT\_OFFSET\_NOT\_POSITIVE
    
-   Runtime error: BIT\_NO\_ZERO\_OR\_ONE