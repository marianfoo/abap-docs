  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_special_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Conversion%20Functions%2C%20ABENDDIC_CONVERSION_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Converts an argument of type GEOM\_EWKB to JSON format.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_geo_conv_func.htm)

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_type_conv_func.htm)

CURRENCY\_CONVERSION

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_curr_unit_conv_func.htm)

CURR\_TO\_DECFLOAT\_AMOUNT

Converts a currency field of data type CURR into a currency field of data type DECFLOAT34.

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm)

\-

DECIMAL\_SHIFT

Sets the decimal separator of an argument in accordance with a currency.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v1.htm)

\-

\-

FLTP\_TO\_DEC

Converts an argument of type FLTP to a packed number.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm)

\-

GET\_NUMERIC\_VALUE

Converts a [CDS amount field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry") or a [CDS quantity field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry") into a regular field of data type DECFLOAT34. The reference to a unit or currency key is removed.

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm)

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_type_conv_func.htm)

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_type_conv_func.htm)

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION

Conversion of units.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_curr_unit_conv_func.htm)

The possible operands and data types as well as the exact functionality is described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conversion_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conversion_functions_v2.htm), and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_conversion_functions.htm).