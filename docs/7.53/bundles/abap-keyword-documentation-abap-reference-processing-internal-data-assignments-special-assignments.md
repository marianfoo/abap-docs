# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Assignments / Special Assignments

Included pages: 3


### abenabap_data_move.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

Special Assignments

This section handles statements for special assignments:

-   [The assignment operator \=](javascript:call_link\('abapmove_multiples.htm'\)) for multiple assignments

-   [UNPACK](javascript:call_link\('abapunpack.htm'\)) for a special conversion of packed numbers

Continue
[destination1 = destination2 = ...](javascript:call_link\('abapmove_multiples.htm'\))
[UNPACK](javascript:call_link\('abapunpack.htm'\))


### abapmove_multiples.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Special Assignments](javascript:call_link\('abenabap_data_move.htm'\)) → 

destination1 = destination2 = ...

Syntax

destination1 = destination2 = ... = destination = rhs.

Effect

The [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)) can be used to perform multiple assignments within a single statement. This statement is the same as:

destination  = rhs
         ... = destination
destination2 = ...
destination1 = destination2.

The same settings can be specified for rhs as for the simple [assignment](javascript:call_link\('abenequals_operator.htm'\)). Only existing variables can be specified for destination, destination1, destination2, but no [inline declarations](javascript:call_link\('abendata_inline.htm'\)).

Note

Any conversions are performed in every single assignment, which means that a value assigned to a data object on the left side may be converted more than once if the operands have different data types. To assign the value of lhs to different data objects with one conversion each, multiple statements are needed.

Example

After the assignments, all data objects in question are given the name "Hugo".

DATA: name  TYPE string,
      name1 TYPE string,
      name2 TYPE string,
      name3 TYPE string.
name = \`Hugo\`.
name3 = name2 = name1 = name.


### abapunpack.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Special Assignments](javascript:call_link\('abenabap_data_move.htm'\)) → 

UNPACK

[Quick Reference](javascript:call_link\('abapunpack_shortref.htm'\))

Syntax

UNPACK source TO destination.

Effect

This statement converts the content of the data object source in accordance with special rules and assigns the converted content to the data object destination. source expects the data type p of length 16 without [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"). Operands of data type decfloat16 or decfloat34 cannot be used. The data type of destination must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry").

The conversion is performed according to the following rules:

-   If the data type of source is not of type p with length 16 and without decimal places, the content of source is converted to this data type. Contrary to the rules described in [Conversion Rules for Elementary Data Types](javascript:call_link\('abenconversion_elementary.htm'\)), any decimal separator in source is completely ignored.
    
-   The digits of the intermediate result are assigned right-justified to the data object destination and without a sign. Any surplus places in destination are padded with zeroes on the left. If the length of destination is not sufficient, the assigned value is truncated on the left.
    

Notes

-   The function of the statement UNPACK is based on the fact that the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") representation of a [place](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") corresponds to the second half byte of code of a digit in most character representations. This transformation is generally known as "Unpacking".
    
-   The statement [PACK](javascript:call_link\('abappack.htm'\)) used for packing is obsolete and can be replaced by a regular [assignment](javascript:call_link\('abapmove.htm'\)).
    

Example

After the assignments are made, char1 and char2 contain the values "123,456" and "0000123456".

DATA: pack  TYPE p LENGTH 8 DECIMALS 3 VALUE '123.456',
      char1 TYPE c LENGTH 10,
      char2 TYPE c LENGTH 10.
char1 = pack.
UNPACK pack TO char2.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Source field cannot be interpreted as a number
    Runtime error: CONVT\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow during conversion (type p)
    Runtime error: BCD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA
