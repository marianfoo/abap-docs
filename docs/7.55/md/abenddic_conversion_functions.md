  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_special_functions.htm) → 

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Conversion of an argument of type GEOM\_EWKB to JSON format

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_geo_conv_func.htm)

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

CURRENCY\_CONVERSION

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_curr_unit_conv_func.htm)

DECIMAL\_SHIFT

Setting the decimal separator

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

\-

\-

FLTP\_TO\_DEC

Conversion of an argument of type FLTP to a packed number

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION

Conversion of units

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v2.htm)

\-

Descriptions of the possible operands and data types as well as the exact functionality can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_conversion_functions.htm).