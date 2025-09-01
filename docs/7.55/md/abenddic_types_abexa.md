---
title: "DDIC - Built-In Dictionary Types"
description: |
  This example demonstrates valid literal values for all built-in dictionary types(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). Source Code REPORT kellerh_test1. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_abexa.htm"
abapFile: "abenddic_types_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenddic", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types_intro.htm) → 

DDIC - Built-In Dictionary Types

This example demonstrates valid literal values for all [built-in dictionary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

Source Code

REPORT kellerh\_test1.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_ddic\_types.
    INSERT demo\_ddic\_types FROM @( VALUE #( id = 'X'
      int1          = 255
      int2          = 32767
      int4          = 2147483647
      int8          = 9223372036854775807
      dec10         = 1234567890
      dec10\_2       = '12345678.90'
      dec20         = 12345678901234567890
      dec20\_4       = '1234567890123456.7890'
      d16n          = '1234567890123456E10'
      df16\_dec      = '1.23456789012345'
      df16\_raw      = '1234567890123456'
      d34n          = '1234567890123456789012345678901234E10'
      df34\_dec      = '1234567890123456.78901234567890'
      df34\_raw      = '1234567890123456789012345678901234'
      fltp          = '-.15e-3'
      char1         = 'a'
      char10        = 'abcdefghij'
      sstring256    = 'abcdefghijklmnopqrstuvwxyz'
      sstring512    = 'abcdefghijklmnopqrstuvwxyz'
      string        = 'abcdefghijklmnopqrstuvwxyz'
      raw1          = 'FF'
      raw10         = '00112233445566778899'
      rawstring     = '00112233445566778899AABBCCDDEEFF'
      dats          = '20200720'
      tims          = '162345'
      datn          = '20200720'
      timn          = '162345'
      utcl          = '2020-07-20 16:23:45'
      accp          = '202007'
      numc1         = '1'
      numc10        = '0123456789'
      clnt          = '000'
      lang          = 'E'
      curr10\_2      = '12345678.90'
      curr10\_4      = '123456.7890'
      curr20\_2      = '123456789012345678.90'
      curr20\_4      = '1234567890123456.7890'
      cuky          = 'EUR'
      quan10        = '1234567890'
      quan10\_2      = '12345678.90'
      quan10\_4      = '123456.7890'
      quan20        = '12345678901234567890'
      quan20\_2      = '123456789012345678.90'
      quan20\_4      = '1234567890123456.7890'
      unit2         = 'KG'
      unit3         = 'DEG'
      geom\_ewkb     =
        '01010000200000000000000000000000000000000000000000'
      lchr\_int      = 256
      lchr          = 'abcdefghijklmnopqrstuvwxyz' ) ).
    SELECT SINGLE \*
           FROM demo\_ddic\_types
           WHERE id = char\`X\`
           INTO @DATA(wa).
    cl\_demo\_output=>write( wa ).
    INSERT demo\_ddic\_types FROM @( VALUE #( id = 'Y' ) ).
    UPDATE demo\_ddic\_types SET
      int1          = int1\`255\`
      int2          = int2\`32767\`
      int4          = int4\`2147483647\`
      int8          = int8\`9223372036854775807\`
      dec10         = dec\`1234567890\`
      dec10\_2       = dec\`12345678.90\`
      dec20         = dec\`12345678901234567890\`
      dec20\_4       = dec\`1234567890123456.7890\`
      d16n          = d16n\`1234567890123456E10\`
      df16\_dec      = df16\_dec\`1.23456789012345\`
      df16\_raw      = df16\_raw\`1234567890123456\`
      d34n          = d34n\`1234567890123456789012345678901234E10\`
      df34\_dec      = df34\_dec\`1234567890123456.78901234567890\`
      df34\_raw      = df34\_raw\`1234567890123456789012345678901234\`
      fltp          = fltp\`-.15e-3\`
      char1         = char\`a\`
      char10        = char\`abcdefghij\`
      sstring256    = sstring\`abcdefghijklmnopqrstuvwxyz\`
      sstring512    = sstring\`abcdefghijklmnopqrstuvwxyz\`
      string        = \`abcdefghijklmnopqrstuvwxyz\`
      raw1          = raw\`FF\`
      raw10         = raw\`00112233445566778899\`
      rawstring     = '00112233445566778899AABBCCDDEEFF'
      dats          = dats\`20200720\`
      tims          = tims\`162345\`
      datn          = datn\`20200720\`
      timn          = timn\`162345\`
      utcl          = utclong\`2020-07-20 16:23:45\`
      accp          = \`202007\`
      numc1         = numc\`1\`
      numc10        = numc\`0123456789\`
      clnt          = clnt\`000\`
      lang          = lang\`E\`
      curr10\_2      = curr\`12345678.90\`
      curr10\_4      = curr\`123456.7890\`
      curr20\_2      = curr\`123456789012345678.90\`
      curr20\_4      = curr\`1234567890123456.7890\`
      cuky          = cuky\`EUR\`
      quan10        = quan\`1234567890\`
      quan10\_2      = quan\`12345678.90\`
      quan10\_4      = quan\`123456.7890\`
      quan20        = quan\`12345678901234567890\`
      quan20\_2      = quan\`123456789012345678.90\`
      quan20\_4      = quan\`1234567890123456.7890\`
      unit2         = unit\`KG\`
      unit3         = unit\`DEG\`
      geom\_ewkb     =
        '01010000200000000000000000000000000000000000000000'
      lchr\_int      = int4\`256\`
      lchr          = 'abcdefghijklmnopqrstuvwxyz'
      WHERE id = char\`Y\`.
    SELECT SINGLE \*
           FROM demo\_ddic\_types
           WHERE id = char\`Y\`
           INTO @DATA(wb).
    cl\_demo\_output=>write( wb ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The first part of the program uses the ABAP SQL statement [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_dbtab.htm) to insert a value into each column of a row DDIC database table DEMO\_DDIC\_TYPES. The values are [ABAP literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) used in a [host expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm). Note that the literals are assigned to the components of a temporary ABAP structure that is constructed with the [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_value.htm) operator. These components have the ABAP type that is mapped to the DDIC type of the respective database column. If the type of a literal does not match the this ABAP type, its value is [converted according to the rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm). When the temporary structure is inserted in the database table via the [database interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_interface_glosry.htm "Glossary Entry"), another conversion might take place from the ABAP types to the database specific types, if necessary.

The second part of the program uses the ABAP SQL statement [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_dbtab.htm) to set the values of the columns of a row that was inserted with empty columns. In the UPDATE statement, the values for most of the data types can be passed as [typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) that are not possible in general ABAP. With typed literals, no ABAP specific type conversion takes place and the validity of the values is guaranteed by the syntax check.