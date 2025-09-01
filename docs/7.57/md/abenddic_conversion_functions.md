  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - Special Functions](javascript:call_link\('abenddic_special_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Conversion Functions, ABENDDIC_CONVERSION_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Conversion of an argument of type GEOM\_EWKB to JSON format

\-

\-

[x](javascript:call_link\('abensql_geo_conv_func.htm'\))

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

CURRENCY\_CONVERSION

Conversion of currencies.

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

[x](javascript:call_link\('abensql_curr_unit_conv_func.htm'\))

DECIMAL\_SHIFT

Setting the decimal separator

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

\-

\-

FLTP\_TO\_DEC

Conversion of an argument of type FLTP to a packed number

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING

\-

\-

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING

\-

\-

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

UNIT\_CONVERSION

Conversion of units

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

\-

Descriptions of the possible operands and data types as well as the exact functionality can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_conversion_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_conversion_functions_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abenabap_sql_conversion_functions.htm'\)).