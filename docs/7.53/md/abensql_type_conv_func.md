  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - Special Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_special_functions.htm) →  [ABAP SQL - Conversion Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_conversion_functions.htm) → 

sql\_exp - Type Conversion Functions

Syntax

... BINTOHEX( expr )
  *|* HEXTOBIN( expr ) ...

Variants:

[1a. ... BINTOHEX( expr )](#!ABAP_VARIANT_1A@1@)
[1b. ... HEXTOBIN( expr )](#!ABAP_VARIANT_1B@2@)

Effect

Functions for conversions between data types in an ABAP SQL statement.

Notes

-   These SQL functions execute special conversions that cannot be handled in a general [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm) expression.

-   If BINTOHEX or HEXTOBIN is used, the syntax check is executed in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_752.htm).

Variant 1a

... BINTOHEX( expr )

Variant 1b

... HEXTOBIN( expr )

Effect

The BINTOHEX and HEXTOBIN functions convert byte strings to character strings and the other way round. The argument expr can be an [SQL expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), in particular an individual column, an SQL function, a host variable, or a host expression. Literals can only be used to a restricted extent.

-   BINTOHEX converts a byte string to a character string containing the half bytes of expr, converted to the hexadecimal characters "0" to "9" and "A" to "F" (left justified). Allowed argument types are [RAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with a maximum length of 255. The result is of type [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and is double the length of expr. Since the argument has the type RAW, a single literal cannot be specified for this function. However, literals can occur as arguments of host expressions of result type x.

-   HEXTOBIN converts a character string to a byte string, whose half bytes are determined from the hexadecimal characters of expr. Any leading blanks are removed before the conversion from expr and all trailing blanks are then replaced by "0". Valid argument types are [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with a maximum length of 510. The result is of type [RAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and is half the length of expr. The number of characters in the argument must be even and it can contain only the hexadecimal characters "0" to "9" and "A" to "F" (uppercase or lowercase) and leading and trailing blanks. Character-like literals can be specified. If literals, host variables, or host expressions determine the argument directly, and not as part of a larger SQL expression, they cannot contain any leading blanks.

If the argument has a [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full conversion function is the null value.

Example

The ID column of the database table IWREFERENC contains 32-character character-like [UUIDs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuuid_glosry.htm "Glossary Entry") in hexadecimal representation. The statement SELECT reads a UUID once directly and once as the result of the built-in function HEXTOBIN. The function produces the same result as a conversion using the class CL\_SYSTEM\_UUID. Of course, in ABAP the simple assignment uuid16 = wa-uuid32 would be possible instead of the method call, since the [conversion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_c.htm) of c to x has the same result.

SELECT SINGLE id AS uuid32, hextobin( id ) AS uuid16
       FROM iwreferenc
       WHERE tcode = 'SE38'
       INTO @DATA(wa).
IF sy-subrc = 0.
  DATA uuid16 LIKE wa-uuid16.
  cl\_system\_uuid=>convert\_uuid\_c32\_static(
    EXPORTING
      uuid          =     wa-uuid32
    IMPORTING
      uuid\_x16      =     uuid16 ).
  ASSERT wa-uuid16 = uuid16.
ENDIF.