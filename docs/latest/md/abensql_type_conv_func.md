  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_special_functions.htm) →  [sql\_func - Conversion Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_conversion_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Type%20Conversion%20Functions%2C%20ABENSQL_TYPE_CONV_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - Type Conversion Functions

Syntax

... BINTOHEX( sql\_exp )
  *|* HEXTOBIN( sql\_exp )
  *|* TO\_CLOB( sql\_exp )
  *|* TO\_BLOB( sql\_exp ) ...

Variants:

[1a. ... BINTOHEX( sql\_exp )](#!ABAP_VARIANT_1A@1@)
[1b. ... HEXTOBIN( sql\_exp )](#!ABAP_VARIANT_1B@2@)
[2a. ... TO\_CLOB( sql\_exp )](#!ABAP_VARIANT_2A@3@)
[2b. ... TO\_BLOB( sql\_exp )](#!ABAP_VARIANT_2B@4@)

Effect

Functions for conversions between data types in an ABAP SQL statement.

Hints

-   These SQL functions execute special conversions that cannot be handled in a general [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) expression.
-   For all type conversion functions, the syntax check is performed in the corresponding [strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm).

Variant 1a   

... BINTOHEX( sql\_exp )

Variant 1b   

... HEXTOBIN( sql\_exp )

Effect

The BINTOHEX and HEXTOBIN functions convert byte strings to character strings and vice versa. The argument sql\_exp can be an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm), where literals are only possible to a limited extend:

-   BINTOHEX takes a byte string and converts it to a character string that contains the half bytes of the value of sql\_exp converted to the hexadecimal characters 0 to 9 and A to F left justified. The valid argument type is [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with a maximum length of 255. The result has the type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with twice the length of the value of sql\_exp.
-   HEXTOBIN converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of the value of sql\_exp. Any leading blanks are removed before the conversion from the value of sql\_exp and all trailing blanks are then replaced by 0. The valid argument types are [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with a maximum length of 510. The result has the type [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with half the length of the value of sql\_exp. The number of characters in the argument must be even and can contain only the hexadecimal characters 0 to 9 and A to F in uppercase or lowercase and leading and trailing blanks. Character-like literals can be specified. If literals, host variables, or host expressions determine the argument directly, and not as part of a larger SQL expression, they cannot contain any leading blanks.

If the argument has a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the entire conversion function is the null value.

Hint

The functions HEXTOBIN and BINTOHEX enforce the [strict mode from ABAP release 7.52](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_752.htm).

Example

The ID column of the DDIC database table IWREFERENC contains 32-character character-like [UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuuid_glosry.htm "Glossary Entry") in hexadecimal representation. The statement SELECT reads a UUID once directly and once as the result of the built-in function HEXTOBIN. The function produces the same result as a conversion using the class CL\_SYSTEM\_UUID. Of course, in ABAP the simple assignment uuid16 = wa-uuid32 would be possible instead of the method call, since the [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) of c to x has the same result.

SELECT SINGLE id AS uuid32, hextobin( id ) AS uuid16
       FROM iwreferenc
       WHERE tcode = 'SE38'
       INTO @FINAL(wa).
IF sy-subrc = 0.
  TRY.
      DATA uuid16 LIKE wa-uuid16.
      cl\_system\_uuid=>convert\_uuid\_c32\_static(
        EXPORTING
          uuid          =     wa-uuid32
        IMPORTING
          uuid\_x16      =     uuid16 ).
      ASSERT wa-uuid16 = uuid16.
    CATCH cx\_uuid\_error.
      ...
  ENDTRY.
ENDIF.

Variant 2a   

... TO\_CLOB( sql\_exp )

Effect

The TO\_CLOB function converts the value of the operand sql\_exp from a character string of fixed length of type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [SSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to a [CLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of type [STRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The argument sql\_exp can be a [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm), a [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm), a [host constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_variable_glosry.htm "Glossary Entry"), or an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm). The data type of the argument must be [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [SSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The result is a [CLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of type [STRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

If the argument has a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the conversion function is the null value.

Hints

-   After the conversion, [streaming and locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm) can be used on the result and length restrictions can be avoided. For example, when using STRING\_AGG in combination with TO\_CLOB, it is possible to read data strings that are much greater than the strings that can be read with STRING\_AGG alone.
-   When using [streaming and locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm) in combination with the conversion function TO\_CLOB, it is not allowed to use [LOB interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_interfaces.htm) and the addition [CREATING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_creating.htm).
-   TO\_CLOB enforces the [strict mode from ABAP release 7.55](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_755.htm).

Example

The SELECT\-statement reads the value of column CHAR10 from the DDIC database table DEMO\_DDIC\_TYPES and converts it from type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to a [CLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of type [STRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). Then, a reader stream is created that reads the [CLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") in chunks of two characters and returns a list of 2-digit numbers.

DELETE FROM demo\_ddic\_types.
INSERT demo\_ddic\_types
  FROM @( VALUE #( id = 'X' char10 = '0123456789' ) ).
DATA reader TYPE REF TO cl\_abap\_db\_c\_reader.
SELECT SINGLE to\_clob( char10 ) AS clob
       FROM demo\_ddic\_types
       WHERE id = 'X'
       INTO @reader.
DO.
  cl\_demo\_output=>write( reader->read( 2 ) ).
  IF NOT reader->data\_available( ).
    EXIT.
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).

Variant 2b   

... TO\_BLOB( sql\_exp )

The TO\_BLOB function converts the value of the operand sql\_exp from a byte field of type [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to a byte string [(BLOB)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") of type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The argument sql\_exp can be a [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm), a [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm), a [host constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_variable_glosry.htm "Glossary Entry"), or an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm). The data type of the argument must be [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The result is a [BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") of type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

If the argument has a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the entire conversion function is the null value.

Hints

-   After the conversion, [streaming and locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm) can be used on the result and possible length restrictions can be avoided.
-   When using [streaming and locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm) in combination with the conversion function TO\_BLOB, [LOB interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_interfaces.htm) and the addition [CREATING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_creating.htm) cannot be used.
-   TO\_BLOB enforces the [strict mode from ABAP release 7.55](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_755.htm).

Example

A variable of the built-in ABAP type [x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm), which maps to the ABAP Dictionary type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), is inserted into a database field, which requires type [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), which maps to the ABAP type [xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm), using the conversion function TO\_BLOB.

DATA raw\_value TYPE x LENGTH 255 VALUE '41424344'.
DELETE FROM demo\_ddic\_types.
INSERT demo\_ddic\_types FROM @( VALUE #( id = 1 raw10 = raw\_value ) ).
SELECT SINGLE
       to\_blob( raw10 ) AS blob
       FROM demo\_ddic\_types
       WHERE id = 1
       INTO @FINAL(result).