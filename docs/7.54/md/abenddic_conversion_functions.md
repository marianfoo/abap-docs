  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [Special Functions](javascript:call_link\('abenddic_special_functions.htm'\)) → 

Conversion Functions

The following table shows the conversion functions supported by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

ABAP SQL

FLTP\_TO\_DEC( arg AS dtype )

Conversion of an argument of type FLTP to a packed number.

[x](javascript:call_link\('abencds_f1_conv_func_types.htm'\))

\-

BINTOHEX(arg)

Converts an argument of the type RAW to a string of the type CHAR.

[x](javascript:call_link\('abencds_f1_conv_func_types.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

HEXTOBIN(arg)

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW.

[x](javascript:call_link\('abencds_f1_conv_func_types.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of units.

[x](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\))

\-

CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of currencies.

[x](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\))

\-

DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... )

Setting the decimal separator.

[x](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\))

\-

Descriptions of the potential operands and data types and how they work can be found in the corresponding documentation for [ABAP CDS](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) and [ABAP SQL](javascript:call_link\('abenopen_sql_conversion_functions.htm'\)).